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

<section id="contents" class="min-h-screen flex items-center justify-center">
  {%- if site.posts.size > 0 -%}

    {%- include functions/get_tags.html -%}

    {% assign tags = return %}
    {% assign keys = tags %}
    {% assign field = 'tags' %}

    <div id="tag-cloud" class="relative w-[500px] h-[500px]"></div>

  {%- endif -%}
</section>

<style>
#tag-cloud {
  perspective: 1000px;
}
#tag-cloud a {
  position: absolute;
  transform-origin: 0 0 0;
  font-size: 2rem;
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


  const radius = 200;
  const tagElements = [];

 const tags = [
  {% for key in keys %}
    { text: "{{ key }}", slug: "{{ key | slugify }}" }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

tags.forEach((t, i) => {
  const el = document.createElement("a");
  el.href = "/tags/#" + t.slug;
  el.textContent = t.text;
  el.style.color = document.documentElement.classList.contains('dark') ? 'black' : 'white';
  container.appendChild(el);
  tagElements.push({el, angleX: Math.random() * Math.PI * 2, angleY: Math.random() * Math.PI * 2});
});



  function render() {
    tagElements.forEach((tag) => {
      tag.angleX += 0.002;
      tag.angleY += 0.002;

      const x = radius * Math.sin(tag.angleX) * Math.cos(tag.angleY);
      const y = radius * Math.sin(tag.angleY);
      const z = radius * Math.cos(tag.angleX) * Math.cos(tag.angleY) + radius;

      const scale = 1.2 * (z / (2 * radius));
      const left = x + container.offsetWidth / 2;
      const top = y + container.offsetHeight / 2;

      tag.el.style.transform = `translate(${left}px, ${top}px) scale(${scale})`;
      tag.el.style.zIndex = Math.floor(z);
      tag.el.style.opacity = scale;
    });
    requestAnimationFrame(render);
  }
  render();
});
</script>
