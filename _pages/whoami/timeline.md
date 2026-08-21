---
layout: default
title: "Timeline | Nolan Hu - Career Journey from 2013 to Present"
description: "A visual timeline of achievements: hackathon wins, security scholarships, career milestones at JPMorgan, HSBC, BNY Mellon, and founding Sigma Synapses."
permalink: /whoami/timeline/
---

<h1 class="page-title" data-text="./ 0xTimeline"></h1>

<div class="whoami-nav">
  <a href="{{ '/whoami/career/' | relative_url }}">0xCareer</a>
  <a href="{{ '/whoami/timeline/' | relative_url }}">0xTimeline</a>
  <a href="{{ '/whoami/press/' | relative_url }}">0xPress</a>
</div>

A journey through code, competitions, and community.{% if site.timeline.enable_links %} Click any milestone to learn more.{% endif %}

<div class="timeline">

{% assign sorted_milestones = site.milestones | sort: "order" %}
{% for milestone in sorted_milestones %}
<div class="timeline-item">
  <span class="timeline-year">{{ milestone.year }}</span>
  <div class="timeline-dot"></div>
  {% assign linkable = site.timeline.enable_links %}{% if milestone.draft %}{% assign linkable = false %}{% endif %}
  {% if linkable %}
  <a href="{{ milestone.url | relative_url }}" class="timeline-link">
  {% endif %}
    <div class="timeline-content">
      <h4>{{ milestone.event_title }}</h4>
      <p>{{ milestone.description }}</p>
      {% for tag in milestone.tags %}
      <span class="timeline-tag">{{ tag }}</span>
      {% endfor %}
    </div>
  {% if linkable %}
  </a>
  {% endif %}
</div>
{% endfor %}

</div>

<div class="text-center mt-2">
  <a href="{{ '/whoami/' | relative_url }}">← Back to WHOAMI</a>
</div>
