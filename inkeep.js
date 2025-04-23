import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { searchBox, hits } from 'instantsearch.js/es/widgets';

const searchClient = algoliasearch('03J76WSHJY', 'f3ba89d09f20abfdfde09b0bd53102fa');

const search = instantsearch({
  indexName: '12-f68f320d',
  searchClient,
});

search.addWidgets([
  searchBox({
    container: '#search-box',
    placeholder: '搜索文档...',
  }),
  hits({
    container: '#hits',
    templates: {
      item: '<div>{{#helpers.highlight}}{ "attribute": "title" }{{/helpers.highlight}}</div>',
    },
  }),
]);

search.start();
