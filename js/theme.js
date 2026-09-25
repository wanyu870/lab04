/* ===== theme.js · 深浅色主题切换 + localStorage 记忆 ===== */
(function () {
  "use strict";

  var THEME_KEY = "theme";
  var ROOT = document.documentElement;

  /* 应用主题到 <html data-theme> */
  function applyTheme(theme) {
    if (theme === "dark") {
      ROOT.setAttribute("data-theme", "dark");
    } else {
      ROOT.removeAttribute("data-theme");
    }
    // 同步导航按钮图标与状态
    var themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
      themeToggle.setAttribute("aria-label", "");
      themeToggle.setAttribute("aria-label",
        theme === "dark" ? "切换到浅色主题" : "切换到深色主题");
      themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
    }
  }

  /* 获取初始主题：localStorage > 系统偏好 > 默认浅色 */
  function getInitialTheme() {
    var saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch (e) {
      /* localStorage 不可用时忽略 */
    }
    if (saved === "dark" || saved === "light") {
      return saved;
    }
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function init() {
    var themeToggle = document.getElementById("themeToggle");
    if (!themeToggle) {
      return;
    }

    /* DOM 就绪后根据当前 data-theme 同步按钮状态 */
    applyTheme(ROOT.getAttribute("data-theme") === "dark" ? "dark" : "light");

    themeToggle.addEventListener("click", function () {
      var dark = ROOT.getAttribute("data-theme") === "dark";
      var next = dark ? "light" : "dark";
      applyTheme(next);
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch (e) {
        /* 忽略写入失败 */
      }
    });
  }

  /* 尽早设置首屏主题，避免闪色 */
  applyTheme(getInitialTheme());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();