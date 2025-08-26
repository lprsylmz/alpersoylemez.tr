---
sidebar: tag-list
layout: default
title: "Kategoriler"
permalink: /tag/
---

<script>
(function () {
  function toSlug(s) {
    return s.toString().trim().toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/ı/g, 'i').replace(/ğ/g, 'g').replace(/ş/g, 's')
      .replace(/ç/g, 'c').replace(/ö/g, 'o').replace(/ü/g, 'u')
      .replace(/[^a-z0-9\- ]/g, '')
      .replace(/\s+/g, '-')
      .replace(/\-+/g, '-');
  }

  function showHashSection() {
    var raw = window.location.hash.replace(/^#/, '');
    var sections = document.querySelectorAll('.page-segments > section');

    if (!raw) {
      sections.forEach(function (sec) { sec.style.display = 'block'; });
      return;
    }

    var decoded = decodeURIComponent(raw);
    var slug = toSlug(decoded);

    var targetId = null;
    if (document.getElementById(slug)) targetId = slug;
    else if (document.getElementById(decoded)) targetId = decoded;

    sections.forEach(function (sec) {
      sec.style.display = (targetId && sec.id === targetId) ? 'block' : (targetId ? 'none' : 'block');
    });
  }

  document.addEventListener('DOMContentLoaded', showHashSection);
  window.addEventListener('hashchange', showHashSection);
})();
</script>
<section id="contents" class="w-full flex items-center justify-center">
  <div class="w-full h-full md:w-4/5 flex items-center justify-center">
    {%- if site.posts.size > 0 -%}

      {%- include functions/get_tags.html -%}

      {% assign tags = return %}
      {% assign keys = tags %}
      {% assign field = 'tags' %}

      <div id="tag-cloud"></div>

    {%- endif -%}
  </div>
</section>

<style>
#tag-cloud {
  position: relative;
  margin-top:100px;
  width: 100%;
  height: 100%;
  perspective: 1000px;
  overflow: hidden;
}

#tag-cloud a {
  position: absolute;
  transform-origin: 0 0 0;
  font-size: clamp(1rem, 2vw, 2rem);
  font-weight: bold;
  white-space: nowrap;
  transition: transform 0.2s;
}
#tag-cloud a:hover {
  color: #dc2626 !important;
}
</style>



<script>
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("tag-cloud");
  const tagElements = [];
  const tags = [
    {% for key in keys %}
      { text: "{{ key }}", slug: "{{ key | slugify }}" }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  tags.forEach((t) => {
    const el = document.createElement("a");
    el.href = "/tags/#" + t.slug;
    el.textContent = t.text;
    el.style.color = document.documentElement.classList.contains('dark') ? 'black' : 'white';
    el.style.position = "absolute";
    container.appendChild(el);

    const maxSpeed = 1; // yavaş hız

    tagElements.push({
      el,
      x: Math.random() * (container.offsetWidth - 50),
      y: Math.random() * (container.offsetHeight - 20),
      vx: (Math.random() - 0.5) * maxSpeed,
      vy: (Math.random() - 0.5) * maxSpeed
    });
  });

  function render() {
    const w = container.offsetWidth;
    const h = container.offsetHeight;

    tagElements.forEach(tag => {
      const elW = tag.el.offsetWidth;
      const elH = tag.el.offsetHeight;

      tag.x += tag.vx;
      tag.y += tag.vy;

      if (tag.x <= 0) { tag.x = 0; tag.vx *= -1; }
      if (tag.x + elW >= w) { tag.x = w - elW; tag.vx *= -1; }
      if (tag.y <= 0) { tag.y = 0; tag.vy *= -1; }
      if (tag.y + elH >= h) { tag.y = h - elH; tag.vy *= -1; }

      tag.el.style.transform = `translate(${tag.x}px, ${tag.y}px)`;
    });

    requestAnimationFrame(render);
  }

  render();
});

</script>
