---
title: All Houses for Sale
layout: page
eleventyNavigation:
  key: properties 🏠
  parent: main
---

<div class="container pt-4">
  <h1>{{title}}</h1>
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
  {% for house in properties %}
  <div class="col mb-4">
    <div class="card h-100" >
      <img src="{{ house.cover | safe }}" alt="{{ house.title | safe }} image" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title my-0">{{ house.projectName | safe }}</h4>
        <h5 class="mt-1 mb-2">{{ house.address | propAddress }}</h5>
        <p class="card-text">{{ house.description | safe }}</p>
        <a href="{{ house.websiteLink }}/" class="button button-secondary card-link" target="_blank">See more</a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
