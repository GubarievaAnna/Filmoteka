function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){l[e]=n},n.parcelRequired7c6=a),a("evw5H"),a("apujj");var r=a("5uEKZ"),o=a("jZsFh"),i=a("bTcpz");var c=e(a("amrNH")).template({1:function(e,n,t,l,a){var r=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"      src='https://image.tmdb.org/t/p/w500/"+e.escapeExpression(e.lambda(null!=n?r(n,"poster_path"):n,n))+"'\n"},3:function(e,n,t,l,a){return"      src='https://png.pngtree.com/png-clipart/20211121/original/pngtree-not-found-stamp-label-png-image_6948403.png'\n"},5:function(e,n,t,l,a){var r,o=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return e.escapeExpression(e.lambda(null!=n?o(n,"name"):n,n))+(null!=(r=o(t,"unless").call(null!=n?n:e.nullContext||{},a&&o(a,"last"),{name:"unless",hash:{},fn:e.program(6,a,0),inverse:e.noop,data:a,loc:{start:{line:18,column:34},end:{line:18,column:64}}}))?r:"")},6:function(e,n,t,l,a){return", "},compiler:[8,">= 4.3.0"],main:function(e,n,t,l,a){var r,o=e.lambda,i=e.escapeExpression,c=null!=n?n:e.nullContext||{},u=e.lookupProperty||function(e,n){if(Object.prototype.hasOwnProperty.call(e,n))return e[n]};return"  <li class='film-card card-item' data-id="+i(o(null!=n?u(n,"id"):n,n))+">\n    <img\n"+(null!=(r=u(t,"if").call(c,null!=n?u(n,"poster_path"):n,{name:"if",hash:{},fn:e.program(1,a,0),inverse:e.program(3,a,0),data:a,loc:{start:{line:3,column:6},end:{line:7,column:13}}}))?r:"")+"      alt='Poster of movie \""+i(o(null!=n?u(n,"original_title"):n,n))+'"\'\n      loading=\'lazy\'\n      class="film-image"\n      id="'+i(o(null!=n?u(n,"id"):n,n))+"\"\n    />\n    <div class='info'>\n      <p class='film-tittle'>\n        "+i(o(null!=n?u(n,"original_title"):n,n))+"\n      </p>\n      <p class='film-genre'>\n"+(null!=(r=u(t,"each").call(c,null!=n?u(n,"genres"):n,{name:"each",hash:{},fn:e.program(5,a,0),inverse:e.noop,data:a,loc:{start:{line:18,column:0},end:{line:18,column:73}}}))?r:"")+"\n        &#8739;\n        "+i(o(null!=n?u(n,"release_date"):n,n))+" <span>"+i(o(null!=n?u(n,"vote_average"):n,n))+"</span>\n      </p>\n    </div>\n  </li>\n"},useData:!0}),u=a("31u3U"),s=a("abEvz");const d=document.querySelector(".library-film_list"),p=document.querySelector("button[data-watched]"),f=document.querySelector("button[data-queue]");function m(){(0,u.updateDataForLocalStorage)(),d.innerHTML="";const e=r.default.load("toWatch");if(!e||0===e.length){const e=document.createElement("p");return e.classList.add("library_alert"),e.textContent="You don't have watched films in your library",void d.append(e)}for(let n of e)o.galleryApi.fetchMovieById(n).then((e=>{g(e)})).catch((e=>console.log(e)))}function g(e){e.release_date=e.release_date.split("-")[0];const n=c(e);d.insertAdjacentHTML("beforeend",n)}d.addEventListener("click",i.onPosterClick),p.addEventListener("click",(function(e){(0,s.changeColorBtnLibraryClick)(e,f),m()})),f.addEventListener("click",(function(e){(0,s.changeColorBtnLibraryClick)(e,p),function(){(0,u.updateDataForLocalStorage)(),d.innerHTML="";const e=r.default.load("queue");if(!e||0===e.length){const e=document.createElement("p");return e.classList.add("library_alert"),e.textContent="You don't have films in queue in your library",void d.append(e)}for(let n of e)o.galleryApi.fetchMovieById(n).then((e=>{g(e)})).catch((e=>console.log(e)))}()})),m();
//# sourceMappingURL=library.c797e912.js.map
