---
sidebar: tag-list
layout: default
title: "Kategoriler"
permalink: /tags/
---

<section id="contents" class="w-full  min-h-screen mt-40 scroll-mt-24">
  {%- if site.posts.size > 0 -%}

    {%- include functions/get_tags.html -%}

    {% assign tags = return %}
    {% assign keys = tags %}
    {% assign field = 'tags' %}

    <div class="page-segments">
      {%- for key in keys -%}
        <section id="{{ key | slugify }}" class="scroll-mt-24">
          <h2 class="segment-name mb-2 font-bold">
            {{ key }}
          </h2>

          <hr><br>

          <ul class="segment-list mb-4 ml-4">
            {%- if field == "tags" -%}
              {%- assign items = site.posts | where_exp: "post", "post.tags contains key" -%}
            {%- else -%}
              {%- assign items = site.posts | where: field, key -%}
            {%- endif -%}

            {%- for item in items -%}
              <li class="segment-item flex flex-row justify-between items-end m-2 w-full">
                <a href="{{ item.url | relative_url }}" class="segment-link w-1/2 pr-4 text-right">{{ item.title }}</a>
                <div class="border-l-2 border-slate-500 h-6 mx-2"></div>
                <span class="segment-date text-sm text-gray-500 w-1/2 pl-4 text-left">{{ item.date | date: "%d %B %Y" }}</span>
              </li>
            {%- endfor -%}
          </ul><br>
        </section>
      {%- endfor -%}
    </div>

  {%- endif -%}
</section>
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
