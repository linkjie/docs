// algolia-search.js

(function () {
  const script2 = document.createElement("script");
  script2.src =
    "https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch-lite.umd.js";
  const script = document.createElement("script");
  script.src =
    "https://cdn.jsdelivr.net/npm/instantsearch.js@4.0.0/dist/instantsearch.production.min.js";
  let a = 0;
  script.onload = function () {
    a += 1;
    if (a === 2) {
      // document.createElement('button')
      const btn = document.getElementById("search-bar-entry");

      const replacement = document.createElement("button");
      replacement.id = "search-box";
      const hit = document.createElement("div");
      hit.id = "hits";
      // replacement.className = btn.className;
      btn.replaceWith(replacement);
      replacement.after(hit);

      const search = instantsearch({
        indexName: "12-f68f320d",
        searchClient: algoliasearch(
          "03J76WSHJY",
          "f3ba89d09f20abfdfde09b0bd53102fa"
        ),
      });

      search.addWidgets([
        instantsearch.widgets.searchBox({
          container: "#search-box",
          placeholder: "搜索文档...",
        }),
        instantsearch.widgets.hits({
          container: "#hits",
          templates: {
            item: '<p>{{#helpers.highlight}}{ "attribute": "name", "highlightedTagName": "mark" }{{/helpers.highlight}}</p>',
          },
        }),
      ]);

      search.start();
    }
  };
  script2.onload = function () {
    a += 1;
    if (a === 2) {
      const btn = document.getElementById("search-bar-entry");

      const replacement = document.createElement("button");
      replacement.id = "search-box";
      const hit = document.createElement("div");
      hit.id = "hits";
      // replacement.className = btn.className;
      btn.replaceWith(replacement);
      replacement.after(hit);

      const search = instantsearch({
        indexName: "12-f68f320d",
        searchClient: algoliasearch(
          "03J76WSHJY",
          "f3ba89d09f20abfdfde09b0bd53102fa"
        ),
      });

      search.addWidgets([
        instantsearch.widgets.searchBox({
          container: "#search-box",
          placeholder: "搜索文档...",
        }),
        instantsearch.widgets.hits({
          container: "#hits",
          templates: {
            item: '<p>{{#helpers.highlight}}{ "attribute": "name", "highlightedTagName": "mark" }{{/helpers.highlight}}</p>',
          },
        }),
      ]);

      search.start();
    }
  };
  document.head.appendChild(script);
  document.head.appendChild(script2);
})();
