---
layout: default
title: "Blog | Nolan Hu - AI, Automation & Engineering Insights"
description: "Technical articles on AI automation, RAG architecture, Python development, and lessons from building production applications. Written by an NYC-based engineer."
permalink: /blog/
---

<h1 class="page-title" data-text="./ 0xBlog"></h1>

{% if site.posts.size > 0 %}
<ul class="post-list">
{% for post in site.posts %}
  <li>
    <span class="post-date">{{ post.date | date: "%Y-%m-%d" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
{% else %}
<p>No posts yet. Check back soon!</p>
{% endif %}

<div style="text-align: center; margin-top: 2em;">
  <a href="{{ '/blog/archive/' | relative_url }}">View Archive (2014-2015) →</a>
</div>
