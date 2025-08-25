---
layout: default
title: "Hakkımda"
permalink: /about/
---

<div class="w-full flow flow-row justify-center">

  <div class="mt-12 p-6 rounded-full flex justify-center">


      <img x-show="!darkMode" src="/assets/images/favicon.ico" alt="Alper Söylemez"
           class="rounded-full w-32 h-32 mx-auto transform transition-transform duration-200 hover:scale-125" />
      <img x-show="darkMode" src="/assets/images/favicon.png" alt="Alper Söylemez"
           class="rounded-full w-32 h-32 mx-auto transform transition-transform duration-200 hover:scale-125" />


  </div>

  <h1 class="mt-2 font-mono italic text-center">Alper Söylemez</h1>

  <div class="mt-2 text-sm text-center">
  <p>Kişisel notlarım; hatırlamak ve hatırlatmak için...</p>
  </div>
  <div x-show="!darkMode" class="w-full grid justify-center grid-cols-4 md:grid-cols-7   gap-x-4 p-10">

    {% for social in site.social_media %}

        <div class="flex justify-center items-center m-1 p-2 transform transition-transform duration-200 hover:scale-125 rounded-full">
          <a href="{{ social.url }}" target="_blank" aria-label="{{ social.name }} Profile">
            <img src="{{ social.image_light | relative_url }}" alt="{{ social.alt }}"
                 class="w-[40px] h-[40px] rounded-md object-contain" />
          </a>
        </div>

    {% endfor %}
  </div>
  <div x-show="darkMode" class="w-full grid  justify-center grid-cols-4 md:grid-cols-7    gap-x-4 p-10">

    {% for social in site.social_media %}

        <div
             class="flex justify-center items-center m-1 p-2 transform transition-transform duration-200 hover:scale-125 rounded-full">
          <a href="{{ social.url }}" target="_blank" aria-label="{{ social.name }} Profile">
            <img src="{{ social.image_dark | relative_url }}" alt="{{ social.alt }}"
                 class="w-[40px] h-[40px] rounded-md object-contain" />
          </a>
        </div>


    {% endfor %}

  </div>
</div>
