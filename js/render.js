/* ===== render.js · 把项目数据渲染成项目区 DOM ===== */
(function () {
  "use strict";

  var container = document.getElementById("projects");
  if (!container || !window.PROJECTS) return;

  var fragment = document.createDocumentFragment();

  window.PROJECTS.forEach(function (project, index) {
    var num = String(index + 1).padStart(2, "0");

    var article = document.createElement("article");
    article.className = "project" + (index % 2 === 1 ? " project--reverse" : "");
    article.dataset.reveal = "";

    // 媒体区（含水印序号 + 图片）
    var media = document.createElement("div");
    media.className = "project__media";

    var watermark = document.createElement("span");
    watermark.className = "project__num";
    watermark.textContent = num;

    var aspect = document.createElement("div");
    aspect.className = "aspect";

    var img = document.createElement("img");
    img.src = project.image;
    img.alt = project.name + " 项目截图";
    img.loading = "lazy";
    img.decoding = "async";

    aspect.appendChild(img);
    media.appendChild(watermark);
    media.appendChild(aspect);

    // 信息区
    var info = document.createElement("div");
    info.className = "project__info";

    var meta = document.createElement("div");
    meta.className = "project__meta";

    var cat = document.createElement("span");
    cat.className = "project__cat";
    cat.textContent = project.category;

    var dot = document.createElement("span");
    dot.className = "dot";

    var date = document.createElement("span");
    date.textContent = project.date;

    meta.appendChild(cat);
    meta.appendChild(dot);
    meta.appendChild(date);

    var title = document.createElement("h3");
    title.className = "project__title";
    title.textContent = project.name;

    var desc = document.createElement("p");
    desc.className = "project__desc";
    desc.textContent = project.desc;

    // 技术栈
    var stack = document.createElement("ul");
    stack.className = "project__stack";
    project.stack.forEach(function (tag) {
      var li = document.createElement("li");
      li.className = "tag";
      li.textContent = tag;
      stack.appendChild(li);
    });

    // 链接
    var links = document.createElement("div");
    links.className = "project__links";
    if (project.links && project.links.length) {
      project.links.forEach(function (link) {
        var a = document.createElement("a");
        a.className = "link";
        a.href = link.url;
        a.textContent = link.label;
        a.target = "_blank";
        a.rel = "noopener";
        links.appendChild(a);
      });
    }

    info.appendChild(meta);
    info.appendChild(title);
    info.appendChild(desc);
    info.appendChild(stack);
    if (links.children.length) info.appendChild(links);

    article.appendChild(media);
    article.appendChild(info);
    fragment.appendChild(article);
  });

  container.appendChild(fragment);
})();