// algolia-search.js

// (function () {
//   const script2 = document.createElement("script");
//   script2.src =
//     "https://cdn.jsdelivr.net/npm/algoliasearch@4.5.1/dist/algoliasearch-lite.umd.js";
//   const script = document.createElement("script");
//   script.src =
//     "https://cdn.jsdelivr.net/npm/instantsearch.js@4.0.0/dist/instantsearch.production.min.js";
//   let a = 0;
//   script.onload = function () {
//     a += 1;
//     if (a === 2) {
//       // document.createElement('button')
//       const btn = document.getElementById("search-bar-entry");

//       const replacement = document.createElement("button");
//       replacement.id = "search-box";
//       const hit = document.createElement("div");
//       hit.id = "hits";
//       // replacement.className = btn.className;
//       btn.replaceWith(replacement);
//       replacement.after(hit);

//       const search = instantsearch({
//         indexName: "12-f68f320d",
//         searchClient: algoliasearch(
//           "03J76WSHJY",
//           "f3ba89d09f20abfdfde09b0bd53102fa"
//         ),
//       });

//       search.addWidgets([
//         instantsearch.widgets.searchBox({
//           container: "#search-box",
//           placeholder: "搜索文档...",
//         }),
//         instantsearch.widgets.hits({
//           container: "#hits",
//           templates: {
//             item: '<p>{{#helpers.highlight}}{ "attribute": "name", "highlightedTagName": "mark" }{{/helpers.highlight}}</p>',
//           },
//         }),
//       ]);

//       search.start();
//     }
//   };
//   script2.onload = function () {
//     a += 1;
//     if (a === 2) {
//       const btn = document.getElementById("search-bar-entry");

//       const replacement = document.createElement("button");
//       replacement.id = "search-box";
//       const hit = document.createElement("div");
//       hit.id = "hits";
//       // replacement.className = btn.className;
//       btn.replaceWith(replacement);
//       replacement.after(hit);

//       const search = instantsearch({
//         indexName: "12-f68f320d",
//         searchClient: algoliasearch(
//           "03J76WSHJY",
//           "f3ba89d09f20abfdfde09b0bd53102fa"
//         ),
//       });

//       search.addWidgets([
//         instantsearch.widgets.searchBox({
//           container: "#search-box",
//           placeholder: "搜索文档...",
//         }),
//         instantsearch.widgets.hits({
//           container: "#hits",
//           templates: {
//             item: '<p>{{#helpers.highlight}}{ "attribute": "name", "highlightedTagName": "mark" }{{/helpers.highlight}}</p>',
//           },
//         }),
//       ]);

//       search.start();
//     }
//   };
//   document.head.appendChild(script);
//   document.head.appendChild(script2);
// })();

// function loadScript(url, callback) {
//   const script = document.createElement("script");
//   script.src = url;
//   script.type = "text/javascript";
//   script.onload = callback;
//   document.head.appendChild(script);
// }
 
// loadScript(
//   "https://cdn.jsdelivr.net/npm/@inkeep/cxkit-mintlify@0.5/dist/index.js",
//   () => {
//     const settings = {
//       baseSettings: {
//         apiKey: "INKEEP_API_KEY", // required
//         primaryBrandColor: "#26D6FF", // required -- your brand color, the color scheme is derived from this
//         organizationDisplayName: "Inkeep",
//         // ...optional settings
//       },
//       aiChatSettings: {
//         // ...optional settings
//         aiAssistantAvatar: "https://mydomain.com/mylogo.svg",
//         exampleQuestions: [
//           "Example question 1?",
//           "Example question 2?",
//           "Example question 3?",
//         ],
//       },
//     };
 
//     // Initialize the UI components
//     Inkeep.ModalSearchAndChat(settings); // Search Bar
//     Inkeep.ChatButton(settings); // 'Ask AI' button
//   }
// );

