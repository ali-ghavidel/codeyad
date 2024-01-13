!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("redux")):"function"==typeof define&&define.amd?define(["react","redux"],e):"object"==typeof exports?exports.ReactRedux=e(require("react"),require("redux")):t.ReactRedux=e(t.React,t.Redux)}(this,function(t,e){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0,e.connect=e.connectAdvanced=e.Provider=void 0;var o=n(8),i=r(o),s=n(3),u=r(s),a=n(9),p=r(a);e.Provider=i.default,e.connectAdvanced=u.default,e.connect=p.default},function(t,e){"use strict";function n(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t);try{throw Error(t)}catch(t){}}e.__esModule=!0,e.default=n},function(e,n){e.exports=t},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function u(t,e){var n={};for(var r in t)e.indexOf(r)<0&&Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function a(t){var e,n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.getDisplayName,c=void 0===a?function(t){return"ConnectAdvanced("+t+")"}:a,d=r.methodName,v=void 0===d?"connectAdvanced":d,b=r.renderCountProp,O=void 0===b?void 0:b,w=r.shouldHandleStateChanges,g=void 0===w||w,S=r.storeKey,T=void 0===S?"store":S,M=r.withRef,_=void 0!==M&&M,x=u(r,["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef"]),C=T+"Subscription",j=m++,E=(e={},e[T]=P.default,e[C]=h.PropTypes.instanceOf(y.default),e),q=(n={},n[C]=h.PropTypes.instanceOf(y.default),n);return function(e){(0,l.default)("function"==typeof e,"You must pass a component to the function returned by connect. Instead received "+e);var n=e.displayName||e.name||"Component",r=c(n),u=p({},x,{getDisplayName:c,methodName:v,renderCountProp:O,shouldHandleStateChanges:g,storeKey:T,withRef:_,displayName:r,wrappedComponentName:n,WrappedComponent:e}),a=function(n){function a(t,e){o(this,a);var s=i(this,n.call(this,t,e));return s.version=j,s.state={},s.renderCount=0,s.store=s.props[T]||s.context[T],s.parentSub=t[C]||e[C],s.setWrappedInstance=s.setWrappedInstance.bind(s),(0,l.default)(s.store,'Could not find "'+T+'" in either the context or '+('props of "'+r+'". ')+"Either wrap the root component in a <Provider>, "+('or explicitly pass "'+T+'" as a prop to "'+r+'".')),s.getState=s.store.getState.bind(s.store),s.initSelector(),s.initSubscription(),s}return s(a,n),a.prototype.getChildContext=function(){var t;return t={},t[C]=this.subscription,t},a.prototype.componentDidMount=function(){g&&(this.subscription.trySubscribe(),this.selector.run(this.props),this.selector.shouldComponentUpdate&&this.forceUpdate())},a.prototype.componentWillReceiveProps=function(t){this.selector.run(t)},a.prototype.shouldComponentUpdate=function(){return this.selector.shouldComponentUpdate},a.prototype.componentWillUnmount=function(){this.subscription&&this.subscription.tryUnsubscribe(),this.subscription=null,this.store=null,this.parentSub=null,this.selector.run=function(){}},a.prototype.getWrappedInstance=function(){return(0,l.default)(_,"To access the wrapped instance, you need to specify "+("{ withRef: true } in the options argument of the "+v+"() call.")),this.wrappedInstance},a.prototype.setWrappedInstance=function(t){this.wrappedInstance=t},a.prototype.initSelector=function(){var e=this.store.dispatch,n=this.getState,r=t(e,u),o=this.selector={shouldComponentUpdate:!0,props:r(n(),this.props),run:function(t){try{var e=r(n(),t);(o.error||e!==o.props)&&(o.shouldComponentUpdate=!0,o.props=e,o.error=null)}catch(t){o.shouldComponentUpdate=!0,o.error=t}}}},a.prototype.initSubscription=function(){var t=this;g&&!function(){var e=t.subscription=new y.default(t.store,t.parentSub),n={};e.onStateChange=function(){this.selector.run(this.props),this.selector.shouldComponentUpdate?(this.componentDidUpdate=function(){this.componentDidUpdate=void 0,e.notifyNestedSubs()},this.setState(n)):e.notifyNestedSubs()}.bind(t)}()},a.prototype.isSubscribed=function(){return!!this.subscription&&this.subscription.isSubscribed()},a.prototype.addExtraProps=function(t){if(!_&&!O)return t;var e=p({},t);return _&&(e.ref=this.setWrappedInstance),O&&(e[O]=this.renderCount++),e},a.prototype.render=function(){var t=this.selector;if(t.shouldComponentUpdate=!1,t.error)throw t.error;return(0,h.createElement)(e,this.addExtraProps(t.props))},a}(h.Component);return a.WrappedComponent=e,a.displayName=r,a.childContextTypes=q,a.contextTypes=E,a.propTypes=E,(0,f.default)(a,e)}}e.__esModule=!0;var p=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.default=a;var c=n(17),f=r(c),d=n(18),l=r(d),h=n(2),v=n(15),y=r(v),b=n(5),P=r(b),m=0},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t){return function(e,n){function r(){return o}var o=t(e,n);return r.dependsOnOwnProps=!1,r}}function i(t){return null!==t.dependsOnOwnProps&&void 0!==t.dependsOnOwnProps?!!t.dependsOnOwnProps:1!==t.length}function s(t,e){return function(e,n){var r=function(t,e){return r.dependsOnOwnProps?r.mapToProps(t,e):r.mapToProps(t)};return r.dependsOnOwnProps=i(t),r.mapToProps=function(e,n){r.mapToProps=t;var o=r(e,n);return"function"==typeof o&&(r.mapToProps=o,r.dependsOnOwnProps=i(o),o=r(e,n)),o},r}}e.__esModule=!0,e.wrapMapToPropsConstant=o,e.getDependsOnOwnProps=i,e.wrapMapToPropsFunc=s;var u=n(6);r(u)},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2);e.default=r.PropTypes.shape({subscribe:r.PropTypes.func.isRequired,dispatch:r.PropTypes.func.isRequired,getState:r.PropTypes.func.isRequired})},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){(0,s.default)(t)||(0,a.default)(n+"() in "+e+" must return a plain object. Instead received "+t+".")}e.__esModule=!0,e.default=o;var i=n(27),s=r(i),u=n(1),a=r(u)},function(t,e,n){var r=n(25),o=r.Symbol;t.exports=o},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0,e.default=void 0;var u=n(2),a=n(5),p=r(a),c=n(1),f=(r(c),function(t){function e(n,r){o(this,e);var s=i(this,t.call(this,n,r));return s.store=n.store,s}return s(e,t),e.prototype.getChildContext=function(){return{store:this.store}},e.prototype.render=function(){return u.Children.only(this.props.children)},e}(u.Component));e.default=f,f.propTypes={store:p.default.isRequired,children:u.PropTypes.element.isRequired},f.childContextTypes={store:p.default.isRequired},f.displayName="Provider"},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)<0&&Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t,e,n){for(var r=e.length-1;r>=0;r--){var o=e[r](t);if(o)return o}return function(e,r){throw Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+r.wrappedComponentName+".")}}function s(t,e){return t===e}function u(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.connectHOC,n=void 0===e?c.default:e,r=t.mapStateToPropsFactories,u=void 0===r?y.default:r,p=t.mapDispatchToPropsFactories,f=void 0===p?h.default:p,l=t.mergePropsFactories,v=void 0===l?P.default:l,b=t.selectorFactory,m=void 0===b?O.default:b;return function(t,e,r){var p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=p.pure,l=void 0===c||c,h=p.areStatesEqual,y=void 0===h?s:h,b=p.areOwnPropsEqual,P=void 0===b?d.default:b,O=p.areStatePropsEqual,w=void 0===O?d.default:O,g=p.areMergedPropsEqual,S=void 0===g?d.default:g,T=o(p,["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"]),M=i(t,u,"mapStateToProps"),_=i(e,f,"mapDispatchToProps"),x=i(r,v,"mergeProps");return n(m,a({methodName:"connect",getDisplayName:function(t){return"Connect("+t+")"},shouldHandleStateChanges:!!t,initMapStateToProps:M,initMapDispatchToProps:_,initMergeProps:x,pure:l,areStatesEqual:y,areOwnPropsEqual:P,areStatePropsEqual:w,areMergedPropsEqual:S},T))}}e.__esModule=!0;var a=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.createConnect=u;var p=n(3),c=r(p),f=n(16),d=r(f),l=n(10),h=r(l),v=n(11),y=r(v),b=n(12),P=r(b),m=n(13),O=r(m);e.default=u()},function(t,e,n){"use strict";function r(t){return"function"==typeof t?(0,u.wrapMapToPropsFunc)(t,"mapDispatchToProps"):void 0}function o(t){return t?void 0:(0,u.wrapMapToPropsConstant)(function(t){return{dispatch:t}})}function i(t){return t&&"object"==typeof t?(0,u.wrapMapToPropsConstant)(function(e){return(0,s.bindActionCreators)(t,e)}):void 0}e.__esModule=!0,e.whenMapDispatchToPropsIsFunction=r,e.whenMapDispatchToPropsIsMissing=o,e.whenMapDispatchToPropsIsObject=i;var s=n(28),u=n(4);e.default=[r,o,i]},function(t,e,n){"use strict";function r(t){return"function"==typeof t?(0,i.wrapMapToPropsFunc)(t,"mapStateToProps"):void 0}function o(t){return t?void 0:(0,i.wrapMapToPropsConstant)(function(){return{}})}e.__esModule=!0,e.whenMapStateToPropsIsFunction=r,e.whenMapStateToPropsIsMissing=o;var i=n(4);e.default=[r,o]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){return a({},n,t,e)}function i(t){return function(e,n){var r=n.pure,o=n.areMergedPropsEqual,i=!1,s=void 0;return function(e,n,u){var a=t(e,n,u);return i?r&&o(a,s)||(s=a):(i=!0,s=a),s}}}function s(t){return"function"==typeof t?i(t):void 0}function u(t){return t?void 0:function(){return o}}e.__esModule=!0;var a=Object.assign||function(t){for(var e=1;arguments.length>e;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.defaultMergeProps=o,e.wrapMergePropsFunc=i,e.whenMergePropsIsFunction=s,e.whenMergePropsIsOmitted=u;var p=n(6);r(p);e.default=[s,u]},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e){var n={};for(var r in t)e.indexOf(r)<0&&Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}function i(t,e,n,r){return function(o,i){return n(t(o,i),e(r,i),i)}}function s(t,e,n,r,o){function i(o,i){return h=o,v=i,y=t(h,v),b=e(r,v),P=n(y,b,v),l=!0,P}function s(){return y=t(h,v),e.dependsOnOwnProps&&(b=e(r,v)),P=n(y,b,v)}function u(){return t.dependsOnOwnProps&&(y=t(h,v)),e.dependsOnOwnProps&&(b=e(r,v)),P=n(y,b,v)}function a(){var e=t(h,v),r=!d(e,y);return y=e,r&&(P=n(y,b,v)),P}function p(t,e){var n=!f(e,v),r=!c(t,h);return h=t,v=e,n&&r?s():n?u():r?a():P}var c=o.areStatesEqual,f=o.areOwnPropsEqual,d=o.areStatePropsEqual,l=!1,h=void 0,v=void 0,y=void 0,b=void 0,P=void 0;return function(t,e){return l?p(t,e):i(t,e)}}function u(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,u=e.initMergeProps,a=o(e,["initMapStateToProps","initMapDispatchToProps","initMergeProps"]),p=n(t,a),c=r(t,a),f=u(t,a),d=a.pure?s:i;return d(p,c,f,t,a)}e.__esModule=!0,e.impureFinalPropsSelectorFactory=i,e.pureFinalPropsSelectorFactory=s,e.default=u;var a=n(14);r(a)},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(t,e,n){if(!t)throw Error("Unexpected value for "+e+" in "+n+".");"mapStateToProps"!==e&&"mapDispatchToProps"!==e||t.hasOwnProperty("dependsOnOwnProps")||(0,u.default)("The selector for "+e+" of "+n+" did not specify a value for dependsOnOwnProps.")}function i(t,e,n,r){o(t,"mapStateToProps",r),o(e,"mapDispatchToProps",r),o(n,"mergeProps",r)}e.__esModule=!0,e.default=i;var s=n(1),u=r(s)},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(){var t=[],e=[];return{clear:function(){e=o,t=o},notify:function(){for(var n=t=e,r=0;n.length>r;r++)n[r]()},subscribe:function(n){var r=!0;return e===t&&(e=t.slice()),e.push(n),function(){r&&t!==o&&(r=!1,e===t&&(e=t.slice()),e.splice(e.indexOf(n),1))}}}}e.__esModule=!0;var o=null,i=function(){function t(e,o){n(this,t),this.subscribe=o?o.addNestedSub.bind(o):e.subscribe.bind(e),this.unsubscribe=null,this.listeners=r()}return t.prototype.addNestedSub=function(t){return this.trySubscribe(),this.listeners.subscribe(t)},t.prototype.notifyNestedSubs=function(){this.listeners.notify()},t.prototype.isSubscribed=function(){return!!this.unsubscribe},t.prototype.trySubscribe=function(){this.unsubscribe||(this.unsubscribe=this.subscribe(this.onStateChange))},t.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.listeners.clear()),this.unsubscribe=null,this.subscribe=null,this.listeners={notify:function(){}}},t}();e.default=i},function(t,e){"use strict";function n(t,e){if(t===e)return!0;var n=0,o=0;for(var i in t){if(r.call(t,i)&&t[i]!==e[i])return!1;n++}for(var s in e)r.call(e,s)&&o++;return n===o}e.__esModule=!0,e.default=n;var r=Object.prototype.hasOwnProperty},function(t,e){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},o="function"==typeof Object.getOwnPropertySymbols;t.exports=function(t,e,i){if("string"!=typeof e){var s=Object.getOwnPropertyNames(e);o&&(s=s.concat(Object.getOwnPropertySymbols(e)));for(var u=0;s.length>u;++u)if(!(n[s[u]]||r[s[u]]||i&&i[s[u]]))try{t[s[u]]=e[s[u]]}catch(t){}}return t}},function(t,e,n){"use strict";var r=function(t,e,n,r,o,i,s,u){if(!t){var a;if(void 0===e)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,r,o,i,s,u],c=0;a=Error(e.replace(/%s/g,function(){return p[c++]})),a.name="Invariant Violation"}throw a.framesToPop=1,a}};t.exports=r},function(t,e,n){function r(t){return null==t?void 0===t?a:u:(t=Object(t),p&&p in t?i(t):s(t))}var o=n(7),i=n(22),s=n(23),u="[object Null]",a="[object Undefined]",p=o?o.toStringTag:void 0;t.exports=r},function(t,e){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(e,function(){return this}()||Function("return this")())},function(t,e,n){var r=n(24),o=r(Object.getPrototypeOf,Object);t.exports=o},function(t,e,n){function r(t){var e=s.call(t,a),n=t[a];try{t[a]=void 0;var r=!0}catch(t){}var o=u.call(t);return r&&(e?t[a]=n:delete t[a]),o}var o=n(7),i=Object.prototype,s=i.hasOwnProperty,u=i.toString,a=o?o.toStringTag:void 0;t.exports=r},function(t,e){function n(t){return o.call(t)}var r=Object.prototype,o=r.toString;t.exports=n},function(t,e){function n(t,e){return function(n){return t(e(n))}}t.exports=n},function(t,e,n){var r=n(20),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},function(t,e){function n(t){return null!=t&&"object"==typeof t}t.exports=n},function(t,e,n){function r(t){if(!s(t)||o(t)!=u)return!1;var e=i(t);if(null===e)return!0;var n=f.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==d}var o=n(19),i=n(21),s=n(26),u="[object Object]",a=Function.prototype,p=Object.prototype,c=a.toString,f=p.hasOwnProperty,d=c.call(Object);t.exports=r},function(t,n){t.exports=e}])});