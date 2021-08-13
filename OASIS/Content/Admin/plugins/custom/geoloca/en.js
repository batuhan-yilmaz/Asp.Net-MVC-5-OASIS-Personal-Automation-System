/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
/*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/

(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

    $.ui = $.ui || {};

    var version = $.ui.version = "1.12.1";

    var widgetUuid = 0;
    var widgetSlice = Array.prototype.slice;

    $.cleanData = (function(orig) {
        return function(elems) {
            var events, elem, i;
            for (i = 0;
                (elem = elems[i]) != null; i++) {
                try {

                    // Only trigger remove when necessary to save time
                    events = $._data(elem, "events");
                    if (events && events.remove) {
                        $(elem).triggerHandler("remove");
                    }

                    // Http://bugs.jquery.com/ticket/8235
                } catch (e) {}
            }
            orig(elems);
        };
    })($.cleanData);

    $.widget = function(name, base, prototype) {
        var existingConstructor, constructor, basePrototype;

        // ProxiedPrototype allows the provided prototype to remain unmodified
        // so that it can be used as a mixin for multiple widgets (#8876)
        var proxiedPrototype = {};

        var namespace = name.split(".")[0];
        name = name.split(".")[1];
        var fullName = namespace + "-" + name;

        if (!prototype) {
            prototype = base;
            base = $.Widget;
        }

        if ($.isArray(prototype)) {
            prototype = $.extend.apply(null, [{}].concat(prototype));
        }

        // Create selector for plugin
        $.expr[":"][fullName.toLowerCase()] = function(elem) {
            return !!$.data(elem, fullName);
        };

        $[namespace] = $[namespace] || {};
        existingConstructor = $[namespace][name];
        constructor = $[namespace][name] = function(options, element) {

            // Allow instantiation without "new" keyword
            if (!this._createWidget) {
                return new constructor(options, element);
            }

            // Allow instantiation without initializing for simple inheritance
            // must use "new" keyword (the code above always passes args)
            if (arguments.length) {
                this._createWidget(options, element);
            }
        };

        // Extend with the existing constructor to carry over any static properties
        $.extend(constructor, existingConstructor, {
            version: prototype.version,

            // Copy the object used to create the prototype in case we need to
            // redefine the widget later
            _proto: $.extend({}, prototype),

            // Track widgets that inherit from this widget in case this widget is
            // redefined after a widget inherits from it
            _childConstructors: []
        });

        basePrototype = new base();

        // We need to make the options hash a property directly on the new instance
        // otherwise we'll modify the options hash on the prototype that we're
        // inheriting from
        basePrototype.options = $.widget.extend({}, basePrototype.options);
        $.each(prototype, function(prop, value) {
            if (!$.isFunction(value)) {
                proxiedPrototype[prop] = value;
                return;
            }
            proxiedPrototype[prop] = (function() {
                function _super() {
                    return base.prototype[prop].apply(this, arguments);
                }

                function _superApply(args) {
                    return base.prototype[prop].apply(this, args);
                }

                return function() {
                    var __super = this._super;
                    var __superApply = this._superApply;
                    var returnValue;

                    this._super = _super;
                    this._superApply = _superApply;

                    returnValue = value.apply(this, arguments);

                    this._super = __super;
                    this._superApply = __superApply;

                    return returnValue;
                };
            })();
        });
        constructor.prototype = $.widget.extend(basePrototype, {

            // TODO: remove support for widgetEventPrefix
            // always use the name + a colon as the prefix, e.g., draggable:start
            // don't prefix for widgets that aren't DOM-based
            widgetEventPrefix: existingConstructor ? (basePrototype.widgetEventPrefix || name) : name
        }, proxiedPrototype, {
            constructor: constructor,
            namespace: namespace,
            widgetName: name,
            widgetFullName: fullName
        });

        // If this widget is being redefined then we need to find all widgets that
        // are inheriting from it and redefine all of them so that they inherit from
        // the new version of this widget. We're essentially trying to replace one
        // level in the prototype chain.
        if (existingConstructor) {
            $.each(existingConstructor._childConstructors, function(i, child) {
                var childPrototype = child.prototype;

                // Redefine the child widget using the same prototype that was
                // originally used, but inherit from the new version of the base
                $.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor,
                    child._proto);
            });

            // Remove the list of existing child constructors from the old constructor
            // so the old child constructors can be garbage collected
            delete existingConstructor._childConstructors;
        } else {
            base._childConstructors.push(constructor);
        }

        $.widget.bridge(name, constructor);

        return constructor;
    };

    $.widget.extend = function(target) {
        var input = widgetSlice.call(arguments, 1);
        var inputIndex = 0;
        var inputLength = input.length;
        var key;
        var value;

        for (; inputIndex < inputLength; inputIndex++) {
            for (key in input[inputIndex]) {
                value = input[inputIndex][key];
                if (input[inputIndex].hasOwnProperty(key) && value !== undefined) {

                    // Clone objects
                    if ($.isPlainObject(value)) {
                        target[key] = $.isPlainObject(target[key]) ?
                            $.widget.extend({}, target[key], value) :

                            // Don't extend strings, arrays, etc. with objects
                            $.widget.extend({}, value);

                        // Copy everything else by reference
                    } else {
                        target[key] = value;
                    }
                }
            }
        }
        return target;
    };

    $.widget.bridge = function(name, object) {
        var fullName = object.prototype.widgetFullName || name;
        $.fn[name] = function(options) {
            var isMethodCall = typeof options === "string";
            var args = widgetSlice.call(arguments, 1);
            var returnValue = this;

            if (isMethodCall) {

                // If this is an empty collection, we need to have the instance method
                // return undefined instead of the jQuery instance
                if (!this.length && options === "instance") {
                    returnValue = undefined;
                } else {
                    this.each(function() {
                        var methodValue;
                        var instance = $.data(this, fullName);

                        if (options === "instance") {
                            returnValue = instance;
                            return false;
                        }

                        if (!instance) {
                            return $.error("cannot call methods on " + name +
                                " prior to initialization; " +
                                "attempted to call method '" + options + "'");
                        }

                        if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                            return $.error("no such method '" + options + "' for " + name +
                                " widget instance");
                        }

                        methodValue = instance[options].apply(instance, args);

                        if (methodValue !== instance && methodValue !== undefined) {
                            returnValue = methodValue && methodValue.jquery ?
                                returnValue.pushStack(methodValue.get()) :
                                methodValue;
                            return false;
                        }
                    });
                }
            } else {

                // Allow multiple hashes to be passed on init
                if (args.length) {
                    options = $.widget.extend.apply(null, [options].concat(args));
                }

                this.each(function() {
                    var instance = $.data(this, fullName);
                    if (instance) {
                        instance.option(options || {});
                        if (instance._init) {
                            instance._init();
                        }
                    } else {
                        $.data(this, fullName, new object(options, this));
                    }
                });
            }

            return returnValue;
        };
    };

    $.Widget = function( /* options, element */ ) {};
    $.Widget._childConstructors = [];

    $.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",

        options: {
            classes: {},
            disabled: false,

            // Callbacks
            create: null
        },

        _createWidget: function(options, element) {
            element = $(element || this.defaultElement || this)[0];
            this.element = $(element);
            this.uuid = widgetUuid++;
            this.eventNamespace = "." + this.widgetName + this.uuid;

            this.bindings = $();
            this.hoverable = $();
            this.focusable = $();
            this.classesElementLookup = {};

            if (element !== this) {
                $.data(element, this.widgetFullName, this);
                this._on(true, this.element, {
                    remove: function(event) {
                        if (event.target === element) {
                            this.destroy();
                        }
                    }
                });
                this.document = $(element.style ?

                    // Element within the document
                    element.ownerDocument :

                    // Element is window or document
                    element.document || element);
                this.window = $(this.document[0].defaultView || this.document[0].parentWindow);
            }

            this.options = $.widget.extend({},
                this.options,
                this._getCreateOptions(),
                options);

            this._create();

            if (this.options.disabled) {
                this._setOptionDisabled(this.options.disabled);
            }

            this._trigger("create", null, this._getCreateEventData());
            this._init();
        },

        _getCreateOptions: function() {
            return {};
        },

        _getCreateEventData: $.noop,

        _create: $.noop,

        _init: $.noop,

        destroy: function() {
            var that = this;

            this._destroy();
            $.each(this.classesElementLookup, function(key, value) {
                that._removeClass(value, key);
            });

            // We can probably remove the unbind calls in 2.0
            // all event bindings should go through this._on()
            this.element
                .off(this.eventNamespace)
                .removeData(this.widgetFullName);
            this.widget()
                .off(this.eventNamespace)
                .removeAttr("aria-disabled");

            // Clean up events and states
            this.bindings.off(this.eventNamespace);
        },

        _destroy: $.noop,

        widget: function() {
            return this.element;
        },

        option: function(key, value) {
            var options = key;
            var parts;
            var curOption;
            var i;

            if (arguments.length === 0) {

                // Don't return a reference to the internal hash
                return $.widget.extend({}, this.options);
            }

            if (typeof key === "string") {

                // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
                options = {};
                parts = key.split(".");
                key = parts.shift();
                if (parts.length) {
                    curOption = options[key] = $.widget.extend({}, this.options[key]);
                    for (i = 0; i < parts.length - 1; i++) {
                        curOption[parts[i]] = curOption[parts[i]] || {};
                        curOption = curOption[parts[i]];
                    }
                    key = parts.pop();
                    if (arguments.length === 1) {
                        return curOption[key] === undefined ? null : curOption[key];
                    }
                    curOption[key] = value;
                } else {
                    if (arguments.length === 1) {
                        return this.options[key] === undefined ? null : this.options[key];
                    }
                    options[key] = value;
                }
            }

            this._setOptions(options);

            return this;
        },

        _setOptions: function(options) {
            var key;

            for (key in options) {
                this._setOption(key, options[key]);
            }

            return this;
        },

        _setOption: function(key, value) {
            if (key === "classes") {
                this._setOptionClasses(value);
            }

            this.options[key] = value;

            if (key === "disabled") {
                this._setOptionDisabled(value);
            }

            return this;
        },

        _setOptionClasses: function(value) {
            var classKey, elements, currentElements;

            for (classKey in value) {
                currentElements = this.classesElementLookup[classKey];
                if (value[classKey] === this.options.classes[classKey] ||
                    !currentElements ||
                    !currentElements.length) {
                    continue;
                }

                // We are doing this to create a new jQuery object because the _removeClass() call
                // on the next line is going to destroy the reference to the current elements being
                // tracked. We need to save a copy of this collection so that we can add the new classes
                // below.
                elements = $(currentElements.get());
                this._removeClass(currentElements, classKey);

                // We don't use _addClass() here, because that uses this.options.classes
                // for generating the string of classes. We want to use the value passed in from
                // _setOption(), this is the new value of the classes option which was passed to
                // _setOption(). We pass this value directly to _classes().
                elements.addClass(this._classes({
                    element: elements,
                    keys: classKey,
                    classes: value,
                    add: true
                }));
            }
        },

        _setOptionDisabled: function(value) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value);

            // If the widget is becoming disabled, then nothing is interactive
            if (value) {
                this._removeClass(this.hoverable, null, "ui-state-hover");
                this._removeClass(this.focusable, null, "ui-state-focus");
            }
        },

        enable: function() {
            return this._setOptions({
                disabled: false
            });
        },

        disable: function() {
            return this._setOptions({
                disabled: true
            });
        },

        _classes: function(options) {
            var full = [];
            var that = this;

            options = $.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, options);

            function processClassString(classes, checkOption) {
                var current, i;
                for (i = 0; i < classes.length; i++) {
                    current = that.classesElementLookup[classes[i]] || $();
                    if (options.add) {
                        current = $($.unique(current.get().concat(options.element.get())));
                    } else {
                        current = $(current.not(options.element).get());
                    }
                    that.classesElementLookup[classes[i]] = current;
                    full.push(classes[i]);
                    if (checkOption && options.classes[classes[i]]) {
                        full.push(options.classes[classes[i]]);
                    }
                }
            }

            this._on(options.element, {
                "remove": "_untrackClassesElement"
            });

            if (options.keys) {
                processClassString(options.keys.match(/\S+/g) || [], true);
            }
            if (options.extra) {
                processClassString(options.extra.match(/\S+/g) || []);
            }

            return full.join(" ");
        },

        _untrackClassesElement: function(event) {
            var that = this;
            $.each(that.classesElementLookup, function(key, value) {
                if ($.inArray(event.target, value) !== -1) {
                    that.classesElementLookup[key] = $(value.not(event.target).get());
                }
            });
        },

        _removeClass: function(element, keys, extra) {
            return this._toggleClass(element, keys, extra, false);
        },

        _addClass: function(element, keys, extra) {
            return this._toggleClass(element, keys, extra, true);
        },

        _toggleClass: function(element, keys, extra, add) {
            add = (typeof add === "boolean") ? add : extra;
            var shift = (typeof element === "string" || element === null),
                options = {
                    extra: shift ? keys : extra,
                    keys: shift ? element : keys,
                    element: shift ? this.element : element,
                    add: add
                };
            options.element.toggleClass(this._classes(options), add);
            return this;
        },

        _on: function(suppressDisabledCheck, element, handlers) {
            var delegateElement;
            var instance = this;

            // No suppressDisabledCheck flag, shuffle arguments
            if (typeof suppressDisabledCheck !== "boolean") {
                handlers = element;
                element = suppressDisabledCheck;
                suppressDisabledCheck = false;
            }

            // No element argument, shuffle and use this.element
            if (!handlers) {
                handlers = element;
                element = this.element;
                delegateElement = this.widget();
            } else {
                element = delegateElement = $(element);
                this.bindings = this.bindings.add(element);
            }

            $.each(handlers, function(event, handler) {
                function handlerProxy() {

                    // Allow widgets to customize the disabled handling
                    // - disabled as an array instead of boolean
                    // - disabled class as method for disabling individual parts
                    if (!suppressDisabledCheck &&
                        (instance.options.disabled === true ||
                            $(this).hasClass("ui-state-disabled"))) {
                        return;
                    }
                    return (typeof handler === "string" ? instance[handler] : handler)
                        .apply(instance, arguments);
                }

                // Copy the guid so direct unbinding works
                if (typeof handler !== "string") {
                    handlerProxy.guid = handler.guid =
                        handler.guid || handlerProxy.guid || $.guid++;
                }

                var match = event.match(/^([\w:-]*)\s*(.*)$/);
                var eventName = match[1] + instance.eventNamespace;
                var selector = match[2];

                if (selector) {
                    delegateElement.on(eventName, selector, handlerProxy);
                } else {
                    element.on(eventName, handlerProxy);
                }
            });
        },

        _off: function(element, eventName) {
            eventName = (eventName || "").split(" ").join(this.eventNamespace + " ") +
                this.eventNamespace;
            element.off(eventName).off(eventName);

            // Clear the stack to avoid memory leaks (#10056)
            this.bindings = $(this.bindings.not(element).get());
            this.focusable = $(this.focusable.not(element).get());
            this.hoverable = $(this.hoverable.not(element).get());
        },

        _delay: function(handler, delay) {
            function handlerProxy() {
                return (typeof handler === "string" ? instance[handler] : handler)
                    .apply(instance, arguments);
            }
            var instance = this;
            return setTimeout(handlerProxy, delay || 0);
        },

        _hoverable: function(element) {
            this.hoverable = this.hoverable.add(element);
            this._on(element, {
                mouseenter: function(event) {
                    this._addClass($(event.currentTarget), null, "ui-state-hover");
                },
                mouseleave: function(event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-hover");
                }
            });
        },

        _focusable: function(element) {
            this.focusable = this.focusable.add(element);
            this._on(element, {
                focusin: function(event) {
                    this._addClass($(event.currentTarget), null, "ui-state-focus");
                },
                focusout: function(event) {
                    this._removeClass($(event.currentTarget), null, "ui-state-focus");
                }
            });
        },

        _trigger: function(type, event, data) {
            var prop, orig;
            var callback = this.options[type];

            data = data || {};
            event = $.Event(event);
            event.type = (type === this.widgetEventPrefix ?
                type :
                this.widgetEventPrefix + type).toLowerCase();

            // The original event may come from any element
            // so we need to reset the target on the new event
            event.target = this.element[0];

            // Copy original event properties over to the new event
            orig = event.originalEvent;
            if (orig) {
                for (prop in orig) {
                    if (!(prop in event)) {
                        event[prop] = orig[prop];
                    }
                }
            }

            this.element.trigger(event, data);
            return !($.isFunction(callback) &&
                callback.apply(this.element[0], [event].concat(data)) === false ||
                event.isDefaultPrevented());
        }
    };

    $.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(method, defaultEffect) {
        $.Widget.prototype["_" + method] = function(element, options, callback) {
            if (typeof options === "string") {
                options = {
                    effect: options
                };
            }

            var hasOptions;
            var effectName = !options ?
                method :
                options === true || typeof options === "number" ?
                defaultEffect :
                options.effect || defaultEffect;

            options = options || {};
            if (typeof options === "number") {
                options = {
                    duration: options
                };
            }

            hasOptions = !$.isEmptyObject(options);
            options.complete = callback;

            if (options.delay) {
                element.delay(options.delay);
            }

            if (hasOptions && $.effects && $.effects.effect[effectName]) {
                element[method](options);
            } else if (effectName !== method && element[effectName]) {
                element[effectName](options.duration, options.easing, callback);
            } else {
                element.queue(function(next) {
                    $(this)[method]();
                    if (callback) {
                        callback.call(element[0]);
                    }
                    next();
                });
            }
        };
    });

    var widget = $.widget;
}));
//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
/**
 *    xbe4x is javascript implementation of the original ECMAScript for XML (E4X)
 *    Specification (ECMA-357) December 2005. This implementation is designed to emulate
 *    the implementation that is used in SpiderMonkey (Mozilla's JavaScript(TM) Engine)
 *    and therefore Firefox, Thunderbird, and most other Gecko based applications.
 *    Because the Mozilla implementation leaves out certain features of the
 *    specification, so does xbe4x. Please read the README file for a further
 *    explanation of these issues.
 *
 *
 *    @author Sam Shull <http://samshull.blogspot.com/>
 *    @version 0.1
 *
 *    @copyright Copyright (c) 2009 Sam Shull <http://samshull.blogspot.com/>
 *    @license <http://www.opensource.org/licenses/mit-license.html>
 *
 *    Permission is hereby granted, free of charge, to any person obtaining a copy
 *    of this software and associated documentation files (the "Software"), to deal
 *    in the Software without restriction, including without limitation the rights
 *    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *    copies of the Software, and to permit persons to whom the Software is
 *    furnished to do so, subject to the following conditions:
 *
 *    The above copyright notice and this permission notice shall be included in
 *    all copies or substantial portions of the Software.
 *
 *    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *    THE SOFTWARE.
 *
 *
 *    CHANGES:
 */

//this doesn't load if window.XML is already defined
if (!this.XML)
{
    (function ()
    {
        /*
         *
         *
         */
        var undefined, p,
            window                       = this,
            dns                          = [],
            defaultNamespace             = "",
            ELEMENT_NODE                 = 1,
            ATTRIBUTE_NODE               = 2,
            TEXT_NODE                    = 3,
            CDATA_SECTION_NODE           = 4,
            ENTITY_REFERENCE_NODE        = 5,
            ENTITY_NODE                  = 6,
            PROCESSING_INSTRUCTION_NODE  = 7,
            COMMENT_NODE                 = 8,
            DOCUMENT_NODE                = 9,
            DOCUMENT_TYPE_NODE           = 10,
            DOCUMENT_FRAGMENT_NODE       = 11,
            NOTATION_NODE                = 12,
            isNSDef                      = /^xmlns:([\w\-]+)/i,
            toString                     = ({}).toString,
            propertyIsEnumerable         = ({}).propertyIsEnumerable,
            hasOwnProperty               = ({}).hasOwnProperty,
            defaultXMLProperties         = ",prototype,ignoreComments,ignoreProcessingInstructions,ignoreWhitespace," +
                "prettyPrinting,prettyIndent,settings,defaultSettings,setSettings,settings," +
                "propertyIsEnumerable,hasOwnProperty,_setDefaultNamespace,",
            defaultXMLPrototype          = ",_Class,_Name,_Parent,_Value,_InScopeNamespaces,_Attributes,_Children,_Node",
            defaultXMLListPrototype      = ",_Class,_Value,_Children,_TargetObject,_TargetProperty",
            xmlDoc                       = parse("<x/>"),
            piName                       = /^[\w\-]+\s*/,
            XSLT_NS                      = "http://www.w3.org/1999/XSL/Transform";

        /**
         *
         *
         *    @param String | XML $string
         *    @returns XML
         *    @throws SyntaxError
         */
        function XML ($string)
        {
            if (!(this instanceof XML))
            {
                return ToXML($string);
            }

            var x, i, l;

            this._Class = "text";

            this._Name = null;

            this._Value = null;

            this._Parent = null;

            this._InScopeNamespaces = {};

            this._DefaultNamespace = null;

            this._Attributes = {};

            this._Children = [];

            this[0] = this;

            /**
             *
             *
             *
             */
            switch (typeof($string))
            {
                case "undefined":
                case "null":
                    break;
                case "number":
                case "boolean":    $string = ToString($string);
                case "string":

                    x = ToXML(trim($string));
                    if (x)
                    {
                        if (x.length() ===1)
                        {
                            this._Class = x._Class;
                            this._Name = x._Name;
                            this._Value = x._Value;
                            this._InScopeNamespaces = x._InScopeNamespaces;
                            this._DefaultNamespace = x._DefaultNamespace;
                            this._Attributes = x._Attributes;

                            for (i = 0, l = x._Children.length; i < l; ++i)
                            {
                                this._Children[i] = x._Children[i];
                                this._Children[i]._Parent = this;
                            }

                            break;
                        }
                    }

                    throw new SyntaxError();
                    break;
                default:
                    if ($string instanceof XML)
                    {
                        if ($string.length() ===1)
                        {
                            x = $string;
                            this._Class = x._Class;
                            this._Name = x._Name;
                            this._Value = x._Value;
                            this._InScopeNamespaces = x._InScopeNamespaces;
                            this._DefaultNamespace = x._DefaultNamespace;
                            this._Attributes = x._Attributes;

                            for (i = 0, l = x._Children.length; i < l; ++i)
                            {
                                this._Children[i] = x._Children[i];
                                this._Children[i]._Parent = this;
                            }
                        }
                    }
                    break;
            }
        }

        /**
         *    Ignore XML comments. (Default: true.)
         *
         *    @static
         *    @param Namespace ns
         *    @returns void
         */
        XML.setDefaultNamespace = function (ns)
        {
            dns.unshift(defaultNamespace || "");
            defaultNamespace = Namespace(ns);
            return null;
        };

        /**
         *  Use this function to restore the default namespace
         *  to the previous namespace
         *
         */
        XML.restoreDefaultNamespace = function ()
        {
            defaultNamespace = dns.shift() || "";
            return null;
        };

        /**
         *
         *
         *
         */
        XML.load = function (pathToFile, onload)
        {
            var xhr = isActiveXSupported("Microsoft.XMLHTTP") && new ActiveXObject("Microsoft.XMLHTTP") || new XMLHttpRequest(),
                async = ({}).toString.call(onload || {}) == "[object Function]";

            xhr.open("GET", pathToFile, async);

            if (async)
            {
                if (!!xhr.addEventListener)
                {
                    xhr.addEventListener("load", loaded, false);
                }
                else
                {
                    xhr.onreadystatechange = function ()
                    {
                        if (xhr.readyState == 4 && xhr.status == 200)
                        {
                            loaded();
                        }
                    };
                }
            }

            xhr.send(null);

            return async ? xhr : loaded(1);

            function loaded (ret)
            {
                var x = new XML((xhr.responseText||"").replace(/\s*<\?xml.*?\?>/,""));
                return ret ? x : onload(x);
            }
        };

        /**
         *    Ignore XML comments. (Default: true.)
         *
         *    @static
         *    @var Boolean
         */
        XML.ignoreComments = true;

        /**
         *    Ignore XML processing instructions. (Default: true.)
         *
         *    @static
         *    @var Boolean
         */
        XML.ignoreProcessingInstructions = true;

        /**
         *    Ignore whitespace. (Default: true.)
         *
         *    @static
         *    @var Boolean
         */
        XML.ignoreWhitespace = true;

        /**
         *    Pretty-print XML output with toXMLString() etc. (Default: true.)
         *
         *    @static
         *    @var Boolean
         */
        XML.prettyPrinting = true;

        /**
         *    Pretty indent level for child nodes. (Default: 2.)
         *
         *    @static
         *    @var Number
         */
        XML.prettyIndent = 2;

        //There are also three methods to more easily apply and restore settings for use, say, within a function.

        /**
         *    Get an Object containing the above settings.
         *
         *    @static
         *    @returns Object
         */
        XML.settings = function ()
        {
            return {
                ignoreComments:                 XML.ignoreComments,
                ignoreProcessingInstructions:   XML.ignoreProcessingInstructions,
                ignoreWhitespace:               XML.ignoreWhitespace,
                prettyPrinting:                 XML.prettyPrinting,
                prettyIndent:                   XML.prettyIndent
            };
        };

        /**
         *    Get an object containing the default settings.
         *
         *    @static
         *    @returns Object
         */
        XML.defaultSettings = function ()
        {
            return {
                ignoreComments:                 true,
                ignoreProcessingInstructions:   true,
                ignoreWhitespace:               true,
                prettyPrinting:                 true,
                prettyIndent:                   2
            };
        };

        /**
         *    Set XML settings from, e.g., an object returned by XML.settings().
         *
         *
         *    @static
         *    @param Object settings
         *    @returns void
         */
        XML.setSettings = function (settings)
        {
            var p;
            settings = settings || XML.settings();
            for (p in settings)
            {
                switch (p)
                {
                    case "ignoreComments":                   XML.ignoreComments = !!settings[p];
                    case "ignoreProcessingInstructions":     XML.ignoreProcessingInstructions = !!settings[p];
                    case "ignoreWhitespace":                 XML.ignoreWhitespace = !!settings[p];
                    case "prettyPrinting":                   XML.prettyPrinting = !!settings[p];
                    case "prettyIndent":                     XML.prettyIndent = parseInt(settings[p]) || 0;
                }
            }
            return null;
        };

        /**
         *
         *
         *    @static
         *    @param String name
         *    @returns Boolean
         */
        XML.hasOwnProperty = function (name)
        {
            return defaultXMLProperties.indexOf("," + name + ",") ===-1
                && hasOwnProperty.call(XML, name);
        };

        /**
         *
         *
         *    @static
         *    @param String name
         *    @returns Boolean
         */
        XML.propertyIsEnumerable = function (name)
        {
            return name !== "prototype"
                && name in XML
                && toString.call(XML[name]) != "[object Function]"
                && propertyIsEnumerable.call(XML, name);
        };

        /**
         *
         *
         *    @static
         *    @returns String
         */
        XML.toString = function ()
        {
            return "function XML() {\n [native code] \n}";
        };

        /**
         *
         *
         *    @param String | Namespace namespace
         *    @returns XML
         */
        XML.prototype.addNamespace = function (namespace)
        {
            AddInScopeNamespace.call(this, Namespace(namespace));
            return this;
        };

        /**
         *
         *
         *    @param String child
         *    @returns XML
         */
        XML.prototype.appendChild = function (child,isChildElement)
        {
            isChildElement = isChildElement !== undefined ? isChildElement : false;
            var children = Get.call(this, "*");
            children.Put(children.length(), child,isChildElement);
            return this;
        };

        /**
         *
         *
         *    @param String | AttributeName | QName attributeName
         *    @returns XML
         */
        XML.prototype.attribute = function (attributeName)
        {
            return Get.call(this, ToAttributeName(attributeName), true);
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XML.prototype.attributes = function ()
        {
            return Get.call(this, ToAttributeName("*"));
        };

        /**
         *
         *
         *    @param String propertyName
         *    @returns XMLList
         */
        XML.prototype.child = function (propertyName)
        {
            var temporary;

            if (parseInt(propertyName)+"" == propertyName)
            {
                temporary = Get.call(this, "*");
                temporary = GetList.call(temporary, propertyName);
                return temporary || new XMLList();
            }

            temporary = ToXMLList( Get.call(this, propertyName) );

            return temporary;
        };

        /**
         *
         *
         *    @returns Number
         */
        XML.prototype.childIndex = function ()
        {
            var parent = this._Parent, q, l;

            if (!parent || this._Class === "attribute")
            {
                return -1;
            }

            for (q = 0, l = parent._Children.length; q < l; ++q)
            {
                if (parent._Children[q] === this)
                {
                    return q;
                }
            }

            return -1;
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XML.prototype.children = function ()
        {
            return Get.call(this, "*");
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XML.prototype.comments = function ()
        {
            var list = new XMLList(), i = 0, l = this._Children.length;
            list._TargetObject = this;
            list._TargetProperty = null;

            for (; i < l; ++i)
            {
                if (this._Children[i]._Class === "comment")
                {
                    list.Append(this._Children[i]);
                }
            }

            return list;
        };

        /**
         *
         *
         *    @param XML value
         *    @returns Boolean
         */
        XML.prototype.contains = function (value)
        {
            return this == value;
        };

        /**
         *
         *
         *    @returns XML
         */
        XML.prototype.copy = function ()
        {
            return DeepCopy.call(this);
        };

        /**
         *
         *
         *    @param String | QName name
         *    @returns XMLList
         */
        XML.prototype.descendants = function (name)
        {
            return Descendants.call(this, name || "*");
        };

        /**
         *
         *
         *    @param String | QName | AttributeName name
         *    @returns XMLList
         */
        XML.prototype.elements = function (name)
        {
            name = ToXMLName(name || "*");
            var list = new XMLList(), i = 0, l = this._Children.length;
            list._TargetObject = this;
            list._TargetProperty = name;

            for (; i < l; ++i)
            {
                if (
                    this._Children[i]._Class === "element"
                        && (name.localName === "*" || name.localName === this._Children[i]._Name.localName)
                        && (name.uri == null || name.uri === this._Children[i]._Name.uri)
                    )
                {
                    list.Append(this._Children[i]);
                }
            }

            return list;
        };

        /**
         *
         *
         *    @param String name
         *    @returns Boolean
         */
        XML.prototype.hasOwnProperty = function (name)
        {
            return HasProperty.call(this, name) || (defaultXMLPrototype.indexOf("," + name +",") === -1 && hasOwnProperty.call(this, name));
        };

        /**
         *
         *
         *    @returns Boolean
         */
        XML.prototype.hasComplexContent = function ()
        {
            if ((",attribute,comment,processing-instruction,text,").indexOf("," + this._Class + ",") > -1)
            {
                return false;
            }

            for (var i = 0, l = this._Children.length; i < l; ++i)
            {
                if (this._Children[i]._Class === "element")
                {
                    return true;
                }
            }

            return false;
        };

        /**
         *
         *
         *    @returns Boolean
         */
        XML.prototype.hasSimpleContent = function ()
        {
            if ((",comment,processing-instruction,").indexOf("," + this._Class + ",") > -1)
            {
                return false;
            }

            for (var i = 0, l = this._Children.length; i < l; ++i)
            {
                if (this._Children[i]._Class === "element")
                {
                    return false;
                }
            }

            return true;
        };

        /**
         *
         *
         *    @returns Array
         */
        XML.prototype.inScopeNamespaces = function ()
        {
            var y = this, inScopeNS = {}, p, a = [];

            while (y)
            {
                for (p in y._InScopeNamespaces)
                {
                    if (!inScopeNS[p])
                    {
                        inScopeNS[p] = y._InScopeNamespaces[p];
                    }
                }

                y = y.parent();
            }

            if (this._DefaultNamespace)
            {
                inScopeNS[""] = this._DefaultNamespace;
            }

            for (p in inScopeNS)
            {
                a[a.length] = inScopeNS[p];
            }

            return a;
        };

        /**
         *
         *
         *    @param XML child1
         *    @param XML child2
         *    @returns XML | null
         */
        XML.prototype.insertChildAfter = function (child1, child2)
        {
            if ((",attribute,comment,processing-instruction,text,").indexOf("," + this._Class + ",") > -1)
            {
                return null;
            }

            /*
             //this is disabled, because it doesn't work in
             //Firefox according to the spec
             if (!child2)
             {
             Insert.call(this, 0, child1);
             return this;
             }
             else if (!child1)
             {
             Insert.call(this, 0, child2);
             return this;
             }
             else
             */

            if (!child1){
                Insert.call(this, 0, child2);
                return this;
            }
            if (!child2){
                Insert.call(this, 0, child1);
                return this;
            }

            if (child1 instanceof XML)
            {
                Insert.call(this, child1.childIndex() + 1, child2);
                return this;
            }

            return null;
        };

        /**
         *
         *
         *
         *    @param XML child1
         *    @param XML child2
         *    @returns XML | null
         */
        XML.prototype.insertChildBefore = function (child1, child2)
        {
            if ((",attribute,comment,processing-instruction,text,").indexOf("," + this._Class + ",") > -1)
            {
                return null;
            }

            /*
             //this is disabled, because it doesn't work in
             //Firefox according to the spec
             if (!child1)
             {
             Insert.call(this, this._Children.length, child2);
             return this;
             }
             else if (!child2)
             {
             Insert.call(this, this._Children.length, child1);
             return this;
             }
             else
             */

            if (child1 instanceof XML)
            {
                Insert.call(this, child1.childIndex(), child2);
                return this;
            }

            return null;
        };

        /**
         *
         *
         *    @returns Number
         */
        XML.prototype.length = function ()
        {
            return 1;
        };

        /**
         *
         *
         *    @returns String | null
         */
        XML.prototype.localName = function ()
        {
            return this._Name === null ? null : this._Name.localName;
        };

        /**
         *
         *
         *    return QName
         */
        XML.prototype.name = function ()
        {
            return this._Name;
        };

        /**
         *
         *
         *    @param String prefix
         *    @returns Namespace
         */
        XML.prototype.namespace = function (prefix)
        {
            var y = this, inScopeNS = {}, p;

            while (y)
            {
                for (p in y._InScopeNamespaces)
                {
                    if (!inScopeNS[p])
                    {
                        inScopeNS[p] = y._InScopeNamespaces[p];
                    }
                }

                y = y.parent();
            }

            if (prefix === undefined)
            {
                if ((",comment,processing-instruction,text,").indexOf("," + this._Class + ",") > -1)
                {
                    return null;
                }

                return GetNamespace(this._Name, inScopeNS);
            }

            prefix = ToString(prefix);

            for (p in inScopeNS)
            {
                if (inScopeNS[p].prefix === prefix)
                {
                    return inScopeNS[p];
                }
            }

            return null;
        };

        /**
         *
         *
         *    @returns Array
         */
        XML.prototype.namespaceDeclarations = function ()
        {
            if ((",attribute,comment,processing-instruction,text,").indexOf("," + this._Class + ",") > -1)
            {
                return [];
            }

            var a = [], y = this._Parent, ancestorNS = {}, p;

            while (y)
            {
                for (p in y._InScopeNamespaces)
                {
                    if (!ancestorNS[p])
                    {
                        ancestorNS[p] = y._InScopeNamespaces[p];
                    }
                }

                y = y._Parent;
            }

            for (p in this._InScopeNamespaces)
            {
                if (p != "" && (!ancestorNS[p] || ancestorNS[p].uri != this._InScopeNamespaces[p]))
                {
                    a[a.length] = this._InScopeNamespaces[p];
                }
                else if(p === "" && !this._Parent)
                {
                    a[a.length] = this._InScopeNamespaces[p];
                }
            }

            return a;
        };

        /**
         *
         *
         *    @returns String
         */
        XML.prototype.nodeKind = function ()
        {
            return this._Class;
        };

        /**
         *
         *
         *    @returns XML
         */
        XML.prototype.normalize = function ()
        {
            for (var i = 0, l = this._Children.length; i < l;)
            {
                if (this._Children[i]._Class === "element")
                {
                    this._Children[i].normalize();
                    ++i;
                }
                else if (this._Children[i]._Class === "text")
                {
                    while (i+1 < this._Children.length && this._Children[i+1]._Class === "text")
                    {
                        this._Children[i]._Value = (this._Children[i]._Value || "") + (this._Children[i+1]._Value || "");
                        DeleteByIndex.call(this, i+1);
                    }

                    if (this._Children[i]._Value.length === 0)
                    {
                        DeleteByIndex.call(this, i);
                    }
                    else
                    {
                        ++i;
                    }
                }
                else
                {
                    ++i;
                }
            }

            return this;
        };

        /**
         *
         *
         *    @returns XML | null
         */
        XML.prototype.parent = function ()
        {
            return this._Parent;
        };

        /**
         *
         *
         *    @param String name
         *    @returns XMLList
         */
        XML.prototype.processingInstructions = function (name)
        {
            name = ToXMLName(name || "*");

            var list = new XMLList(), i = 0, l = this._Children.length;
            list._TargetObject = this;
            list._TargetProperty = null;

            for (; i < l; ++i)
            {
                if (this._Children[i]._Class === "processing-instruction"
                    && (name.localName === "*" || name.localName === this._Children[i]._Name.localName)
                    )
                {
                    list.Append(this._Children[i]);
                }
            }

            return list;
        };

        /**
         *
         *
         *    @param XML value
         *    @returns XML
         */
        XML.prototype.prependChild = function (value)
        {
            Insert.call(this, 0, value);
            return this;
        };


        XML.prototype.findFirstElement = function (value)
        {
            var list = [];
            list = this.elements(value)._Children;
            if(list.length == 0){
                var children = this.children();
                var xml;
                for(var i=0;i<children.length();i++){
                    xml = children[i];
                    var sublist = xml.findFirstElement(value);
                    if(sublist.length>0)
                        return sublist;
                }
            }
            return list;
        };


        /**
         *
         *
         *    @param String name
         *    @returns Boolean
         */
        XML.prototype.propertyIsEnumerable = function (name)
        {
            return name == "0";
        };

        /**
         *
         *
         *    @param Namespace | String namespace
         *    @returns XML
         */
        XML.prototype.removeNamespace = function (namespace)
        {
            if ((",attribute,comment,processing-instruction,text,").indexOf("," + this._Class + ",") > -1)
            {
                return this;
            }

            var ns = Namespace(namespace), thisNS = GetNamespace(this._Name, this._InScopeNamespaces), p, l;

            if (thisNS == ns)
            {
                return this;
            }

            /*
             //firefox does not remove the references to the
             //namespaces in attributes -- so we wont either
             for (p in this._Attributes)
             {
             if (GetNamespace(this._Attributes[p]._Name, this._InScopeNamespaces).uri == ns.uri)
             {
             this._Attributes[p]._Name = new QName(ns, this._Attributes[p].localName());
             }
             }
             //*/

            if (ns.prefix == undefined)
            {
                for (p in this._InScopeNamespaces)
                {
                    if (this._InScopeNamespaces[p].uri === ns.uri)
                    {
                        try{
                            this._InScopeNamespaces[p] = null;
                            delete this._InScopeNamespaces[p];
                        }catch(e){}
                    }
                }
            }
            else if (this._InScopeNamespaces[ns.prefix] && this._InScopeNamespaces[ns.prefix].uri === ns.uri)
            {
                try{
                    this._InScopeNamespaces[ns.prefix] = null;
                    delete this._InScopeNamespaces[ns.prefix];
                }catch(e){}
            }

            for (p = 0, l = this._Children.length; p < l; ++p)
            {
                if (this._Children[p]._Class === "element")
                {
                    this._Children[p].removeNamespace(ns);
                }
            }

            return this;
        };

        /**
         *
         *
         *    @param String propertyName
         *    @param XML value
         *    @returns XML
         */
        XML.prototype.replace = function (propertyName, value)
        {
            if ((",attribute,comment,processing-instruction,text,").indexOf("," + this._Class + ",") > -1)
            {
                return this;
            }

            var c = value instanceof XML ? DeepCopy.call(value) : ToString(value), n, i, k;

            if (parseInt(propertyName)+"" == propertyName)
            {
                Replace.call(this, propertyName, c);
                return this;
            }

            /*
             Basically Firefox does not appear to follow the rules set forth in the spec
             so, we are just going to fix this so that we do what firefox does
             if the propertyName is not an integer:
             if value is a XMLList setChildren
             otherwise do nothing
             */

            if (c instanceof XMLList)
            {
                this.setChildren(c);
            }

            return this;

            /*
             Leave the rest of these rules in place, just in case
             */

            n = QName(propertyName);
            k = this._Children.length;

            while (--k > -1)
            {
                if (
                    (n.localName === "*" || (this._Children[k]._Class === "element" && this._Children[k]._Name.localName===n.localName))
                        && (n.uri == null || (this._Children[k]._Class === "element" && n.uri === this._Children[k]._Name.uri ))
                    )
                {
                    if (i !== undefined)
                    {
                        DeleteByIndex.call(this, i);
                    }

                    i = k;
                }
            }

            if (i !== undefined)
            {
                Replace.call(this, i, c);
            }

            return this;
        };

        /**
         *
         *
         *    @param XML value
         *    @returns XML
         */
        XML.prototype.setChildren = function (value)
        {
            this.Put("*", value);
            return this;
        };

        /**
         *
         *
         *    @param String name
         *    @returns void
         */
        XML.prototype.setLocalName = function (name)
        {
            if ((",comment,text,").indexOf("," + this._Class + ",") > -1)
            {
                return null;
            }

            this._Name.localName = name instanceof QName ? name.localName : ToString(name);
        };

        /**
         *
         *
         *    @param QName | String name
         *    @returns null
         */
        XML.prototype.setName = function (name)
        {
            if ((",comment,text,").indexOf("," + this._Class + ",") > -1)
            {
                return null;
            }

            if (name instanceof QName && name.uri == null)
            {
                name = name.localName;
            }

            var n = QName(name);

            if (this._Class === "processing-instruction")
            {
                n.uri = "";
            }

            this._DefaultNamespace = new Namespace(n.prefix, n.uri);

            this._Name = n;

            if (this._Class === "attribute")
            {
                if (this._Parent)
                {
                    AddInScopeNamespace.call(this._Parent, this._DefaultNamespace);
                }
            }
            else if (this._Class === "element")
            {
                AddInScopeNamespace.call(this, this._DefaultNamespace);
            }
            else if ((",comment,text,processing-instruction,").indexOf("," + this._Class + ",") > -1)
            {
                return null;
            }

            this._Name = new QName(this._DefaultNamespace, this._Name.localName);

            return null;
        };

        /**
         *
         *
         *    @param Namespace | String ns
         *    @returns null
         */
        XML.prototype.setNamespace = function (ns)
        {
            //processing-instruction,
            if ((",comment,text,").indexOf("," + this._Class + ",") > -1)
            {
                return null;
            }

            this._DefaultNamespace = Namespace(ns);

            this._Name = new QName(this._DefaultNamespace, this._Name.localName);

            if (this._Class === "attribute")
            {
                if (this._Parent)
                {
                    AddInScopeNamespace.call(this._Parent, this._DefaultNamespace);
                }
            }
            else if (this._Class === "element")
            {
                AddInScopeNamespace.call(this, this._DefaultNamespace);
            }

            return null;
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XML.prototype.text = function ()
        {
            var list = new XMLList(), i = 0, l = this._Children.length;
            list._TargetObject = this;
            list._TargetProperty = null;

            for (; i < l; ++i)
            {
                if (this._Children[i]._Class === "text")
                {
                    list.Append(this._Children[i]);
                }
            }

            return list;
        };

        /**
         *
         *
         *    @returns String
         */
        XML.prototype.toString = function ()
        {
            return ToString(this);
        };

        /**
         *
         *
         *    @returns String
         */
        XML.prototype.toXMLString = function ()
        {
            return ToXMLString(this);
        };

        /**
         *
         *
         *    @returns XML
         */
        XML.prototype.valueOf = function ()
        {
            return this;
        };

        /**
         *
         *
         *
         *    @access private
         *    @param String | QName PropertyName
         *    @param XML | String Value
         *    @returns null
         *    @throws TypeError
         */
        XML.prototype.Put = function (PropertyName, Value)
        {
            if (parseInt(PropertyName)+"" == PropertyName)
            {
                throw new TypeError();
            }

            if ((",text,comment,processing-instruction,attribute,").indexOf("," + this._Class + ",") > -1)
            {
                return null;
            }

            var c = (!(Value instanceof XML) || (",text,attribute,").indexOf("," + Value._Class+",") > -1)
                    ? ToString(Value)
                    : DeepCopy.call(Value),
                n = ToXMLName(PropertyName),
                s, i, l, a = null, primitiveAssign, k;

            if (n instanceof AttributeName)
            {
                if (!isXMLName(n._Name))
                {
                    return false;
                }

                if (c instanceof XMLList)
                {
                    if (c._Children.length === 0)
                    {
                        c = "";
                    }
                    else
                    {
                        s = ToString(c[0]);

                        for (i = 1, l = c._Children.length; i < l; ++i)
                        {
                            s += " " + ToString(c[i]);
                        }

                        c = s;
                    }
                }
                else
                {
                    c = ToString(c);
                }

                for (i in this._Attributes)
                {
                    if (
                        (n._Name.localName === this._Attributes[i]._Name.localName)
                            && (n._Name.uri === null || n._Name.uri === this._Attributes[i]._Name.uri)
                        )
                    {
                        if (a == null)
                        {
                            a = this._Attributes[i];
                        }
                        else
                        {
                            this.Delete(this._Attributes[i]._Name);
                        }
                    }
                }

                if (a == null)
                {
                    a = new XML();
                    a._Parent = this;
                    a._Class = "attribute";
                    a._Name = n._Name.uri == null
                        ? new QName(new Namespace(), n._Name)
                        : new QName(new Namespace(n._Name.uri), n._Name.localName);

                    this._Attributes[(a._Name._Prefix ? a._Name._Prefix + ":" : "") + a._Name.localName] = a;

                    AddInScopeNamespace.call(this, GetNamespace(a._Name));
                }

                a._Value = c;

                return null;
            }

            if (!isXMLName(n) && n.localName != "*")
            {
                return null;
            }

            i = undefined;

            primitiveAssign = !(c instanceof XML) && n.localName != "*";

            for (k = 0, l = this._Children.length; k < l; ++k)
            {
                if (
                    (n.localName === "*" || (this._Children[k]._Class === "element" && this._Children[k]._Name.localName===n.localName))
                        &&
                        (n.uri == null || (this._Children[k]._Class === "element" && n.uri === this._Children[k]._Name.uri))
                    )
                {
                    if (i != undefined)
                    {
                        DeleteByIndex.call(this, ToString(i));
                    }
                    else
                    {
                        i = k;
                    }
                }
            }

            if (i == undefined)
            {
                i = this._Children.length;

                if (primitiveAssign)
                {
                    a = new XML();
                    a._Class = "element";
                    a._Parent = this;
                    a._Name = n.uri == null
                        ? new QName(GetDefaultNamespace(), n)
                        : new QName(n);

                    Replace.call(this, ToString(i), a);

                    AddInScopeNamespace.call(a, GetNamespace(a._Name));
                }
            }

            if (primitiveAssign)
            {
                s = ToString(c);

                if (s != "")
                {
                    Replace.call(this._Children[i], "0", s);
                }
            }
            else
            {
                Replace.call(this, ToString(i), c);
            }

            return null;
        };

        /**
         *
         *
         *
         *    @access private
         *    @param String | QName PropertyName
         *    @returns null
         *    @throws TypeError
         */
        XML.prototype.Delete = function (PropertyName)
        {
            if (parseInt(PropertyName)+"" == PropertyName)
            {
                throw new TypeError();
            }

            var n = ToXMLName(PropertyName), k, dp = 0, q = 0, l;

            if (n instanceof AttributeName)
            {
                for (k in this._Attributes)
                {
                    if (
                        (n._Name.localName === "*" || n._Name.localName === this._Attributes[k]._Name.localName)
                            &&
                            (n._Name.uri == null || n._Name.uri === this._Attributes[k]._Name.uri)
                        )
                    {
                        this._Attributes[k]._Parent = null;
                        try{
                            delete this._Attributes[k];
                        }catch(e){}
                    }
                }

                return true;
            }

            for (l = this._Children.length; q < l; ++q)
            {
                if (
                    (n.localName === "*" || (this._Children[q]._Class === "element" && this._Children[q]._Name.localName === n.localName))
                        &&
                        (n.uri == null || (this._Children[q]._Class === "element" && n.uri === this._Children[q]._Name.uri))
                    )
                {
                    DeleteByIndex.call(this, q);
                    ++dp;
                }
                else if (dp > 0)
                {
                    this._Children[q - dp] = this._Children[q];
                }
            }


            return true;
        };

        /**
         *
         *
         *
         *    @access private
         *    @param XML Value
         *    @returns Boolean
         */
        XML.prototype.Equals = function (Value)
        {
            if (!(Value instanceof XML))
            {
                return false;
            }
            if (this._Class !== Value._Class)
            {
                return false;
            }
            if (this._Children.length !== Value._Children.length)
            {
                return false;
            }
            if (this._Value !== Value._Value)
            {
                return false;
            }
            if (this._Name !== null)
            {
                if (Value._Name === null)
                {
                    return false;
                }
                if (Value._Name.localName !== this._Name.localName)
                {
                    return false;
                }
                if (Value._Name.uri !== this._Name.uri)
                {
                    return false;
                }
            }
            else if (Value._Name !== null)
            {
                return false;
            }

            if (count(this._Attributes) !== count(Value._Attributes))
            {
                return false;
            }

            var a, b, k, l;

            for (k in this._Attributes)
            {
                a = this._Attributes[k];

                b = Value._Attributes[k];

                if (!b || b._Name.localName !== a._Name.localName || b._Name.uri !== a._Name.uri || b._Value !== a._Value)
                {
                    return false;
                }
            }

            for (k = 0, l = this._Children.length; k < l; ++k)
            {
                a = this._Children[k];

                b = Value._Children[k];

                if (!arguments.callee.call(a, b))
                {
                    return false;
                }
            }

            return true;
        };

        //extensions

        /*
         * e4x.js
         *
         * A JavaScript library that implements the optional E4X features described in
         * ECMA-357 2nd Edition Annex A if they are not already implemented.
         *
         * 2010-03-13
         *
         * By Elijah Grey, http://eligrey.com
         * License: The X11/MIT license (see COPYING.md)
         *
         * Changes:
         *    By Sam Shull, http://samshull.blogspot.com
         *    Just a litlle simplifying for implementation
         */

        /*global document, XML, XMLList, DOMParser, XMLSerializer, XPathResult */

        /*jslint undef: true, nomen: true, eqeqeq: true, bitwise: true, regexp: true,
         newcap: true, immed: true, maxerr: 1000, maxlen: 90 */

        /**
         *
         *
         *
         */
        XML.prototype.domNode = function ()
        {
            return adoptNode(document, xmlToDomNode(this));
        };

        /**
         *
         *
         *
         */
        XML.prototype.domNodeList = function ()
        {
            if (this.length() < 0)
            {
                throw new Error();
            }

            return adoptNode(document, createDocumentFrom(this).documentElement).childNodes;
        };

        /**
         *
         *
         *
         */
        XML.prototype.xpath = function (xpathExp)
        {
            var res = new XMLList,
                i = 0, l = this.length(),
                xpr;

            if (l !== 1)
            {
                for (; i < l; ++i)
                {
                    res.Append(this[i].xpath(xpathExp));
                }

                return res;
            }

            xpr = evaluate(createDocumentFrom(this), xpathExp, this);

            for (l=xpr.length; i < l; ++i)
            {
                res.Append(ToXML(xpr[i]));
            }

            return res;
        };

        /**
         *
         *
         *
         */
        XML.prototype.transform = function (xslt, params)
        {
            if (!xslt instanceof XML)
            {
                throw new TypeError();
            }

            var doc, res, i, l = this.length(), c;

            if (l > 1)
            {
                res = new XMLList();
                for (i = 0; i < l; ++i)
                {
                    res.Append(this[i].transform(xslt, params));
                }
                return res;
            }

            return transform(this, xslt, params);
        };

        /**
         *
         *
         *    @returns XMLList
         */
        function XMLList ($string)
        {
            if (!(this instanceof XMLList))
            {
                return ToXMLList($string || "");
            }

            this._Class = "XMLList";

            this._Value = undefined;


            this._TargetObject = null;

            this._TargetProperty = null;

            this._Children = [];

            this[0] = null;

            if ($string)
            {
                var list = ToXMLList($string), i = 0, l = list._Children.length;
                this._Value = list._Value;

                for (;i < l; ++i)
                {
                    this._Children[i] = this[i] = list._Children[i];
                }
            }
        }

        /**
         *
         *
         *    @static
         *    @returns String
         *    @throws TypeError
         */
        XMLList.toString = function ()
        {
            return "function XMLList() {\n [native code] \n}";
        };

        XMLList.prototype = new XML();

        var ignore = {xpath:1,domNodeList:1,transform:1};

        for (p in XMLList.prototype)
        {
            if (ignore[p])
            {
                continue;
            }

            XMLList.prototype[p] = (function(p)
            {
                return function ()
                {
                    if (this._Children.length != 1)
                    {
                        throw new TypeError("cannot call " + p + " method on an XML list with " + this._Children.length + " elements");
                    }

                    return XML.prototype[p].apply(this[0], arguments);
                };
            })(p);
        }

        try{
            delete XMLList.prototype._Attributes;
            delete XMLList.prototype._InScopeNamespaces;
        }catch(e){}

        /**
         *
         *
         *    @param String | AttributeName attributeName
         *    @returns XMLList
         */
        XMLList.prototype.attribute = function (attributeName)
        {
            return GetList.call(this, ToAttributeName(attributeName));
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XMLList.prototype.attributes = function ()
        {
            return GetList.call(this, ToAttributeName("*"));
        };

        /**
         *
         *
         *    @param String | QName propertyName
         *    @returns XMLList
         */
        XMLList.prototype.child = function (propertyName)
        {
            var list = new XMLList(), i = 0, l = this._Children.length, r;
            list._TargetObject = this;

            for (; i < l; ++i)
            {
                r = this[i].child(propertyName);

                if (r._Children.length > 0)
                {
                    list.Append(r);
                }
            }

            return list;
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XMLList.prototype.children = function ()
        {
            return GetList.call(this, "*");
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XMLList.prototype.comments = function ()
        {
            var list = new XMLList(), i = 0, l = this._Children.length, r;
            list._TargetObject = this;

            for (; i < l; ++i)
            {
                if (this[i]._Class === "element")
                {
                    r = this[i].comments();

                    if (r._Children.length > 0)
                    {
                        list.Append(r);
                    }
                }
            }

            return list;
        };

        /**
         *
         *
         *    @param XML value
         *    @returns Boolean
         */
        XMLList.prototype.contains = function (value)
        {
            for (var i = 0, l = this._Children.length; i < l; ++i)
            {
                if (this[i] == value)
                {
                    return true;
                }
            }

            return false;
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XMLList.prototype.copy = function ()
        {
            return DeepCopyList.call(this);
        };

        /**
         *
         *
         *    @param String | QName name
         *    @returns XMLList
         */
        XMLList.prototype.descendants = function (name)
        {
            return DescendantsList.call(this, name || "*");
        };

        /**
         *
         *
         *    @param String | QName name
         *    @returns XMLList
         */
        XMLList.prototype.elements = function (name)
        {
            name = ToXMLName(name || "*");
            var list = new XMLList(), i = 0, l = this._Children.length, r;
            list._TargetObject = this;
            list._TargetProperty = name;

            for (; i < l; ++i)
            {
                if (this[i]._Class === "element")
                {
                    r = this[i].elements(name);

                    if (r._Children.length > 0)
                    {
                        list.Append(r);
                    }
                }
            }

            return list;
        };

        /**
         *
         *
         *    @param String name
         *    @returns Boolean
         */
        XMLList.prototype.hasOwnProperty = function (name)
        {
            return HasProperty.call(this, name)
                || (defaultXMLListProperties.indexOf("," + name + ",") === -1 && hasOwnProperty.call(this, name));
        };

        /**
         *
         *
         *    @returns Boolean
         */
        XMLList.prototype.hasComplexContent = function ()
        {
            if (this._Children.length === 0)
            {
                return false;
            }

            if (this._Children.length === 1)
            {
                return this[0].hasComplexContent();
            }

            for (var i = 0, l = this._Children.length; i < l; ++i)
            {
                if (this._Children[i]._Class === "element")
                {
                    return true;
                }
            }

            return false;
        };

        /**
         *
         *
         *    @returns Boolean
         */
        XMLList.prototype.hasSimpleContent = function ()
        {
            if (this._Children.length === 1)
            {
                return this[0].hasSimpleContent();
            }

            for (var i = 0, l = this._Children.length; i < l; ++i)
            {
                if (this._Children[i]._Class === "element")
                {
                    return false;
                }
            }

            return true;
        };

        /**
         *
         *
         *    @returns Number
         */
        XMLList.prototype.length = function ()
        {
            return this._Children.length;
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XMLList.prototype.normalize = function ()
        {
            for (var i = 0, l = this._Children.length; i < l;)
            {
                if (this[i]._Class === "element")
                {
                    this[i].normalize();
                    ++i;
                }
                else if (this[i]._Class === "text")
                {
                    while (i+1 < this._Children.length && this[i+1]._Class === "text")
                    {
                        this[i]._Value = (this[i]._Value || "") + (this[i+1]._Value || "");
                        this.Delete(i+1);
                    }

                    if (this[i]._Value.length === 0)
                    {
                        this.Delete(i);
                    }
                    else
                    {
                        ++i;
                    }
                }
                else
                {
                    ++i;
                }
            }

            return this;
        };

        /**
         *
         *
         *    @returns XML | undefined
         */
        XMLList.prototype.parent = function ()
        {
            if (this._Children.length === 0)
            {
                return undefined;
            }

            for (var parent = this[0]._Parent, i = 1, l = this._Children.length; i < l; ++i)
            {
                if (this[i]._Parent != parent)
                {
                    return undefined;
                }
            }

            return parent;
        };

        /**
         *
         *
         *    @param String | QName name
         *    @returns XMLList
         */
        XMLList.prototype.processingInstructions = function (name)
        {
            name = ToXMLName(name || "*");
            var list = new XMLList(), i = 0, l = this._Children.length, r;
            list._TargetObject = this;

            for (; i < l; ++i)
            {
                if (this[i]._Class === "element")
                {
                    r = this[i].processingInstructions(name);

                    if (r._Children.length > 0)
                    {
                        list.Append(r);
                    }
                }
            }

            return list;
        };

        /**
         *
         *
         *    @param String | Number name
         *    @returns Boolean
         */
        XMLList.prototype.propertyIsEnumerable = function (name)
        {
            return parseInt(name) > 0 && parseInt(name) < this._Children.length;
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XMLList.prototype.text = function ()
        {
            var list = new XMLList(), i = 0, l = this._Children.length, r;
            list._TargetObject = this;

            for (; i < l; ++i)
            {
                if (this[i]._Class === "element")
                {
                    r = this[i].text();

                    if (r._Children.length > 0)
                    {
                        list.Append(r);
                    }
                }
            }

            return list;
        };

        /**
         *
         *
         *    @returns String
         */
        XMLList.prototype.toString = function ()
        {
            return ToString(this);
        };

        /**
         *
         *
         *    @returns String
         */
        XMLList.prototype.toXMLString = function ()
        {
            return ToXMLString(this);
        };

        /**
         *
         *
         *    @returns XMLList
         */
        XMLList.prototype.valueOf = function ()
        {
            return this;
        };

        /**
         *
         *
         *
         *    @access private
         *    @param String | Number | QName PropertyName
         *    @param XML Value
         *    @param isElement
         *    @returns null
         */
        XMLList.prototype.Put = function (PropertyName, Value,isChildElement)
        {
            isChildElement = isChildElement !== undefined ? isChildElement : false;
            var i = parseInt(PropertyName), r, y, l, z, parent, c, j = 0, q, t;

            if (i+"" == PropertyName)
            {
                r = ResolveValue.call(this._TargetObject);
                /* Firefox doesn't do this
                 if (r == null)
                 {
                 return null;
                 }
                 */
                if (i >= this._Children.length)
                {
                    if (r instanceof XMLList)
                    {
                        if (r.length() != 1)
                        {
                            return null;
                        }

                        r = r[0];
                    }

                    /* Firefox doesn't do this
                     if (r._Class != "element")
                     {
                     return null;
                     }
                     */
                    y = new XML();
                    y._Parent = r;
                    y._Name = this._TargetProperty;
                    y._Attributes = {};

                    if (this._TargetProperty instanceof AttributeName)
                    {
                        if (!!r && Get.call(r, y._Name).length() > 0)
                        {
                            return null;
                        }

                        y._Class = "attribute";
                    }
                    else if (!isChildElement && (this._TargetProperty == null || this._TargetProperty.localName === "*"))
                    {
                        y._Name = null;
                        y._Class = "text";
                    }
                    else
                    {
                        y._Class = "element";
                    }

                    if (y._Class != "attribute")
                    {
                        if (r)
                        {
                            j = 0;

                            if (i > 0)
                            {
                                while (j < r._Children.length-1 && r[j] !== this[i-1])
                                {
                                    ++j;
                                }
                            }
                            else
                            {
                                j = r._Children.length - 1;
                            }

                            Insert.call(r, j+1, y);
                        }

                        if (Value instanceof XMLList)
                        {
                            y._Name = Value._TargetProperty;
                        }
                        else if (Value instanceof XML)
                        {
                            y._Name = Value._Name;
                        }
                    }

                    this.Append(y);
                }

                if (!(Value instanceof XML) || Value._Class === "text" || Value._Class === "attribute")
                {
                    Value = ToString(Value);
                }

                if (this[i]._Class === "attribute")
                {
                    z = ToAttributeName(this[i]._Name);
                    this[i]._Parent.Put(z, Value);
                    this[i] = this[i]._Parent.attribute(z)[0];
                }
                else if (Value instanceof XMLList)
                {
                    //shallow copy?
                    c = Value;
                    parent = this[i]._Parent;

                    if (parent)
                    {
                        q = this[i].childIndex();
                        Replace.call(parent, q, c);
                        for (j = 0, l = c._Children.length; j < l; ++j)
                        {
                            c._Children[j] = c[j] = parent._Children[q+j];
                        }
                    }

                    if (c._Children.length === 0)
                    {
                        for (j = i + 1, l = this._Children.length; j < l; ++j)
                        {
                            this._Children[j-1] = this[j-1] = this[j]
                        }
                    }
                    else
                    {
                        for (j = this._Children.length; j > i; --j)
                        {
                            z = ToString(j + c._Children.length - 1);
                            this._Children[z] = this[z] = this[j];
                        }
                    }

                    for (j = 0, l = c._Children.length; j < l; ++j)
                    {
                        this._Children[i+j] = this[i+j] = c[j];
                    }

                }
                else if (Value instanceof XML || (",text,comment,processing-instruction").indexOf("," + this[i]._Class+",") > -1)
                {
                    parent = !!this[i] && this[i]._Parent;

                    if(parent)
                    {
                        q = this[i].childIndex();
                        Replace.call(parent, q, Value);
                        Value = parent._Children[q];
                    }

                    if (toString.call(Value) === "[object String]")
                    {
                        t = ToXML(Value);
                        t._Parent = this;
                        this._Children[i] = this[i] = t;
                    }
                    else
                    {

                    }
                }
                else
                {
                    this.Append(XMLList(Value));
                }
            }
            /* Firefox doesn't do this
             else if (this.length() <= 1)
             {
             if (this.length() === 0)
             {
             r = ResolveValueList.call(this);

             if (r == null || r.length() != 1)
             {
             return null;
             }

             this.Append(r);
             }
             else
             {
             this[0].Put(PropertyName, Value);
             }
             }*/

            return null;
        };

        /**
         *
         *
         *
         *    @access private
         *    @param String | Number | QName PropertyName
         *    @returns null
         */
        XMLList.prototype.Delete = function (PropertyName)
        {
            var i = parseInt(PropertyName), parent, q, l;

            if (i+"" == PropertyName)
            {
                if (i >= this._Children.length)
                {
                    return true;
                }

                parent = this[i]._Parent;

                if (parent)
                {
                    if (this[i]._Class = "attribute")
                    {
                        parent.Delete(ToAttributeName(this[i]._Name));
                    }
                    else
                    {
                        DeleteByIndex.call(parent, this[i].childIndex());
                    }
                }

                try{
                    this._Children.splice(PropertyName,1);
                    delete this[PropertyName];
                }catch(e){}

                for (q = i + 1, l = this._Children.length; q < l; ++q)
                {
                    this._Children[q-1] = this[q-1] = this[q];
                }
                return true;
            }
            /* Firefox won't do this
             for (q = 0, l = this._Children.length; q < l; ++q)
             {
             if (this[q]._Class === "element")
             {
             this[q].Delete(PropertyName);
             }
             }
             */
            return true;
        };

        /**
         *
         *
         *
         *    @access private
         *    @param XML Value
         *    @returns null
         */
        XMLList.prototype.Append = function (Value)
        {
            if (!(Value instanceof XML))
            {
                return null;
            }

            var i = this._Children.length, n = 1, j = 0;

            if (Value instanceof XMLList)
            {
                n = Value._Children.length;

                if (n == 0)
                {
                    return null;
                }

                this._TargetObject = Value._TargetObject;
                this._TargetProperty = Value._TargetProperty;

                for (;j < n; ++j)
                {
                    this._Children[i+j] = this[i+j] = Value[j];
                }
            }
            else
            {
                this._Children[i] = this[i] = Value;
            }

            return null;
        };

        /**
         *
         *
         *
         *    @access private
         *    @param XML Value
         *    @returns Boolean
         */
        XMLList.prototype.Equals = function (Value)
        {
            if (Value == undefined && this._Children.length === 0)
            {
                return true;
            }
            else if (Value instanceof XMLList && Value._Children.length === this._Children.length)
            {
                for (var i = 0, l = this._Children.length; i < l; ++i)
                {
                    if (!this[i].Equals(Value[i]))
                    {
                        return false;
                    }
                }
            }
            else if (this._Children.length === 1)
            {
                return this[0].Equals(Value);
            }

            return false;
        };

        /**
         *
         *
         *
         *    @access private
         *    @returns XMLList
         */
        function ResolveValueList ()
        {
            if (this._Children.length > 0)
            {
                return this;
            }

            if (this._TargetObject == null
                || this._TargetProperty == null
                || this._TargetProperty instanceof AttributeName
                || this._TargetProperty.localName === "*"
                )
            {
                return null;
            }

            var base = ResolveValue.call(this._TargetObject), target;

            if (base == null)
            {
                return null;
            }

            target = Get.call(base, this._TargetProperty);

            if (target._Children.length === 0)
            {
                if (base instanceof XMLList && base._Children.length > 1)
                {
                    return null;
                }

                base.Put(this._TargetProperty, "");

                target = Get.call(base, this._TargetProperty);
            }

            return target;
        };

        /**
         *
         *
         *    @param String | Namespace | QName prefix
         *    @param String uri
         *    @returns Namespace
         *    @throws TypeError
         */
        function Namespace (prefix, uri)
        {
            if (!(this instanceof Namespace))
            {
                return prefix && prefix instanceof Namespace
                    ? prefix
                    : new Namespace(prefix, uri);
            }

            if (uri === undefined && prefix === undefined)
            {
                this.prefix = "";
                this.uri = "";
            }
            else if (uri === undefined)
            {
                uri = prefix;
                prefix = undefined;

                if (uri instanceof Namespace)
                {
                    this.prefix = uri.prefix;
                    this.uri = uri.uri;
                }
                else if (uri instanceof QName && uri.uri !== null)
                {
                    this.uri = uri.uri;
                }
                else
                {
                    this.uri = ToString(uri);

                    if (this.uri == "")
                    {
                        this.prefix = "";
                    }
                }
            }
            else
            {
                if (uri instanceof QName)
                {
                    this.uri = uri.uri;
                }
                else
                {
                    this.uri = ToString(uri);
                }

                if (this.uri === "")
                {
                    if (prefix === undefined || ToString(prefix) === "")
                    {
                        this.prefix = "";
                    }
                    else
                    {
                        throw new TypeError("cannot define the prefix for an empty uri");
                    }
                }
                else if (prefix === undefined)
                {
                    this.prefix = undefined;
                }
                else
                {
                    this.prefix = ToString(prefix);
                }
            }
        }

        /**
         *
         *
         *    @var String
         */
        Namespace.prototype.prefix = undefined;

        /**
         *
         *
         *    @var String
         */
        Namespace.prototype.uri = undefined;

        /**
         *
         *
         *    @returns String
         */
        Namespace.prototype.toString = function ()
        {
            return this.uri;
        };

        /**
         *
         *
         *    @param Namespace | String | QName NameSpace
         *    @param String
         *    @returns QName
         */
        function QName (NameSpace, Name)
        {
            if (!(this instanceof QName))
            {
                return NameSpace instanceof QName
                    ? NameSpace
                    : new QName(NameSpace, Name);
            }

            if (Name === undefined)
            {
                Name = NameSpace;
                NameSpace = undefined;
            }

            if (Namespace instanceof QName)
            {
                if (Name === undefined)
                {
                    Name = Name.localName;
                }
            }

            Name = Name === undefined || Name === null
                ? ""
                : ToString(Name);

            if (NameSpace === undefined)
            {
                NameSpace = Name === "*" ? null : GetDefaultNamespace();
            }

            this.localName = Name;

            if (NameSpace == null)
            {
                this.uri = null;
            }
            else
            {
                NameSpace = Namespace(NameSpace);
                this.uri = NameSpace.uri;
                this._Prefix = NameSpace.prefix;
            }
        }

        /**
         *
         *
         *    @var String
         */
        QName.prototype.localName = undefined;

        /**
         *
         *
         *    @var String
         */
        QName.prototype.uri = undefined;

        /**
         *
         *
         *    @param Object InScopeNamespaces
         *    @returns Namespace
         *    @throws TypeError
         */
        function GetNamespace (q, InScopeNamespaces)
        {
            if(!q)
                 return new Namespace();
            if (q.uri === null)
            {
                throw new TypeError();
            }

            InScopeNamespaces = InScopeNamespaces || {};

            var ns, p;

            for (p in InScopeNamespaces)
            {
                if (q.uri === InScopeNamespaces[p].uri)
                {
                    ns = InScopeNamespaces[p];

                    if (!!q._Prefix && q._Prefix === ns.prefix)
                    {
                        return ns;
                    }
                }
            }

            if (!ns)
            {
                ns = !!q._Prefix
                    ? new Namespace(q._Prefix, q.uri)
                    : new Namespace(q.uri);
            }

            return ns;
        };

        /**
         *
         *
         *    @returns String
         */
        QName.prototype.toString = function ()
        {
            return !!this.uri
                ? this.uri + "::" + this.localName
                : this.localName;
        };

        /**
         *
         *
         *    @param AttributeName | QName | String name
         *    @returns AttributeName
         */
        function AttributeName (name)
        {
            if (!(this instanceof AttributeName))
            {
                return name && (name instanceof AttributeName || name instanceof QName)
                    ? name
                    : new AttributeName(name);
            }

            this._Name = name instanceof QName
                ? name
                : new QName(new Namespace(GetDefaultNamespace()||undefined), name);
        }

        /**
         *
         *
         *    @var String
         */
        AttributeName.prototype.localName = undefined;

        /**
         *
         *
         *    @var String
         */
        AttributeName.prototype.uri = undefined;

        /**
         *
         *
         *    @returns String
         */
        AttributeName.prototype.toString = function ()
        {
            return "@" + (!!this._Name.uri
                ? this._Name.uri + "::" + this._Name.localName
                : this._Name.localName
                );
        };

        /**
         *
         *
         *
         */
        function AnyName ()
        {

        }

        /**
         *
         *
         *    @param mixed value
         *    @returns Boolean
         */
        function isXMLName (value)
        {
            if (value instanceof AttributeName)
            {
                return true;
            }

            try{
                var q = QName(value);
            }
            catch (e)
            {
                return false;
            }

            return !!q.localName && (!!q.localName.match(/^[\w\-]+$/i) || !!q.localName.match(/^[\w\-\:]+$/i));
        }

        /**
         *
         *
         *    @param mixed value
         *    @returns String
         *    @throws TypeError
         */
        function ToString (value)
        {
            var i = 0, l, s;

            if (value instanceof XMLList)
            {
                if (value.hasSimpleContent())
                {
                    s = "";

                    for (l = value.length(); i < l; ++i)
                    {
                        if (value[i]._Class != "comment" && value[i]._Class != "processing-instruction")
                        {
                            s += ToString(value[i]);
                        }
                    }

                    return s;
                }

                return ToXMLString(value);
            }
            else if (value instanceof XML)
            {
                if (value._Class === "attribute" || value._Class === "text")
                {
                    return value._Value;
                }

                if (value.hasSimpleContent())
                {
                    s = "";

                    for (l = value.length(); i < l; ++i)
                    {
                        if (value.child(i)._Class != "comment" && value.child(i)._Class != "processing-instruction")
                        {
                            s += ToString(value.child(i));
                        }
                    }

                    return s;
                }

                return ToXMLString(value);
            }
            else if (value instanceof AttributeName)
            {
                return "@" + ToString(value._Name);
            }

            return value === null || value === undefined
                ? ""
                : "" + value;
        }

        /**
         *
         *
         *    @param XML input
         *    @param Object AncestorNamespaces
         *    @param Number IndentLevel
         *    @returns String
         */
        function ToXMLString (input, AncestorNamespaces, IndentLevel)
        {
            var s = "", p = 0, temp, temp2, namespace, namespaceUnion,
                namespaceDeclarations = {}, attrAndNamespaces, prefixes, defaultSet;

            AncestorNamespaces = AncestorNamespaces || {};

            IndentLevel = Number(IndentLevel || 0);

            if (input instanceof XMLList)
            {
                temp = input.hasSimpleContent();

                temp2 = input.length();

                for (; p < temp2; ++p)
                {
                    if (p > 0)
                    {
                        s += "\r\n";
                    }

                    s += ToXMLString(input[p], AncestorNamespaces);
                }

                return s;
            }
            else if (input instanceof XML)
            {
                if (XML.prettyPrinting)
                {
                    //s += new Array(IndentLevel+1).join(" ");
                    for (; p < IndentLevel; ++p)
                    {
                        s += " ";
                    }
                }

                switch (input._Class)
                {
                    case "text":
                        return s + EscapeElementValue(XML.prettyPrinting ? trim(input._Value) : input._Value);

                    case "attribute":
                        return s + EscapeAttributeValue(input._Value);

                    case "comment":
                        return s + "<!--" + input._Value + "-->";

                    case "processing-instruction":
                        return s + "<?" + input._Name.localName + " " + input._Value + "?>";

                    default:
                        namespaceUnion = extend({}, AncestorNamespaces);

                        for (p in input._InScopeNamespaces)
                        {
                            temp = input._InScopeNamespaces[p];

                            if (!AncestorNamespaces[(temp.prefix||"")] || AncestorNamespaces[(temp.prefix||"")].uri != temp.uri)
                            {
                                namespaceUnion[(temp.prefix||"")] = namespaceDeclarations[(temp.prefix||"")] = new Namespace(temp);
                            }
                        }

                        if (!input._Parent)
                        {
                            namespaceUnion[(input._DefaultNamespace.prefix||"")] =
                                namespaceDeclarations[(input._DefaultNamespace.prefix||"")] = new Namespace(input._DefaultNamespace);
                        }
                        /*
                         //firefox doesn't do this
                         for (p in input._Attributes)
                         {
                         namespace = GetNamespace(input._Attributes[p]._Name, namespaceUnion);

                         if (namespace.prefix === undefined)
                         {
                         do {
                         namespace.prefix = !namespaceUnion[""] ? "" : newPrefix();
                         }
                         while(!!namespaceUnion[namespace.prefix]);
                         }

                         namespaceUnion[namespace.prefix] = namespaceDeclarations[namespace.prefix] = namespace;
                         }
                         */

                        s += "<";

                        namespace = GetNamespace(input._Name, namespaceDeclarations);

                        if (namespace.prefix)
                        {
                            s += namespace.prefix + ":";
                        }

                        s += input._Name ? input._Name.localName : "";

                        attrAndNamespaces = extend({}, input._Attributes, namespaceDeclarations);

                        defaultSet = false;

                        for (p in attrAndNamespaces)
                        {
                            s += " ";

                            if (attrAndNamespaces[p] instanceof XML)
                            {
                                temp = GetNamespace(attrAndNamespaces[p]._Name, AncestorNamespaces);

                                if (temp.prefix === undefined && !namespaceUnion[""])
                                {
                                    do{
                                        temp.prefix = !namespaceUnion[""] ? "" : newPrefix();
                                    }
                                    while(namespaceUnion[temp.prefix]);

                                    namespaceUnion[temp.prefix] = namespaceDeclarations[temp.prefix] = new Namespace(temp);
                                }

                                if (temp.prefix)
                                {
                                    s += temp.prefix + ":";
                                }

                                s += attrAndNamespaces[p].localName() + '="' + EscapeAttributeValue(attrAndNamespaces[p]._Value) + '"';
                            }
                            else
                            {
                                s += "xmlns";

                                if (!attrAndNamespaces[p].prefix && defaultSet)
                                {
                                    do{
                                        attrAndNamespaces[p].prefix = newPrefix();
                                    }
                                    while(!!namespaceUnion[attrAndNamespaces[p].prefix]);

                                    namespaceUnion[attrAndNamespaces[p].prefix] =
                                        namespaceDeclarations[attrAndNamespaces[p].prefix] =
                                            new Namespace(attrAndNamespaces[p]);

                                    s += ":" + attrAndNamespaces[p].prefix;
                                }
                                else if (!attrAndNamespaces[p].prefix && !defaultSet)
                                {
                                    defaultSet = true;
                                }
                                else if (attrAndNamespaces[p].prefix)
                                {
                                    s += ":" + attrAndNamespaces[p].prefix;
                                }

                                s += '="' + EscapeAttributeValue(attrAndNamespaces[p].uri) + '"';
                            }
                        }

                        temp = input._Children.length;

                        if (!temp)
                        {
                            return s + "/>";
                        }

                        s += ">";

                        temp2 = temp > 1 || (temp == 1 && input._Class !== "text");

                        names = (!!XML.prettyPrinting && !!temp2) ? IndentLevel + Number(XML.prettyIndent) : 0;

                        prefixes = !!XML.prettyPrinting && !!temp2;

                        for (p = 0; p < temp; ++p)
                        {
                            if (prefixes)
                            {
                                s += "\r\n";
                            }

                            if (input._Children[p])
                            {
                                s += ToXMLString(input._Children[p], namespaceDeclarations, names);
                            }
                        }

                        if (prefixes)
                        {
                            s += "\r\n";

                            for (p = 0; p < IndentLevel; ++p)
                            {
                                s += " ";
                            }
                        }

                        return s + "</" + (namespace.prefix ? namespace.prefix + ":" : "") + input._Name.localName + ">";
                }

                throw new TypeError();
            }
            else if (input === undefined || input === null)
            {
                throw new TypeError();
            }
            else if (toString.call(input) === "[object Object]")
            {
                return EscapeElementValue( input.valueOf().toString() );
            }

            return ToString(input);
        }

        /**
         *
         *
         *    @param mixed s
         *    @returns XML
         *    @throws SyntaxError | TypeError
         */
        function ToXML (s)
        {
            var x, div;

            if (s instanceof XMLList)
            {
                if (s.length() == 1)
                {
                    return s[0];
                }
            }
            else if (s instanceof XML)
            {
                return s;
            }
            else if ((",string,number,boolean,").indexOf("," + typeof(s)+",") > -1)
            {

                div = parse('<parent xmlns="' + GetDefaultNamespace() + '">' + s + '</parent>');

                x = ToXML(div.documentElement)

                if (x)
                {
                    if (x.length() == 0)
                    {
                        return new XML();
                    }
                    else if (x.length() == 1)
                    {
                        x.child(0)._Parent = null;
                        return x.child(0);
                    }
                }


                throw new SyntaxError("Failed to convert DOM object to XML");
            }
            else if (s.nodeType && !isNaN(s.nodeType))
            {
                return MapInfoItemToXML(s);
            }

            throw new TypeError();
        }

        /**
         *
         *
         *    @param DOMNode i
         *    @returns XML
         *    @throws TypeError
         */
        function MapInfoItemToXML (i,n)
        {
            var x = new XML(), temp, temp2, temp3, isNScheck = isNSDef, j, l, xmlChild;

            x._Parent = null;

            switch (i.nodeType)
            {
                case TEXT_NODE:
                case CDATA_SECTION_NODE:
                    x._Class = "text";
                    x._Value = "";
                    temp = i;

                    while (temp && (temp.nodeType === TEXT_NODE || temp.nodeType === CDATA_SECTION_NODE))
                    {
                        x._Value += temp.textContent || temp.text || temp.data;
                        temp = temp.nextSibling;
                        if (n && (n.n || n.n == 0))
                        {
                            ++n.n;
                        }
                    }


                    if (XML.ignoreWhitespace && !x._Value.match(/\S+/))
                    {
                        return null;
                    }

                    return x;

                    break;
                case COMMENT_NODE:
                    if (XML.ignoreComments)
                    {
                        return null;
                    }

                    x._Class = "comment";
                    x._Value = i.data || i.textContent || i.text || "";

                    return x;

                    break;
                case PROCESSING_INSTRUCTION_NODE:
                    if (XML.ignoreProcessingInstructions)
                    {
                        return null;
                    }

                    x._Class = "processing-instruction";
                    x._Name = new QName("", i.target);
                    x._Value = i.data || i.textContent || i.text || "";

                    return x;

                    break;
                case ATTRIBUTE_NODE:
                    x._Class = "attribute";

                    temp = i.nodeName.match(/(([\w\-]+):)?([\w\-]+)/);

                    if ( temp[1] )
                    {
                        temp2 = undefined;

                        if (!!i.lookupNamespace)
                        {
                            temp2 = i.lookupNamespace(temp[2]);
                        }
                        else
                        {
                            temp3 = n;//hack for ie -- stupid ie

                            while (!temp2 && !!temp3 && !!temp3.attributes)
                            {
                                for (j = 0, l = temp3.attributes.length; j < l; ++j)
                                {
                                    if (temp3.attributes[j].nodeName == ("xmlns:" + temp[2]))
                                    {
                                        temp2 = temp3.attributes[j].value || temp3.attributes[j].nodeValue;
                                        break;
                                    }
                                }

                                temp3 = temp3.parentNode;
                            }
                        }
                        x._DefaultNamespace = new Namespace( temp[2], temp2 );
                        x._Name = new QName( x._DefaultNamespace, temp[3] );
                    }
                    else
                    {
                        temp2 = undefined;

                        if (!!i.lookupNamespace)
                        {
                            temp2 = i.lookupNamespace("");
                        }
                        else
                        {
                            temp3 = i.parentNode;

                            while (!temp2 && !!temp3 && !!temp3.attributes)
                            {
                                for (j = 0, l = temp3.attributes.length; j < l; ++j)
                                {
                                    if (temp3.attributes[j].nodeName == "xmlns")
                                    {
                                        temp2 = temp3.attributes[j].value || temp3.attributes[j].nodeValue;
                                        break;
                                    }
                                }

                                temp3 = temp3.parentNode;
                            }
                        }

                        x._DefaultNamespace = new Namespace("", temp2);
                        x._Name = new QName( x._DefaultNamespace, temp[3] );
                    }

                    x._Value = i.value || null;

                    return x;

                    break;
                case ELEMENT_NODE:
                    x._Class = "element";
                    temp = i.nodeName.match(/(([\w\-]+):)?([\w\-]+)/);

                    if ( temp[1] )
                    {
                        temp2 = undefined;

                        if (!!i.lookupNamespace)
                        {
                            temp2 = i.lookupNamespace(temp[2]);
                        }
                        else
                        {
                            temp3 = i;

                            while (!temp2 && !!temp3 && !!temp3.attributes)
                            {
                                for (j = 0, l = temp3.attributes.length; j < l; ++j)
                                {
                                    if (temp3.attributes[j].nodeName == ("xmlns:" + temp[2]))
                                    {
                                        temp2 = temp3.attributes[j].value || temp3.attributes[j].nodeValue;
                                        break;
                                    }
                                }

                                temp3 = temp3.parentNode;
                            }
                        }
                        x._DefaultNamespace = new Namespace( temp[2], temp2 );
                        x._Name = new QName( x._DefaultNamespace, temp[3] );
                    }
                    else
                    {
                        temp2 = undefined;

                        if (!!i.lookupNamespace)
                        {
                            temp2 = i.lookupNamespace("");
                        }
                        else
                        {
                            temp3 = i;

                            while (!temp2 && !!temp3 && !!temp3.attributes)
                            {
                                for (j = 0, l = temp3.attributes.length; j < l; ++j)
                                {
                                    if (temp3.attributes[j].nodeName == "xmlns")
                                    {
                                        temp2 = temp3.attributes[j].value || temp3.attributes[j].nodeValue;
                                        break;
                                    }
                                }

                                temp3 = temp3.parentNode;
                            }
                        }

                        x._DefaultNamespace = new Namespace("", temp2);

                        x._Name = new QName( x._DefaultNamespace, temp[3] );
                    }

                    for (temp = 0, temp2 = i.attributes.length; temp < temp2; ++temp)
                    {
                        if (temp3 = isNScheck.exec(i.attributes[temp].nodeName))
                        {
                            x._InScopeNamespaces[temp3[1]] = new Namespace(temp3[1], i.attributes[temp].value);
                        }
                        else if (i.attributes[temp].nodeName === "xmlns")
                        {
                            x._InScopeNamespaces[""] = new Namespace(i.attributes[temp].value);
                        }
                        else
                        {
                            x._Attributes[i.attributes[temp].nodeName] = MapInfoItemToXML(i.attributes[temp], i);
                        }
                    }

                    j = 0;
                    xmlChild = 0;
                    temp = i.childNodes.length;

                    while (j < temp)
                    {
                        n = {n:-1};
                        if (temp3 = MapInfoItemToXML(i.childNodes[j], n))
                        {
                            //even though it is not written this way in the spec
                            //this is how it works in Firefox
                            x._Children[xmlChild] = temp3;
                            x._Children[xmlChild]._Parent = x;

                            if (temp3._Class === "text" && n.n > 0)
                            {
                                j = j + n.n;
                            }

                            ++xmlChild;
                        }

                        ++j;
                    }

                    x._Value = i.textContent || i.text || i.data || "";

                    x._Length = xmlChild;

                    return x;

                    break;
                case DOCUMENT_NODE:
                //firefox won't do this
                //return MapInfoItemToXML(document.documentElement);
                //break;
                case ENTITY_REFERENCE_NODE:
                    throw new TypeError();
                    break;
                default:
                    return null;
                    break;
            }
        }

        /**
         *
         *
         *    @param mixed s
         *    @returns XML
         *    @throws TypeError
         */
        function ToXMLList (s)
        {
            var e,x,list,i,l;

            if (s instanceof XMLList)
            {
                return s;
            }
            else if (s instanceof XML)
            {
                list = new XMLList();
                list._Children[0] = list[0] = s;
                list._TargetObject = x._Parent;
                list._TargetProperty = x._Name;

                return list;
            }
            else if ((",string,boolean,number,").indexOf("," + typeof(s)+",") === -1)
            {
                throw new TypeError();
            }

            e = parse('<parent xmlns="' + GetDefaultNamespace() + '">' + s + '</parent>');
            x = ToXML(e.documentElement);
            list = new XMLList();
            i = 0;
            l = x._Children.length;

            list._TargetObject = null;

            for (;i < l; ++i)
            {
                x._Children[i]._Parent = null;
                list._Children[i] = list[i] = x._Children[i];
            }


            return list;
        }

        /**
         *
         *
         *    @param mixed s
         *    @returns XMLList
         *    @throws TypeError
         */
        function ToAttributeName (s)
        {
            if (s === "*")
            {
                return new AttributeName(new QName(null, "*"));
            }
            else if (s instanceof QName)
            {
                return new AttributeName(s);
            }
            else if (s instanceof AttributeName)
            {
                return s;
            }

            switch (typeof(s))
            {
                case "undefined":
                case "null":
                case "boolean":
                case "number":
                    throw new TypeError();
                    break;
                case "string":
                    return new AttributeName(new QName(null, (s + "").replace(/^@/,"")));
                    break;
                case "object":
                    return new AttributeName(new QName(null, ToString(s)));
                    break;
            }
        }

        /**
         *
         *
         *    @param mixed s
         *    @returns QName | AttributeName
         *    @throws TypeError
         */
        function ToXMLName (s)
        {
            if (s instanceof QName || s instanceof AttributeName)
            {
                return s;
            }
            else if (s === "*")
            {
                return new QName("*");
            }

            switch (typeof(s))
            {
                case "undefined":
                case "null":
                case "boolean":
                case "number":
                    throw new TypeError();
                    break;
                case "string":
                    if (s.charAt(0) === "@")
                    {
                        return ToAttributeName( s.substr(0) );
                    }

                    return new QName(s);

                    break;
                case "object":
                    return ToXMLName( ToString(s) );
                    break;
            }
        }

        /**
         *
         *
         *    @returns String
         */
        function GetDefaultNamespace ()
        {
            return !!defaultNamespace && defaultNamespace.uri || "";
        }

        /**
         *
         *
         *    @param String s
         *    @returns String
         */
        function EscapeElementValue (s)
        {
            return ((s||"")+"").replace(/./g, function (c)
            {
                switch (c)
                {
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;";
                    case "&":
                        return "&amp;";
                    default:
                        return c;
                }
            });
        }

        /**
         *
         *
         *
         *    @param String s
         *    @returns String
         */
        function EscapeAttributeValue (s)
        {
            return ((s||"")+"").replace(/./g, function (c)
            {
                switch (c)
                {
                    case '"':
                        return "&quot;";
                    case "<":
                        return "&lt;";
                    case ">":
                        return "&gt;";
                    case "&":
                        return "&amp;";
                    case "\r":
                        return "&#xA;";
                    case "\n":
                        return "&#xD;";
                    case "\t":
                        return "&#x9;";
                    default:
                        return c;
                }
            });
        }

        /**
         *
         *
         *    @access private
         *    @param String | QName PropertyName
         *    @returns XMLList
         */
        function Get (PropertyName)
        {
            if (this instanceof XMLList)
            {
                return GetList.call(this, PropertyName);
            }

            if (parseInt(PropertyName)+"" == PropertyName)
            {
                return GetList.call(ToXMLList(this), PropertyName );
            }

            var n = ToXMLName(PropertyName),
                list = new XMLList(), p, l;

            list._TargetObject = this;
            list._TargetProperty = n;

            if (n instanceof AttributeName)
            {
                for (p in this._Attributes)
                {
                    if (
                        (n._Name.localName === "*" || n._Name.localName === this._Attributes[p]._Name.localName)
                            &&
                            (n._Name.uri == null || n._Name.uri === this._Attributes[p]._Name.uri)
                        )
                    {
                        list.Append(this._Attributes[p]);
                    }
                }
            }
            else
            {
                for (p = 0, l = this._Children.length; p < l; ++p)
                {
                    if (
                        (n.localName === "*" || (this._Children[p]._Class === "element" && this._Children[p]._Name.localName === n.localName))
                            &&
                            (n.uri == null || (this._Children[p]._Class === "element" && n.uri === this._Children[p]._Name.uri))
                        )
                    {
                        list.Append(this._Children[p]);
                    }
                }
            }

            return list;
        }

        /**
         *
         *
         *
         *    @access private
         *    @param String | QName P
         *    @returns Boolean
         */
        function HasProperty (P)
        {
            if (this instanceof XMLList)
            {
                return HasPropertyList.call(this, P);
            }

            if (parseInt(P) == P)
            {
                return P == "0";
            }

            var n = ToXMLName(P), k, l;

            if (n instanceof AttributeName)
            {
                for (k in this._Attributes)
                {
                    if (
                        (
                            n._Name.localName === "*" || n._Name.localName === this._Attributes[k]._Name.localName
                            ) &&
                            (
                                n._Name.uri == null || n._Name.uri === this._Attributes[k]._Name.uri
                                )
                        )
                    {
                        return true;
                    }
                }

                return false;
            }

            for (k = 0, l = this._Children.length; k < l; ++k)
            {
                if (
                    (n.localName === "*" || (this._Children[k]._Class === "element" && this._Children[k]._Name.localName === n.localName))
                        &&
                        (n.uri == null || (this._Children[k]._Class === "element" && n.uri === this._Children[k]._Name.uri))
                    )
                {
                    return true;
                }
            }

            return false;
        }

        /**
         *
         *
         *
         *    @access private
         *    @param String | QName PropertyName
         *    @returns Boolean
         *    @throws TypeError
         */
        function DeleteByIndex (PropertyName)
        {
            var i = parseInt(PropertyName);//, q = i + 1, l = this._Children.length;

            if (i == PropertyName)
            {
                if (!!this._Children[i])
                {
                    this._Children[i]._Parent = null;

                    this._Children[i] = null;

                    this._Children.splice(i, 1);

                    /*
                     for (;q < l;++q)
                     {
                     this._Children[q-1] = this._Children[q];
                     }
                     */
                }

                return true;
            }

            throw new TypeError();
        }

        /**
         *
         *
         *
         *    @access private
         *    @returns XML
         */
        function DeepCopy ()
        {
            if (this instanceof XMLList)
            {
                return DeepCopyList.call(this);
            }

            var y = new XML(), i, l;//, c, t;

            y._Class = this._Class;
            y._Name = this._Name;
            y._DefaultNamespace = this._DefaultNamespace ? new Namespace(this._DefaultNamespace) : null;
            y._Value = this._Value;
            y._Parent = null;

            for (i in this._InScopeNamespaces)
            {
                y._InScopeNamespaces[i] = new Namespace(this._InScopeNamespaces.prefix, this._InScopeNamespaces.uri);
            }

            for (l in this._Attributes)
            {
                //y._Attributes[i] = arguments.callee.call(this._Attributes[i]);
                //not part of the spec
                y._Attributes[i] = this._Attributes[l].copy();
                y._Attributes[i]._Parent = y;
            }

            for (i = 0, l = this._Children.length; i < l; ++i)
            {
                y._Children[i] = this._Children[i].copy();
                y._Children[i]._Parent = y;
            }

            return y;
        }

        /**
         *
         *
         *
         *    @access private
         *    @returns XML
         */
        function ResolveValue ()
        {
            if (this instanceof XMLList)
            {
                return ResolveValueList.call(this);
            }
            return this instanceof XML ? this : null;
        }

        /**
         *
         *
         *
         *    @access private
         *    @param String | QName PropertyName
         *    @returns XMLList
         */
        function Descendants (PropertyName)
        {
            if (this instanceof XMLList)
            {
                return DescendantsList.call(this, PropertyName);
            }

            var n = ToXMLName(PropertyName),
                list = new XMLList(),
                k, l, dq;

            list._TargetObject = null;

            if (n instanceof AttributeName)
            {
                for (k in this._Attributes)
                {
                    if (
                        (n._Name.localName === "*" || n._Name.localName === this._Attributes[k]._Name.localName)
                            &&
                            (n._Name.uri == null || n._Name.uri === this._Attributes[k]._Name.uri)
                        )
                    {
                        list.Append(this._Attributes[k]);
                    }
                }
            }

            for (k = 0, l = this._Children.length; k < l; ++k)
            {
                if (
                    (n.localName === "*" || (this._Children[k]._Class === "element" && this._Children[k]._Name.localName === n.localName))
                        &&
                        (n.uri == null || (this._Children[k]._Class === "element" && n.uri === this._Children[k]._Name.uri))
                    )
                {
                    list.Append(this._Children[k]);
                }

                dq = this._Children[k].descendants(n);

                if (dq.length() > 0)
                {
                    list.Append(dq);
                }
            }

            return list;
        }

        /**
         *
         *
         *
         *    @access private
         *    @param String | QName PropertyName
         *    @param XML Value
         *    @returns null
         *    @throws TypeError | Error
         */
        function Insert (PropertyName, Value)
        {
            if ((",text,comment,processing-instruction,attribute,").indexOf("," + this._Class + ",") > -1)
            {
                return false;
            }

            var i = parseInt(PropertyName), n, j;

            if (i+"" != PropertyName)
            {
                throw new TypeError("'" + i + "' != '" + PropertyName + "'");
            }

            if (Value === this || indexOf("," + this, Value.descendants("*")) > -1)
            {
                throw new Error();
            }

            n = Value.length();

            for (j = this._Children.length - 1; j >= i; --j)
            {
                this._Children[ j + n ] = this._Children[j];
            }


            if (Value instanceof XMLList)
            {
                for (j = 0; j < n; ++j)
                {
                    Value[j]._Parent = this;
                    this._Children[i + j] = Value[j];
                }
            }
            else
            {
                Replace.call(this, i, Value);
            }

            return null;
        }

        /**
         *
         *
         *
         *    @access private
         *    @param String | QName PropertyName
         *    @param XML Value
         *    @returns null
         *    @throws TypeError
         */
        function Replace (PropertyName, Value)
        {
            if ((",text,comment,processing-instruction,attribute,").indexOf("," + this._Class + ",") > -1)
            {
                return null;
            }

            var i = parseInt(PropertyName), t;

            if (i+"" != PropertyName)
            {
                throw new TypeError("'" + i + "' != '" + PropertyName + "'");
            }

            if (i >= this._Children.length)
            {
                PropertyName = this._Children.length;
            }

            if (Value instanceof XMLList)
            {
                DeleteByIndex.call(this, PropertyName);
                Insert.call(this, PropertyName, Value);
            }
            else if (Value instanceof XML
                && Value._Class === "element"
                && (",element,comment,processing-instruction,text").indexOf("," + Value._Class + ",") > -1
                )
            {
                Value._Parent = this;

                if (this._Children[PropertyName])
                {
                    this._Children[PropertyName]._Parent = null;
                }

                this._Children[PropertyName] = Value;
            }
            else
            {
                t = new XML();
                t._Parent = this;
                t._Value = ToString(Value);

                if (this._Children[PropertyName])
                {
                    this._Children[PropertyName]._Parent = null;
                }

                this._Children[PropertyName] = t;
            }
        };

        /**
         *
         *
         *
         *    @access private
         *    @param String | Namespace NameSpace
         *    @returns null
         */
        function AddInScopeNamespace (NameSpace)
        {
            if ((",text,comment,processing-instruction,attribute,").indexOf("," + this._Class + ",") > -1)
            {
                return null;
            }

            var match = null, p;

            if (NameSpace.prefix == "" && this._Name.uri == "")
            {
                return null;
            }

            for (p in this._InScopeNamespaces)
            {
                if (NameSpace.prefix === this._InScopeNamespaces[p].prefix)
                {
                    match = this._InScopeNamespaces[p];
                }
            }

            if (match && match.uri != NameSpace.uri)
            {
                this._InScopeNamespaces[match.prefix] = null;
                try{
                    delete this._InScopeNamespaces[match.prefix];
                }catch(e){}
            }

            this._InScopeNamespaces[NameSpace.prefix] = NameSpace;

            if (this._Name.prefix === NameSpace.prefix)
            {
                this._Name.prefix = undefined;
            }

            for (p in this._Attributes)
            {
                if (this._Attributes[p]._Name.prefix = NameSpace.prefix)
                {
                    this._Attributes[p]._Name.prefix = undefined;
                }
            }

            //do this in order to ensure namespace integrity
            /*match = parse(this.toXMLString());
             this._Node = !!this._Node.parentNode
             ? this._Node.parentNode.replaceChild(match.documentElement, this._Node)
             : match;*/
        }

        /**
         *
         *
         *    @access private
         *    @param String | Number name
         *    @returns Boolean
         */
        function HasPropertyList (name)
        {
            if (ToString( parseInt(name) ) === name)
            {
                return parseInt(name) < this._Children.length;
            }

            for (var i = 0, l = this._Children.length; i < l; ++i)
            {
                if (this[i]._Class === "element" && this[i].hasOwnProperty(name))
                {
                    return true;
                }
            }

            return false;
        }

        /**
         *
         *
         *
         *    @access private
         *    @param String | Number | QName PropertyName
         *    @returns XMLList
         */
        function GetList (PropertyName)
        {
            if (parseInt(PropertyName)+"" == PropertyName)
            {
                return this[PropertyName];
            }

            var list = new XMLList(), i = 0, l = this._Children.length, temp;
            list._TargetObject = this;
            list._TargetProperty = PropertyName;

            for (;i < l; ++i)
            {
                if (this._Children[i]._Class === "element")
                {
                    temp = Get.call(this._Children[i], PropertyName);

                    if (temp._Children.length > 0)
                    {
                        list.Append(temp);
                    }
                }
            }

            return list;
        }

        /**
         *
         *
         *
         *    @access private
         *    @returns XMLList
         */
        function DeepCopyList ()
        {
            var list = new XMLList(), i = 0, l = this._Children.length;

            list._TargetObject = this._TargetObject;
            list._TargetProperty = this._TargetProperty;
            list._Class = this._Class;
            list._Value = this._Value;

            for (;i < l; ++i)
            {
                list.Append(DeepCopy.call(this[i]));
            }

            return list;
        }

        /**
         *
         *
         *
         *    @access private
         *    @param String | QName PropertyName
         *    @returns XMLList
         */
        function DescendantsList (PropertyName)
        {
            var list = new XMLList(), i = 0, l = this._Children.length, temp;

            for (; i < l; ++i)
            {
                if (this[i]._Class === "element")
                {
                    if ((temp = Descendants.call(this[i], "*")) && temp.length() > 0)
                    {
                        list.Append(temp);
                    }
                }
            }

            return list;
        }

        /**
         *    http://blog.stevenlevithan.com/archives/faster-trim-javascript
         *
         *
         *    @param String s
         *    @returns String
         */
        function trim (str)
        {
            if(!str)
                return str;
            var    str = str.replace(/^\s\s*/, ""),
                ws = /\s/,
                i = str.length;
            while (ws.test(str.charAt(--i)));
            return str.slice(0, i + 1);
        }

        /**
         *    Generates a prefix for a QName that is not already
         *    a property of the optional argument
         *
         *    @param Object prefixes
         *    @returns String
         */
        function newPrefix (prefixes)
        {
            prefixes = prefixes || {};

            var num = Math.random()
                .toString()
                .substr(2)
                .replace(/.{2}/g, function (a)
                {
                    a = Number(a);
                    return (a > 90 ? 90 : (a < 65 ? 65 : a)) + "";
                });

            num = String.fromCharCode(
                Number(num.substr(0, 2)) & 0xFF,
                Number(num.substr(2, 2)) & 0xFF,
                Number(num.substr(4, 2)) & 0xFF,
                Number(num.substr(6, 2)) & 0xFF,
                Number(num.substr(8, 2)) & 0xFF,
                Number(num.substr(10, 2)) & 0xFF
            ).toLowerCase();

            while (num in prefixes)
            {
                num = arguments.callee(prefixes);
            }

            return num;
        }

        /**
         *
         *
         *    @param String str
         *    @returns DOMNode
         *    @throws SyntaxError
         */
        function parse (str)
        {
            var xmlDoc, success = true;

            if (isActiveXSupported("Microsoft.XMLDOM")) //Internet Explorer
            {
                try{
                    xmlDoc                      = new ActiveXObject("Microsoft.XMLDOM");
                    xmlDoc.async                = 'false';
                    xmlDoc.preserveWhiteSpace   = true;
                    xmlDoc.resolveExternals     = false;
                    xmlDoc.validateOnParse         = false;
                    xmlDoc.setProperty('ProhibitDTD', false);
                    success = xmlDoc.loadXML(str);
                }catch(e){}
            }
            else
            {
                try{//Firefox, Mozilla, Opera, etc.
                    xmlDoc = new DOMParser();
                    xmlDoc = xmlDoc.parseFromString(str, "text/xml");
                }catch(e){}
            }

            if (!success || !xmlDoc || xmlDoc.documentElement.nodeName == "parsererror")
            {
                throw new SyntaxError(!!xmlDoc && xmlDoc.documentElement.childNodes[0].nodeValue);
            }

            return xmlDoc;
        }

        /**
         *
         *
         *    @param Object obj
         *    @returns Number
         */
        function count (obj)
        {
            if ("__count__" in obj)
            {
                return obj.__count__;
            }

            var i = 0, k;

            for (k in obj)
            {
                if (obj.hasOwnProperty(k))
                {
                    ++i;
                }
            }

            return i;
        }

        /**
         *
         *
         *    @param Object obj
         *    @param XMLList list
         *    @returns Number
         */
        function indexOf (obj, list)
        {
            for (var i = 0, l = list.length(); i < l; ++i)
            {
                if (list[i].Equals(obj))
                {
                    return i;
                }
            }

            return -1;
        }

        /**
         *
         *
         *    @param mixed obj
         *    @param mixed ...
         *    @returns mixed
         */
        function extend (obj)
        {
            for (var p, i = 1, l = arguments.length; i < l; ++i)
            {
                for (p in arguments[i])
                {
                    obj[p] = arguments[i][p];
                }
            }

            return obj;
        }

        /**
         *
         *
         *
         */
        function createDocumentFrom (xml)
        {
            return parse(xml.length() == 1 ? xml.toXMLString() : "<x>" + xml.toXMLString() + "</x>");
        }

        /**
         *
         *
         *
         */
        function xmlToDomNode (xml)
        {
            switch (xml.nodeKind())
            {
                case "element":
                    return createDocumentFrom(xml).documentElement;

                case "text":
                    return xmlDoc.createTextNode(xml.toString());

                case "comment":
                    return xmlDoc.createComment(xml.toString().slice(4, -3));

                case "processing-instruction":
                    return xmlDoc.createProcessingInstruction(
                        xml.localName(),
                        xml.toString().slice(2, -2).replace(piName, "")
                    );

                case "attribute":
                    return createAttributeNS(xml);
            }
            return null;
        }

        function adoptNode (doc, node)
        {
            if (!!doc.adoptNode)
            {
                return doc.adoptNode(node);
            }

            var b = doc.documentElement || doc.body;
            return b.removeChild(b.appendChild(node));
        }

        function evaluate (doc, expr, xml)
        {
            var res, l, n = "";

            if (!!doc.evaluate)
            {
                res = doc.evaluate(
                    expr,
                    doc,
                    doc.createNSResolver(doc),
                    XPathResult.ORDERED_NODE_ITERATOR_TYPE,
                    null
                );

                l = [];

                while(n = res.iterateNext())
                {
                    l[l.length] = n;
                }

                return l;
            }

            if ("setProperty" in doc){

                res = allNamespaces(xml);

                if (count(res))
                {
                    for (l in res)
                    {
                        n += " xmlns:" + l + '="' + EscapeAttributeValue(res[l]) + '"';
                    }

                    doc.setProperty('SelectionNamespaces', n.substr(1));
                }

                doc.setProperty("SelectionLanguage", "XPath");
            }

            return isActiveXSupported("Microsoft.XMLDOM") && doc.selectNodes(expr);
        }

        function isActiveXSupported(type) {
            try {
                new ActiveXObject(type);
                return true;
            } catch (e) {
                return false;
            }
        }

        function allNamespaces (xml, un)
        {
            var ns = un || {},
                i = 0,
                c = xml.children(),
                l = c.length(),
                n = un == undefined
                    ? inscope(xml)
                    : xml._InScopeNamespaces,
                p;

            for (;i < l; ++i)
            {
                ns = arguments.callee(c[i], ns);
            }

            for (p in n)
            {
                if (n[p].prefix)
                {
                    ns[n[p].prefix] = n[p].uri;
                }
            }

            return ns;
        }

        function inscope (xml)
        {
            var ns = {},
                i = 0,
                n = xml.inScopeNamespaces(),
                l = n.length;

            for (;i < l; ++i)
            {
                if (n[i].prefix)
                {
                    ns[n[i].prefix] = n[i].uri;
                }
            }

            return ns;
        }

        function createAttributeNS (xml)
        {
            var ns = xml.namespace(),
                node = !!xmlDoc.createAttributeNS
                    ? xmlDoc.createAttributeNS(ns.uri, xml.localName())
                    : xmlDoc.createAttribute((ns.prefix ? ns.prefix + ":" : "" ) + xml.localName());

            node.nodeValue = xml.toString();
            return node;
        }

        function transform (xml, style, params)
        {
            var xsl, res, i = 0, l = (params||[]).length;

            if (!window.XSLTProcessor)
            {
                //TODO: Need to create a way to set parameters on an IE stylesheet
                //XSLProcessor
                //http://msdn.microsoft.com/en-us/library/ms757015%28v=VS.85%29.aspx
                //http://msdn.microsoft.com/en-us/library/ms763679%28VS.85%29.aspx
                //http://msdn.microsoft.com/en-us/library/ms754594%28v=VS.85%29.aspx

                res = createDocumentFrom(xml).transformNode(createDocumentFrom(style));

                return !!res && ToXML(res) || null;
            }

            xsl = new XSLTProcessor();

            xsl.importStyleSheet(createDocumentFrom(style));

            for (; i < l; ++i)
            {
                res = params[i];
                xsl.setParameter(res.namespaceURI, res.localName, res.value);
            }

            res = xsl.transformToDocument(createDocumentFrom(doc))

            return !!res && ToXML(res) || null;
        }

        for (p in XML.prototype)
        {
            defaultXMLPrototype += p + ",";
        }

        for (p in XMLList.prototype)
        {
            defaultXMLListPrototype += p + ",";
        }

        /**
         *
         *
         *
         */
        window.XML              = XML;
        window.XMLList          = XMLList;
        window.QName            = QName;
        window.Namespace        = Namespace;
        window.isXMLName        = isXMLName;
        window.AttributeName    = AttributeName;

    })();
}
(function(){var h=this;
function aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==
b&&"undefined"==typeof a.call)return"object";return b}function k(a){return"string"==typeof a}function ba(a,b,c){return a.call.apply(a.bind,arguments)}function ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function da(a,b,c){da=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ba:ca;return da.apply(null,arguments)}function ea(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function m(a){var b=n;function c(){}c.prototype=b.prototype;a.u=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.t=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};var fa=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ga(a,b){return a<b?-1:a>b?1:0};var q;a:{var ha=h.navigator;if(ha){var ia=ha.userAgent;if(ia){q=ia;break a}}q=""}function r(a){return-1!=q.indexOf(a)};var s=Array.prototype,ja=s.indexOf?function(a,b,c){return s.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(k(a))return k(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},t=s.forEach?function(a,b,c){s.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=k(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ka=s.filter?function(a,b,c){return s.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=k(a)?
a.split(""):a,l=0;l<d;l++)if(l in g){var p=g[l];b.call(c,p,l,a)&&(e[f++]=p)}return e},u=s.reduce?function(a,b,c,d){d&&(b=da(b,d));return s.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;t(a,function(c,g){e=b.call(d,e,c,g,a)});return e},la=s.some?function(a,b,c){return s.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=k(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
function ma(a,b){var c;a:{c=a.length;for(var d=k(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:k(a)?a.charAt(c):a[c]}function na(a){return s.concat.apply(s,arguments)}function oa(a,b,c){return 2>=arguments.length?s.slice.call(a,b):s.slice.call(a,b,c)};var pa=r("Opera")||r("OPR"),v=r("Trident")||r("MSIE"),qa=r("Gecko")&&-1==q.toLowerCase().indexOf("webkit")&&!(r("Trident")||r("MSIE")),ra=-1!=q.toLowerCase().indexOf("webkit");function sa(){var a=h.document;return a?a.documentMode:void 0}
var ta=function(){var a="",b;if(pa&&h.opera)return a=h.opera.version,"function"==aa(a)?a():a;qa?b=/rv\:([^\);]+)(\)|;)/:v?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:ra&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(q))?a[1]:"");return v&&(b=sa(),b>parseFloat(a))?String(b):a}(),ua={};
function va(a){if(!ua[a]){for(var b=0,c=fa(String(ta)).split("."),d=fa(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",l=d[f]||"",p=RegExp("(\\d*)(\\D*)","g"),x=RegExp("(\\d*)(\\D*)","g");do{var C=p.exec(g)||["","",""],X=x.exec(l)||["","",""];if(0==C[0].length&&0==X[0].length)break;b=ga(0==C[1].length?0:parseInt(C[1],10),0==X[1].length?0:parseInt(X[1],10))||ga(0==C[2].length,0==X[2].length)||ga(C[2],X[2])}while(0==b)}ua[a]=0<=b}}
var wa=h.document,xa=wa&&v?sa()||("CSS1Compat"==wa.compatMode?parseInt(ta,10):5):void 0;!qa&&!v||v&&v&&9<=xa||qa&&va("1.9.1");v&&va("9");function ya(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function za(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(v&&!(v&&9<=xa)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Aa(a,b):!c&&ya(e,b)?-1*Ba(a,b):!d&&ya(f,a)?Ba(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:
a.ownerDocument||a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(h.Range.START_TO_END,d)}function Ba(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Aa(d,a)}function Aa(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};function w(a,b,c){this.a=a;this.b=b||1;this.d=c||1};function Ca(a){this.b=a;this.a=0}function Da(a){a=a.match(Ea);for(var b=0;b<a.length;b++)Fa.test(a[b])&&a.splice(b,1);return new Ca(a)}var Ea=RegExp("\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),Fa=/^\s/;function y(a,b){return a.b[a.a+(b||0)]}function z(a){return a.b[a.a++]}function Ga(a){return a.b.length<=a.a};function A(a,b){this.h=a.toLowerCase();this.c=b?b.toLowerCase():"http://www.w3.org/1999/xhtml"}A.prototype.a=function(a){var b=a.nodeType;return 1!=b&&2!=b?!1:"*"!=this.h&&this.h!=a.nodeName.toLowerCase()?!1:this.c==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};A.prototype.d=function(){return this.h};A.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.h};function B(a,b){this.f=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function Ha(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}B.prototype.a=function(a){return null===this.b||this.b==a.nodeType};B.prototype.d=function(){return this.f};
B.prototype.toString=function(){var a="Kind Test: "+this.f;null===this.c||(a+=D(this.c));return a};function Ia(a){switch(a.nodeType){case 1:return ea(Ja,a);case 9:return Ia(a.documentElement);case 11:case 10:case 6:case 12:return Ka;default:return a.parentNode?Ia(a.parentNode):Ka}}function Ka(){return null}function Ja(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?Ja(a.parentNode,b):null};var E=v&&!(v&&9<=xa),La=v&&!(v&&8<=xa);function F(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function Ma(a,b){var c=La&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new F(b,a,b.nodeName,c)};function G(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(E&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),E&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function H(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}La&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function I(a,b,c,d,e){return(E?Na:Oa).call(null,a,b,k(c)?c:null,k(d)?d:null,e||new J)}
function Na(a,b,c,d,e){if(a instanceof A||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;a=Pa(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],l=0;b=f[l++];)H(b,c,d)&&g.push(b);f=g}for(l=0;b=f[l++];)"*"==a&&"!"==b.tagName||K(e,b);return e}Qa(a,b,c,d,e);return e}
function Oa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!v?(b=b.getElementsByName(d),t(b,function(b){a.a(b)&&K(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),t(b,function(b){b.className==d&&a.a(b)&&K(e,b)})):a instanceof B?Qa(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.d()),t(b,function(a){H(a,c,d)&&K(e,a)}));return e}
function Ra(a,b,c,d,e){var f;if((a instanceof A||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=Pa(a);if("*"!=g&&(f=ka(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=ka(f,function(a){return H(a,c,d)}));t(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||K(e,a)});return e}return Sa(a,b,c,d,e)}function Sa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.a(b)&&K(e,b);return e}
function Qa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.a(b)&&K(e,b),Qa(a,b,c,d,e)}function Pa(a){if(a instanceof B){if(8==a.b)return"!";if(null===a.b)return"*"}return a.d()};function J(){this.b=this.a=null;this.i=0}function Ta(a){this.d=a;this.a=this.b=null}function Ua(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f=null,g=0;c&&d;){var f=c.d,l=d.d;f==l||f instanceof F&&l instanceof F&&f.a==l.a?(f=c,c=c.a,d=d.a):0<za(c.d,d.d)?(f=d,d=d.a):(f=c,c=c.a);(f.b=e)?e.a=f:a.a=f;e=f;g++}for(f=c||d;f;)f.b=e,e=e.a=f,g++,f=f.a;a.b=e;a.i=g;return a}function Va(a,b){var c=new Ta(b);c.a=a.a;a.b?a.a.b=c:a.a=a.b=c;a.a=c;a.i++}
function K(a,b){var c=new Ta(b);c.b=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.i++}function Wa(a){return(a=a.a)?a.d:null}function Xa(a){return(a=Wa(a))?G(a):""}function L(a,b){return new Ya(a,!!b)}function Ya(a,b){this.d=a;this.b=(this.c=b)?a.b:a.a;this.a=null}function M(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.c?b.b:b.a;return c.d};function n(a){this.g=a;this.b=this.e=!1;this.d=null}function D(a){return"\n  "+a.toString().split("\n").join("\n  ")}function Za(a,b){a.e=b}function $a(a,b){a.b=b}function N(a,b){var c=a.a(b);return c instanceof J?+Xa(c):+c}function O(a,b){var c=a.a(b);return c instanceof J?Xa(c):""+c}function P(a,b){var c=a.a(b);return c instanceof J?!!c.i:!!c};function Q(a,b,c){n.call(this,a.g);this.c=a;this.f=b;this.k=c;this.e=b.e||c.e;this.b=b.b||c.b;this.c==ab&&(c.b||c.e||4==c.g||0==c.g||!b.d?b.b||b.e||4==b.g||0==b.g||!c.d||(this.d={name:c.d.name,l:b}):this.d={name:b.d.name,l:c})}m(Q);
function R(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof J&&c instanceof J){e=L(b);for(d=M(e);d;d=M(e))for(b=L(c),f=M(b);f;f=M(b))if(a(G(d),G(f)))return!0;return!1}if(b instanceof J||c instanceof J){b instanceof J?e=b:(e=c,c=b);e=L(e);b=typeof c;for(d=M(e);d;d=M(e)){switch(b){case "number":d=+G(d);break;case "boolean":d=!!G(d);break;case "string":d=G(d);break;default:throw Error("Illegal primitive type for comparison.");}if(a(d,c))return!0}return!1}return e?"boolean"==typeof b||"boolean"==typeof c?
a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}Q.prototype.a=function(a){return this.c.j(this.f,this.k,a)};Q.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+D(this.f);return a+=D(this.k)};function bb(a,b,c,d){this.a=a;this.p=b;this.g=c;this.j=d}bb.prototype.toString=function(){return this.a};var cb={};function S(a,b,c,d){if(cb.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new bb(a,b,c,d);return cb[a.toString()]=a}
S("div",6,1,function(a,b,c){return N(a,c)/N(b,c)});S("mod",6,1,function(a,b,c){return N(a,c)%N(b,c)});S("*",6,1,function(a,b,c){return N(a,c)*N(b,c)});S("+",5,1,function(a,b,c){return N(a,c)+N(b,c)});S("-",5,1,function(a,b,c){return N(a,c)-N(b,c)});S("<",4,2,function(a,b,c){return R(function(a,b){return a<b},a,b,c)});S(">",4,2,function(a,b,c){return R(function(a,b){return a>b},a,b,c)});S("<=",4,2,function(a,b,c){return R(function(a,b){return a<=b},a,b,c)});
S(">=",4,2,function(a,b,c){return R(function(a,b){return a>=b},a,b,c)});var ab=S("=",3,2,function(a,b,c){return R(function(a,b){return a==b},a,b,c,!0)});S("!=",3,2,function(a,b,c){return R(function(a,b){return a!=b},a,b,c,!0)});S("and",2,2,function(a,b,c){return P(a,c)&&P(b,c)});S("or",1,2,function(a,b,c){return P(a,c)||P(b,c)});function db(a,b){if(b.a.length&&4!=a.g)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");n.call(this,a.g);this.c=a;this.f=b;this.e=a.e;this.b=a.b}m(db);db.prototype.a=function(a){a=this.c.a(a);return eb(this.f,a)};db.prototype.toString=function(){var a;a="Filter:"+D(this.c);return a+=D(this.f)};function fb(a,b){if(b.length<a.o)throw Error("Function "+a.h+" expects at least"+a.o+" arguments, "+b.length+" given");if(null!==a.n&&b.length>a.n)throw Error("Function "+a.h+" expects at most "+a.n+" arguments, "+b.length+" given");a.s&&t(b,function(b,d){if(4!=b.g)throw Error("Argument "+d+" to function "+a.h+" is not of type Nodeset: "+b);});n.call(this,a.g);this.f=a;this.c=b;Za(this,a.e||la(b,function(a){return a.e}));$a(this,a.r&&!b.length||a.q&&!!b.length||la(b,function(a){return a.b}))}m(fb);
fb.prototype.a=function(a){return this.f.j.apply(null,na(a,this.c))};fb.prototype.toString=function(){var a="Function: "+this.f;if(this.c.length)var b=u(this.c,function(a,b){return a+D(b)},"Arguments:"),a=a+D(b);return a};function gb(a,b,c,d,e,f,g,l,p){this.h=a;this.g=b;this.e=c;this.r=d;this.q=e;this.j=f;this.o=g;this.n=void 0!==l?l:g;this.s=!!p}gb.prototype.toString=function(){return this.h};var hb={};
function T(a,b,c,d,e,f,g,l){if(hb.hasOwnProperty(a))throw Error("Function already created: "+a+".");hb[a]=new gb(a,b,c,d,!1,e,f,g,l)}T("boolean",2,!1,!1,function(a,b){return P(b,a)},1);T("ceiling",1,!1,!1,function(a,b){return Math.ceil(N(b,a))},1);T("concat",3,!1,!1,function(a,b){return u(oa(arguments,1),function(b,d){return b+O(d,a)},"")},2,null);T("contains",2,!1,!1,function(a,b,c){b=O(b,a);a=O(c,a);return-1!=b.indexOf(a)},2);T("count",1,!1,!1,function(a,b){return b.a(a).i},1,1,!0);
T("false",2,!1,!1,function(){return!1},0);T("floor",1,!1,!1,function(a,b){return Math.floor(N(b,a))},1);T("id",4,!1,!1,function(a,b){function c(a){if(E){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return ma(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=O(b,a).split(/\s+/),f=[];t(d,function(a){a=c(a);!a||0<=ja(f,a)||f.push(a)});f.sort(za);var g=new J;t(f,function(a){K(g,a)});return g},1);
T("lang",2,!1,!1,function(){return!1},1);T("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.d},0);T("local-name",3,!1,!0,function(a,b){var c=b?Wa(b.a(a)):a.a;return c?c.localName||c.nodeName.toLowerCase():""},0,1,!0);T("name",3,!1,!0,function(a,b){var c=b?Wa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);T("namespace-uri",3,!0,!1,function(){return""},0,1,!0);
T("normalize-space",3,!1,!0,function(a,b){return(b?O(b,a):G(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);T("not",2,!1,!1,function(a,b){return!P(b,a)},1);T("number",1,!1,!0,function(a,b){return b?N(b,a):+G(a.a)},0,1);T("position",1,!0,!1,function(a){return a.b},0);T("round",1,!1,!1,function(a,b){return Math.round(N(b,a))},1);T("starts-with",2,!1,!1,function(a,b,c){b=O(b,a);a=O(c,a);return 0==b.lastIndexOf(a,0)},2);T("string",3,!1,!0,function(a,b){return b?O(b,a):G(a.a)},0,1);
T("string-length",1,!1,!0,function(a,b){return(b?O(b,a):G(a.a)).length},0,1);T("substring",3,!1,!1,function(a,b,c,d){c=N(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?N(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=O(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);T("substring-after",3,!1,!1,function(a,b,c){b=O(b,a);a=O(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
T("substring-before",3,!1,!1,function(a,b,c){b=O(b,a);a=O(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);T("sum",1,!1,!1,function(a,b){for(var c=L(b.a(a)),d=0,e=M(c);e;e=M(c))d+=+G(e);return d},1,1,!0);T("translate",3,!1,!1,function(a,b,c,d){b=O(b,a);c=O(c,a);var e=O(d,a);a=[];for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);T("true",2,!1,!1,function(){return!0},0);function ib(a){n.call(this,3);this.c=a.substring(1,a.length-1)}m(ib);ib.prototype.a=function(){return this.c};ib.prototype.toString=function(){return"Literal: "+this.c};function jb(a){n.call(this,1);this.c=a}m(jb);jb.prototype.a=function(){return this.c};jb.prototype.toString=function(){return"Number: "+this.c};function kb(a,b){n.call(this,a.g);this.f=a;this.c=b;this.e=a.e;this.b=a.b;if(1==this.c.length){var c=this.c[0];c.m||c.c!=lb||(c=c.k,"*"!=c.d()&&(this.d={name:c.d(),l:null}))}}m(kb);function U(){n.call(this,4)}m(U);U.prototype.a=function(a){var b=new J;a=a.a;9==a.nodeType?K(b,a):K(b,a.ownerDocument);return b};U.prototype.toString=function(){return"Root Helper Expression"};function mb(){n.call(this,4)}m(mb);mb.prototype.a=function(a){var b=new J;K(b,a.a);return b};mb.prototype.toString=function(){return"Context Helper Expression"};
function nb(a){return"/"==a||"//"==a}kb.prototype.a=function(a){var b=this.f.a(a);if(!(b instanceof J))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.i;c++){var e=a[c],f=L(b,e.c.a),g;if(e.e||e.c!=ob)if(e.e||e.c!=pb)for(g=M(f),b=e.a(new w(g));null!=(g=M(f));)g=e.a(new w(g)),b=Ua(b,g);else g=M(f),b=e.a(new w(g));else{for(g=M(f);(b=M(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new w(g))}}return b};
kb.prototype.toString=function(){var a;a="Path Expression:"+D(this.f);if(this.c.length){var b=u(this.c,function(a,b){return a+D(b)},"Steps:");a+=D(b)}return a};function qb(a,b){this.a=a;this.b=!!b}
function eb(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=L(b),f=b.i,g,l=0;g=M(e);l++){var p=a.b?f-l:l+1;g=d.a(new w(g,p,f));if("number"==typeof g)p=p==g;else if("string"==typeof g||"boolean"==typeof g)p=!!g;else if(g instanceof J)p=0<g.i;else throw Error("Predicate.evaluate returned an unexpected type.");if(!p){p=e;g=p.d;var x=p.a;if(!x)throw Error("Next must be called at least once before remove.");var C=x.b,x=x.a;C?C.a=x:g.a=x;x?x.b=C:g.b=C;g.i--;p.a=null}}return b}
qb.prototype.toString=function(){return u(this.a,function(a,b){return a+D(b)},"Predicates:")};function V(a,b,c,d){n.call(this,4);this.c=a;this.k=b;this.f=c||new qb([]);this.m=!!d;b=this.f;b=0<b.a.length?b.a[0].d:null;a.b&&b&&(a=b.name,a=E?a.toLowerCase():a,this.d={name:a,l:b.l});a:{a=this.f;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.e||1==c.g||0==c.g){a=!0;break a}a=!1}this.e=a}m(V);
V.prototype.a=function(a){var b=a.a,c=null,c=this.d,d=null,e=null,f=0;c&&(d=c.name,e=c.l?O(c.l,a):null,f=1);if(this.m)if(this.e||this.c!=rb)if(a=L((new V(sb,new B("node"))).a(a)),b=M(a))for(c=this.j(b,d,e,f);null!=(b=M(a));)c=Ua(c,this.j(b,d,e,f));else c=new J;else c=I(this.k,b,d,e),c=eb(this.f,c,f);else c=this.j(a.a,d,e,f);return c};V.prototype.j=function(a,b,c,d){a=this.c.d(this.k,a,b,c);return a=eb(this.f,a,d)};
V.prototype.toString=function(){var a;a="Step:"+D("Operator: "+(this.m?"//":"/"));this.c.h&&(a+=D("Axis: "+this.c));a+=D(this.k);if(this.f.a.length){var b=u(this.f.a,function(a,b){return a+D(b)},"Predicates:");a+=D(b)}return a};function tb(a,b,c,d){this.h=a;this.d=b;this.a=c;this.b=d}tb.prototype.toString=function(){return this.h};var ub={};function W(a,b,c,d){if(ub.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new tb(a,b,c,!!d);return ub[a]=b}
W("ancestor",function(a,b){for(var c=new J,d=b;d=d.parentNode;)a.a(d)&&Va(c,d);return c},!0);W("ancestor-or-self",function(a,b){var c=new J,d=b;do a.a(d)&&Va(c,d);while(d=d.parentNode);return c},!0);
var lb=W("attribute",function(a,b){var c=new J,d=a.d();if("style"==d&&b.style&&E)return K(c,new F(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof B&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)E?f.nodeValue&&K(c,Ma(b,f)):K(c,f);else(f=e.getNamedItem(d))&&(E?f.nodeValue&&K(c,Ma(b,f)):K(c,f));return c},!1),rb=W("child",function(a,b,c,d,e){return(E?Ra:Sa).call(null,a,b,k(c)?c:null,k(d)?d:null,e||new J)},!1,!0);W("descendant",I,!1,!0);
var sb=W("descendant-or-self",function(a,b,c,d){var e=new J;H(b,c,d)&&a.a(b)&&K(e,b);return I(a,b,c,d,e)},!1,!0),ob=W("following",function(a,b,c,d){var e=new J;do for(var f=b;f=f.nextSibling;)H(f,c,d)&&a.a(f)&&K(e,f),e=I(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);W("following-sibling",function(a,b){for(var c=new J,d=b;d=d.nextSibling;)a.a(d)&&K(c,d);return c},!1);W("namespace",function(){return new J},!1);
var vb=W("parent",function(a,b){var c=new J;if(9==b.nodeType)return c;if(2==b.nodeType)return K(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&K(c,d);return c},!1),pb=W("preceding",function(a,b,c,d){var e=new J,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,l=f.length;g<l;g++){var p=[];for(b=f[g];b=b.previousSibling;)p.unshift(b);for(var x=0,C=p.length;x<C;x++)b=p[x],H(b,c,d)&&a.a(b)&&K(e,b),e=I(a,b,c,d,e)}return e},!0,!0);
W("preceding-sibling",function(a,b){for(var c=new J,d=b;d=d.previousSibling;)a.a(d)&&Va(c,d);return c},!0);var wb=W("self",function(a,b){var c=new J;a.a(b)&&K(c,b);return c},!1);function xb(a){n.call(this,1);this.c=a;this.e=a.e;this.b=a.b}m(xb);xb.prototype.a=function(a){return-N(this.c,a)};xb.prototype.toString=function(){return"Unary Expression: -"+D(this.c)};function yb(a){n.call(this,4);this.c=a;Za(this,la(this.c,function(a){return a.e}));$a(this,la(this.c,function(a){return a.b}))}m(yb);yb.prototype.a=function(a){var b=new J;t(this.c,function(c){c=c.a(a);if(!(c instanceof J))throw Error("Path expression must evaluate to NodeSet.");b=Ua(b,c)});return b};yb.prototype.toString=function(){return u(this.c,function(a,b){return a+D(b)},"Union Expression:")};function zb(a,b){this.a=a;this.b=b}function Ab(a){for(var b,c=[];;){Y(a,"Missing right hand side of binary expression.");b=Bb(a);var d=z(a.a);if(!d)break;var e=(d=cb[d]||null)&&d.p;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].p;)b=new Q(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new Q(c.pop(),c.pop(),b);return b}function Y(a,b){if(Ga(a.a))throw Error(b);}function Cb(a,b){var c=z(a.a);if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function Db(a){a=z(a.a);if(")"!=a)throw Error("Bad token: "+a);}function Eb(a){a=z(a.a);if(2>a.length)throw Error("Unclosed literal string");return new ib(a)}function Fb(a){var b=z(a.a),c=b.indexOf(":");if(-1==c)return new A(b);var d=b.substring(0,c);a=a.b(d);if(!a)throw Error("Namespace prefix not declared: "+d);b=b.substr(c+1);return new A(b,a)}
function Gb(a){var b,c=[],d;if(nb(y(a.a))){b=z(a.a);d=y(a.a);if("/"==b&&(Ga(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new U;d=new U;Y(a,"Missing next location step.");b=Hb(a,b);c.push(b)}else{a:{b=y(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":z(a.a);b=Ab(a);Y(a,'unclosed "("');Cb(a,")");break;case '"':case "'":b=Eb(a);break;default:if(isNaN(+b))if(!Ha(b)&&/(?![0-9])[\w]/.test(d)&&"("==y(a.a,1)){b=z(a.a);b=
hb[b]||null;z(a.a);for(d=[];")"!=y(a.a);){Y(a,"Missing function argument list.");d.push(Ab(a));if(","!=y(a.a))break;z(a.a)}Y(a,"Unclosed function argument list.");Db(a);b=new fb(b,d)}else{b=null;break a}else b=new jb(+z(a.a))}"["==y(a.a)&&(d=new qb(Ib(a)),b=new db(b,d))}if(b)if(nb(y(a.a)))d=b;else return b;else b=Hb(a,"/"),d=new mb,c.push(b)}for(;nb(y(a.a));)b=z(a.a),Y(a,"Missing next location step."),b=Hb(a,b),c.push(b);return new kb(d,c)}
function Hb(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==y(a.a))return d=new V(wb,new B("node")),z(a.a),d;if(".."==y(a.a))return d=new V(vb,new B("node")),z(a.a),d;var f;if("@"==y(a.a))f=lb,z(a.a),Y(a,"Missing attribute name");else if("::"==y(a.a,1)){if(!/(?![0-9])[\w]/.test(y(a.a).charAt(0)))throw Error("Bad token: "+z(a.a));c=z(a.a);f=ub[c]||null;if(!f)throw Error("No axis with name: "+c);z(a.a);Y(a,"Missing node name")}else f=rb;c=y(a.a);if(/(?![0-9])[\w]/.test(c.charAt(0)))if("("==
y(a.a,1)){if(!Ha(c))throw Error("Invalid node type: "+c);c=z(a.a);if(!Ha(c))throw Error("Invalid type name: "+c);Cb(a,"(");Y(a,"Bad nodetype");e=y(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=Eb(a);Y(a,"Bad nodetype");Db(a);c=new B(c,g)}else c=Fb(a);else if("*"==c)c=Fb(a);else throw Error("Bad token: "+z(a.a));e=new qb(Ib(a),f.a);return d||new V(f,c,e,"//"==b)}
function Ib(a){for(var b=[];"["==y(a.a);){z(a.a);Y(a,"Missing predicate expression.");var c=Ab(a);b.push(c);Y(a,"Unclosed predicate expression.");Cb(a,"]")}return b}function Bb(a){if("-"==y(a.a))return z(a.a),new xb(Bb(a));var b=Gb(a);if("|"!=y(a.a))a=b;else{for(b=[b];"|"==z(a.a);)Y(a,"Missing next union location path."),b.push(Gb(a));a.a.a--;a=new yb(b)}return a};function Jb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=Da(a);if(Ga(c))throw Error("Invalid XPath expression.");b?"function"==aa(b)||(b=da(b.lookupNamespaceURI,b)):b=function(){return null};var d=Ab(new zb(c,b));if(!Ga(c))throw Error("Bad token: "+z(c));this.evaluate=function(a,b){var c=d.a(new w(a));return new Z(c,b)}}
function Z(a,b){if(0==b)if(a instanceof J)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof J))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof J?Xa(a):""+a;break;case 1:this.numberValue=a instanceof J?+Xa(a):+a;break;case 3:this.booleanValue=a instanceof J?0<a.i:!!a;break;case 4:case 5:case 6:case 7:var d=
L(a);c=[];for(var e=M(d);e;e=M(d))c.push(e instanceof F?e.a:e);this.snapshotLength=a.i;this.invalidIteratorState=!1;break;case 8:case 9:d=Wa(a);this.singleNodeValue=d instanceof F?d.a:d;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||
0>a?null:c[a]}}Z.ANY_TYPE=0;Z.NUMBER_TYPE=1;Z.STRING_TYPE=2;Z.BOOLEAN_TYPE=3;Z.UNORDERED_NODE_ITERATOR_TYPE=4;Z.ORDERED_NODE_ITERATOR_TYPE=5;Z.UNORDERED_NODE_SNAPSHOT_TYPE=6;Z.ORDERED_NODE_SNAPSHOT_TYPE=7;Z.ANY_UNORDERED_NODE_TYPE=8;Z.FIRST_ORDERED_NODE_TYPE=9;function Kb(a){this.lookupNamespaceURI=Ia(a)}
function Lb(a){a=a||h;var b=a.document;b.evaluate||(a.XPathResult=Z,b.evaluate=function(a,b,e,f){return(new Jb(a,e)).evaluate(b,f)},b.createExpression=function(a,b){return new Jb(a,b)},b.createNSResolver=function(a){return new Kb(a)})}var Mb=["wgxpath","install"],$=h;Mb[0]in $||!$.execScript||$.execScript("var "+Mb[0]);for(var Nb;Mb.length&&(Nb=Mb.shift());)Mb.length||void 0===Lb?$[Nb]?$=$[Nb]:$=$[Nb]={}:$[Nb]=Lb;})()

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/



;(function() {
    xfalib = {
        ut : {},
        script : {
            mixin : {},
            dom : {}
        },
        view : {
            util:{},
            layout:{}
        },
        runtime: {
            _private: {}
        },
        locale : {},
        acrobat: {}, //added for acrobat specific scripts
        template: {},
        globals: {
            highlight : false // flag for "Highlight Existing Fields"
        }
    };
    window.xfalib = xfalib;
})();

/*******************************************************************************
 * ADOBE CONFIDENTIAL
 *  ___________________
 *
 *   Copyright 2013 Adobe Systems Incorporated
 *   All Rights Reserved.
 *
 *  NOTICE:  All information contained herein is, and remains
 *  the property of Adobe Systems Incorporated and its suppliers,
 *  if any.  The intellectual and technical concepts contained
 *  herein are proprietary to Adobe Systems Incorporated and its
 *  suppliers and are protected by all applicable intellectual property
 *  laws, including trade secret and copyright laws.
 *  Dissemination of this information or reproduction of this material
 *  is strictly forbidden unless prior written permission is obtained
 *  from Adobe Systems Incorporated.
 ******************************************************************************/

(function(xfalib){
xfalib.locale.Strings =
{
    "pleaseTapText"         :       "Please tap here to sign",
	"pleaseClickText"       :       "Please click here to sign",
	"clearSignature"        :       "Clear Signature Confirmation",
	"clearSignatureConfirm" :       "Are you sure you want to clear signature?",
	"fetchGeoLocation"      :       "Fetching Geo Location info...",
	"errorFetchGeoLocation" :       "Error fetching geolocation info",
	"pleaseSignText"        :       "Please sign here",
	"latitude"              :       "Latitude",
	"longitude"             :       "Longitude",
	"time"                  :       "Time",
    "clearText"             :       "Clear",
    "validationIssue"       :       "Validation Error in the field",
    "warning"               :       "Warnings",
    "errors"                :       "Errors",
    "errorServerScript"     :       "Error in running server script",
    "unableToConnectText"   :       "Couldn't connect to the server",
    "errorSubmittingForm"   :       "Error submitting form to internal url",
    "ok"                    :       "OK",
    "cancel"                :       "Cancel",
    "yes"                   :       "Yes",
    "no"                    :       "No",
    "clear"                 :       "Clear",
    "brushes"               :       "Brushes",
    "geolocation"           :       "Geolocation",
    "FileCloseAccessText"   :       "Press Enter to delete the file ",
    "FileSizeGreater"       :       "File(s) {0} are greater than the expected size: {1}MB.",
    "FileNameInvalid"       :       "File(s) {0} have invalid characters in their name. Only alpha-numeric characters are supported",
    "FileMimeTypeInvalid"   :       "File(s) {0} are unsupported file types",
    "UnableToSave"          :       "Unable to save",
    "SavedSuccessfully"     :       "Saved Successfully",
    "Attach"                :       "Attach",
    "datePickerAriaLabel"   :       "Please Enter date in {0} format only"
}
})(xfalib);

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property
 * laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/




(function(xfalib){
xfalib.locale.LogMessages =
{
    "ALC-FRM-901-001"   :   "[ALC-FRM-901-001] : "+xfalib.locale.Strings.errorServerScript,
    "ALC-FRM-901-002"   :   "[ALC-FRM-901-002] : Exception occurred while executing {0} script for {1} : {2}.",
    "ALC-FRM-901-003"   :   "[ALC-FRM-901-003] : Error: xfa is not initialized.",
    "ALC-FRM-901-004"   :   "[ALC-FRM-901-004] : NullPointer Exception: {0} child {1} is null.",
    "ALC-FRM-901-005"   :   "[ALC-FRM-901-005] : exception {0} in parsing user script. script:{1}.",
    "ALC-FRM-901-006"   :   "[ALC-FRM-901-006] : Unsupported operation : {0}.",
    "ALC-FRM-901-007"   :   "[ALC-FRM-901-007] : Error in running server scripts. Type mismatch old: {0}, new: {1}.",
    "ALC-FRM-901-008"   :   "[ALC-FRM-901-008] : "+xfalib.locale.Strings.unableToConnectText,
    "ALC-FRM-901-009"   :   "[ALC-FRM-901-009] : Message Box with Yes/No are not supported and converted to Ok/Cancel message box but the return values are correct i.e for Yes/No",
    "ALC-FRM-901-010"   :   "[ALC-FRM-901-010] : Message Box with 3 buttons are not supported",
    "ALC-FRM-901-011"   :   "[ALC-FRM-901-011] : Geo Location not supported",
    "ALC-FRM-901-012"   :   "[ALC-FRM-901-012] : Mixed mode data binding is not supported",
    "ALC-FRM-901-013"   :   "[ALC-FRM-901-013] : Calculations failed after {0}",
    "ALC-FRM-901-014"   :   "[ALC-FRM-901-014] : Validation failed for the object: {0}. Validate Script is {1}",
    "ALC-FRM-901-015"   :   "[ALC-FRM-901-015] : exception {0} in creating user script object. user script:{1}, initialized from event: {2}, object : {3}",
    "ALC-FRM-901-016"   :   "[ALC-FRM-901-016] : "+xfalib.locale.Strings.errorSubmittingForm,
    "ALC-FRM-901-017"   :   "[ALC-FRM-901-017] : Exception occurred {0} while accessing property {1} of {2}" ,
    "ALC-FRM-901-018"   :   "[ALC-FRM-901-018] : This form may not render correctly as you are using an unsupported browser.",
    "ALC-FRM-901-019"   :   "[ALC-FRM-901-019] : Exception occurred while resolving floating fields for : {0}.",
    "ALC-FRM-901-020"   :   "[ALC-FRM-901-020] : Exception while Initializing Logger. Invalid Configuration {0} in {1}",
    "ALC-FRM-901-021"   :   "[ALC-FRM-901-021] : Failed to parse dataPattern {0} for the value {1}: {2}",
    "ALC-FRM-901-022"   :   "[ALC-FRM-901-022] : Skipped parsing Multiple dataPatterns  pattern {0} value {1}",
    "ALC-FRM-901-023"   :   "[ALC-FRM-901-023] : Numeric Patterns having the format (pattern) are not supported. " +
                                                    "Skipping pattern {0} value {1}"
}
})(xfalib);

/*
 * ***********************************************************************
 * ADOBE CONFIDENTIAL
 * __________________
 *
 * Copyright 2015 Adobe Systems Incorporated
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 * ***********************************************************************
 */

window.xfalib = window.xfalib || {
    ut : {},
    view : {
        util : {

        }
    }
};
window.xfalib.$ = window.$;
window.xfalib.jQuery = window.jQuery;
window.xfalib._ = window._;

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

/**
 * @package guidelib.util.Namespace
 * @version 0.0.1
 */

(function (window) {
    this.guidelib = {
        util : {},
        event : {},
        model : {
            util : {},
            mixin : {}
        },
        view : {
            util : {},
            ad : {
                layout : {}
            }
        },
        runtime : {
            _private : {},
            af : {},
            guideContext : {}
        },
        author : {
            instances : {},
            editConfigListeners : {}
        },
        internal : {
            liveModel : {},
            liveXmlUtils : {},
            liveDataUtils : {},
            GuideDirtyMarkerAndVisitor : {}
        }
    };
    // We are using this NS in API  in guideBridge.getSignedDocLink
    window.FD = window.FD || {};
})(window);


// jscs:disable requireDotNotation
/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

/**
 * @package guidelib.util.GuideUtil
 * @version 0.0.1
 *
 * Created with IntelliJ IDEA.
 * User: bsirivel
 * Date: 29/11/13
 * Time: 2:52 PM
 * To change this template use File | Settings | File Templates.
 */
(function (window, $, guidelib, _) {
    var guideLoadingDiv = null,
        gd = function () {
            if (guideLoadingDiv == null) {
                guideLoadingDiv = $("#loadingPage");
            }
            return guideLoadingDiv;
        };
    var GuideUtil = guidelib.util.GuideUtil = {
        GUIDE_ITEM_CONTAINER_SUFFIX : "_guide-item-container",
        DATA_GUIDE_ITEM_CONTAINER : "data-guide-item-container",
        GUIDE_ITEM_NAV_CONTAINER_SUFFIX : "_guide-item-nav-container",
        GUIDE_ITEM_SUFFIX : "_guide-item",
        DATA_GUIDE_ITEM : "data-guide-item",
        GUIDE_ITEM_NAV_SUFFIX : "_guide-item-nav",
        GUIDE_NODE_ID_SUFFIX : "__",
        GUIDE_VIEW_BIND_ATTR : "data-guide-view-bind",
        GUIDE_LAYOUT_CLASS : ".guideLayout",
        GUIDE_WIZARD_LAYOUT : "guideWizardLayout",
        GUIDE_TABBED_PANEL_LAYOUT : "guideTabbedPanelLayout",
        GUIDE_VERTICAL_TABBED_PANEL_LAYOUT : "guideVerticalTabbedPanelLayout",
        DATA_LAYOUT_ITEM_INDEX : "data-layout-item-index",
        SCRIBBLE_RESIZE_TIME_INTERVAL : 1000,       //--to set time-interval for setTimeout
        MANDATORY_TEST : "nullTest", // string to signify the reason for failed test being mandatory
        FORMAT_TEST : "formatTest", // string to signify the reason for failed test being validate picture clause test
        SCRIPT_TEST : "scriptTest", // string to signify the reason for failed test being validate script test
        MAXIMUM_VALUE_TEST : "maximumValueTest", // string to signify the reason for failed test being maximum value test
        MINIMUM_VALUE_TEST : "minimumValueTest", // string to signify the reason for failed test being minimum value test
        TOTAL_DIGITS_TEST : "totalDigitTest", // string to signify the reason for failed test being total digit test
        MINIMUM_LENGTH_TEST : "minimumLengthTest", // string to signify the reason for failed test being minimum length test
        LENGTH_TEST : "totalLengthTest", // string to signify the reason for failed test being total length test
        FM_DAM_ROOT : "/content/dam/formsanddocuments/",
        FM_AF_ROOT : "/content/forms/af/",
        GUIDE_CONTAINER_FORM_CLASS : "#guideContainerForm",
        GUIDE_CONTAINER_THEME_CLASS : "#guideContainerTheme",
        EVENT_PROPERTY_MAPPING : {
            "Calculate" : "calcExp",
            "Visibility" : "visibleExp",
            "Initialize" : "initScript",
            "Click" : "clickExp",
            "Value Commit" : "valueCommitScript",
            "Enabled" : "enabledExp",
            "Validate" : "validateExp",
            "Completion" : "completionExp",
            "Summary" : "summaryExp",
            "Options" : "optionsExp",
            "Navigation" : "navigationChangeExp"
        },

        /**
         * Types of chart available
         */
        chartType : {
            LINE : "line",
            POINT : "point",
            LINE_POINT : "linepoint",
            AREA : "area",
            BAR : "bar",
            COLUMN : "column",
            PIE : "pie",
            DONUT : "donut"
        },

        xfaExprMap : {
            "clickExp" : "click",
            "enabledExp" : null,
            "visibleExp" : null
        },

        _globalUniqueId : (new Date()).getTime(),

        generateUID : function () {
            return "GUID" + (++this._globalUniqueId);
        },

        replaceAll : function (stringToReplaceIn, textToReplace, replacementString) {
            return stringToReplaceIn.split(textToReplace).join(replacementString);
        },

        getId : function (myid) {
            return "#" + myid.replace(/(:|\.|\[|\])/g, "\\$1");
        },
        /**
         * Utility method to compare version
         * @param version1
         * @param version2
         */
        compareVersion : function (version1, version2) {
            if (!_.isEmpty(version1) && !_.isEmpty(version2)) {
                var ver1Array = version1.split("."),
                    ver2Array = version2.split("."),
                    ver1MajorVersion,
                    ver1MinorVersion,
                    ver2MajorVersion,
                    ver2MinorVersion;
                // check if array length is 2 to validate the version value
                if (ver1Array.length === 2 && ver2Array.length === 2) {
                    ver1MajorVersion = parseInt(ver1Array[0], 10);
                    ver1MinorVersion = parseInt(ver1Array[1], 10);
                    ver2MajorVersion = parseInt(ver2Array[0], 10);
                    ver2MinorVersion = parseInt(ver2Array[1], 10);
                    // do the comparison
                    return (ver1MajorVersion == ver2MajorVersion)
                        ? ver1MinorVersion - ver2MinorVersion
                        : ver1MajorVersion - ver2MajorVersion;
                }
            }
        },

        /**
         * Reformats the date of formats like 2018-02-06T16:21:41.240Z or
         * Sun May 06 00:00:00 IST 2001 into ISO format. This utility is useful
         * to convert date present in database or any other data source into a format which AF understands
         * @param value
         * @returns {*}
         * @private
         */
        _reformatDate : function (value) {
            var retVal = value,
                year = null,
                month = null,
                day = null,
                parsedDate = null,
                isInvalidDate = xfalib.ut.DateInfo.Parse(value) == null;
            if (isInvalidDate && value) {
                // date send by FDM layer is always in ISO format
                parsedDate = Date.parse(value);
                if (!isNaN(parsedDate)) {
                    // the code below is for the following date formats, "2018-02-06T16:21:41.240Z"
                    retVal = value.substr(0, 10);
                } else {
                    // the code below is for the following date formats, "Sun May 06 00:00:00 IST 2001"
                    // these date formats are generally present in data base etc
                    year = value.slice(-4);
                    // check if the value has a valid year before proceeding further
                    if (/^[0-9]+$/.test(year)) {
                        month = guidelib.i18n.calendarSymbols.abbrmonthNames.indexOf(value.substr(4, 3)) + 1;
                        day = value.substr(8, 2);
                        retVal = year + '-' + (month < 10 ? '0' : '') + month + '-' + day;
                    }
                }
            }
            return retVal;
        },

        /**
         * Formats the given value in given pattern.
         * @param value
         * @param formatPattern pattern defined via picture cluase
         * @returns {*}
         */
        formatValue : function (value, formatPattern, dataType) {
            var formattedValue;
            // in case of data-time, we additionally format the date before passing on to xfa utility
            if (dataType === 'date-time' || dataType === 'date') {
                value = guidelib.util.GuideUtil._reformatDate(value);
            }
            try {
                formattedValue = xfalib.ut.PictureFmt.format(value + "", formatPattern, null, true);
            } catch (exception) {
                window.guideBridge._guide.logger().error("Cannot format value " + value + " with " + formatPattern, exception);
            }
            return formattedValue ? formattedValue : value;
        },
        guideSomToId : function (som) {
            //Note: If you change the som versus id logic than make sure you also take care of GuideBridge.setFocus and
            //AuthoringUtils.setAuthoringFocus which unfortunately based on this specially(AuthoringUtils.setAuthoringFocus).
            if (som) {
                return ("" + som).replace(/\./g, "-");
            }
            return null;
        },

        /**
         * This API returns the name of the component from the given som expression.
         * Eg - If som = guide[0].guide1[0].guideRootPanel[0].numericbox[0],
         * then this API will return numericbox.
         * @param som
         * @returns {*}
         */
        guideSomToComponentName : function (som) {
            if (som) {
                return som.substring(som.lastIndexOf(".") + 1, som.lastIndexOf("["));
            }
            return null;
        },

        /**
         * Returns whether the chart type supports legends or not.
         * Legend is not available for Line / Point / Line and Point / Area chart types.
         * @param chartType
         * @returns {boolean}
         */
        isChartLegendApplicable : function (chartType) {
            return !(chartType === GuideUtil.chartType.LINE || chartType === GuideUtil.chartType.POINT
                || chartType === GuideUtil.chartType.LINE_POINT || chartType === GuideUtil.chartType.AREA);
        },

        /**
         * Returns whether the chart type supports tooltip or not.
         * Tooltip is not available for Line / Area chart types.
         * @param chartType
         * @returns {boolean}
         */
        isChartTooltipApplicable : function (chartType) {
            return !(chartType === GuideUtil.chartType.LINE || chartType === GuideUtil.chartType.AREA);
        },

        /**
         * Returns whether the chart type supports Axis title or not.
         * Axis Title is not available for Pie / Area chart types.
         * @param chartType
         * @returns {boolean}
         */
        isChartAxisTitleApplicable : function (chartType) {
            return !(chartType === GuideUtil.chartType.PIE || chartType === GuideUtil.chartType.DONUT);
        },

        modelElSelector : function (id) {
            var modelSelector = '[' + GuideUtil.GUIDE_VIEW_BIND_ATTR + ']';
            if (id) {
                modelSelector = '[' + GuideUtil.GUIDE_VIEW_BIND_ATTR + '="' + id + '"]';
            }
            return modelSelector;
        },

        /**
         * Checks if the given child model is part of sub tree of container model.
         * @param {?Object} container   container model
         * @param {?Object} child       child model
         * @returns {boolean} true, if child belongs to sub tree of container, false otherwise
         */
        isChildPartOfContainer : function (container, child) {
            if (child != null && container != null) {
                return child.somExpression.lastIndexOf(container.somExpression, 0) === 0;
            }
            return false;
        },

        relativeSom : function (relativeTo, fullSom) {
            if (!relativeTo || !fullSom) {
                return fullSom;
            } else {
                if (fullSom.indexOf("guide[0].") == 0) {
                    fullSom = fullSom.substring(9);
                }
                if (relativeTo.indexOf("guide[0].") == 0) {
                    relativeTo = relativeTo.substring(9);
                }

                if (fullSom.indexOf(relativeTo) == 0) {
                    return fullSom.substring(relativeTo.length + 1);
                } else {
                    return fullSom;
                }
            }
        },

        evalSom : function (som, obj) {
            if (som && obj) {
                return som.split('.').reduce(
                    function (obj, i) {
                        return obj[i];
                    },
                    obj
                );
            } else {
                return null;
            }
        },

        itemContainerSelector : function (id) {
            return "#" + id + GuideUtil.GUIDE_ITEM_CONTAINER_SUFFIX;
        },

        alternateItemContainerSelector : function (id) {
            return "[" + GuideUtil.DATA_GUIDE_ITEM_CONTAINER + "=" + (id + GuideUtil.GUIDE_ITEM_CONTAINER_SUFFIX) + "]";
        },

        itemNavContainerSelector : function (id) {
            var navContainerId = id + GuideUtil.GUIDE_ITEM_NAV_CONTAINER_SUFFIX;
            return ("#" + navContainerId + ", [data-guide-id=" + navContainerId + "]");
        },

        checkIfTableRow : function (model) {
            return model && model instanceof guidelib.model.GuideTableRow;
        },

        itemSelector : function (id, model) {
            if (GuideUtil.checkIfTableRow(model)) {
                return "[" + GuideUtil.DATA_GUIDE_ITEM + "=" + id + GuideUtil.GUIDE_ITEM_SUFFIX + "]";
            } else {
                return "#" + id + GuideUtil.GUIDE_ITEM_SUFFIX;
            }
        },

        itemNavSelector : function (id) {
            var navId = id + GuideUtil.GUIDE_ITEM_NAV_SUFFIX;
            return ("#" + navId + ", [data-guide-id=" + navId + "]");
        },

        summarySelector : function (id) {
            return ".guideSummary[data-guide-id='" + id + "']";
        },

        propSelector : function (prop, id) {
            return "[data-guide-prop=" + prop + "][data-guide-id='" + id + "']";
        },

        getLocalizedMessage : function (category, message, snippets) {
            var resolvedMessage = message;
            if (snippets) {
                //resolve message with snippet
                resolvedMessage = resolvedMessage.replace(/{(\d+)}/g, function (match, number) {
                    return typeof snippets[number] != 'undefined'
                        ? snippets[number]
                        : match;
                });
            }
            var text = "";
            if (category) {
                text += " [" + category + "]";
            }
            text += "  " + resolvedMessage + "\r\n";
            return text;
        },

        elIdWithoutNodeIdSuffix : function (id) {
            var nodeIdSuffix = GuideUtil.GUIDE_NODE_ID_SUFFIX;
            if (id && (id.indexOf(GuideUtil.GUIDE_NODE_ID_SUFFIX) == (id.length - nodeIdSuffix.length))) {
                id = id.substring(0, (id.length - nodeIdSuffix.length)); // remove id suffix
                return id;
            } else {
                return "";
            }
        },

        loadCSS : function (filename) {
            if (!filename) {
                return;
            }
            //Needs to be loaded in both authoring and runtime so not using ClientLibraryManager. Need better way to do that
            var file = window.document.createElement("link");
            file.setAttribute("rel", "stylesheet");
            file.setAttribute("type", "text/css");
            file.setAttribute("href", filename);

            if (typeof file !== "undefined") {
                window.document.getElementsByTagName("head")[0].appendChild(file);
            }
        },
        /**
         * This API sets focus on first element of the Table Row.  First element can consists of add,edit,delete control and a field.
         * This API auto computes the presence of these elements and set's focus on the field.
         * @param $row HTML element of the row to be created
         * @memberof GuideUtil
         * @since 6.3
         * @private
         */
        setFocusOnFirstItemOfTableRow : function ($row) {
            var $editControl = $row.find(".guideTableRuntimeEditControl"),
                id = null,
                bIsEditControlMadeVisible = false,
                model = null;
            // Setting focus on field, since td is not focusable
            if ($editControl.length > 0) {
                $editControl.each(function () {
                    if ($(this).is(":visible")) {
                        // Only one edit control can be visible
                        // we dont support two
                        bIsEditControlMadeVisible = true;
                        $editControl.eq(0).focus();
                    }
                });
            }
            if (!bIsEditControlMadeVisible) {
                // Find the field and use guidebridge to set focus on the first field
                id = $row.find("td:first-child").find(".guideFieldNode").data("guideViewBind");
                model = (id != null) ? guideBridge._resolveId(id) : null;
                if (model != null) {
                    guideBridge.setFocus(model.somExpression);
                }
            }
        },

        // selector points to wrapper div since it has a unique id
        adjustElementHeight : function (selector, isPopUp) {
            if (!isPopUp) {
                var self = $("#" + selector).find(".guideFieldWidget"),
                    maxHeight,
                    clientHeight = self.css("height"),
                    childrenTotalHeight = 0,
                    parentHeight = 0,
                    $child = null,
                    clone = self.clone()[0],
                    $clonedChild = null;

                // Create a dummy element to get the height
                $(clone).css({
                    'visibility' : 'hidden',
                    'max-height' : self.css("max-height"),
                    'top' : '-2000px',
                    'left' : '-2000px',
                    'position' : 'absolute',
                    'height' : (clientHeight !== "0px") ? clientHeight : "auto"
                }).appendTo('body');
                parentHeight = $(clone).height();
                // Walk through the children and adjust their height
                self.children().each(function (index) {
                    $clonedChild = $(clone).children().eq(index);
                    if ($clonedChild.height() >= parentHeight && ($child === null)) {
                        $child = $(this);
                    } else {
                        childrenTotalHeight += $clonedChild.height();
                    }
                });
                if ($child && (parentHeight - childrenTotalHeight) > 0) {
                    $child.height((parentHeight - childrenTotalHeight) + "px");
                } else if (parentHeight - childrenTotalHeight <= 0) {
                    self.children().first().css("height", "auto");
                }
                $(clone).remove();
            } else {
                var modalBody = $("#" + selector).find(".guide-modal-body"),
                    guideTnCContent = $("#" + selector).find(".guide-tnc-content"),
                    paddingTop = modalBody.innerHeight() - modalBody.height();
                // Adjust the max height of the modal body equal to window's height
                // in case of pop up enabled
                modalBody.css("max-height", $(window).height());
                // Since modal-body can have a padding, calculate the total padding
                // Subtract the padding and set max-height for tnc content
                guideTnCContent.css("max-height", $(window).height() - paddingTop);

            }
        },

        _resizeScribbleField : function () {
            var self = $('.guidescribble').find('.guideFieldWidget'),
                that = this;
            _.each(self, function (fieldWidget, index) {
                guidelib.util.GuideUtil._computeHeightAndWidthForScribble(fieldWidget);
            });
        },

        _computeHeightAndWidthForScribble : function (fieldWidget) {
            var fieldWidthInPx,
                fieldHeightInPx,
                ratio;
            fieldWidget = $(fieldWidget);
            fieldWidthInPx = fieldWidget.innerWidth();
            ratio = fieldWidget.data('guideAspectRatio');
            fieldHeightInPx = fieldWidthInPx / ratio;
            fieldHeightInPx = (fieldHeightInPx < 34) ? 34 : fieldHeightInPx;
            fieldWidget.css('height', fieldHeightInPx + "px");
            fieldWidget.find("img").css('height', fieldHeightInPx + "px");
        },

        updateContainer : function (path, data) {
            $.ajax({
                url : path,
                type : "POST",
                data : {"wcmmode" : "disabled", "data" : data, "targetMode" : "true"},
                sync : true,
                success : function (result) {
                    if (!window.guidelib.guideReplaced) {
                        //NOCHECKMARX - result is coming from server side preventing Reflective XSS All Clients.
                        var $result = $(result);
                        $(GuideUtil.GUIDE_CONTAINER_FORM_CLASS).replaceWith($result.filter(GuideUtil.GUIDE_CONTAINER_FORM_CLASS));
                        $(GuideUtil.GUIDE_CONTAINER_THEME_CLASS).replaceWith($result.filter(GuideUtil.GUIDE_CONTAINER_THEME_CLASS));
                    }
                },
                error : function (error) {
                    if (window.console) {
                        window.console.log(error);
                    }
                }
            });
        },

        fetchDataXml : function (initialGuideJsonData) {
            var data = "", initialGuideMergedJson;
            if (initialGuideJsonData) {
                initialGuideMergedJson = JSON.parse(initialGuideJsonData["guidemergedjson"] || "null");
            }
            if (initialGuideMergedJson) {
                data = initialGuideMergedJson.guideState.completeDataXML;
            }
            return data;
        },

        detectContextPath : function () {
            var SCRIPT_URL_REGEXP = /^(?:http|https):\/\/[^\/]+(\/.*)\/(?:etc(\/.*)*\/clientlibs|libs(\/.*)*\/clientlibs|apps(\/.*)*\/clientlibs).*\.js(\?.*)?$/;
            var contextPath, scripts, result;
            try {
                if (window.CQURLInfo) {
                    contextPath = window.CQURLInfo.contextPath || "";
                } else {
                    scripts = window.document.getElementsByTagName("script");
                    for (var i = 0; i < scripts.length; i++) {
                        // in IE the first script is not the expected widgets js: loop
                        // until it is found
                        result = SCRIPT_URL_REGEXP.exec(scripts[i].src);
                        if (result) {
                            contextPath = result[1];
                            return contextPath;
                        }
                    }
                    contextPath = "";
                    return contextPath;
                }
            } catch (e) {
                if (window.console) {
                    window.console.log(error);
                }
            }
        },

        /**
         * Util for getting HTML Id
         * @param myid
         * @returns {*}
         * @private
         */
        _getId : function (myid) {
            return guidelib.util.GuideUtil.getId(myid);
        },

        initializeHelp : function () {
            var shortVisible, getId;
            shortVisible = false;
            getId = GuideUtil._getId;

            // Note: Using delegated event here to fix issue LC-3911686
            // This is done because we have to add this listener every time a new repeatable instance is created
            // Which means initialize help should be called everytime after add instance and the selector written below
            // should be made more generic. This has to be done later, else it may impact performance of AF. Ticket - CQ-4205246
            $(window.document).on("click.longDescription keypress.longDescription", "[data-guide-longDescription]", function (event) {
                if (event.type == "keypress" && !GuideUtil.isEnterKeyPressed(event) && !GuideUtil.isSpaceBarPressed(event)) {
                    return;
                }
                event.preventDefault();
                var index, longDescId, shortDescId, fieldId, longVisible, longDescDiv, shortDescDiv, fieldModel, fieldView;
                longDescId = $(this).data('guide-longdescription');
                index = longDescId.indexOf('_guideFieldLongDescription');
                if (index === -1) {
                    index = longDescId.indexOf('_guidePanelLongDescription');
                }
                fieldId = $(this).data('guide-longdescription').substring(0, index);
                shortDescId = fieldId + '_guideFieldShortDescription';
                /* get the divs*/
                longDescDiv = $(getId(longDescId));
                shortDescDiv = $(getId(shortDescId));
                longDescDiv.toggle();
                longVisible = longDescDiv.is(':visible');
                fieldModel = window.guideBridge._resolveId(fieldId);
                fieldView = window.guideBridge._guideView.getView(fieldModel.somExpression);
                /*hiding shortDesc since longDesc is visible */
                if (longVisible) {
                    shortDescDiv.hide();
                } else {
                    if (fieldView != null) {
                        fieldView.setActive(null, true);
                    }
                    if ($(this).data('guide-alwaysshow')) {
                        shortDescDiv.show();
                    }
                }

                fieldView.visibleHelpElement = longVisible ? "longDescription" : shortDescDiv.is(":visible") ? "shortDescription" : "none";

                fieldModel._triggerOnBridge("elementHelpShown", fieldModel, fieldView.visibleHelpElement, "", {
                    help : $(xfalib.ut.XfaUtil.prototype.encodeScriptableTags(fieldModel[fieldView.visibleHelpElement])).html()
                });
            });

            GuideUtil._initializeShortDescription();
        },
        _initializeShortDescription : function ($html) {
            if (_.isUndefined($html)) {
                $html = window.document;
            }
            var getId = GuideUtil._getId,
                tooltipContent = function (element) {
                    var longVisible, alwaysShow, guideFieldNode, elem;
                    guideFieldNode = $(element).parents('.guideFieldNode').eq(0);
                    longVisible = $(getId(guideFieldNode.attr('id') + '_guideFieldLongDescription')).is(':visible');
                    alwaysShow = $(guideFieldNode.find('[data-guide-longDescription]')).data('guide-alwaysshow');
                    elem = guideFieldNode.find('.short');
                    if (elem !== undefined && elem !== null && !longVisible && !alwaysShow) {
                        return elem.html();
                    }
                    return '';
                };

            var $guideFieldWidget = $('.guideFieldWidget', $html);
            if (_.isFunction($.prototype.tooltip) && $guideFieldWidget.length > 0) {
                $guideFieldWidget.tooltip({
                    title : function () {
                        var button = $(this).find('button'),
                            checkbox = $(this).parents('.guideCheckBoxItem').eq(0),
                            radiobutton = $(this).parents('.guideRadioButtonItem').eq(0);
                        if (!(button !== undefined && button.length > 0) && !(checkbox !== undefined && checkbox.length > 0) && !(radiobutton !== undefined && radiobutton.length > 0)) {
                            return tooltipContent(this);
                        }
                        return '';
                    },
                    placement : 'bottom',
                    container : '.guideContainerWrapperNode',
                    html : true
                });
            }

            var $guideButtonAndCheckBox = $('button, .guideRadioButtonItem, .guideCheckBoxItem', $html);
            if (_.isFunction($.prototype.tooltip) && $guideButtonAndCheckBox.length > 0) {
                $guideButtonAndCheckBox.tooltip({
                    title : function () {
                        return tooltipContent(this);
                    },
                    placement : 'bottom',
                    container : '.guideContainerWrapperNode',
                    html : true
                });

            }
        },

        /**
         * Bring the HTML from server and embed it
         * @todo: Id logic must change
         * Problems if we don't change logic of ID
         * a) Som resolve won't work
         * b) Also, may be there are two field's present inside different fragments having the same id
         * @private
         */
        _embedHtml : function (model, referredHtml, uniquePrefix) {
            var bIsSuccess = false;
            if (referredHtml) {
                // need to add the children of of the given HTML div  only so extracting out by regex and string manipulation
                // so that script tag do remain intact
                var parentIdSelector = "#" + model.id,
                // try non greedy matching of first div
                    re = /<div .*?>/,
                // this would be <div data-guide-asset-path="bla" >
                    openingDiv = referredHtml.match(re),
                    parentUniquePrefix = model.id.substring(0, model.id.indexOf("__" + model.templateId));
                // cut out the first div and inset rest
                referredHtml = referredHtml.substring(openingDiv[0].length, referredHtml.lastIndexOf("</div>"));
                $(parentIdSelector).html(referredHtml);
                if (window.guideBridge._guideView) {
                    // Add the HTML to our template cache
                    window.guideBridge._guideView._domTemplateCacheStore.putDomElement("#" + model.templateId, $(parentIdSelector).clone());
                }
                // now if parent is repeatable , then change ids
                // if repeatable change all IDs
                if (model.repeatable || model._ancestorRepeatable) {
                    $(parentIdSelector).find('[id^="guideContainer"]').each(function (i, el) {
                        var $el = $(el),
                            id = el.id;
                        if (id.indexOf(model.templateId + "_") != 0) {
                            // we do not want to change the id of items_container and nav container
                            $el.attr('id', uniquePrefix + "__" + $el.attr('id'));
                        } else if (parentUniquePrefix) {
                            $el.attr('id', parentUniquePrefix + "__" + id);
                        }
                    });
                }

                // Now let's create view for this HTML
                // Call post initialize to create child view
                //this.postInitialize();
                bIsSuccess = true;
            }
            return bIsSuccess;
        },

        isIphoneOrIpad : function () {
            var IS_IPAD = window.navigator.userAgent.match(/iPad/i) !== null,
                IS_IPHONE = (window.navigator.userAgent.match(/iPhone/i) !== null)
                    || (window.navigator.userAgent.match(/iPod/i) !== null);
            return IS_IPAD || IS_IPHONE;
        },

        commonPrefixLen : function (str1, str2) {
            if (_.isString(str1) && _.isString(str2)) {
                var i,
                    length = Math.min(str1.length, str2.length);

                for (i = 0; i < length; ++i) {
                    if (str1.charAt(i) !== str2.charAt(i)) {
                        break;
                    }
                }
                return i;
            }
            return 0;
        },

        /**
         * Returns true if the bindref is an xpath ending with and attribute
         */
        isAttributeBound : function (bindRef) {
            return _.isString(bindRef) && bindRef.split('/@').length === 2;
        },

        /**
         * Returns the hops to rootPanel
         * @param node
         * @returns {number}
         * @private
         */
        _countHopsToRootPanel : function (node) {
            var count = 0;
            while (node && node.parent) {
                count = count + 1;
                if (node.parent.className === "rootPanelNode") {
                    return count;
                }
                node = node.parent;
            }
        },

        /**
         * Check if ancestor is reference
         * @param model
         * @returns {boolean}
         * @private
         */
        _checkIfAncestorIsALazyReference : function (model) {
            // Walk through the parent hierarchy
            var par = model.parent;
            while (par && !(par instanceof guidelib.model.GuideContainerNode)) {
                if (par._lazyReference) {
                    return true;
                }
                par = par.parent;
            }
            return false;
        },

        /**
         * Check if supplied template jason is in lazy state.
         * @param templateJson
         * @returns {boolean}
         * @private
         */
        isLazyJson : function (templateJson) {
            if (_.isUndefined(templateJson) || _.isEmpty(templateJson.items)) {
                return true;
            }
            return false;
        },

        showGuideLoading : function (bShow) {
            if (bShow) {
                gd().addClass("guideLoading");
            } else {
                gd().attr("class", "");
            }
            return this;
        },

        removeAllMessages : function () {
            gd().empty().removeClass("guideMessage");
            return this;
        },

        showMessages : function (bMessages) {
            if (!_.isArray(bMessages)) {
                bMessages = [bMessages];
            }
            var $messages = bMessages.map(function (bMessage) {
                return $("<h1></h1>").text(bMessage);
            });
            gd().empty().addClass("guideMessage").append($messages);
            return this;
        },

        /**
         * returns the node value from the prefillXML
         * @param prefillXML
         * @returns {String}
         * @private
         */
        fetchXMLNodeValue : function (prefillXML, targetNode) {
            if (!_.isUndefined(prefillXML)) {
                var XMLModel = $.parseXML(prefillXML);
                if (XMLModel && targetNode) {
                    var elements = XMLModel.getElementsByTagName(targetNode);
                    if (elements && elements.length > 0) {
                        var element = elements[0];
                    }
                    if (!_.isUndefined(element)) {
                        return element.textContent;
                    }
                }
            }
        },

        /**
         * returns the value of the object at a specified path in prefillJson.
         * @param prefillJson
         * @param targetPath
         * @private
         */
        _fetchJSONNodeValue : function (prefillJson, targetPath) {
            if (!_.isUndefined(prefillJson)) {
                var JSONObject = JSON.parse(prefillJson);
                if (JSONObject && targetPath) {
                    return xfalib.ut.XfaUtil.prototype.getOrElse(JSONObject, "afData." + targetPath, undefined);
                }
            }
        },

        isEnterKeyPressed : function (event) {
            return (event.key || event.keyIdentifier) == "Enter" || event.keyCode == 13;
        },

        isSpaceBarPressed : function (event) {
            return (event.key || event.keyIdentifier) == " " || event.keyCode == 32;
        },

        /**
         * This function updates the loaded file upload models with the uploaded file paths
         * and also updates the lazy attachment map(map for unloaded file upload components)
         * @param options
         * @private
         */
        _updateFileModelsAndLazyMap : function (options) {
            var listIndex = 0,
                fileUrlList = options.fileUrlList,
                lazyAttachmentMap = options.lazyAttachmentMap;

            // first iterate over the loaded fileAttachment models and update their model
            _.each(options.fileUploadModelsList, function (fileUploadModel) {
                var fileAttachmentModel = fileUploadModel["fileAttachment"],
                    value = [];
                var fileList = fileUploadModel.fileList;
                _.each(fileList, function (fileListValue) {
                    var isFileListObject = (_.isObject(fileListValue) && fileListValue.val().length > 0),
                        isFileListString = (_.isString(fileListValue) && fileListValue.length > 0);
                    if (isFileListString) {
                        value.push(fileUrlList[listIndex++]);
                    } else if (isFileListObject) {
                        // processing of each file inside fileListObject is done
                        _.each(fileListValue[0].files, function () {
                            value.push(fileUrlList[listIndex++]);
                        });
                    }
                });
                fileAttachmentModel.value = value.join("\n");
            });

            // now iterate over the unloaded fileAttachment models and update the lazyAttachmentMap.
            var i = listIndex;
            _.each(lazyAttachmentMap, function (mapObject) {
                var fileList = mapObject.fileList;
                var valueArray = [];
                for (var j = 0; j < fileList.length; j++) {
                    if (!_.isString(fileList[j])) {
                        // setting fileList to the uploaded path value(just like it would've been getting set in case the model was loaded)
                        fileList[j] = fileUrlList[i];
                        valueArray.push(fileUrlList[i++]);
                    } else {
                        valueArray.push(fileUrlList[i++]);
                    }
                }
                mapObject.value = valueArray.join("\n");
            });
        },

        /**
         * Returns whether the given bindRef is of schema JSON/XSD/FDM or not
         * @param bindRef {String}
         * @returns {boolean}
         * @private
         */
        _isSchemaBindRef : function (bindRef) {
            var isSchemaBindRef = false;
            if (bindRef && bindRef.indexOf('/') > -1) {
                isSchemaBindRef = true;
            }
            return isSchemaBindRef;
        },

        /**
         * Returns whether the given bindRef is of XDP or not
         * @param bindRef {String}
         * @returns {boolean}
         * @private
         */
        _isFormTemplateBindRef : function (bindRef) {
            var isFormTemplateBindRef = false;
            if (bindRef && bindRef.indexOf("[") > -1) {
                isFormTemplateBindRef = true;
            }
            return isFormTemplateBindRef;
        },

        /**
         * This function is useful to define the add operation different from javascript.
         * Ignore first or second operand if it's null,
         * else it'll be treated normally.
         * @param operand1
         * @param operand2
         * @returns {*}
         * @private
         */
        _addValues : function (operand1, operand2) {
            if (_.isNull(operand1)) {
                return operand2;
            } else if (_.isNull(operand2)) {
                return operand1;
            }
            return operand1 + operand2;
        },

        /**
         * Returns the value of the field with the given bindRef, if no Adaptive Form field is found
         * then, it tries to fetch the value of given bindRef from prefill XML
         * @param bindRef - bindRef {string} associated with the field whose value needs to be fetched
         * @param contextSom - optional contextSom {String}, som of the field for which this value is needed
         * @returns {string} value of the field with the given bindRef
         */
        getValueForBindRefField : function (bindRef, contextSom) {
            var value,
               // candidateModels = guidelib.internal.liveModel.getAllFieldModels([bindRef]),
                winnerModel;

            /* Commenting below as recomputation is not going to be supported
            // check for abstract field first, i.e, if there is a global field
            for (var i = 0; i < candidateModels.length; i++) {
                var fieldModel = candidateModels[i];
                if (fieldModel) {
                    if (fieldModel instanceof guidelib.model.AbstractField) {
                        winnerModel = fieldModel;
                        break;
                    } else if (!winnerModel) {
                        winnerModel = fieldModel;
                    }
                }
            }*/

            //TODO: Use som to derive dataSOM, and get correct instance data value from prefill data

            // if no loaded field is found check prefill data
            if (!winnerModel) {
                var dataSection = guidelib.internal.liveDataUtils.constants.UNBOUND_TAG;
                if (GuideUtil._isSchemaBindRef(bindRef)) {
                    dataSection = guidelib.internal.liveDataUtils.constants.BOUND_TAG;
                }
                if (GuideUtil._isFormTemplateBindRef(bindRef)) {
                    dataSection = guidelib.internal.liveDataUtils.constants.XFA_TAG;
                }
                value = guidelib.internal.liveDataUtils.getDataValue(bindRef, dataSection);
            } else {
                // accessing value from the model in the end injects the correct dependency
                value = winnerModel.value;
            }
            return value;
        },

        _setGuideDataHeader : function ($this, $tableElement) {
            // get the headers associated with cell
            // note: we always use the first header in mobile layout
            var headerText = $this.attr("headers"),
                headerId = !_.isEmpty(headerText) ? headerText.split(" ")[0] : undefined;
            if (headerId) {
                // get the header
                var $firstHeader = $tableElement.find("#" + headerId);
                $this.attr("guide-data-header", $.trim($firstHeader.text()));
            }
        },

        navigateToURL : function (destinationURL, destinationType) {
            var param, arg,
                windowParam = window;
            switch (destinationType){
                case "SAME_TAB":
                    param = "_self";
                    windowParam = window.parent;
                    break;
                case "NEW_WINDOW":
                    param = "newwindow";
                    arg = "width=1000,height=800";
                    break;
            }
            windowParam.open(Granite.HTTP.externalize(destinationURL), param, arg);
        }
    };
})(window, $, guidelib, window._);

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

(function (window, $, guidelib) {

    /* Function to set aria attributes of accordion titles based on current state
     of accordion tab i.e. active or not. */

    function handleAccordionAccessibility() {
        $("a[data-guide-toggle='accordion-tab']").each(function (index, element) {   // Select all accordion tab headers
            var panelId = $(element).attr("data-guide-id"),
                isPanelActive = $("#" + panelId + "_guide-item").hasClass("active");
            $(element).attr("aria-selected", isPanelActive)
                      .attr("aria-expanded", isPanelActive);
        });
    };

    // GUIDE TAB CLASS DEFINITION
    // ====================

    var GuideTab = function (element) {
            this.element = $(element);
        },
        editWindow = window.parent,
        old = $.fn.guidetab;

    GuideTab.prototype.show = function () {
        var $this    = this.element,
            tabType =  $this.data("guide-toggle"),
            $ul      = $this.closest('ul:not(.dropdown-menu)'),
            id       = $this.attr("data-guide-id"),
            tabEnable = (tabType === "tab" || tabType === "accordion-tab"),
            parentPanel    = $this.parents("[id='" + id + "_guide-item']"),
            editPath = null,
            isPanelActive = parentPanel.hasClass("active"),
            $li,
            guideNode;

        if (!id) {
            $li      = $this.parent('li');
            tabEnable = tabEnable || $li.hasClass("stepped");
            id = $li.attr("id") || $li.attr("data-guide-id");
            if (id) {
                id = id.substring(0, id.length - guidelib.util.GuideUtil.GUIDE_ITEM_NAV_SUFFIX.length);
            }
        }

        if (id && tabEnable) {
            if (window.guideBridge) {
                guideNode = window.guideBridge._resolveId(id);
                if (guideNode) {
                    window.guideBridge.setFocus(guideNode.somExpression);
                }
            }
            // for touch authoring, we have AuthorUtils in parent, this is a special handling done for touch authoring
            // todo: have to change this
            else if (window.parent._afAuthorHook && window.parent.guidelib.author.AuthorUtils) {
                //Checking CQ.WCM.getMode() is returning inconsistent results with cf#. So this fallback implementation.
                window.parent.guidelib.author.AuthorUtils.setAuthoringFocus(id, window.document); //Use alternate API in authoring for setFocus
            } else if (guidelib.author.AuthorUtils) {
                // In classic authoring do as usual
                guidelib.author.AuthorUtils.setAuthoringFocus(id, window.document); //Use alternate API in authoring for setFocus
            }
            if (tabType === "accordion-tab") {
                parentPanel.toggleClass("active", !isPanelActive);
                handleAccordionAccessibility();
            }
        } else if (tabEnable) {
            //TODO: JIRA ISSUE
            if (console && console.log) {
                console.log("could not execute setFocus for:" + id);
            }
        }
    };

    // GUIDE TAB PLUGIN DEFINITION
    // =====================

    $.fn.guidetab = function (option) {
        return this.each(function () {
            var $this = $(this),
                instance  = $this.data('guidetab');

            if (!instance) {
                $this.data('guidetab', (instance = new GuideTab(this)));
            }
            if (typeof option === 'string') {
                instance[option]();
            }
        });
    };

    $.fn.guidetab.Constructor = GuideTab();

    // TAB NO CONFLICT
    // ===============

    $.fn.guidetab.noConflict = function () {
        $.fn.guidetab = old;
        return this;
    };

    // TAB DATA-API
    // ============

    $(window.document).on('click.guidetab.data-api', '[data-guide-toggle$="tab"]',
        function (e) {
            e.preventDefault();
            $(this).guidetab('show');
        }).on('keydown.guidetab.data-api', '[data-guide-toggle$="tab"]',
        function (e) {
            if (guidelib.util.GuideUtil.isSpaceBarPressed(e)) {
                e.preventDefault();
                $(this).guidetab('show');
            }
        });

    /* Set the aria-attributes for accordion header when form
       is initialized. */

    window.addEventListener("bridgeInitializeStart", function (event) {
        var gb = event.detail.guideBridge;
        gb.on(gb.GUIDE_BRIDGE_INITIALIZE_COMPLETE, handleAccordionAccessibility);
    });

}(window, $, guidelib));


/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

(function (window, $, guidelib) {
    guidelib.util.GuideUtil.showHideNavScroll = function () {
        var scrollControls = $('[data-guide-nav-scroll]');
        if (scrollControls !== undefined && scrollControls !== null) {
            _.each(scrollControls, function (scrollControl) {
                var $scrollControl = $(scrollControl),
                    isModuleScroller,
                    listArray;
                isModuleScroller = $scrollControl.hasClass('adTabScroller');
                if (isModuleScroller) {
                    listArray = $scrollControl.parent().find('.adTabbedItemTitleContainer');
                } else {
                    // using query selector all here, since sizzle of jquery is manipulating dom
                    // which is causing infinite loop due to dom mutation observer set in parent frame in touch ui
                    listArray = $scrollControl.parent()[0].querySelectorAll('[id*="' + guidelib.util.GuideUtil.GUIDE_ITEM_NAV_CONTAINER_SUFFIX + '"]');
                }
                if (listArray !== undefined && listArray !== null && listArray[0] !== undefined && listArray[0] !== null) {
                    //Don't expect element.offsetWidth to get the same value in all browsers, same issue was faced for TnC in IE.
                    if (listArray[0].scrollWidth <= listArray[0].offsetWidth) {
                        $scrollControl.addClass('hide-tab-scroll');
                    } else {
                        $scrollControl.removeClass('hide-tab-scroll');
                    }
                }
            });
        }
    };

    guidelib.util.GuideUtil.navScroll = function (itemNavContainerDiv, scrollDirection, scrollStep, navSelector) {
        var $itemNavContainerDiv = $(itemNavContainerDiv),
            itemNavs,
            scrollWidth = 0,
            maxScroll,
            currWidth,
            currPos;
        if (!(scrollStep)) {
            scrollStep = 1;
        }
        if ($itemNavContainerDiv !== undefined && $itemNavContainerDiv !== null) {
            itemNavs = $itemNavContainerDiv.find(navSelector);
            if (itemNavs.length > 0) {
                maxScroll = Math.ceil(itemNavContainerDiv.scrollWidth - itemNavContainerDiv.offsetWidth);
                if ($itemNavContainerDiv.data("guideNavScrollPos") === undefined) {
                    $itemNavContainerDiv.attr("data-guide-nav-scroll-pos", 0);
                }
                var navPos = $itemNavContainerDiv.data("guideNavScrollPos");
                if ('left' === scrollDirection) {
                    if (navPos - scrollStep >= 0) {
                        navPos = navPos - scrollStep;
                    }
                } else if ('right' === scrollDirection) {
                    if (navPos + scrollStep < itemNavs.length) {
                        navPos = navPos + scrollStep;
                    }
                }
                _.each(itemNavs, function (item, pos) {
                    if (pos < navPos) {
                        scrollWidth += $(item).outerWidth(true);
                    }
                });
                if (scrollWidth > maxScroll) {
                    currWidth = 0;
                    _.each(itemNavs, function (item, pos) {
                        if (pos <= navPos && currWidth <= maxScroll) {
                            currPos = pos;
                            currWidth += $(item).outerWidth(true);
                        }
                    });
                    navPos = currPos;
                    scrollWidth = currWidth;
                }
                $itemNavContainerDiv.data("guideNavScrollPos", navPos);
                $itemNavContainerDiv.scrollLeft(scrollWidth);
            }
        }
    };
})(window, $, guidelib);

/*handle scrolling of navigator*/
$(function ($) {
    $('body').on('click', '[data-guide-nav-scroll]', function () {
        var scrollDirection = $(this).data("guideNavScroll"),
            isModuleScroller = $(this).hasClass('adTabScroller'),
            listArray;
        if (isModuleScroller) {
            listArray = $(this).parent().find('.adTabbedItemTitleContainer');
        } else {
            listArray = $(this).parent().find('[id*="' + guidelib.util.GuideUtil.GUIDE_ITEM_NAV_CONTAINER_SUFFIX + '"]');
        }
        if (!_.isUndefined(listArray) && !_.isNull(listArray) && listArray.length > 0) {
            if (isModuleScroller) {
                guidelib.util.GuideUtil.navScroll(listArray[0], scrollDirection, 0, '.adTabbedItemTitle');
            } else {
                guidelib.util.GuideUtil.navScroll(listArray[0], scrollDirection, 0, '[id*="' + guidelib.util.GuideUtil.GUIDE_ITEM_NAV_SUFFIX + '"]:not(.hidden)');
            }
        }
    });

    //this should be changed back to $(document).ready(showHideNavScroll) instead of windows onload,
    //once jquery version is bumped
    $(window).on('load resize', guidelib.util.GuideUtil.showHideNavScroll);

});

/**
 * @package guidelib.util.Namespace
 * @version 0.0.1
 */
(function (guidelib) {
    guidelib.log = {
        /* put the Strings that need logging here. The key for the string should be
         * AEM-AF-901-XXX, where XXX is a three digit number with trailing zeroes.
         * Start with AEM-AF-901-020
         */
        LogStrings : {

        }
    };
}(guidelib));


/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/


(function ($, _, guidelib) {
    var LayoutBase = guidelib.view.ad.layout.LayoutBase = function (options) {
        this.options = _.extend({}, this.options, options);
        this.initialize.apply(this, arguments);
    };

    _.extend(LayoutBase.prototype, {
        initialize : function () {
        }
    });

    _.extend(LayoutBase, {
        extend : function (props) {
            var child = inherits(this, props);
            child.extend = this.extend;
            return child;
        }
    });

    
    var ctor = function () {};

    
    
    
    function inherits(parent, protoProps, staticProps) {
        var child;
        var _super = parent.prototype;
        
        
        
        if (protoProps && protoProps.hasOwnProperty('constructor')) {
            child = protoProps.constructor;
        } else {
            child = function () { parent.apply(this, arguments); };
        }

        
        _.extend(child, parent);

        
        
        ctor.prototype = parent.prototype;
        child.prototype = new ctor();
        child._super = parent.prototype;
        child._superClass = parent;

        
        
        if (protoProps) { 
            
            for (var name in protoProps) {
                if (name == "_defaults") {
                    protoProps[name] = _.extend({}, _super[name], protoProps[name]);
                }
                child.prototype[name] = protoProps[name];
            }
        }

        
        if (staticProps) {
            _.extend(child, staticProps);
        }

        
        child.prototype.constructor = child;

        
        child.__super__ = parent.prototype;

        return child;
    };

}($, _, window.guidelib));
(function ($, _, guidelib) {
    var LayoutStrategy = guidelib.view.ad.layout.LayoutStrategy = guidelib.view.ad.layout.LayoutBase.extend({

        layoutStrategy : "",

        initialize : function (options) {
            this.options = this.options || {};

            
            this.$element = this.options.$element;

            
            this.layoutConfigs = this.getStrategyLayoutConfigs(this.options.layoutConfigs || []);

            this.layoutInstances = [];
        },

        getStrategyLayoutConfigs : function (layoutConfigArray) {
            var strategyLayoutConfigs = [];
            _.each(layoutConfigArray, function (layoutConfig) {
                if (layoutConfig.layoutStrategy === this.layoutStrategy) {
                    strategyLayoutConfigs.push(layoutConfig);
                }
            }, this);
            return strategyLayoutConfigs;
        },

        applyLayoutConfig : function (layoutConfig, itemAndTitleArray, $container, containerId) {
            if (layoutConfig && layoutConfig.layoutName) {
                var layoutPlugin = eval(layoutConfig.layoutName),
                    layoutInstance;
                if (layoutPlugin) {
                    layoutInstance = new layoutPlugin({
                                        $element : this.$element,
                                        itemAndTitleArray : itemAndTitleArray,
                                        $container : $container,
                                        containerId : containerId,
                                        layoutColumns : layoutConfig.layoutColumns
                                    });
                    this.layoutInstances.push(layoutInstance);
                }
            }
        },

        done : function () {
            _.each(this.layoutInstances, function (layoutInstance, instanceIndex) {
                layoutInstance.done();
                this.layoutInstances[instanceIndex] = null;
            }, this);
        }
    });
}($, _, window.guidelib));
(function ($, _, guidelib) {
    var ContainerLayoutStrategy = guidelib.view.ad.layout.ContainerLayoutStrategy = guidelib.view.ad.layout.LayoutStrategy.extend({

        layoutStrategy : "adContainerStrategy",

        initialize : function (options) {
            ContainerLayoutStrategy._super.initialize.call(this, options);
            _.each(this.layoutConfigs, this.applyLayouts, this);
        },

        applyLayouts : function (layoutConfig, layoutConfigIndex) {
            var containerSelector,
                containerSelectorLevel,
                titleSelectors,
                itemSelector,
                containerArray;

            
            containerSelector = layoutConfig.containerSelector || 'ol,ul';

            
            containerSelectorLevel = (layoutConfig.containerSelectorLevel ? parseInt(layoutConfig.containerSelectorLevel) : layoutConfig.containerSelectorLevel) || 0;

            
            titleSelectors = this.getTitleSelectors(layoutConfig.titleSelector);

            
            itemSelector = layoutConfig.itemSelector || 'li';

            
            containerArray = this.getContainers(containerSelector, containerSelectorLevel);

            _.each(containerArray, function ($container, containerIndex) {
                var $items = $container.children(itemSelector),
                    itemAndTitleArray = [],
                    containerId;
                _.each($items, function (item, itemIndex) {
                    var $item = $(item),
                        $title = this.getTitle($(item), titleSelectors);
                    itemAndTitleArray.push({item : $item, title : $title});
                }, this);
                containerId = layoutConfigIndex + '-' + containerIndex;
                this.applyLayoutConfig(layoutConfig, itemAndTitleArray, $container, containerId);
            }, this);
        },

        
        getTitleSelectors : function (titleSelector) {
            var titleSelectors = [];
            if (titleSelector) {
                titleSelectors.push(titleSelector);
            }
            titleSelectors.push('h1');
            titleSelectors.push('h2');
            titleSelectors.push('h3');
            titleSelectors.push('h4');
            titleSelectors.push('h5');
            titleSelectors.push('h6');
            return titleSelectors;
        },

        
        getTitle : function ($item, titleSelectors) {
            var $candidateTitles = [],
                $title;
            for (var i = 0; i < titleSelectors.length; i++) {
                $candidateTitles = $item.find(titleSelectors[i]);
                if ($candidateTitles.length > 0) {
                    $title = $($candidateTitles[0]);
                    break;
                }
            }
            return $title;
        },

        
        getContainers : function (containerSelector, containerSelectorLevel) {
            var $itemContainers = this.$element.find(containerSelector),
                containerArray = [];
            
            $itemContainers.each(function (itemIndex, itemContainer) {
                var $itemContainer = $(itemContainer),
                    $itemContainerParents = $itemContainer.parents(containerSelector);
                
                if (containerSelectorLevel < 0 || ($itemContainerParents.length === containerSelectorLevel)) {
                    containerArray.push($itemContainer);
                }
            });
            return containerArray;
        }
    });
}($, _, window.guidelib));
(function ($, _, guidelib) {
    var DelimiterLayoutStrategy = guidelib.view.ad.layout.DelimiterLayoutStrategy = guidelib.view.ad.layout.LayoutStrategy.extend({

        layoutStrategy : "adDelimiterStrategy",
        
        standardDelimiters : ["h1", "h2", "h3", "h4", "h5", "h6"],

        standardLevels : ["first", "second", "third"],

        initialize : function (options) {

            DelimiterLayoutStrategy._super.initialize.call(this, options);

            
            this.delimiterSelectors = this.extractConfigDelimiters();

            if (this.layoutConfigs && this.layoutConfigs.length > 0) {
                this.applyLayouts(0, this.$element, 0);
            }
        },

        extractConfigDelimiters : function () {
            var prependStandardDelimiters = false,
                delimiters = [];
            _.each(this.layoutConfigs, function (layoutConfig) {
                var delimiter = layoutConfig.itemDelimiter;
                if ((this.standardLevels.indexOf(layoutConfig.layoutType) > -1 && !delimiter)
                    || this.standardDelimiters.indexOf(delimiter) > -1) {
                    prependStandardDelimiters = true;
                } else if (delimiter) {
                    
                    delimiters.push(delimiter);
                }
            }, this);
            if (prependStandardDelimiters) {
                delimiters = [].concat(this.standardDelimiters).concat(delimiters);
            }
            return delimiters;
        },

        getDelimiterLayoutConfig : function (delimiter, delimiterEncounter) {
            var delimiterLayoutConfig;
            _.each(this.layoutConfigs, function (layoutConfig) {
                _.each(this.standardLevels, function (standardLevel, index) {
                    if ((!layoutConfig.itemDelimiter && layoutConfig.layoutType === standardLevel && delimiterEncounter === index)
                            || (layoutConfig.itemDelimiter && layoutConfig.itemDelimiter === delimiter)) {
                        delimiterLayoutConfig = layoutConfig;
                    }
                }, this);
            }, this);
            return delimiterLayoutConfig;
        },

        
        applyLayouts : function (delimiterIndex, $element, delimiterEncounter) {
            var delimiter,
                itemAndTitleArray = [],
                $itemDelimiters,
                $items = [],
                $container = $element,
                layoutConfig,
                containerId;
            
            if (delimiterIndex >= this.delimiterSelectors.length) {
                return;
            }
            delimiter = this.delimiterSelectors[delimiterIndex];
            $itemDelimiters = $element.find(delimiter);
            
            if ($itemDelimiters && $itemDelimiters.length === 0) {
                return this.applyLayouts(delimiterIndex + 1, $element, delimiterEncounter);
            }

            layoutConfig = this.getDelimiterLayoutConfig(delimiter, delimiterEncounter);

            
            $itemDelimiters.each(function (index, itemDelimiter) {
                var $itemDelimiter = $(itemDelimiter),
                    $itemElements = $itemDelimiter.nextUntil(delimiter),
                    $item,
                    $title = $itemDelimiter;
                
                $itemElements.splice(0, 0, itemDelimiter);
                $itemElements.wrapAll('<div />');
                $item = $itemElements.parent();
                $items.push($item);
                if (layoutConfig && layoutConfig.titleSelector) {
                    var $titles = $item.find(layoutConfig.titleSelector);
                    if ($titles && $titles.length > 0) {
                        $title = $($titles[0]);
                    }
                }
                itemAndTitleArray.push({item : $item, title : $title});
            });

            if (layoutConfig) {
                containerId = layoutConfig.layoutType + '-' + delimiter;
                this.applyLayoutConfig(layoutConfig, itemAndTitleArray, $container, containerId);
            }

            _.each($items, function ($item) {
                this.applyLayouts(delimiterIndex + 1, $item, delimiterEncounter + 1);
            }, this);
        }
    });
}($, _, window.guidelib));
(function ($, _, guidelib) {
    var LayoutPlugin = guidelib.view.ad.layout.LayoutPlugin = guidelib.view.ad.layout.LayoutBase.extend({

        layoutName : "",

        initialize : function () {
            this.options = this.options || {};

            
            this.$element = this.options.$element;

            
            this.itemAndTitleArray = this.options.itemAndTitleArray;

            
            this.$container = this.getContainer(this.options.$container);
            this.$container.addClass(this.layoutName);

            
            this.containerId = this.options.containerId;

            this.itemClass = this.layoutName + 'Item';
            this.titleClass = this.layoutName + 'Title';
            this.itemTitleClass = this.layoutName + 'ItemTitle';

            this.$parentNavMenu = this.constructNavMenuContainer();

            this.addItemTitle();
        },

        
        done : function () {

        },

        
        getContainer : function ($optionsContainer) {
            return $optionsContainer;
        },

        
        constructNavMenuContainer : function () {
            var $parentContainer = this.$container.closest('[' + guidelib.util.GuideUtil.DATA_LAYOUT_ITEM_INDEX + ']'),
                parentContainerId,
                $parentListItem,
                itemNavId,
                itemNavContainerId,
                $parentNavMenu,
                $parentModule,
                parentModuleId,
                parentModuleNavContainerId,
                $parentModuleNavMenu;
            
            if ($parentContainer && $parentContainer.length > 0) {
                
                $parentModule = this.$container.parents('.guideAdModule').eq(0);
                if ($parentModule && $parentModule.length === 0) {
                    $parentModule = this.$container.parents('.guideAdModuleGroup').eq(0);
                }
                parentModuleId = $parentModule.data('guide-view-bind');
                parentModuleNavContainerId = parentModuleId + guidelib.util.GuideUtil.GUIDE_ITEM_NAV_CONTAINER_SUFFIX;
                $parentModuleNavMenu = $('[data-guide-id="' + parentModuleNavContainerId + '"]');
                parentContainerId = $parentContainer.attr(guidelib.util.GuideUtil.DATA_LAYOUT_ITEM_INDEX);
                itemNavContainerId = parentContainerId + guidelib.util.GuideUtil.GUIDE_ITEM_NAV_CONTAINER_SUFFIX;
                itemNavId = parentContainerId + guidelib.util.GuideUtil.GUIDE_ITEM_NAV_SUFFIX;
                $parentNavMenu = $parentModuleNavMenu.find('[data-guide-id="' + itemNavContainerId + '"]');
                if (!($parentNavMenu && $parentNavMenu.length > 0)) {
                    $parentListItem = $parentModuleNavMenu.find('[data-guide-id="' + itemNavId + '"]');
                    $parentNavMenu = $('<ul/>').attr('data-guide-id', itemNavContainerId);
                    $parentNavMenu.addClass('tab-navigators tab-navigators-mobile');
                    $parentListItem.append($parentNavMenu);
                }
            } else { 
                $parentContainer = this.$container.closest('.guideAdModule');
                if ($parentContainer && $parentContainer.length === 0) {
                    $parentContainer = this.$container.closest('.guideAdModuleGroup');
                }
                parentContainerId = $parentContainer.data('guide-view-bind');
                itemNavContainerId = parentContainerId + guidelib.util.GuideUtil.GUIDE_ITEM_NAV_CONTAINER_SUFFIX;
                $parentNavMenu = $('[data-guide-id="' + itemNavContainerId + '"]');
                $parentNavMenu.removeClass('hidden');
            }

            
            if (!($parentNavMenu && $parentNavMenu.length > 0)) {
                $parentNavMenu = undefined;
            }

            return $parentNavMenu;
        },

        
        constructItemTitle : function (itemAndTitle, index) {
            var $itemTitle = $('<' + this.layoutItemTitleType + '/>'),
                $title = itemAndTitle.title,
                $item = itemAndTitle.item,
                adIndex = 'ad-' + index,
                itemContentId = 'itemContent' + adIndex,
                itemTitleId = 'itemTitle' + adIndex;
            $item.addClass(this.itemClass);
            $itemTitle.attr('data-' + this.layoutName + '-id', adIndex);
            $itemTitle.addClass(this.itemTitleClass);
            $itemTitle.attr('tabindex', 0);
            if ($title && $title.length > 0) {
                $itemTitle.append($title.text());
                $title.addClass(this.titleClass);
            } else { 
                var itemHtml = $item.html().replace(/<br>|<p>|<\/p>|<div>|<\/div>/gi, ' ').replace(/ +/g, ' '),
                    itemText = $('<div/>').append(itemHtml).text(),
                    itemWordArray = itemText.split(' '),
                    itemTitleText = "";
                if (itemWordArray) {
                    if (itemWordArray.length > 4) {
                        itemTitleText = itemWordArray[0] + ' ' + itemWordArray[1] + ' ' + itemWordArray[2] + ' ' + itemWordArray[3];
                    } else {
                        itemTitleText = itemText;
                    }
                    $itemTitle.append(itemTitleText);
                }
            }
            $itemTitle.attr('title', $itemTitle.text());
            
            $item.attr('data-' + this.layoutName + '-content-id', adIndex);
            $item.attr(guidelib.util.GuideUtil.DATA_LAYOUT_ITEM_INDEX, this.containerId + adIndex);

            
            $item.attr('id', itemContentId);
            $itemTitle.attr('id', itemTitleId);
            $itemTitle.attr('role', 'tab').attr('aria-controls', itemContentId);
            $item.attr('role', 'tabpanel').attr('aria-labeledby', itemTitleId);

            itemAndTitle.item = $item;

            this.updateNavMenuForItem($item, $itemTitle, adIndex);
            return $itemTitle;
        },

        
        updateNavMenuForItem : function ($item, $itemTitle, adIndex) {
            if (this.$parentNavMenu) {
                var menuListItem = $('<li/>'),
                    menuListItemAnchor = $('<a/>'),
                    titleText = $itemTitle.text(),
                    navId = this.containerId + adIndex,
                    parentListItem,
                    prefixPath = '';
                menuListItem.attr('data-guide-id', navId + guidelib.util.GuideUtil.GUIDE_ITEM_NAV_SUFFIX);
                menuListItem.attr('title', titleText);
                parentListItem = this.$parentNavMenu.parents('li');
                if (parentListItem && parentListItem.length > 0) {
                    var closeseListItemPath = $(parentListItem[0]).data('path');
                    if (closeseListItemPath) {
                        prefixPath = closeseListItemPath;
                    }
                }
                menuListItem.attr('data-path', prefixPath + '/' + navId);
                menuListItemAnchor.attr('data-toggle', 'collapse');
                menuListItemAnchor.attr('data-target', '#guide-mobile-navigator');
                menuListItemAnchor.append(titleText);
                menuListItemAnchor.on('click', function () {
                    
                    menuListItem.siblings().removeClass('active');
                    
                    menuListItem.addClass('active');
                    $itemTitle.click();
                    $('body').animate({
                        scrollTop : $item.offset().top
                    }, 500);
                    $item.focus();
                });
                menuListItem.append(menuListItemAnchor);
                this.$parentNavMenu.append(menuListItem);
            }
        },

        
        constructItemTitleForOneActive : function (itemAndTitle, itemIndex) {
            var $itemTitle = this.constructItemTitle(itemAndTitle, itemIndex);
            if (itemIndex === 0) {
                this.makeItemTitleActive(itemAndTitle.item, $itemTitle);
            } else {
                this.unmarkItemTitleForOneActive(itemAndTitle.item, $itemTitle);
            }
            if (this.handleItemTitleClick) {
                $itemTitle.on('click', {layoutPlugin : this}, this.handleItemTitleClick);
                $itemTitle.keydown(this.handleItemTitleKeyDown);
            }
            return $itemTitle;
        },

        
        handleItemTitleKeyDown : function (event) {
            switch (event.keyCode) {
                case 32: 
                    $(this).trigger("click");
                    break;
            }
        },

        
        constructItemTitleContainer : function () {
            var $itemTitleContainer = $('<' + this.layoutItemTitleContainerType + '/>');
            $itemTitleContainer.addClass(this.layoutName + 'ItemTitleContainer').attr('data-' + this.layoutName + '-id', this.containerId);
            return $itemTitleContainer;
        },

        
        makeItemTitleActive : function ($item, $itemTitle) {
            $item.addClass('active').removeClass('hidden');
            $item.attr('aria-hidden', 'false');
            $itemTitle.addClass('active');
        },

        
        unmarkItemTitleActive : function ($item, $itemTitle) {
            $item.removeClass('active');
            $itemTitle.removeClass('active');
        },

        unmarkItemTitleForOneActive : function ($item, $itemTitle) {
            $item.addClass('hidden');
            $item.attr('aria-hidden', 'true');
            this.unmarkItemTitleActive($item, $itemTitle);
        }
    });
}($, _, window.guidelib));
(function ($, _, guidelib) {
    var TabLayoutPlugin = guidelib.view.ad.layout.TabLayoutPlugin = guidelib.view.ad.layout.LayoutPlugin.extend({
        layoutName : "adTabbed",
        layoutItemTitleType : "li",
        layoutItemTitleContainerType : "ul",

        addItemTitle : function () {
            var $itemTitleContainer = this.constructItemTitleContainer(),
                $itemTitleScrollerDiv = $('<div/>'),
                $leftScroll = $('<div/>').addClass('adTabScroller adTabLeft').attr('data-guide-nav-scroll', 'left'),
                $rightScroll = $('<div/>').addClass('adTabScroller adTabRight').attr('data-guide-nav-scroll', 'right');
            
            this.$container.attr('data-' + this.layoutName + '-content-id', 'ad-' + this.containerId);

            _.each(this.itemAndTitleArray, function (itemAndTitle, itemIndex) {
                var $itemTitle = this.constructItemTitleForOneActive(itemAndTitle, itemIndex);
                $itemTitleContainer.append($itemTitle);
            }, this);
            $itemTitleScrollerDiv.append($leftScroll).append($itemTitleContainer).append($rightScroll);
            this.$container.before($itemTitleScrollerDiv);
        },

        
        getContainer : function ($optionsContainer) {
            if (!$optionsContainer.is('ul') && !$optionsContainer.is('ol') && this.itemAndTitleArray && this.itemAndTitleArray.length > 0) {
                var firstItem = this.itemAndTitleArray[0].item[0],
                    $itemParent = $(firstItem).parent(),
                    allChildren = $itemParent.children(),
                    filteredList = [],
                    addToFilterList = false;
                _.each(allChildren, function (containerChild) {
                    if (firstItem == containerChild) {
                        addToFilterList = true;
                    }
                    if (addToFilterList) {
                        filteredList.push(containerChild);
                    }
                });
                return $(filteredList).wrapAll('<div />').parent();
            }
            return $optionsContainer;
        },

        handleItemTitleClick : function (event) {
            var $itemTitle = $(this);
            if (!$itemTitle.hasClass('active')) {
                var layoutPlugin = event.data.layoutPlugin,
                    dataAttrtName = 'data-' + layoutPlugin.layoutName.toLowerCase() + '-content-id',
                    dataAttrValueItem = $itemTitle.data(layoutPlugin.layoutName.toLowerCase() + '-id'),
                    $itemTitleContainer = $itemTitle.parent(layoutPlugin.layoutItemTitleContainerType),
                    dataAttrValueItemContainer = $itemTitleContainer.data(layoutPlugin.layoutName.toLowerCase() + '-id'),
                    $itemContainer = $itemTitleContainer.parent().siblings('[' + dataAttrtName + '="ad-' + dataAttrValueItemContainer + '"]'),
                    $item = $itemContainer.children('[' + dataAttrtName + '="' + dataAttrValueItem + '"]'),
                    list,
                    scrollPos,
                    navPos,
                    scrollDirection,
                    scrollStep;
                layoutPlugin.unmarkItemTitleForOneActive($itemContainer.children('.active'), $itemTitleContainer.children('.active'));
                layoutPlugin.makeItemTitleActive($item, $itemTitle);
                list = $itemTitleContainer.eq(0);
                if (_.isUndefined(list.data("guideNavScrollPos"))) {
                    list.data("guideNavScrollPos", 0);
                }
                scrollPos = list.data("guideNavScrollPos");
                
                navPos = parseInt($itemTitle.data('adtabbedId').substr(3));
                if (navPos > scrollPos) {
                    scrollDirection = "right";
                } else {
                    scrollDirection = "left";
                }
                scrollStep = Math.abs(navPos - scrollPos);
                guidelib.util.GuideUtil.navScroll(list, scrollDirection, scrollStep, '.adTabbedItemTitle');
                guidelib.util.GuideUtil.showHideNavScroll();
            }
        },

        done : function () {
            var parentCard = this.$container.parents('.' + this.layoutName);
            
            if (!(parentCard && parentCard.length > 0)) {
                guidelib.util.GuideUtil.showHideNavScroll();
            }
        }
    });
}($, _, window.guidelib));

(function ($, _, guidelib) {
    var AccordionLayoutPlugin = guidelib.view.ad.layout.AccordionLayoutPlugin = guidelib.view.ad.layout.LayoutPlugin.extend({
        layoutName : "adAccordion",
        layoutItemTitleType : "div",

        addItemTitle : function () {
            _.each(this.itemAndTitleArray, function (itemAndTitle, itemIndex) {
                var $item = itemAndTitle.item,
                    $itemTitle;
                
                if ($item.is('li')) {
                    $item.wrapInner('<div />');
                    $item = $item.children('div');
                    itemAndTitle.item = $item;
                }
                $itemTitle = this.constructItemTitleForOneActive(itemAndTitle, itemIndex);
                $item.before($itemTitle);
            }, this);
        },

        handleItemTitleClick : function (event) {
            var $itemTitle = $(this),
                layoutPlugin = event.data.layoutPlugin,
                dataAttrtName = 'data-' + layoutPlugin.layoutName.toLowerCase() + '-content-id',
                dataAttrValue = $itemTitle.data(layoutPlugin.layoutName.toLowerCase() + '-id'),
                $itemContainer = $itemTitle.parent(),
                $item = $itemContainer.children('[' + dataAttrtName + '="' + dataAttrValue + '"]'),
                $prevActiveItemTitle,
                $prevActiveItem;
            if (!$itemTitle.hasClass('active')) {
                if ($itemContainer.is("li")) {
                    $itemContainer = $itemContainer.parent().children(); 
                }
                $prevActiveItem = $itemContainer.children('.active[' + dataAttrtName + ']'); 
                $prevActiveItemTitle = $itemContainer.children('.active'); 
                layoutPlugin.unmarkItemTitleForOneActive($prevActiveItem, $prevActiveItemTitle);
                layoutPlugin.makeItemTitleActive($item, $itemTitle);
            } else {
                $itemTitle.removeClass('active');
                $item.toggleClass('hidden');
            }
        }
    });
}($, _, window.guidelib));


(function ($, _, guidelib) {
    var AnchorLayoutPlugin = guidelib.view.ad.layout.AnchorLayoutPlugin = guidelib.view.ad.layout.LayoutPlugin.extend({
        layoutName : "adAnchor",
        layoutItemTitleType : "a",
        layoutItemTitleContainerType : "ul",

        initialize : function (options) {
            
            this.mergeWithParent = this.options.mergeWithParent || true;
            AnchorLayoutPlugin._super.initialize.call(this, options);
        },

        addItemTitle : function () {
            var $itemTitleContainer = this.constructItemTitleContainer(),
                titleClassSelector = '.' + this.titleClass,
                dataUidAttr = 'data-' + this.layoutName + '-uid';
            
            this.$container.attr('data-' + this.layoutName + '-content-id', 'ad-' + this.containerId);

            _.each(this.itemAndTitleArray, function (itemAndTitle, itemIndex) {
                var $item = itemAndTitle.item,
                    $itemTitle = this.constructItemTitle(itemAndTitle, itemIndex),
                    itemUid =  this.containerId + 'data-' + itemIndex + '-val-' + $itemTitle.html(),
                    $itemAnchor,
                    $title;
                $item.attr(dataUidAttr, itemUid);
                $itemTitle.attr('href', '#' + itemUid);
                $itemTitle.wrap('<li/>');
                if (this.$titles) {
                    $title = $(this.$titles[itemIndex]);
                } else {
                    $title = $item.find(titleClassSelector);
                }
                $itemAnchor = $('<a/>').attr('name', itemUid);
                if ($title && $title.length > 0) {
                    $title.before($itemAnchor);
                } else {
                    $item.prepend($itemAnchor);
                }
                $itemTitleContainer.append($itemTitle.parent());
            }, this);

            if (this.mergeWithParent) {
                var $parentAnchorItem = this.$container.closest('[' + dataUidAttr + ']'),
                    $anchorList,
                    uidCondition,
                    $parentAnchor;
                if ($parentAnchorItem && $parentAnchorItem.length > 0) {
                    $anchorList = this.$element.siblings('.' + this.layoutName + 'ItemTitleContainer');
                    uidCondition = '[href="#' + $parentAnchorItem.attr(dataUidAttr) + '"]';
                    $parentAnchor = $anchorList.find(uidCondition);
                    if ($parentAnchor && $parentAnchor.length > 0) {
                        $parentAnchor.parent().append($itemTitleContainer);
                    }
                } else {
                    
                    this.$element.before($itemTitleContainer);
                }
            } else {
                this.$container.before($itemTitleContainer);
            }
        }
    });
}($, _, window.guidelib));

(function ($, _, guidelib) {
    var CardLayoutPlugin = guidelib.view.ad.layout.CardLayoutPlugin = guidelib.view.ad.layout.LayoutPlugin.extend({
        layoutName : "adCard",
        layoutItemTitleType : "div",
        layoutColumns : 2,

        initialize : function (options) {
            
            if (this.options.layoutColumns && this.options.layoutColumns !== null) {
                this.layoutColumns = parseInt(this.options.layoutColumns);
            }
            CardLayoutPlugin._super.initialize.call(this, options);
        },

        addItemTitle : function () {
            _.each(this.itemAndTitleArray, function (itemAndTitle, itemIndex) {
                var $itemTitle = this.constructItemTitle(itemAndTitle, itemIndex);
                itemAndTitle.item.prepend($itemTitle);
            }, this);
        },

        expandCard : function (event) {
            var context = event.data.context,
                $this = $(this),
                $cardItem = $this.closest('.' + context.itemClass);
            $this.toggleClass('adCardCollapse');
            $cardItem.toggleClass('adCardFull');
        },

        getExpandCard : function () {
            var $expand = $('<div/>').addClass('adCardExpand').on('click', {context : this}, this.expandCard),
                $expandShade = $('<div/>').addClass('adCardShade'),
                $expandIcon = $('<div/>').addClass('adCardIcon');
            $expand.append($expandShade, $expandIcon);
            return $expand;
        },

        done : function () {
            var parentCard = this.$container.parents('.' + this.layoutName);
            
            if (!(parentCard && parentCard.length > 0)) {
                var $expand = this.getExpandCard(),
                    $cardContainer = this.itemAndTitleArray[0].item.closest('.' + this.layoutName);
                
                $cardContainer.find('.' + this.itemClass).append($expand);

                if (this.layoutColumns > 1) {
                    var $cardDesktopContainer = $('<div/>').addClass('adCardDesktop').attr('data-adCardCol', this.layoutColumns),
                        divColArray = [],
                        itemList;

                    for (var i = 0; i < this.layoutColumns; i++) {
                        var $divCol = $('<div/>').attr('data-adCardColNum', i);
                        divColArray.push($divCol);
                    }

                    itemList = $cardContainer.children('.' + this.itemClass);
                    _.each(itemList, function (item, itemIndex) {
                        var $item = $(item),
                            colIndex = itemIndex % this.layoutColumns;
                        divColArray[colIndex].append($item.clone(true));
                        $item.addClass('adCardMobile');
                    }, this);

                    for (i = 0; i < this.layoutColumns; i++) {
                        $cardDesktopContainer.append(divColArray[i]);
                    }

                    $cardContainer.append($cardDesktopContainer);
                }
            }
        }
    });
}($, _, window.guidelib));


/*
 * **********************************************************************
 *  ADOBE CONFIDENTIAL
 *  __________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 *  NOTICE:  All information contained herein is, and remains
 *  the property of Adobe Systems Incorporated and its suppliers,
 *  if any.  The intellectual and technical concepts contained
 *  herein are proprietary to Adobe Systems Incorporated and its
 *  suppliers and may be covered by U.S. and Foreign Patents,
 *  patents in process, and are protected by trade secret or copyright law.
 *  Dissemination of this information or reproduction of this material
 *  is strictly forbidden unless prior written permission is obtained
 *  from Adobe Systems Incorporated.
 *  **********************************************************************
 */

(function (window, $, guidelib) {
    guidelib.util.AdUtil = {
        descriptionPlugin : function () {
            if (_.isFunction($.prototype.tooltip)) {
                $(this).find('[data-description]').tooltip({
                    title : function () {
                        //using browser native 'decodeURIComponent' as that is what is used for encoding in CM
                        return decodeURIComponent($(this).data('description'));
                    },
                    placement : 'top',
                    html : true
                });
            }
        },

        applyLayouts : function (options) {
            var strategies = [];
            strategies.push(new guidelib.view.ad.layout.DelimiterLayoutStrategy(options));
            strategies.push(new guidelib.view.ad.layout.ContainerLayoutStrategy(options));
            _.each(strategies, function (strategy, index) {
                strategy.done();
                strategies[index] = null;
            });
        },

        applyDescriptionPlugin : function () {
            $('.guideAdModule, .guideAdModuleGroup').one('mouseenter', guidelib.util.AdUtil.descriptionPlugin);
        }
    };
}(window, $, guidelib));

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

(function (guidelib) {
    guidelib.i18n = {
        "calendarSymbols" : {
            "monthNames" : ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "abbrmonthNames" : ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "dayNames" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "abbrdayNames" : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "meridiemNames" : ["AM", "PM"],
            "eraNames" : ["BC", "AD"]
        },
        "datePatterns" : {
            "full" : "EEEE D MMMM YYYY",
            "long" : "D MMMM YYYY",
            "med" : "DD-MMM-YY",
            "short" : "DD/MM/YY"
        },
        "timePatterns" : {
            "full" : "h:MM:SS A Z",
            "long" : "h:MM:SS A Z",
            "med" : "h:MM:SS A",
            "short" : "h:MM A"
        },
        "dateTimeSymbols" : "GyMdkHmsSEDFwWahKzZ",
        "numberPatterns" : {
            "numeric" : "z,zz9.zzz",
            "currency" : "$ z,zz9.99",
            "percent" : "z,zz9%"
        },
        "numberSymbols" : {
            "decimal" : ".",
            "grouping" : ",",
            "percent" : "%",
            "minus" : "-",
            "zero" : "0"
        },
        "currencySymbols" : {
            "symbol" : "$",
            "isoname" : "USD",
            "decimal" : "."
        },
        "typefaces" : {}
    };
}(guidelib));

/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * __________________
 *
 *  Copyright 2014 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and may be covered by U.S. and Foreign Patents,
 * patents in process, and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

(function (guidelib) {
    guidelib.i18n.strings = {

        "LostInternetConnection" : "Current functionality needs internet connectivity to work. Please connect your " +
                                   "device to the internet." , //Added in AEM 6.0 SP1
        "ESignDisabled" : "The privileges to sign the filled form are not available to you. Please, continue to the " +
                          "next action or submit the form.",
        "VerifyDisabled" : "The privileges to verify the filled data are not available to you. Please, continue to " +
                            "the next action or submit the form.",
        "validatingForm" : "Validating...",
        "submittingForm" : "Submitting...",
        "generatingSignAgreement" : "Preparing document for signature",
        "maxValErrorMessage" : "The value must be less than or equal to {0}",
        "exclusiveMaxValErrorMessage" : "The value must be strictly less than {0}",
        "minValErrorMessage" : "The value must be greater than or equal to {0}",
        "exclusiveMinValErrorMessage" : "The value must be strictly greater than {0}",
        "minimumLengthMessage" : "The number of characters must be greater than or equal to {0}",
        "totalLengthMessage" : "The number of characters must be equal to {0}",
        "totalDigitMessage" : "The number of digits must be less than or equal to {0}",
        "formAlreadySigned" : "The Form has been signed.",
        "formAlreadySubmitted" : "The Form has been submitted.",
        "datatypeMessage" : "The value must be of {0} datatype."
    };
    /* Do not put any new message here. Use the guidelib.i18n.strings object */
    guidelib.i18n.LogMessages = {
        "AEM-AF-901-001"   :   "[AEM-AF-901-001]: Error in retrieving the form state.",
        "AEM-AF-901-003"   :   "[AEM-AF-901-003]: Unable to connect to the server.",
        "AEM-AF-901-004"   :   "[AEM-AF-901-004]: Encountered an internal error while submitting the form.",
        "AEM-AF-901-005"   :   " This Field is a required field.",
        "AEM-AF-901-006"   :   " There is a validation error in the field.",
        "AEM-AF-901-007"   :   " Field not filled in expected format.",
        "AEM-AF-901-008"   :   " Server is not reachable",
        "AEM-AF-901-009"   :   " Error occurred while draft saving",
        "AEM-AF-901-010"   :   "Verify works only with XFA-based Adaptive Forms.",
        "AEM-AF-901-011"   :   "Failed to restore the form state.",
        "AEM-AF-901-012"   :   "Failed to retrieve the form state.",
        "AEM-AF-901-013"   :   "User email undefined. Unable to generate signable PDF.",
        "AEM-AF-901-014"   :   "XDP title or Guide title undefined. Unable to generate signable PDF.",
        "AEM-AF-901-015"   :   "Error while submitting the guide: ",
        "AEM-AF-901-016"   :   "No signing field in the form. Please continue!",
        "AEM-AF-901-017"   :   "Failed to obtain data XML from HTML form: ",
        "AEM-AF-901-018"   :   "Please sign all the mandatory fields",
        "AEM-AF-901-019"   :   "Please esign the form.",
        "AEM-AF-901-020"   :   "Submitting the form...",
        "AEM-AF-901-021"   :   "Verify Component works only for XDP based DoR template.",
        "AEM-AF-901-022"   :   "The document is ready for signing but could not be loaded. We have sent the document to your email. Check your email to continue signing."
    };
}(guidelib));

