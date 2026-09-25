/* ===== main.js · 导航高亮 / 进度轴 / 移动菜单 / 滚动出现 ===== */
(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  var sections = Array.prototype.slice.call(
    document.querySelectorAll(".section[id]")
  );
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav__link")
  );
  var mobileLinks = Array.prototype.slice.call(
    document.querySelectorAll(".mobile-nav__link")
  );
  var progressDots = Array.prototype.slice.call(
    document.querySelectorAll(".progress__dot")
  );

  /* ---------- 头部滚动状态：背景模糊 + 发丝线 ---------- */
  function onScrollHeader() {
    if (window.scrollY > 10) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }
  window.addEventListener("scroll", onScrollHeader, { passive: true });
  onScrollHeader();

  /* ---------- 移动端菜单开合 ---------- */
  function setMenu(open) {
    if (open) {
      mobileNav.hidden = false;
      mobileNav.classList.add("is-open");
      navToggle.setAttribute("aria-expanded", "true");
    } else {
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  }
  navToggle.addEventListener("click", function () {
    setMenu(mobileNav.classList.contains("is-open") ? false : true);
  });

  // 点击抽屉内链接后自动收起
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setMenu(false);
    });
  });

  // 点击抽屉外部关闭
  document.addEventListener("click", function (e) {
    if (
      !mobileNav.classList.contains("is-open") ||
      mobileNav.contains(e.target) ||
      navToggle.contains(e.target)
    ) {
      return;
    }
    setMenu(false);
  });

  /* ---------- 区块高亮：导航 + 进度轴跟随 ---------- */
  var sectionMap = {};
  sections.forEach(function (section) {
    sectionMap[section.id] = section;
  });
  var ids = Object.keys(sectionMap);

  function highlight(name) {
    navLinks.forEach(function (l) {
      l.classList.toggle("is-active", l.getAttribute("href") === "#" + name);
    });
    mobileLinks.forEach(function (l) {
      l.classList.toggle("is-active", l.getAttribute("href") === "#" + name);
    });
    progressDots.forEach(function (d) {
      d.classList.toggle("is-active", d.dataset.section === name);
    });
  }

  // 有兼容性时用 IntersectionObserver，否则用滚动位置兜底
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            highlight(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -50% 0px",
        threshold: 0
      }
    );
    sections.forEach(function (s) {
      io.observe(s);
    });
  } else {
    function scrollFallback() {
      var current = ids[0];
      sections.forEach(function (s) {
        if (window.scrollY >= s.offsetTop - header.offsetHeight / 2) {
          current = s.id;
        }
      });
      highlight(current);
    }
    window.addEventListener("scroll", scrollFallback, { passive: true });
    scrollFallback();
  }

  /* ---------- 滚动出现（view reveal） ---------- */
  var revealEls = Array.prototype.slice.call(
    document.querySelectorAll("[data-reveal]")
  );
  if ("IntersectionObserver" in window) {
    var revealIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach(function (el) {
      revealIo.observe(el);
    });
  } else {
    revealEls.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }
})();