!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=n.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){a[e]=n},n.parcelRequired7c6=l),l("e0z42"),l("5I19D");var r=l("jzQFI"),o=l("1VFfL"),i=l("4QITu"),s=l("5xtVg"),u=e(l("WMajR")).template({1:function(e,n,t,a,l){var r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"      src='https://image.tmdb.org/t/p/w500/"+e.escapeExpression(e.lambda(null!=n?r(n,"poster_path"):n,n))+"'\n"},3:function(e,n,t,a,l){return"      src='https://png.pngtree.com/png-clipart/20211121/original/pngtree-not-found-stamp-label-png-image_6948403.png'\n"},5:function(e,n,t,a,l){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return e.escapeExpression(e.lambda(null!=n?o(n,"name"):n,n))+(null!=(r=o(t,"unless").call(null!=n?n:e.nullContext||{},l&&o(l,"last"),{name:"unless",hash:{},fn:e.program(6,l,0),inverse:e.noop,data:l,loc:{start:{line:18,column:34},end:{line:18,column:64}}}))?r:"")},6:function(e,n,t,a,l){return", "},compiler:[8,">= 4.3.0"],main:function(e,n,t,a,l){var r,o=e.lambda,i=e.escapeExpression,s=null!=n?n:e.nullContext||{},u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='film-card card-item' data-id="+i(o(null!=n?u(n,"id"):n,n))+" data-action>\n    <img\n"+(null!=(r=u(t,"if").call(s,null!=n?u(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(1,l,0),inverse:e.program(3,l,0),data:l,loc:{start:{line:3,column:6},end:{line:7,column:13}}}))?r:"")+"      alt='Poster of movie \""+i(o(null!=n?u(n,"original_title"):n,n))+'"\'\n      loading=\'lazy\'\n      class="film-image"\n      id="'+i(o(null!=n?u(n,"id"):n,n))+"\"\n    />\n    <div class='info'>\n      <p class='film-tittle'>\n        "+i(o(null!=n?u(n,"original_title"):n,n))+"\n      </p>\n      <p class='film-genre'>\n"+(null!=(r=u(t,"each").call(s,null!=n?u(n,"genres"):n,{name:"each",hash:{},fn:e.program(5,l,0),inverse:e.noop,data:l,loc:{start:{line:18,column:0},end:{line:18,column:73}}}))?r:"")+"\n        &#8739;\n        "+i(o(null!=n?u(n,"release_date"):n,n))+' <span class="film-raiting">&nbsp;'+i(o(null!=n?u(n,"vote_average"):n,n))+"&nbsp;</span>\n      </p>\n    </div>\n  </li>\n"},useData:!0}),c=l("UL92Z"),d=l("bu0Gx"),p=document.querySelector(".library-film_list"),f=document.querySelector("button[data-watched]"),m=document.querySelector("button[data-queue]");p.addEventListener("click",s.onPosterClick);var g,b=document.querySelector(".library_alert");f.addEventListener("click",(function(e){(0,d.changeColorBtnLibraryClick)(e,m),L()})),m.addEventListener("click",(function(e){(0,d.changeColorBtnLibraryClick)(e,f),function(){p.innerHTML="",b.innerHTML="";var e=r.default.load("queue");if(!e||0===e.length)return b.innerHTML="You don't have films in queue in your library",y.reset(0),void libEL.classList.add("empty");w(e.slice(0,g)),y.reset(e.length)}()})),g=window.innerWidth<768?4:window.innerWidth<1200?8:9;var v=document.querySelector(".pagination"),h=new(e(o))(v,{itemsPerPage:g,visiblePages:5,centerAlign:!0,firstItemClassName:1,template:{currentPage:'<a class="page-btn is-selected">{{page}}</a>',page:'<a class="page-btn">{{page}}</a>',moveButton:'<button class="move-btn move-btn-{{type}}"></button>',disabledMoveButton:'<button class="move-btn move-btn-{{type}} disabled" disabled></button>',moreButton:'<a class="page-btn next-is-ellip last-child">...</a>'}}),y=new(e(o))(v,{itemsPerPage:g,visiblePages:5,centerAlign:!0,firstItemClassName:1,template:{currentPage:'<a class="page-btn is-selected">{{page}}</a>',page:'<a class="page-btn">{{page}}</a>',moveButton:'<button class="move-btn move-btn-{{type}}"></button>',disabledMoveButton:'<button class="move-btn move-btn-{{type}} disabled" disabled></button>',moreButton:'<a class="page-btn next-is-ellip last-child">...</a>'}});function L(){p.innerHTML="",b.innerHTML="";var e=r.default.load("toWatch"),n=document.querySelector(".library_alert");if(!e||0===e.length)return b.innerHTML="You don't have watched films in your library",h.reset(0),void n.classList.add("empty");w(e.slice(0,g)),h.reset(e.length)}function w(e){var n="";e.forEach((function(e){i.galleryApi.fetchMovieById(e).then((function(e){return e.release_date=e.release_date.split("-")[0],n+=u(e)})).then((function(e){return p.innerHTML=e})).catch((function(e){return console.log(e)}))}))}document.onload=(0,c.updateDataForLocalStorage)(),document.onload=L(),h.on("afterMove",(function(e){var n=e.page;b.innerHTML="",w(r.default.load("toWatch").slice((n-1)*g,n*g))})),y.on("afterMove",(function(e){var n=e.page;b.innerHTML="",w(r.default.load("queue").slice((n-1)*g,n*g))}))}();
//# sourceMappingURL=library.2d3a32f9.js.map
