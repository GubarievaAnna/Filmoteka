!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=r.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,r){n[e]=r},r.parcelRequired7c6=o);var u=o("4QITu"),a=(o("4QITu"),o("7xXoG")),i=(u=o("4QITu"),o("iU1Pc")),l={timeout:1500},c=function(r){return e(i).Notify.failure(r,l)},s=o("iklnC");document.querySelector("#search-form").addEventListener("submit",(function(e){var r;e.preventDefault(),u.galleryApi.page=1,u.galleryApi.query=e.currentTarget.elements.searchQuery.value.trim(),r=document.documentElement.clientWidth,u.galleryApi.perPage=r<1280&&r>=768?18:20,""!==u.galleryApi.query?u.galleryApi.fetchSearchMovies().then((function(e){if(0===e.results.length)throw"Sorry, there are not movies matching your search query. Please try again.";(0,a.changeIdOfGenreToName)(e.results),(0,a.changeDateInArrayOfResults)(e.results),u.containerEl.innerHTML=(0,s.default)(e.results)})).catch((function(e){return c(e)})):c("Sorry, your query is empty, please, make your choice.")})),o("e0z42"),o("5I19D"),document.onload=(0,u.createRandomMarkup)(1)}();
//# sourceMappingURL=index.53ba0550.js.map