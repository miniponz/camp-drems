// import makeHeaderTemplate from './header-component.js';
import loadCard from './list-component.js';
import updateSearchTerm from '../search/search-component.js';
import { readSearchFromQuery, writeSearchToQuery, writePageToQuery } from '../src/hash-query.js';
import makeSearchComponent from '../src/make-search-url.js';
import { loadHeader } from './header-component.js';

window.addEventListener('hashchange', loadQuery);


loadHeader(user);

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readSearchFromQuery(query);
    updateSearchTerm(queryOptions.query);

    const url = makeSearchComponent(queryOptions);

    if(!url) {
        return;
    }
    fetch(url)
        .then(res => res.json())
        .then(results => {
            loadCard(results.RECDATA);
        });
}



