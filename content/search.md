---
title: "Search"
layout: "search"
summary: "search"
placeholder: "Type something..."
---

params:
  fuseOpts:
    isCaseSensitive: false
    shouldSort: true
    location: 0
    distance: 1000
    threshold: 0.4
    minMatchCharLength: 0
    # limit: 10 # refer: https://www.fusejs.io/api/methods.html#search
    keys: ["title", "permalink", "summary", "content"]

