(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return r});var a=n(180),r="1504876043";t.default=a.a},169:function(e,t,n){var a=n(11);a(a.P,"Array",{fill:n(176)}),n(34)("fill")},172:function(e,t,n){"use strict";n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(170),s=n.n(l),c=(n(173),function(e){var t=e.id,n=e.title,a=e.ingress,i=e.children,o=e.dark,l=void 0!==o&&o,c=e.style,u=e.icon,f=e.className;return r.a.createElement("section",{id:t,className:"section "+f,style:Object.assign({backgroundColor:l?"#333":"#fff",color:l?"#fff":"#333"},c)},r.a.createElement("div",{style:{height:"auto",margin:"auto",width:"100%",maxWidth:"1024px"}},u&&r.a.createElement("img",{style:{maxWidth:"200px"},src:u,alt:"Ikon for "+n}),n&&r.a.createElement(s.a,null,r.a.createElement("h1",{className:"section__header"},n)),a&&r.a.createElement(s.a,null,r.a.createElement("h5",{className:"section__ingress"},a)),i))});c.propTypes={id:o.a.string,title:o.a.string,ingress:o.a.string,children:o.a.element,dark:o.a.bool,className:o.a.string},t.a=c},173:function(e,t,n){},174:function(e,t,n){"use strict";n.d(t,"b",function(){return d}),n.d(t,"c",function(){return g}),n.d(t,"a",function(){return m});n(32);var a=n(187),r=n.n(a),i=n(0),o=n.n(i),l=n(4),s=n.n(l),c=n(181),u=n(175),f=n.n(u),d=function(e){var t=e.text,n=e.to,a=e.className,i=e.children,l=r()(e,["text","to","className","children"]);return o.a.createElement(c.Link,Object.assign({to:n,className:(a||"")+" "+f.a.buttonLight},l),t||i)},g=function(e){var t=e.text,n=e.href,a=e.className,i=e.children,l=r()(e,["text","href","className","children"]);return o.a.createElement("a",Object.assign({href:n,className:(a||"")+" "+f.a.buttonLight},l),t||i)};d.propTypes={text:s.a.string.isRequired};var m=function(e){var t=e.text,n=e.to,a=e.className,i=e.children,l=r()(e,["text","to","className","children"]);return o.a.createElement(c.Link,Object.assign({to:n,className:(a||"")+" "+f.a.buttonDark},l),t||i)};m.propTypes={text:s.a.string.isRequired}},175:function(e,t,n){e.exports={button:"Button-module--button--imwi3",buttonLight:"Button-module--buttonLight--z27Qi Button-module--button--imwi3",buttonDark:"Button-module--buttonDark--fwCTY Button-module--button--imwi3"}},176:function(e,t,n){"use strict";var a=n(25),r=n(74),i=n(14);e.exports=function(e){for(var t=a(this),n=i(t.length),o=arguments.length,l=r(o>1?arguments[1]:void 0,n),s=o>2?arguments[2]:void 0,c=void 0===s?n:r(s,n);c>l;)t[l++]=e;return t}},177:function(e,t,n){e.exports={wrapper:"EmployeeIntroWithImage-module--wrapper--1ORcX",name:"EmployeeIntroWithImage-module--name--3o0ig",feature:"EmployeeIntroWithImage-module--feature--d3LJ7",image:"EmployeeIntroWithImage-module--image--3WJm7"}},178:function(e,t,n){},179:function(e,t,n){var a,r;e.exports=(a=n(0),r=n(4),function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t){e.exports=a},function(e,t){e.exports=r},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),o=a(i),l=n(0),s=a(l),c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"react-parallax-background "+this.props.className},this.props.children)}}],[{key:"isParallaxBackground",value:function(){return!0}}]),t}(s.default.Component);c.propTypes={children:o.default.node,className:o.default.string},c.defaultProps={className:""},t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(1),l=a(o),s=n(0),c=a(s),u=n(6),f=n(4),d=a(f),g={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onWindowResize=function(){n.parentHeight=(0,u.getNodeHeight)(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(e){if(n.canUseDOM){var t=Date.now();t-n.timestamp>=10&&(0,u.isScrolledIntoView)(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=t)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=(0,u.getRelativePosition)(n.node,n.canUseDOM,n.parent);n.img&&n.setImagePosition(t,e),n.bg&&n.splitChildren.bgChildren.length>0&&n.setBackgroundPosition(t)}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:g,bgStyle:r({},g,n.getCustomBgStyle(e)),percentage:0},n.canUseDOM=(0,u.canUseDOM)(),n.node=null,n.content=null,n.splitChildren=(0,u.getSplitChildren)(e),n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=(0,u.getNodeHeight)(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.dynamicBlur=!(!e.blur||void 0===e.blur.min||void 0===e.blur.max),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,a=t.bgImageSrcSet,r=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,a,r):this.updatePosition(),this.setParallaxStyle()}},{key:"componentWillReceiveProps",value:function(e){var t=e.parent,n=e.bgImage,a=e.bgImageSrcSet,r=e.bgImageSizes;this.splitChildren=(0,u.getSplitChildren)(e),t&&this.parent!==t&&(this.parent=t,this.removeListeners(),this.addListeners()),this.parentHeight=(0,u.getNodeHeight)(this.canUseDOM,this.parent),this.state.bgImage!==n&&this.loadImage(n,a,r)}},{key:"shouldComponentUpdate",value:function(e,t){return e.bgImage===this.props.bgImage||t.bgImage!==this.state.bgImage}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setParallaxStyle",value:function(){this.node&&(this.node.style.position="relative",this.node.style.overflow="hidden")}},{key:"getCustomBgStyle",value:function(e){var t=this,n={};return this.props.bgStyle&&Object.keys(this.props.bgStyle).forEach(function(e){n[e]=t.props.bgStyle[e]}),n}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,a=t.strength;if(!0!==n){var i=a<0,o=(i?a:0)-a*e,l="translate3d(-50%, "+o+"px, 0)";this.setState({bgStyle:r({},this.state.bgStyle,{WebkitTransform:l,transform:l}),percentage:e})}}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,a=n.disabled,i=n.strength,o=n.blur,l=t?"auto":this.getImageHeight()+"px",s=t?this.contentWidth+"px":"auto";if(!0!==a){var c=i<0,u=(c?i:0)-i*e,f="translate3d(-50%, "+u+"px, 0)",d="none";o&&(d="blur("+(this.dynamicBlur?o.min+(1-e)*o.max:o)+"px)"),this.setState({imgStyle:r({},this.state.imgStyle,{height:l,width:s,WebkitTransform:f,transform:f,WebkitFilter:d,filter:d}),percentage:e})}}},{key:"getImageHeight",value:function(){var e=this.props.strength<0,t=e?2.5:1,n=t*Math.abs(this.props.strength);return Math.floor(this.contentHeight+n)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"loadImage",value:function(e,t,n){var a=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(r){a.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},function(){return a.updatePosition()})},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"log",value:function(){if(this.props.log){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=t.style,i=t.bgClassName,o=t.contentClassName,l=t.bgImageAlt,s=t.renderLayer,u=this.state,f=u.bgImage,g=u.bgImageSrcSet,m=u.bgImageSizes,p=u.percentage;return c.default.createElement("div",{className:"react-parallax "+n,style:a,ref:function(t){return e.node=t}},f?c.default.createElement("img",{className:i,src:f,srcSet:g,sizes:m,ref:function(t){return e.img=t},alt:l,style:r({},this.state.imgStyle,this.props.bgImageStyle)}):null,s?s(Math.min(-(p-1),1)):null,this.splitChildren.bgChildren.length>0?c.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){return e.bg=t},style:this.state.bgStyle},this.splitChildren.bgChildren):null,c.default.createElement(d.default,{onMount:this.onContentMount,className:o},this.splitChildren.children))}}]),t}(c.default.Component);m.propTypes={bgClassName:l.default.string,bgImage:l.default.string,bgImageAlt:l.default.string,bgImageSizes:l.default.string,bgImageSrcSet:l.default.string,bgImageStyle:l.default.object,bgStyle:l.default.object,blur:l.default.oneOfType([l.default.number,l.default.object]),className:l.default.string,contentClassName:l.default.string,disabled:l.default.bool,log:l.default.bool,parent:l.default.any,renderLayer:l.default.func,strength:l.default.number,style:l.default.object},m.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",disabled:!1,log:!1,strength:100},t.default=m},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(0),o=a(i),l=n(1),s=a(l),c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onMount,a=e.className;return o.default.createElement("div",{ref:function(e){return n(e)},className:a||"react-parallax-content",style:{position:"relative"}},t)}}]),t}(i.PureComponent);c.propTypes={children:s.default.node,className:s.default.string,onMount:s.default.func},c.propTypes={},t.default=c},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var r=n(3),i=a(r),o=n(2),l=a(o);t.Parallax=i.default,t.Background=l.default},function(e,t,n){"use strict";function a(e){if(!e)return 0;var t=window,n=document,a=n.documentElement,r=n.getElementsByTagName("body")[0];return t.innerHeight||a.clientHeight||r.clientHeight}function r(e,t){return e?t?t.clientHeight:a(e):0}function i(e,t,n){return(n-e)/(t-e)||0}Object.defineProperty(t,"__esModule",{value:!0}),t.getWindowHeight=a,t.isScrolledIntoView=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2];if(!n)return!1;var r=e.getBoundingClientRect().top-t,i=e.getBoundingClientRect().bottom+t;return r<=a(n)&&i>=0},t.getNodeHeight=r,t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)},t.getPercentage=i,t.getRelativePosition=function(e,t,n){if(!t)return 0;var a=e.getBoundingClientRect(),o=a.top,l=a.height,s=r(t),c=l>s?l:s;return i(-l,c,Math.round(o>c?c:o))},t.getSplitChildren=function(e){var t=[],n=l.default.Children.toArray(e.children);return n.forEach(function(e,a){e.type&&e.type.isParallaxBackground&&(t=t.concat(n.splice(a,1)))}),{bgChildren:t,children:n}},t.setBlur=function(e,t){e.style.WebkitFilter="blur("+t+"px)",e.style.filter="blur("+t+"px)"};var o=n(0),l=function(e){return e&&e.__esModule?e:{default:e}}(o)}]))},180:function(e,t,n){"use strict";n(73),n(171),n(33);var a=n(0),r=n.n(a),i=(n(169),function(e){var t=e.fill;return r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 32 32",enableBackground:"new 0 0 32 32"},r.a.createElement("path",{fill:t,d:"M32,6.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6C25.7,3.8,24,3,22.2,3 c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5C10.3,10.8,5.5,8.2,2.2,4.2c-0.6,1-0.9,2.1-0.9,3.3c0,2.3,1.2,4.3,2.9,5.5 c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1C2.9,27.9,6.4,29,10.1,29c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C30,8.5,31.1,7.4,32,6.1z"}))}),o=function(e){var t=e.fill;return r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 32 32",enableBackground:"new 0 0 32 32"},r.a.createElement("path",{fill:t,d:"M30.7,0H1.3C0.6,0,0,0.6,0,1.3v29.3C0,31.4,0.6,32,1.3,32h29.3c0.7,0,1.3-0.6,1.3-1.3V1.3 C32,0.6,31.4,0,30.7,0z M9.5,27.3H4.7V12h4.8V27.3z M7.1,9.9c-1.5,0-2.8-1.2-2.8-2.8c0-1.5,1.2-2.8,2.8-2.8c1.5,0,2.8,1.2,2.8,2.8 C9.9,8.7,8.6,9.9,7.1,9.9z M27.3,27.3h-4.7v-7.4c0-1.8,0-4-2.5-4c-2.5,0-2.8,1.9-2.8,3.9v7.6h-4.7V12H17v2.1h0.1 c0.6-1.2,2.2-2.5,4.5-2.5c4.8,0,5.7,3.2,5.7,7.3V27.3z"}))},l=function(e){var t=e.fill;return r.a.createElement("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"32px",height:"32px",viewBox:"0 0 32 32",enableBackground:"new 0 0 32 32"},r.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",fill:t,d:"M16,0.4c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5C23.1,6.6,24.4,7,24.4,7 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C27.4,29.5,32,23.5,32,16.4C32,7.6,24.8,0.4,16,0.4z"}))},s=n(177),c=n.n(s),u=function(e){var t=e.employee,n=e.image;return r.a.createElement("div",{className:c.a.wrapper},r.a.createElement("div",{style:{marginBottom:"50px"}},r.a.createElement("h1",{className:c.a.name,style:{wordBreak:"all"}},t.name),t.keyFeatures&&t.keyFeatures.map(function(e){return r.a.createElement("p",{className:c.a.feature,style:{lineHeight:"1em"}},e)}),r.a.createElement("p",{style:{marginTop:"50px"}},r.a.createElement("a",{className:"sc-link",href:"mailto:"+t.email},t.email)),t.linkedIn&&r.a.createElement("a",{style:{marginRight:" 20px",paddingBottom:"20px"},href:"https://www.linkedin.com/in/"+t.linkedIn},r.a.createElement(o,{fill:"#fff"})),t.twitter&&r.a.createElement("a",{style:{marginRight:" 20px"},href:"https://twitter.com/"+t.twitter},r.a.createElement(i,{fill:"#fff"})),t.github&&r.a.createElement("a",{href:"https://github.com/"+t.github},r.a.createElement(l,{fill:"#fff"}))),r.a.createElement("img",{className:c.a.image,src:n,width:"100%",alt:""+t.name}))},f=n(183),d=n(172),g=n(189),m=n(184),p=n.n(m),h=n(185),b=n.n(h),y=n(170),v=n.n(y),w=(n(178),function(e){var t=e.text,n=e.fullpage,a=void 0!==n&&n;return r.a.createElement(v.a,null,r.a.createElement("div",{className:"centered-text "+(a?"centered-text--full-page":"")},r.a.createElement("h2",{className:"centered-text__title"},r.a.createElement("span",{className:"inline-text"},t))))}),x=n(179),E=n(186),I=n(174),k=n(182),S=n(188),_=n.n(S),O="undefined"!=typeof window?window.location.origin:"https://scelto.no";t.a=function(e){var t=e.location.pathname.replace("/ansatte/","").replace("/",""),n=g.a[t];if(!n)return null;var i=e.data&&e.data.EmployeeImages.edges.find(function(e){return e.node.name===t});return r.a.createElement(a.Fragment,null,r.a.createElement(p.a,{title:n.name+" jobber i Scelto AS",meta:[].concat(Object(k.a)({title:n.name+" jobber i Scelto AS",description:n.ingress,image:""+O+n.image}),[{name:"og:url",content:O+"/ansatte/"+t}]),link:[{rel:"icon",href:b.a}]}),r.a.createElement(f.a,null),r.a.createElement(d.a,{dark:!0},r.a.createElement(v.a,null,r.a.createElement(u,{employee:n,image:i&&i.node.childImageSharp.fluid.src||_.a}))),r.a.createElement(d.a,{style:{background:"#666664",color:"#fff"},title:n.firstName+" sine scills",ingress:n.ingress},n.mainSection&&n.mainSection.length>1&&n.mainSection.map(function(e){return r.a.createElement(v.a,null,r.a.createElement("p",null,e))}),r.a.createElement("div",{className:"sc-button-container"},r.a.createElement(I.c,{href:n.linkToCV},"Last ned "+n.firstName+" sin CV"))),r.a.createElement(x.Parallax,{bgImage:n.customImage},r.a.createElement(w,{fullpage:!0,text:n.firstName+" er scawesome!"})),r.a.createElement(E.a,null))}}}]);
//# sourceMappingURL=component---src-pages-ansatte-ken-js-ca44450094787bfb1418.js.map