(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{166:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(204),o=n.n(i),s=n(170),l=n(295),c=n.n(l),u=(n(33),n(296),n(32),n(52)),m=n.n(u),d=n(7),p=n.n(d),f=n(195),g=n.n(f),h=n(202),b=(n(302),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={prev:0},n}p()(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e,t){return t.prev!==e.number},n.componentDidUpdate=function(e,t){this.state.prev!==e.prev&&this.setState({prev:this.props.number})},n.render=function(){var e=this.props,t=e.number,n=e.description;return r.a.createElement("div",{className:"calculator-result"},r.a.createElement("button",{"aria-label":t+" - "+n,className:"calculator-result__title"},r.a.createElement(g.a,{prefix:"kr. ",start:this.state.prev,end:t,duration:.5,separator:" "})),r.a.createElement("div",{className:"calculator-result__title"}),r.a.createElement("div",{className:"calculator-result__description"},n))},t}(r.a.Component)),v=function(e){function t(t){var n;return(n=e.call(this,t)||this).onPriceChanged=n.onPriceChanged.bind(m()(m()(n))),n.onHoursChanged=n.onHoursChanged.bind(m()(m()(n))),n.doCalc=n.doCalc.bind(m()(m()(n))),n.state=n.doCalc({price:1e3,numHours:157}),n}p()(t,e);var n=t.prototype;return n.onPriceChanged=function(e){this.setState(this.doCalc(Object.assign({},this.state,{price:Number(e.target.value.replace(/,/g,"."))})))},n.onHoursChanged=function(e){this.setState(this.doCalc(Object.assign({},this.state,{numHours:Number(e.target.value.replace(/,/g,"."))})))},n.doCalc=function(e){var t=Number(e.numHours),n=Number(e.price);if(isNaN(t)||isNaN(n))return Object.assign({},e,{nettoLonnMnd:0,nettoLonnAr:0,bruttoInntjeningMnd:0,bruttoLonnMnd:0,feriepengerMnd:0});var a=Math.round(.6*t*n),r=11*a,i=Math.round(t*n),o=Math.round(.6*t*n/1.12),s=Math.round(.6*t*n/1.12*.12);return Object.assign({},e,{nettoLonnMnd:a,nettoLonnAr:r,bruttoInntjeningMnd:i,bruttoLonnMnd:o,feriepengerMnd:s})},n.formatMoneys=function(e){return(""+e).replace(/./g,function(e,t,n){return t&&"."!==e&&(n.length-t)%3==0?" "+e:e})},n.render=function(){return r.a.createElement("div",{className:"salery-calculator"},r.a.createElement("div",{className:"calculator-input"},r.a.createElement("div",{className:""},"Hvis du har en timepris på kr. "),r.a.createElement(h.a,{id:"price",placeholder:this.state.price,onChange:this.onPriceChanged,maxLength:"4"}),r.a.createElement("div",{className:"large-text"}," og jeg jobber "),r.a.createElement(h.a,{id:"numHours",placeholder:this.state.numHours,onChange:this.onHoursChanged,maxLength:"4"}),r.a.createElement("div",{className:"large-text"}," timer pr. mnd: ")),r.a.createElement("div",{className:"calculation-result-row"},r.a.createElement(b,{number:this.state.bruttoLonnMnd,description:"Bruttolønn pr. måned, eks. feriepenger"}),r.a.createElement(b,{number:this.state.nettoLonnAr,description:r.a.createElement("div",null,r.a.createElement("div",null,"Ca årslønn i Scelto med 5 ukers ferie"),r.a.createElement("div",null,"11*mnd lønn + 11*oppsparte feriepenger"))})),r.a.createElement("div",{className:"calculator-input__arrow"}),r.a.createElement("div",{className:"calculation-result-row"},r.a.createElement(b,{number:this.state.bruttoInntjeningMnd,description:"Bruttoinntjening pr. måned"}),r.a.createElement(b,{number:this.state.nettoLonnMnd,description:"Du får 60% av din inntjening pr. måned"}),r.a.createElement(b,{number:this.state.feriepengerMnd,description:"Avsatte feriepenger pr. måned 12%"})))},t}(r.a.Component),I=n(182),C=n.n(I),y=n(183),E=n.n(y),A=n(184),k=n(181),N=n(189);n(303),t.default=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(C.a,{title:"Scelto AS",meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}],link:[{rel:"icon",href:E.a}]}),r.a.createElement(k.a,null),r.a.createElement(N.a,{image:c.a,title:"I Scelto er de ansatte ansiktet utad og selve merkevaren. Du er en hyggelig, dyktig og erfaren Java-utvikler, .NET-utvikler, eller teknisk arkitekt.",subtitle:"Det vet vi å sette pris på med blant annet en svært god sosial kalender, gode forsikringer, godt miljø og ikke minst en av bransjens beste lønnsbetingelser."}),r.a.createElement("div",{className:"why-work-at-scelto"},r.a.createElement(s.a,{dark:!0},r.a.createElement(v,null)),r.a.createElement(s.a,{title:"Hvorfor jobbe i Scelto?"},r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,"Positive og hyggelige mennesker som hjelper hverandre."),r.a.createElement("li",null,"Attraktive og spennende kunder, som bla. NRK, Skatteetaten og Statens vegvesen."),r.a.createElement("li",null,"Gode forsikringsordninger:",r.a.createElement("ul",{className:"nested-list"},r.a.createElement("li",null,"Yrkesskade"),r.a.createElement("li",null,"Reise til og fra arbeid"),r.a.createElement("li",null,"Fritidsulykke"),r.a.createElement("li",null,"Invaliditet og uførhet pga. sykdom"),r.a.createElement("li",null,"Helseforsikring Super"),r.a.createElement("li",null,"Reiseforsikring Super"),r.a.createElement("li",null,"Familiemedlemskap i Volvat"))),r.a.createElement("li",null,"Miljø med faglig tyngde – I Scelto er gjennomsnittserfaringen 12 år."),r.a.createElement("li",null,"Gode betingelser – se lønnskalkulatoren over."),r.a.createElement("li",null,"Fokus på sosial kalender:",r.a.createElement("ul",{className:"nested-list"},r.a.createElement("li",null,"Vårtur på fjellet i eksklusiv hytte med kokk"),r.a.createElement("li",null,"Sommerfest med følge"),r.a.createElement("li",null,"Høsttur til storby med Michelin-stjerner"),r.a.createElement("li",null,"Julebord på en bedre restaurant"),r.a.createElement("li",null,"Månedlig felles lunsj"),r.a.createElement("li",null,"Kvartalsvis Sceltokveld med aktivitet"))),r.a.createElement("li",null,"Og sist, men ikke minst, vi skal ikke bli flere enn 30 personer og vi skal være et lett selskap med lite overhead. Noe som gjør at vi kan fortsette å ha fokus på kulturen, det sosiale og deg som individ."))),r.a.createElement(s.a,{dark:!0},r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{alt:"Tor-Eric Sandvik - Daglig leder",style:{margin:"50px 0 0 0",borderRadius:"50%",width:"200px"},src:o.a}),r.a.createElement("h5",null,"Ring meg for en uforpliktende prat på tlf"," ",r.a.createElement("a",{className:"sc-link",href:"tlf:90 96 90 97"},"90 96 90 97"),"."," "),r.a.createElement("h5",null,"Eller ta kontakt på mail"," ",r.a.createElement("a",{className:"sc-link",href:"mailto:tor.erik@scelto.no"},"tor.eric@scelto.no"))))),r.a.createElement(A.a,null))}},170:function(e,t,n){"use strict";n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(168),l=n.n(s),c=(n(171),function(e){var t=e.id,n=e.title,a=e.ingress,i=e.children,o=e.dark,s=void 0!==o&&o,c=e.style,u=e.icon;return r.a.createElement("section",{id:t,className:"section",style:Object.assign({backgroundColor:s?"#333":"#fff",color:s?"#fff":"#333"},c)},r.a.createElement("div",{style:{height:"auto",margin:"auto",width:"100%",maxWidth:"1024px"}},u&&r.a.createElement("img",{style:{maxWidth:"200px"},src:u,alt:"Ikon for "+n}),n&&r.a.createElement(l.a,null,r.a.createElement("h1",{className:"section__header"},n)),a&&r.a.createElement(l.a,null,r.a.createElement("h5",{className:"section__ingress"},a)),i))});c.propTypes={id:o.a.string,title:o.a.string,ingress:o.a.string,children:o.a.element,dark:o.a.bool},t.a=c},171:function(e,t,n){},189:function(e,t,n){"use strict";n(190);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),s=n(188),l=n.n(s),c=n(192),u=n.n(c),m=n(168),d=n.n(m),p=(n(193),function(e){var t=e.image,n=e.title,a=e.subtitle,i=e.link,o=e.contactMeHref,s=e.children;return r.a.createElement("div",{className:"full-page-image-with-header",style:{background:"linear-gradient(rgba(40, 55, 57, 0.6), rgba(40, 55, 57, 0.6)), url("+t+") center",backgroundSize:"cover"}},r.a.createElement(d.a,null,r.a.createElement("h1",{className:"full-page-image-with-header__title"},n)),a&&r.a.createElement(d.a,null,r.a.createElement("h3",{className:"full-page-image-with-header__subtitle"},a)),s,!!o&&r.a.createElement("h5",{className:"contact-form-link"},r.a.createElement("a",{href:o,className:"sc-link"},"Ønsker du å bli kontaktet av oss?")),i&&r.a.createElement(l.a,{to:i},r.a.createElement("img",{style:{position:"absolute",bottom:"40px",margin:"auto",transform:"translateX(-50%)"},src:u.a,width:"40px",height:"40px",alt:"Ikon for "+n})))});p.propTypes={image:o.a.object,title:o.a.string,subtitle:o.a.string,link:o.a.bool,contactMeHref:o.a.string},t.a=p},190:function(e,t,n){"use strict";n(191)("link",function(e){return function(t){return e(this,"a","href",t)}})},191:function(e,t,n){var a=n(11),r=n(16),i=n(17),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},192:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSItOTkyMyAtOTE0IDQyIDQyIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMywgLmNscy01IHsKICAgICAgICBmaWxsOiBub25lOwogICAgICB9CgogICAgICAuY2xzLTEgewogICAgICAgIGNsaXAtcGF0aDogdXJsKCNjbGlwLVNjZWx0b19pY29uLWFycm93LWRvd24tZGFyay1iZyk7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgc3Ryb2tlOiAjYzVkMjAwOwogICAgICB9CgogICAgICAuY2xzLTIsIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7CiAgICAgIH0KCiAgICAgIC5jbHMtMyB7CiAgICAgICAgc3Ryb2tlOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTQgewogICAgICAgIHN0cm9rZTogbm9uZTsKICAgICAgfQogICAgPC9zdHlsZT4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcC1TY2VsdG9faWNvbi1hcnJvdy1kb3duLWRhcmstYmciPgogICAgICA8cmVjdCB4PSItOTkyMyIgeT0iLTkxNCIgd2lkdGg9IjQyIiBoZWlnaHQ9IjQyIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8ZyBpZD0iU2NlbHRvX2ljb24tYXJyb3ctZG93bi1kYXJrLWJnIiBkYXRhLW5hbWU9IlNjZWx0b+KAk2ljb24tYXJyb3ctZG93bi1kYXJrLWJnIiBjbGFzcz0iY2xzLTEiPgogICAgPGcgaWQ9Imdyb3VwLTM4NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNTg1IC0xNTgxKSI+CiAgICAgIDxnIGlkPSJyZWN0YW5nbGUtMTIiIGNsYXNzPSJjbHMtMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjYzIDY2OCkiPgogICAgICAgIDxyZWN0IGNsYXNzPSJjbHMtNCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIi8+CiAgICAgICAgPHJlY3QgY2xhc3M9ImNscy01IiB4PSIyIiB5PSIyIiB3aWR0aD0iMzYiIGhlaWdodD0iMzYiLz4KICAgICAgPC9nPgogICAgICA8cGF0aCBpZD0icGF0aC0xIiBjbGFzcz0iY2xzLTMiIGQ9Ik0tNTI2OC4wMTYsNTc5LjVsMTAuNDUzLDEwLjQ1NCwxMC40NTQtMTAuNDU0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OTQwLjQyMyAxMDMuMTg3KSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="},193:function(e,t,n){},195:function(e,t,n){"use strict";function a(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var r=a(n(196)),i=a(n(4)),o=n(0),s=a(o),l=a(n(197));function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var f=function(e){function t(){var e,n,a,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,c=new Array(o),d=0;d<o;d++)c[d]=arguments[d];return a=this,i=(e=m(t)).call.apply(e,[this].concat(c)),n=!i||"object"!=typeof i&&"function"!=typeof i?p(a):i,u(p(p(n)),"createInstance",function(){"function"==typeof n.props.children&&l(n.containerRef.current&&n.containerRef.current instanceof HTMLElement,'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.');var e=n.props,t=e.decimal,a=e.decimals,i=e.duration,o=e.easingFn,s=e.end,c=e.formattingFn,u=e.prefix,m=e.separator,d=e.start,p=e.suffix,f=e.useEasing;return new r(n.containerRef.current,d,s,a,i,{decimal:t,easingFn:o,formattingFn:c,separator:m,prefix:u,suffix:p,useEasing:f,useGrouping:!!m})}),u(p(p(n)),"pauseResume",function(){var e=p(p(n)),t=e.reset,a=e.restart,r=e.update,i=n.props.onPauseResume;n.instance.pauseResume(),i({reset:t,start:a,update:r})}),u(p(p(n)),"reset",function(){var e=p(p(n)),t=e.pauseResume,a=e.restart,r=e.update,i=n.props.onReset;n.instance.reset(),i({pauseResume:t,start:a,update:r})}),u(p(p(n)),"restart",function(){n.reset(),n.start()}),u(p(p(n)),"start",function(){var e=p(p(n)),t=e.pauseResume,a=e.reset,r=e.restart,i=e.update,o=n.props,s=o.delay,l=o.onEnd,c=o.onStart,u=function(){return n.instance.start(function(){return l({pauseResume:t,reset:a,start:r,update:i})})};s>0?setTimeout(u,1e3*s):u(),c({pauseResume:t,reset:a,update:i})}),u(p(p(n)),"update",function(e){var t=p(p(n)),a=t.pauseResume,r=t.reset,i=t.restart,o=n.props.onUpdate;n.instance.update(e),o({pauseResume:a,reset:r,start:i})}),u(p(p(n)),"containerRef",s.createRef()),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,o.Component),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.children,n=e.delay;this.instance=this.createInstance(),"function"==typeof t&&0!==n||this.start()}},{key:"shouldComponentUpdate",value:function(e){return this.props.duration!==e.duration||this.props.end!==e.end||this.props.start!==e.start||this.props.redraw}},{key:"componentDidUpdate",value:function(e){this.props.duration===e.duration&&this.props.start===e.start||(this.instance=this.createInstance(),this.start()),this.props.end!==e.end&&(this.instance.reset(),this.instance.update(this.props.end))}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className,a=e.style,r=this.containerRef,i=this.pauseResume,o=this.reset,l=this.restart,c=this.update;return"function"==typeof t?t({countUpRef:r,pauseResume:i,reset:o,start:l,update:c}):s.createElement("span",{className:n,ref:r,style:a})}}])&&c(n.prototype,a),i&&c(n,i),t}();u(f,"propTypes",{decimal:i.string,decimals:i.number,delay:i.number,easingFn:i.func,end:i.number.isRequired,formattingFn:i.func,onEnd:i.func,onStart:i.func,prefix:i.string,redraw:i.bool,separator:i.string,start:i.number,suffix:i.string,style:i.object,useEasing:i.bool}),u(f,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:function(){},onPauseResume:function(){},onReset:function(){},onStart:function(){},onUpdate:function(){},prefix:"",redraw:!1,separator:"",start:0,suffix:"",style:void 0,useEasing:!0}),e.exports=f},196:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(e,t,n){return function(e,t,n,a,r,i){function o(e){return"number"==typeof e&&!isNaN(e)}var s=this;if(s.version=function(){return"1.9.3"},s.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,i,o,l=e<0;if(e=Math.abs(e).toFixed(s.decimals),t=(e+="").split("."),n=t[0],a=t.length>1?s.options.decimal+t[1]:"",s.options.useGrouping){for(r="",i=0,o=n.length;i<o;++i)0!==i&&i%3==0&&(r=s.options.separator+r),r=n[o-i-1]+r;n=r}return s.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return s.options.numerals[+e]}),a=a.replace(/[0-9]/g,function(e){return s.options.numerals[+e]})),(l?"-":"")+s.options.prefix+n+a+s.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var l in s.options)i.hasOwnProperty(l)&&null!==i[l]&&(s.options[l]=i[l]);""===s.options.separator?s.options.useGrouping=!1:s.options.separator=""+s.options.separator;for(var c=0,u=["webkit","moz","ms","o"],m=0;m<u.length&&!window.requestAnimationFrame;++m)window.requestAnimationFrame=window[u[m]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[m]+"CancelAnimationFrame"]||window[u[m]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-c)),r=window.setTimeout(function(){e(n+a)},a);return c=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),s.initialize=function(){return!(!s.initialized&&(s.error="",s.d="string"==typeof e?document.getElementById(e):e,s.d?(s.startVal=Number(t),s.endVal=Number(n),o(s.startVal)&&o(s.endVal)?(s.decimals=Math.max(0,a||0),s.dec=Math.pow(10,s.decimals),s.duration=1e3*Number(r)||2e3,s.countDown=s.startVal>s.endVal,s.frameVal=s.startVal,s.initialized=!0,0):(s.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(s.error="[CountUp] target is null or undefined",1)))},s.printValue=function(e){var t=s.options.formattingFn(e);"INPUT"===s.d.tagName?this.d.value=t:"text"===s.d.tagName||"tspan"===s.d.tagName?this.d.textContent=t:this.d.innerHTML=t},s.count=function(e){s.startTime||(s.startTime=e),s.timestamp=e;var t=e-s.startTime;s.remaining=s.duration-t,s.options.useEasing?s.countDown?s.frameVal=s.startVal-s.options.easingFn(t,0,s.startVal-s.endVal,s.duration):s.frameVal=s.options.easingFn(t,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(t/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(t/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.dec)/s.dec,s.printValue(s.frameVal),t<s.duration?s.rAF=requestAnimationFrame(s.count):s.callback&&s.callback()},s.start=function(e){s.initialize()&&(s.callback=e,s.rAF=requestAnimationFrame(s.count))},s.pauseResume=function(){s.paused?(s.paused=!1,delete s.startTime,s.duration=s.remaining,s.startVal=s.frameVal,requestAnimationFrame(s.count)):(s.paused=!0,cancelAnimationFrame(s.rAF))},s.reset=function(){s.paused=!1,delete s.startTime,s.initialized=!1,s.initialize()&&(cancelAnimationFrame(s.rAF),s.printValue(s.startVal))},s.update=function(e){if(s.initialize()){if(!o(e=Number(e)))return void(s.error="[CountUp] update() - new endVal is not a number: "+e);s.error="",e!==s.frameVal&&(cancelAnimationFrame(s.rAF),s.paused=!1,delete s.startTime,s.startVal=s.frameVal,s.endVal=e,s.countDown=s.startVal>s.endVal,s.rAF=requestAnimationFrame(s.count))}},s.initialize()&&s.printValue(s.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)},197:function(e,t,n){"use strict";var a=function(){};e.exports=a},202:function(e,t,n){"use strict";n(32);var a=n(7),r=n.n(a),i=n(52),o=n.n(i),s=n(0),l=n.n(s),c=(n(203),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={value:t.placeholder},n.onChange=n.onChange.bind(o()(o()(n))),n.onKeyUp=n.onKeyUp.bind(o()(o()(n))),n}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.setState(Object.assign({},this.state,{value:this.inputElement.value,width:this.divElement.clientWidth}))},n.componentWillReceiveProps=function(e){this.setState(Object.assign({},this.state,{value:this.inputElement.value}))},n.onKeyUp=function(e){this.setState(Object.assign({},this.state,{width:0===this.divElement.clientWidth?100:this.divElement.clientWidth}))},n.onChange=function(e){this.setState(Object.assign({},this.state,{value:this.inputElement.value})),this.props.onChange(e)},n.render=function(){var e=this,t=this.props,n=t.id,a=t.placeholder,r=t.maxLength,i=t.className;return l.a.createElement(s.Fragment,null,l.a.createElement("div",{id:"hidden-"+n,ref:function(t){return e.divElement=t},className:"inline inline-input__input"},this.state.value),l.a.createElement("input",{id:n,type:"text","aria-label":n,className:"inline inline-input__input "+i,style:{width:this.state.width},placeholder:a,ref:function(t){return e.inputElement=t},maxLength:r,"aria-autocomplete":"none",onKeyUp:this.onKeyUp,onChange:this.onChange,autoComplete:"off",autoCorrect:"false"}))},t}(l.a.Component));t.a=c},203:function(e,t,n){},204:function(e,t,n){e.exports=n.p+"static/tor_eric_crop-c0a801b206cd0fa1f7ebd1b6f4c482dc.jpg"},208:function(e,t,n){var a=n(78),r=n(53),i=n(36),o=n(75),s=n(27),l=n(76),c=Object.getOwnPropertyDescriptor;t.f=n(18)?c:function(e,t){if(e=i(e),t=o(t,!0),l)try{return c(e,t)}catch(n){}if(s(e,t))return r(!a.f.call(e,t),e[t])}},295:function(e,t,n){e.exports=n.p+"static/direction-scelto-924c44803be32fabde1e3d798d814450.jpeg"},296:function(e,t,n){"use strict";var a=n(6),r=n(27),i=n(15),o=n(297),s=n(75),l=n(16),c=n(299).f,u=n(208).f,m=n(26).f,d=n(300).trim,p=a.Number,f=p,g=p.prototype,h="Number"==i(n(79)(g)),b="trim"in String.prototype,v=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,a,r,i=(t=b?t.trim():d(t,3)).charCodeAt(0);if(43===i||45===i){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===i){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var o,l=t.slice(2),c=0,u=l.length;c<u;c++)if((o=l.charCodeAt(c))<48||o>r)return NaN;return parseInt(l,a)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof p&&(h?l(function(){g.valueOf.call(n)}):"Number"!=i(n))?o(new f(v(t)),n,p):v(t)};for(var I,C=n(18)?c(f):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;C.length>y;y++)r(f,I=C[y])&&!r(p,I)&&m(p,I,u(f,I));p.prototype=g,g.constructor=p,n(20)(a,"Number",p)}},297:function(e,t,n){var a=n(12),r=n(298).set;e.exports=function(e,t,n){var i,o=t.constructor;return o!==n&&"function"==typeof o&&(i=o.prototype)!==n.prototype&&a(i)&&r&&r(e,i),e}},298:function(e,t,n){var a=n(12),r=n(5),i=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(21)(Function.call,n(208).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:i}},299:function(e,t,n){var a=n(77),r=n(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,r)}},300:function(e,t,n){var a=n(11),r=n(17),i=n(16),o=n(301),s="["+o+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),u=function(e,t,n){var r={},s=i(function(){return!!o[e]()||"​"!="​"[e]()}),l=r[e]=s?t(m):o[e];n&&(r[n]=l),a(a.P+a.F*s,"String",r)},m=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=u},301:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},302:function(e,t,n){},303:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-lonnskalkulator-index-jsx-c5a9a449d462805df647.js.map