---
layout: default
title: Blog
permalink: /blog/
---

# 0xBlog

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
