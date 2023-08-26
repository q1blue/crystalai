"use strict";(self.webpackChunkairsdk_dev=self.webpackChunkairsdk_dev||[]).push([[4233],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=l(r),h=i,c=m["".concat(u,".").concat(h)]||m[h]||d[h]||n;return r?a.createElement(c,s(s({ref:t},p),{},{components:r})):a.createElement(c,s({ref:t},p))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:i,s[1]=o;for(var l=2;l<n;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});var a=r(7462),i=(r(7294),r(4137));const n={title:"Release 50.2.3.1",authors:["marchbold"],tags:["airsdk","updates"]},s=void 0,o={permalink:"/news/2023/06/30/air-release",source:"@site/news/2023-06-30-air-release.md",title:"Release 50.2.3.1",description:"AIR SDK 50.2.3.1 has been released by Harman.",date:"2023-06-30T00:00:00.000Z",formattedDate:"June 30, 2023",tags:[{label:"airsdk",permalink:"/news/tags/airsdk"},{label:"updates",permalink:"/news/tags/updates"}],readingTime:1.3,hasTruncateMarker:!1,authors:[{name:"Michael",title:"Developer at distriqt",url:"https://github.com/marchbold",imageURL:"https://avatars3.githubusercontent.com/u/442356?s=460&v=4",key:"marchbold"}],frontMatter:{title:"Release 50.2.3.1",authors:["marchbold"],tags:["airsdk","updates"]},nextItem:{title:"Release 50.2.2.6",permalink:"/news/2023/05/24/air-release"}},u={authorsImageUrls:[void 0]},l=[{value:"Features",id:"features",level:3},{value:"Bug Fixes",id:"bug-fixes",level:3}],p={toc:l},m="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"AIR SDK 50.2.3.1")," has been released by Harman.  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/api/versions/50.2.3.1/release-notes/Release_Notes_AIR_SDK_50.2.3.pdf"},"Release Notes"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://airsdk.harman.com/download/50.2.3.1"},"Download"),"  ")),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AIR-6564: AIR Media - basic iOS sound output implementation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1453"},"github-1453"),": Adding certificateError event for secure HTTP/socket connections")),(0,i.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AIR-4357: Removing deferred framebuffer clears for Android runtime in background thread"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1824"},"github-1824"),": Ensuring AIR apps can run from the root folder of a Windows drive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1856"},"github-1856"),": Fixing URL session closure on macOS for cancelled connections"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/1871"},"github-1871"),": Further updates to support File.openWithDefaultApplication on Android"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2409"},"github-2409"),": Fixing tvOS stub generation and reverting symbol removals"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2535"},"github-2535"),": Don't Activate on _NET_WM_STATE event if the window is being hidden"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2603"},"github-2603"),": Ensuring Android file chooser ignores non-mime type filters"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2615"},"github-2615"),": Updating Android StageText to work in a background thread"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2655"},"github-2655"),": Fixing the iOS certificate security alert message by moving it out from async thread"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2660"},"github-2660"),": Ensuring Android platformsdk is picked up properly on cmdline"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2665"},"github-2665"),": Removing memory leakage in Worker when sending strings over MessageChannel"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2666"},"github-2666"),": Ensuring android CameraUI provider is properly named with air prefix"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2667"},"github-2667"),": Fixing JNI problems with Android TimeZone.availableTimeZoneNames"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2670"},"github-2670"),": Ensuring AIR on Android shuts down appropriately on exit() call"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2671"},"github-2671"),": Preventing Android JNI-detach crash"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2684"},"github-2684"),": Ensuring command-line platformsdk has priority in ADT"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2694"},"github-2694"),": Excluding invalid libc++.so files from Gradle builds")),(0,i.kt)("p",null,"Note re ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airsdk/Adobe-Runtime-Support/issues/2409"},"github-2409")," (Fixing tvOS stub generation) - the stub-tvos folder update didn't work in this release,\nso this error is actually still present; there is a patch library under the github issue entry to resolve it."))}d.isMDXComponent=!0}}]);