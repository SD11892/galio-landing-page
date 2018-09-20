webpackJsonp([121],{"./src/issue/media/components/create-auth-provider.js":function(e,r,t){"use strict";t.d(r,"a",function(){return i}),t.d(r,"b",function(){return a});var n=this;function o(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(o,i){try{var a=r[o](i),s=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}("next")})}}var i=function(e,r){return function(){var t=o(regeneratorRuntime.mark(function t(o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=r,t.next=3,e(o?o.collectionName:void 0);case 3:return t.t1=t.sent,t.abrupt("return",{clientId:t.t0,token:t.t1});case 5:case"end":return t.stop()}},t,n)}));return function(e){return t.apply(this,arguments)}}()},a=function(e){return o(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",e);case 1:case"end":return r.stop()}},r,n)}))}},"./src/issue/media/components/with-media-provider/create-media-provider.js":function(e,r,t){"use strict";var n=t("./node_modules/@atlaskit/media-core/dist/es2015/index.js"),o=t("./src/issue/media/components/create-auth-provider.js"),i=this;r.a=function(){var e=function(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(o,i){try{var a=r[o](i),s=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}("next")})}}(regeneratorRuntime.mark(function e(r,t,a){var s,u,c,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s=r.viewContext,u=r.uploadContext,c=r.userAuth,s){e.next=3;break}throw new TypeError("mediaContext.viewContext was null. Check that the server response has been processed.");case 3:return f=Promise.resolve(n.b.create({serviceHost:s.serviceHost,authProvider:Object(o.a)(t,s.clientId)})),e.abrupt("return",u?{viewContext:f,uploadContext:Promise.resolve(n.b.create({serviceHost:u.serviceHost,authProvider:Object(o.a)(t,u.clientId),userAuthProvider:c?Object(o.b)(c):null})),uploadParams:{collection:u.collection,dropzoneContainer:a}}:{viewContext:f});case 5:case"end":return e.stop()}},e,i)}));return function(r,t,n){return e.apply(this,arguments)}}()},"./src/issue/media/components/with-media-provider/with-media-provider.js":function(e,r,t){"use strict";var n=t("./node_modules/react/index.js"),o=t.n(n),i=t("./src/issue/media/components/with-token-provider/with-token-provider.js"),a=t("./src/issue/media/components/with-media-provider/create-media-provider.js"),s=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();function c(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}var f=function(e){return function(r){function t(){var e,r,n;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),a=0;a<o;a++)i[a]=arguments[a];return r=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.setDropzoneRef=function(e){n.dropzoneRef=e},n.mediaProviderPromise=new Promise(function(e){n.resolve=e}),n.resolved=!1,n.dropzoneRef=null,c(n,r)}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(t,n["Component"]),u(t,[{key:"componentDidMount",value:function(){this.resolveMediaProviderPromise()}},{key:"componentDidUpdate",value:function(){this.resolveMediaProviderPromise()}},{key:"resolveMediaProviderPromise",value:function(){var e=this.props,r=e.mediaContext,t=e.tokenProvider;if(!this.resolved&&this.dropzoneRef&&r.viewContext){this.resolved=!0;var n=Object(a.a)(r,t,this.dropzoneRef);this.resolve(n)}}},{key:"render",value:function(){var r=this.props,t=(r.mediaContext,r.tokenProvider,function(e,r){var t={};for(var n in e)r.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(r,["mediaContext","tokenProvider"]));return o.a.createElement("div",{ref:this.setDropzoneRef},o.a.createElement(e,s({mediaProvider:this.mediaProviderPromise},t)))}}]),t}()};r.a=function(e){return Object(i.a)(f(e))}},"./src/issue/media/components/with-token-provider/with-token-provider.js":function(e,r,t){"use strict";var n=t("./node_modules/react/index.js"),o=t.n(n),i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},a=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}();r.a=function(e){return function(r){function t(e){var r=this;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!=typeof r&&"function"!=typeof r?e:r}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.resetViewTokenPromise=function(){n.viewTokenPromise=new Promise(function(e){n.resolveViewTokenPromise=e})},n.updateViewTokenPromise=function(e){var r=e.viewContext;r&&r.areTokenPermissionsUpToDate&&r.token?n.resolveViewTokenPromise(r.token):n.resetViewTokenPromise()},n.tokenProvider=function(){var e=function(e){return function(){var r=e.apply(this,arguments);return new Promise(function(e,t){return function n(o,i){try{var a=r[o](i),s=a.value}catch(e){return void t(e)}if(!a.done)return Promise.resolve(s).then(function(e){n("next",e)},function(e){n("throw",e)});e(s)}("next")})}}(regeneratorRuntime.mark(function e(t){var o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",n.viewTokenPromise);case 2:if(!(o=n.props.mediaContext.uploadContext)){e.next=5;break}return e.abrupt("return",o.token);case 5:throw new Error("Upload token not available");case 6:case"end":return e.stop()}},e,r)}));return function(r){return e.apply(this,arguments)}}(),n.resetViewTokenPromise(),n.updateViewTokenPromise(e.mediaContext),n}return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}(t,n["Component"]),a(t,[{key:"componentWillReceiveProps",value:function(e){this.updateViewTokenPromise(e.mediaContext)}},{key:"render",value:function(){return o.a.createElement(e,i({tokenProvider:this.tokenProvider},this.props))}}]),t}()}},"./src/issue/views/common/renderer/renderer-view.js":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var n=t("./src/issue/media/components/with-media-provider/with-media-provider.js"),o=t("./src/issue/views/common/renderer/async-renderer.js");r.default=Object(n.a)(o.b)}});
//# sourceMappingURL=async-renderer-view.f2db771dfcf2146f2b58.7.js.map