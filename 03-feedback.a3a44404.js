function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return l.Date.now()};function m(e,t,n){var r,i,o,a,f,u,c=0,l=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function h(e){return c=e,f=setTimeout(T,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=o}function T(){var e=g();if(j(e))return O(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?v(n,o-(e-c)):n}(e))}function O(e){return f=void 0,m&&r?b(e):(r=i=void 0,a)}function w(){var e=g(),n=j(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return h(u);if(s)return f=setTimeout(T,t),b(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=y(t)||0,p(n)&&(l=!!n.leading,o=(s="maxWait"in n)?d(y(n.maxWait)||0,t):o,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=i=f=void 0},w.flush=function(){return void 0===f?a:O(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(e,t,{leading:r,maxWait:t,trailing:i})};const b={clear(){keys=Object.keys(this),keys.forEach((e=>{"clear"!==e&&delete this[e]}))}},h=document.querySelector(".js-feedback-form");h.addEventListener("submit",e(t)((function(e){e.preventDefault(),console.log("email: ",e.currentTarget.email.value,"; message: ",e.currentTarget.message.value),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),b.clear()}),500)),h.addEventListener("input",e(t)((function(e){b[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(b))}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;Object.keys(e).forEach((t=>{h.querySelector(`*[name=${t}]`).value=e[t],b[t]=e[t]}))}();
//# sourceMappingURL=03-feedback.a3a44404.js.map
