"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[897],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(o),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return o?r.createElement(m,i(i({ref:t},p),{},{components:o})):r.createElement(m,i({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3919:(e,t,o)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}o.d(t,{b:()=>r,Z:()=>n})},4996:(e,t,o)=>{o.d(t,{C:()=>a,Z:()=>i});var r=o(2263),n=o(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,o=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,o,r){var a=void 0===r?{}:r,i=a.forcePrependBaseUrl,s=void 0!==i&&i,l=a.absolute,c=void 0!==l&&l;if(!o)return o;if(o.startsWith("#"))return o;if((0,n.b)(o))return o;if(s)return t+o;var p=o.startsWith(t)?o:t+o.replace(/^\//,"");return c?e+p:p}(a,o,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},3449:(e,t,o)=>{o.r(t),o.d(t,{frontMatter:()=>l,contentTitle:()=>c,metadata:()=>p,toc:()=>u,default:()=>f});var r=o(7462),n=o(3366),a=(o(7294),o(3905)),i=o(4996),s=["components"],l={id:"what-is-odp",title:"What is ODP"},c=void 0,p={unversionedId:"what-is-odp",id:"what-is-odp",isDocsHomePage:!1,title:"What is ODP",description:"The Open Developer Platform (ODP) is a collection of services, tools and best practices that deliver a secure and compliant collaboration across all FINOS hosted projects.",source:"@site/../docs/what-is-odp.mdx",sourceDirName:".",slug:"/what-is-odp",permalink:"/docs/what-is-odp",editUrl:"https://github.com/finos/open-developer-platform/edit/master/website/../docs/what-is-odp.mdx",version:"current",frontMatter:{id:"what-is-odp",title:"What is ODP"},sidebar:"mainSidebar",next:{title:"FINOS Maintainers Cheatsheet",permalink:"/docs/finos-maintainers-cheatsheet"}},u=[{value:"How to use ODP",id:"how-to-use-odp",children:[]},{value:"How to contribute",id:"how-to-contribute",children:[]}],d={toc:u};function f(e){var t=e.components,o=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Open Developer Platform (ODP)")," is a collection of services, tools and best practices that deliver a secure and compliant collaboration across all FINOS hosted projects."),(0,a.kt)("p",null,"ODP leverages ",(0,a.kt)("a",{parentName:"p",href:"https://guides.github.com/activities/hello-world/#what"},"GitHub.com")," as project collaboration platform to deliver a software development workflow with continuous legal, security, quality scanning and a set of communication tools that comply with financial institutions regulations."),(0,a.kt)("img",{alt:"odp-landscape",src:(0,i.Z)("img/odp-landscape-2020.png")}),(0,a.kt)("h2",{id:"how-to-use-odp"},"How to use ODP"),(0,a.kt)("p",null,"The onboarding process on ODP is composed by the following steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sign up to GitHub.com and get a GitHub username."),(0,a.kt)("li",{parentName:"ol"},"Sign and submit the ",(0,a.kt)("a",{parentName:"li",href:"https://finosfoundation.atlassian.net/wiki/spaces/FINOS/pages/75530375/Contribution+Compliance+Requirements"},"FINOS Contributor License Agreement"),", in order to become part of the GitHub FINOS."),(0,a.kt)("li",{parentName:"ol"},"Start ",(0,a.kt)("a",{parentName:"li",href:"project-collaboration"},"collaborating on FINOS projects"))),(0,a.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,a.kt)("p",null,"To submit a new feature or request to the ODP backlog, feel free to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/finos/open-developer-platform/issues"},(0,a.kt)("strong",{parentName:"a"},"create a new issue in GitHub")),"."),(0,a.kt)("p",null,"If you're a software vendor providing build automation for open source software that can help solve friction points many developers at financial institutions face, we'd be happy to work together and host your technology on ODP."),(0,a.kt)("p",null,"If you are an API provider, working with some of our members or other firms in the financial world, we can host your API on ODP: the full FINOS Community can get to know your technology, and contributors will get free and preferred access to the API, delivering a first-class onramp experience for developers."),(0,a.kt)("p",null,"Everyone is welcome to listen and submit feedback to the group; all our content and conversations are (and will be) public."))}f.isMDXComponent=!0}}]);