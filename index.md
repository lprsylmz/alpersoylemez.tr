---
layout: default
title: Alper Söylemez
description: alpersoylemez.tr
---

<section id="contents" class="w-full flex flex-col space-y-5 min-h-screen mt-40 scroll-mt-40">
    {% for post in site.posts %}
    <div class="flex flex-row justify-between w-full rounded-xl items-center">
        <div class="w-1/2 pr-4 md:text-xl text-right hover:shadow rounded-xl"  x-bind:class="!darkMode ? 'hover:shadow-white' : 'hover:shadow-black'">
            <a href="{{ post.url | relative_url }}" class="w-full h-full flex items-center justify-end">
                <span class="w-full text-right" >{{ post.title }}</span>
            </a>
        </div>

        <div class="border-l-2 border-slate-500 h-6"></div>

        <div class="w-1/2 pl-4 text-left text-xs flex flex-col space-y-1">
            <p class="text-gray-500 leading-none">
                {{ post.date | date: "%d/%m/%Y" }}
            </p>
            <p class="text-gray-500 leading-none">
                {% for cat in post.categories %}
                    <a href="/categories/#{{ cat | slugify }}" class="text-gray-600 hover:underline">
                        {{ cat }}
                    </a>{% unless forloop.last %}, {% endunless %}
                {% endfor %}
            </p>
        </div>
    </div>
    {% endfor %}
</section>
