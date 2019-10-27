!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.hideUpdateModal=t.displayUpdateModal=t.displayMessage=t.initForm=t.removeSpinner=t.clearAddMovie=t.displaySpinner=void 0;var r=n(5),o=!1;t.displaySpinner=function(){document.getElementById("loader").style.display="block",document.getElementById("main-div").style.display="none"},t.clearAddMovie=function(){document.getElementById("movie-name").value="";for(var e=1;e<=5;e++){document.getElementById("star"+e).className="fa fa-star"}},t.removeSpinner=function(){document.getElementById("loader").style.display="none",document.getElementById("main-div").style.display="block"},t.initForm=function(){(0,r.selectMovieRatings)(),(0,r.selectMovieGenre)(),(0,r.starsAddForm)(),(0,r.starsUpdateForm)(),window.outerWidth<=480?($("#movie-fields").toggle(),$("#addMovieForm").click((function(){$(this).next().toggle()}))):document.getElementById("arrowAddMovie").style.display="none"},t.displayMessage=function(e,t){switch(t){case 1:"The movie  '"+e+"' was added to the system.",document.getElementById("success").innerHTML="The movie  '"+e+"' was added to the system.",document.getElementById("success").style.display="block",document.getElementById("warning").style.display="none",document.getElementById("danger").style.display="none";break;case 2:"The modification to the movie  '"+e+"' is implemented.",document.getElementById("success").innerHTML="The modification to the movie  '"+e+"' is implemented.",document.getElementById("success").style.display="block",document.getElementById("warning").style.display="none",document.getElementById("danger").style.display="none";break;case 3:"The movie '"+e+"' exists in the system.",document.getElementById("warning").innerHTML="The movie '"+e+"' exists in the system.",document.getElementById("warning").style.display="block",document.getElementById("success").style.display="none",document.getElementById("danger").style.display="none";break;case 4:"The movie "+e+" does not exists in the database.",document.getElementById("danger").innerHTML="The movie "+e+" does not exists in the database.",document.getElementById("danger").style.display="block",document.getElementById("warning").style.display="none",document.getElementById("success").style.display="none"}$("#non-destructive-message").modal("show"),setTimeout((function(){$("#non-destructive-message").modal("hide")}),1e3)},t.displayUpdateModal=function(){o&&alert("screen was displayed"),o=!0,$("#update-form").modal("toggle")},t.hideUpdateModal=function(){o=!1,$("#update-form").modal("toggle")}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.displayMovies=function(e){var t="",n=[],s=[];e.forEach((function(e){var r=e.title,o=e.rating,d=e.id,c=e.urlPoster;a(e.genre,e.movieRated)&&(t+=' <div class="movie-card" id="movie'+d+'">',t+=i(r,o,d,c),t+="</div >",n.push(d),s.push(r))})),(0,o.removeSpinner)(),document.getElementById("right-pane").innerHTML=t;for(var d=0;d<n.length;d++)(0,r.addDeleteButtonCard)(n[d],s[d]),(0,r.addUpdateButtonCard)(n[d])},t.displayMovie=function(e){var t=e[0],n=t.title,o=t.rating,s=t.id,d=t.urlPoster,c=t.genre,u=t.movieRated;if(a(c,u)){if(document.getElementById("movie"+s))document.getElementById("movie"+s).value=i(n,o,s,d);else{var l=document.createElement("div");l.setAttribute("class","movie-card"),l.setAttribute("id","movie"+s),l.setAttribute("name","movie"+s),document.getElementById("right-pane").appendChild(l),document.getElementById("movie"+s).innerHTML=i(n,o,s,d),(0,r.addDeleteButtonCard)(s,n),(0,r.addUpdateButtonCard)(s)}}};var r=n(5),o=n(0);function i(e,t,n,r){var o="";o+='<div class="card">',o+='<h6 class="card-title  text-center" > '+e+" </h6>",o+='<div  id="div-img'+n+'" class="img-fluid movie-poster" ><img src="'+r+'" id="img'+n+'" > </div>';for(var i="",a=0;a<t;a++)i+='<span class="fa fa-star checked"></span>';for(var s=t;s<5;s++)i+='<span class="fa fa-star"></span>';return o+=' <div class="star-size star-disp" style="padding: 1em;"  id="dStar'+n+'"> '+i+" </div>",o+='<div class="card-buttons" style="margin-left: 0px; margin-right: 0px">',o+='<div ><button class=" btn btn-success btn-lg btn-block movie-button dark-blue" id="update'+n+'"><i class="fa fa-edit"></i></button></div>',o+='<div ><button class=" btn btn-danger btn-lg btn-block movie-button dark-red" id="delete'+n+'"><i class="fa fa-ban"></i></button></div>',o+="</div>",o+="</div>"}function a(e,t){var n=!1,r=document.getElementById("selectedGenre").value;if(r.length>0){var o=r.toLowerCase().split(",");0!=e.length?e.forEach((function(e){o.indexOf(e.toLowerCase().trim())>=0&&(n=!0)})):n=!1}else n=!0;var i=document.getElementById("selectedRating").value;if(n)if(i.length>0){var a=i.split(",");n=a.indexOf(t)>=0}else n=!0;return n}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.removeMovieList=t.checkDuplicateMovie=t.addMovieArray=void 0;var r=n(4),o=n(1);(0,n(0).initForm)();var i=[],a=[];(0,r.getMovies)().then((function(e){e.forEach((function(e){var t=e.title,n=(e.rating,e.id);i.push(t),a.push(n)}))})).catch((function(){alert("Oh no! Something went wrong.\nCheck the console for details.")})),(0,r.getMovieList)().then((function(e){(0,o.displayMovies)(e)})),t.addMovieArray=function(e){var t=a[a.length-1]+1;return i.push(e),a.push(t),!1},t.checkDuplicateMovie=function(e,t){for(var n=-1,r=0;r<i.length;r++)if(i[r]==e&&(n=r)==t)return!1;if(0===t)return n>=0;var o=-1;return n>=0&&(o=a[n]),o-parseInt(t.trim())!=0},t.removeMovieList=function(e){var t=a.indexOf(parseInt(e));return i.splice(t,1),a.splice(t,1),!1}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getMovieInfoId=t.getMovieDB=t.displayUpdateScreen=t.getMovieList=t.updateMovie=t.deleteMovie=t.addMovie=t.getMovies=void 0;var r=n(12),o=n(0),i=n(1),a=n(3);function s(e){return document.getElementById(e).value.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")}var d=function(e){return fetch("/api/movies").then((function(e){return e.json()})).then((function(t){return t.filter((function(t){return t.title.trim()==e}))}))};t.getMovies=function(){return fetch("/api/movies").then((function(e){return e.json()}))},t.addMovie=function(e){e.preventDefault(),(0,o.displaySpinner)();var t=document.getElementById("rating").value,n=s("movie-name"),c=n;(0,o.clearAddMovie)();var u="",l="",f="",m="";(0,r.getMovieInfoOmdbAPI)(n).then((function(e){u=e.Poster,l=e.Rated,f=e.Genre,m=e.Year;null!=f&&f.split(",");var n=e.Title;if(void 0===n)(0,o.removeSpinner)(),(0,o.displayMessage)(c,4);else if((0,a.checkDuplicateMovie)(n,0))console.log("The movie exists in the system 2"),(0,o.displayMessage)(n,3),(0,o.removeSpinner)();else{var r={title:n,rating:t,movieRated:l,genre:"",year:m,urlPoster:u};(0,a.addMovieArray)(n);var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};fetch("/api/movies",s).then((function(e){return e.json()})).then((function(e){return d(e.title).then((function(e){return(0,i.displayMovie)(e)})).then((function(){(0,o.removeSpinner)(),(0,o.displayMessage)(n,1)}))})).catch((function(e){throw console.log(e),e}))}}))},t.deleteMovie=function(e){(0,o.clearAddMovie)();(0,a.removeMovieList)(e),fetch("/api/movies/"+e,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(){console.log("movie "+e+" deleted")})).catch((function(){console.log("error on delete")}))},t.updateMovie=function(e){e.preventDefault();var t=document.getElementById("new-rating").value,n=s("new-name"),d=document.getElementById("updateMovieID").value;(0,o.clearAddMovie)();var c="",u="",l="",f="",m=5;(0,r.getMovieInfoOmdbAPI)(n).then((function(e){if(void 0===(n=e.Title))(0,o.removeSpinner)(),m=4,(0,o.displayMessage)(n,m);else if((0,a.checkDuplicateMovie)(e.Title,d))(0,o.removeSpinner)(),m=3,(0,o.displayMessage)(n,m);else{c=e.Poster,u=e.Rated,l=e.Genre,f=e.Year,document.getElementById("img"+d).setAttribute("src",c);for(var r="",s=0;s<t;s++)r+='<span class="fa fa-star checked"></span>';for(var p=t;p<5;p++)r+='<span class="fa fa-star"></span>';document.getElementById("dStar"+d).innerHTML=r;var h="";void 0!==h&&(h=l.split(","));var y=e.Title,v={id:d,title:y,rating:t,movieRated:u,genre:h,year:f,urlPoster:c},g="/api/movies/"+d,b={method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(v)};fetch(g,b).then((function(e){return e.json()})).then((function(e){(0,i.displayMovie)([e]),(0,o.removeSpinner)(),m=2,(0,o.displayMessage)(y,m)})).catch((function(){(0,o.removeSpinner)(),m=4,(0,o.displayMessage)(y,m)}))}}))},t.getMovieList=function(){return fetch("/api/movies").then((function(e){return e.json()})).catch("Error movie ")},t.displayUpdateScreen=function(e){return fetch("/api/movies/"+e).then((function(e){return e.json()}))},t.getMovieDB=d,t.getMovieInfoId=function(e){return fetch("/api/movies").then((function(e){return e.json()})).then((function(t){return t.filter((function(t){return t.id==e}))}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.selectMovieRatings=function(){var e=document.getElementsByClassName("movie-rating"),t=!0,n=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var d=a.value;document.getElementById(d.id).addEventListener("click",(function(){var e=document.getElementsByClassName("movie-rating"),t=Array.from(e).filter((function(e){return!0===e.checked}));t=t.map((function(e){return e.value})),document.getElementById("selectedRating").value=t,(0,r.getMovieList)().then((function(e){(0,o.displayMovies)(e)}))}))}}catch(e){n=!0,i=e}finally{try{!t&&s.return&&s.return()}finally{if(n)throw i}}},t.selectMovieGenre=function(){var e=document.getElementsByClassName("genre"),t=!0,n=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(t=(a=s.next()).done);t=!0){var d=a.value;document.getElementById(d.id).addEventListener("click",(function(){var e=document.getElementsByClassName("genre"),t=Array.from(e).filter((function(e){return!0===e.checked}));t=t.map((function(e){return e.value})),document.getElementById("selectedGenre").value=t,(0,r.getMovieList)().then((function(e){(0,o.displayMovies)(e)}))}))}}catch(e){n=!0,i=e}finally{try{!t&&s.return&&s.return()}finally{if(n)throw i}}},t.starsAddForm=function(){for(var e=1;e<=5;e++)document.getElementById("star"+e).addEventListener("click",(function(){for(var e=this.id.replace("star",""),t=1;t<=5;t++){(n=document.getElementById("star"+t)).className="fa fa-star"}for(t=1;t<=e;t++){var n;"fa fa-star"==(n=document.getElementById("star"+t)).className&&(n.className="fa fa-star checked")}document.getElementById("rating").value=e}))},t.starsUpdateForm=function(){for(var e=1;e<=5;e++)document.getElementById("update-star"+e).addEventListener("click",(function(){for(var e=this.id.replace("update-star",""),t=1;t<=5;t++){(n=document.getElementById("update-star"+t)).className="fa fa-star"}for(t=1;t<=e;t++){var n;"fa fa-star"==(n=document.getElementById("update-star"+t)).className&&(n.className="fa fa-star checked")}document.getElementById("new-rating").value=e}))},t.addUpdateButtonCard=function(e){document.getElementById("update"+e).addEventListener("click",(function(t){document.getElementById("currentMovieID").value=e,(0,r.displayUpdateScreen)(e).then((function(e){var t=e.title,n=e.rating,r=e.id,o=e.urlPoster;document.getElementById("old-name").innerText="Current title :"+t,document.getElementById("new-name").value=t,document.getElementById("new-rating").value=n,document.getElementById("updateMovieID").value=r,document.getElementById("movie-poster-update").src=o;for(var a=1;a<=5;a++){document.getElementById("update-star"+a).className="fa fa-star"}for(var s=1;s<=n;s++){var d=document.getElementById("update-star"+s);"fa fa-star"==d.className&&(d.className="fa fa-star checked")}(0,i.displayUpdateModal)()}))}))},t.addDeleteButtonCard=function(e,t){document.getElementById("delete"+e).addEventListener("click",(function(n){document.getElementById("currentMovieID").value=e,(0,r.getMovieInfoId)(e).then((function(e){document.getElementById("movie-poster-delete").src=e[0].urlPoster,document.getElementById("deleteMovieInformation").innerText="Do you want to delete the movie "+t+"?",$("#confirm-delete").modal("toggle")}))}))};var r=n(4),o=n(1),i=n(0),a=!0;document.getElementById("add-movie").addEventListener("click",(function(e){(0,r.addMovie)(e)})),document.getElementById("confirmUpdateMovie").addEventListener("click",(function(e){document.getElementById("currentMovieID").value;(0,i.hideUpdateModal)(),(0,i.displaySpinner)(),(0,r.updateMovie)(e)})),$("#confirm-delete").on("show.bs.modal",(function(e){document.getElementById("confirmDeleteMovie").addEventListener("click",(function(e){var t=document.getElementById("currentMovieID").value,n=document.querySelector("#movie"+t);null!=n&&n.parentNode.removeChild(n),(0,r.deleteMovie)(t),$("#confirm-delete").modal("toggle")}))})),document.getElementById("cancelDelete").addEventListener("click",(function(e){$("#confirm-delete").modal("toggle")})),document.getElementById("ratingID").addEventListener("click",(function(e){"hide-elements"===document.getElementById("rating-options").className?(document.getElementById("rating-options").className="",document.getElementById("arrowRating").className="fas fa-angle-double-up"):(document.getElementById("rating-options").className="hide-elements",document.getElementById("arrowRating").className="fas fa-angle-double-down")})),document.getElementById("genreID").addEventListener("click",(function(e){"hide-elements"===document.getElementById("genre-options").className?(document.getElementById("genre-options").className="",document.getElementById("arrowGenre").className="fas fa-angle-double-up"):(document.getElementById("genre-options").className="hide-elements",document.getElementById("arrowGenre").className="fas fa-angle-double-down")})),document.getElementById("arrowAddMovie").addEventListener("click",(function(e){a?(a=!1,document.getElementById("arrowAddMovie").className="fas fa-angle-double-up",window.setTimeout((function(){document.getElementById("movie-name").focus()}),0)):(document.getElementById("arrowAddMovie").className="fas fa-angle-double-down",a=!0)}))},function(e,t,n){n(7),n(11),e.exports=n(3)},function(e,t,n){(function(t){!function(n){var r=setTimeout;function o(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],l(e,this)}function a(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void d(t.promise,e)}s(t.promise,r)}else(1===e._state?s:d)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void c(e);if("function"==typeof n)return void l((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,c(e)}catch(t){d(e,t)}var r,o}function d(e,t){e._state=2,e._value=t,c(e)}function c(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)a(e,e._deferreds[t]);e._deferreds=null}function u(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function l(e,t){var n=!1;try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,d(t,e))}))}catch(e){if(n)return;n=!0,d(t,e)}}i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(o);return a(this,new u(e,t,n)),n},i.all=function(e){return new i((function(t,n){if(!e||void 0===e.length)throw new TypeError("Promise.all accepts an array");var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,(function(t){i(e,t)}),n)}r[e]=a,0==--o&&t(r)}catch(e){n(e)}}for(var a=0;a<r.length;a++)i(a,r[a])}))},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,n){for(var r=0,o=e.length;r<o;r++)e[r].then(t,n)}))},i._immediateFn="function"==typeof t&&function(e){t(e)}||function(e){r(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},e.exports?e.exports=i:n.Promise||(n.Promise=i)}(this)}).call(this,n(8).setImmediate)},function(e,t,n){(function(e){var r=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function i(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new i(o.call(setTimeout,r,arguments),clearTimeout)},t.setInterval=function(){return new i(o.call(setInterval,r,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(r,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(9),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(2))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var r,o,i,a,s,d=1,c={},u=!1,l=e.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(e);f=f&&f.setTimeout?f:e,"[object process]"==={}.toString.call(e.process)?r=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((i=new MessageChannel).port1.onmessage=function(e){p(e.data)},r=function(e){i.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(o=l.documentElement,r=function(e){var t=l.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):r=function(e){setTimeout(p,0,e)}:(a="setImmediate$"+Math.random()+"$",s=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",s,!1):e.attachEvent("onmessage",s),r=function(t){e.postMessage(a+t,"*")}),f.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return c[d]=o,r(d),d++},f.clearImmediate=m}function m(e){delete c[e]}function p(e){if(u)setTimeout(p,0,e);else{var t=c[e];if(t){u=!0;try{!function(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}(t)}finally{m(e),u=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(2),n(10))},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var d,c=[],u=!1,l=-1;function f(){u&&d&&(u=!1,d.length?c=d.concat(c):l=-1,c.length&&m())}function m(){if(!u){var e=s(f);u=!0;for(var t=c.length;t;){for(d=c,c=[];++l<t;)d&&d[l].run();l=-1,t=c.length}d=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new p(e,t)),1!==c.length||u||s(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";n.r(t),n.d(t,"Headers",(function(){return c})),n.d(t,"Request",(function(){return y})),n.d(t,"Response",(function(){return g})),n.d(t,"DOMException",(function(){return E})),n.d(t,"fetch",(function(){return w}));var r={searchParams:"URLSearchParams"in self,iterable:"Symbol"in self&&"iterator"in Symbol,blob:"FileReader"in self&&"Blob"in self&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in self,arrayBuffer:"ArrayBuffer"in self};if(r.arrayBuffer)var o=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],i=ArrayBuffer.isView||function(e){return e&&o.indexOf(Object.prototype.toString.call(e))>-1};function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function s(e){return"string"!=typeof e&&(e=String(e)),e}function d(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r.iterable&&(t[Symbol.iterator]=function(){return t}),t}function c(e){this.map={},e instanceof c?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function u(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function l(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function f(e){var t=new FileReader,n=l(t);return t.readAsArrayBuffer(e),n}function m(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function p(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:r.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:r.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():r.arrayBuffer&&r.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=m(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):r.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||i(e))?this._bodyArrayBuffer=m(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},r.blob&&(this.blob=function(){var e=u(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?u(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(f)}),this.text=function(){var e,t,n,r=u(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=l(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},r.formData&&(this.formData=function(){return this.text().then(v)}),this.json=function(){return this.text().then(JSON.parse)},this}c.prototype.append=function(e,t){e=a(e),t=s(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},c.prototype.delete=function(e){delete this.map[a(e)]},c.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},c.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},c.prototype.set=function(e,t){this.map[a(e)]=s(t)},c.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},c.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),d(e)},c.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),d(e)},c.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),d(e)},r.iterable&&(c.prototype[Symbol.iterator]=c.prototype.entries);var h=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function y(e,t){var n,r,o=(t=t||{}).body;if(e instanceof y){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new c(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new c(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),h.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function v(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}})),t}function g(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new c(t.headers),this.url=t.url||"",this._initBody(e)}y.prototype.clone=function(){return new y(this,{body:this._bodyInit})},p.call(y.prototype),p.call(g.prototype),g.prototype.clone=function(){return new g(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new c(this.headers),url:this.url})},g.error=function(){var e=new g(null,{status:0,statusText:""});return e.type="error",e};var b=[301,302,303,307,308];g.redirect=function(e,t){if(-1===b.indexOf(t))throw new RangeError("Invalid status code");return new g(null,{status:t,headers:{location:e}})};var E=self.DOMException;try{new E}catch(e){(E=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),E.prototype.constructor=E}function w(e,t){return new Promise((function(n,o){var i=new y(e,t);if(i.signal&&i.signal.aborted)return o(new E("Aborted","AbortError"));var a=new XMLHttpRequest;function s(){a.abort()}a.onload=function(){var e,t,r={status:a.status,statusText:a.statusText,headers:(e=a.getAllResponseHeaders()||"",t=new c,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}})),t)};r.url="responseURL"in a?a.responseURL:r.headers.get("X-Request-URL");var o="response"in a?a.response:a.responseText;n(new g(o,r))},a.onerror=function(){o(new TypeError("Network request failed"))},a.ontimeout=function(){o(new TypeError("Network request failed"))},a.onabort=function(){o(new E("Aborted","AbortError"))},a.open(i.method,i.url,!0),"include"===i.credentials?a.withCredentials=!0:"omit"===i.credentials&&(a.withCredentials=!1),"responseType"in a&&r.blob&&(a.responseType="blob"),i.headers.forEach((function(e,t){a.setRequestHeader(t,e)})),i.signal&&(i.signal.addEventListener("abort",s),a.onreadystatechange=function(){4===a.readyState&&i.signal.removeEventListener("abort",s)}),a.send(void 0===i._bodyInit?null:i._bodyInit)}))}w.polyfill=!0,self.fetch||(self.fetch=w,self.Headers=c,self.Request=y,self.Response=g)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getMovieInfoOmdbAPI=function(e){var t=e.split(" ").join("+");return fetch("https://www.omdbapi.com/?t="+t+"?&apikey=63c8d483").then((function(e){return e.json()}))}}]);
//# sourceMappingURL=main.js.map