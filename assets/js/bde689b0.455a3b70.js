"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[9964],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},h=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,m=u["".concat(s,".").concat(h)]||u[h]||g[h]||o;return t?n.createElement(m,l(l({ref:a},p),{},{components:t})):n.createElement(m,l({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=h;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},2774:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(7462),r=(t(7294),t(3905));const o={sidebar_position:6},l="Varibles and Constats",i={unversionedId:"Recources/golang/varibles",id:"Recources/golang/varibles",title:"Varibles and Constats",description:"In Go, a variable is a storage location that holds a value of a specific type. You can use variables to store values such as numbers, strings, and more.",source:"@site/docs/Recources/golang/varibles.md",sourceDirName:"Recources/golang",slug:"/Recources/golang/varibles",permalink:"/Blockchain/docs/Recources/golang/varibles",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Recources/golang/varibles.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Data Types",permalink:"/Blockchain/docs/Recources/golang/datatype"},next:{title:"user input/output",permalink:"/Blockchain/docs/Recources/golang/inputOutput"}},s={},c=[{value:"There are several ways to declare and initialize variables in Go:",id:"there-are-several-ways-to-declare-and-initialize-variables-in-go",level:2},{value:"variable scope",id:"variable-scope",level:2},{value:"local variable scope",id:"local-variable-scope",level:3},{value:"Global variable scope",id:"global-variable-scope",level:3},{value:"There are several constants in Go, including:",id:"there-are-several-constants-in-go-including",level:2}],p={toc:c};function u(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"varibles-and-constats"},"Varibles and Constats"),(0,r.kt)("p",null,"In Go, a variable is a storage location that holds a value of a specific type. You can use variables to store values such as numbers, strings, and more."),(0,r.kt)("h2",{id:"there-are-several-ways-to-declare-and-initialize-variables-in-go"},"There are several ways to declare and initialize variables in Go:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Declaring variables with the "var" keyword:')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var name string = "John"\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Short variable declarations using ":=":')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"age := 25\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Declaring multiple variables at once:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\nvar (\nname string = "John"\nage int = 30\nmarried bool = false\n)\n// either way is accepted\nvar name, age string = "John", "25"\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Assigning variables to the values of other variables:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"name2 := name\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Declaring variables with their zero value:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var name string\nvar age int\nvar married bool\n")),(0,r.kt)("p",null,'The zero value of a string is an empty string (""), the zero value of an int is 0, and the zero value of a bool is false.'),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"Declaring a variable with a pointer type:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var g *int\n")),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"Declaring a variable with a specific value and a pointer type:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"h := new(int)\n*h = 10\n")),(0,r.kt)("h2",{id:"variable-scope"},"variable scope"),(0,r.kt)("p",null,"In Go, the scope of a variable is the portion of the program where the variable is visible and can be accessed."),(0,r.kt)("p",null,"There are two types of variable scope in Go: local and global."),(0,r.kt)("h3",{id:"local-variable-scope"},"local variable scope"),(0,r.kt)("p",null,"A local variable local is a variable that is declared within a function. It can only be accessed within the function in which it is declared and is not visible to other functions."),(0,r.kt)("h3",{id:"global-variable-scope"},"Global variable scope"),(0,r.kt)("p",null,"A global variable, on the other hand, is a variable that is declared outside of any function. It can be accessed from anywhere in the program. However, it is generally a good idea to avoid using global variables as much as possible, as they can make it difficult to understand the flow of data through a program and can lead to maintenance issues."),(0,r.kt)("p",null,"In Go, variables can also be declared at the package level. These variables are global to the package, but are not visible to other packages."),(0,r.kt)("p",null,"Here's an example of how variable scope works in Go:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport "fmt"\n\n// global variable\nvar global = "This is a global variable"\n\nfunc main() {\n  // local variable\n  local := "This is a local variable"\n\n  fmt.Println(global) // This is a global variable\n  fmt.Println(local) // This is a local variable\n}\n\nfunc anotherFunc() {\n  fmt.Println(global) // This is a global variable\n  fmt.Println(local) // undefined: local\n}\n')),(0,r.kt)("p",null,"In this example, the global variable is visible to both the ",(0,r.kt)("strong",{parentName:"p"},"main function")," and the ",(0,r.kt)("strong",{parentName:"p"},"anotherFunc function"),", because it is a global variable."),(0,r.kt)("p",null,"However, the local variable is only visible within the ",(0,r.kt)("strong",{parentName:"p"},"main")," function, as it is a local variable. If you try to access the local variable from the ",(0,r.kt)("strong",{parentName:"p"},"anotherFunc")," function, you will get an error saying that local is undefined."),(0,r.kt)("h1",{id:"constants"},"constants"),(0,r.kt)("p",null,'Go does not have the concept of constants in the same way that other programming languages do. Instead, Go uses the keyword "const" to declare a value that cannot be changed after it is assigned. For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const PI = 3.14\nconst name string = "John"\n')),(0,r.kt)("p",null,"In Go, it is also possible to define multiple constants at once using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'const (\nPI = 3.14\nname string = "John"\nage int = 35\n)\n')),(0,r.kt)("h2",{id:"there-are-several-constants-in-go-including"},"There are several constants in Go, including:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"math.MaxInt64:")," The largest possible integer value that can be represented in Go (9,223,372,036,854,775,807)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"math.MaxFloat64:")," The largest possible floating point value that can be represented in Go (1.7976931348623157e+308)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"math.Pi:")," The mathematical constant pi, representing the ratio of a circle's circumference to its diameter (3.141592653589793)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"math.E:")," The mathematical constant e, representing the base of the natural logarithm (2.718281828459045)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"math.Phi:")," The mathematical constant phi, also known as the golden ratio (1.61803398874989)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"time.Duration.Max"),": The maximum possible duration value that can be represented in Go (9,223,372,036,854,775,807 nanoseconds)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"time.Duration.Min"),": The minimum possible duration value that can be represented in Go (-9,223,372,036,854,775,807 nanoseconds)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"math.Inf"),": A value representing infinity."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"math.NaN"),": A value representing not a number."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"math.MaxUint"),": The largest possible unsigned integer value that can be represented in Go (18,446,744,073,709,551,615)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"time.Millisecond"),": This constant represents the duration of one millisecond, which is equivalent to 1,000 microseconds."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"time.Microsecond"),": This constant represents the duration of one microsecond, which is equivalent to 1,000 nanoseconds."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"time.Nanosecond"),": This constant represents the duration of one nanosecond, which is equivalent to 1 billionth of a second."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"time.Second"),": This constant represents the duration of one second, which is equivalent to 1,000 milliseconds."))}u.isMDXComponent=!0}}]);