"use strict";(self.webpackChunksource=self.webpackChunksource||[]).push([[7955],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||h[g]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2936:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},l="Data Types",o={unversionedId:"Recources/golang/datatype",id:"Recources/golang/datatype",title:"Data Types",description:"Go has several built-in data types, including:",source:"@site/docs/Recources/golang/datatype.md",sourceDirName:"Recources/golang",slug:"/Recources/golang/datatype",permalink:"/Blockchain/docs/Recources/golang/datatype",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Recources/golang/datatype.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Basic Struture of a Go file",permalink:"/Blockchain/docs/Recources/golang/structure"},next:{title:"Varibles and Constats",permalink:"/Blockchain/docs/Recources/golang/varibles"}},s={},p=[{value:"Boolean:",id:"boolean",level:2},{value:"Integer:",id:"integer",level:2},{value:"In Go, there are several integer types:",id:"in-go-there-are-several-integer-types",level:2},{value:"Float:",id:"float",level:2},{value:"String:",id:"string",level:2},{value:"There are several operations that can be performed on strings in Go:",id:"there-are-several-operations-that-can-be-performed-on-strings-in-go",level:3},{value:"Pointer:",id:"pointer",level:2},{value:"There are several operations that can be performed with pointer types in Go:",id:"there-are-several-operations-that-can-be-performed-with-pointer-types-in-go",level:3},{value:"Struct",id:"struct",level:2},{value:"Operations:",id:"operations",level:3},{value:"Data structure type",id:"data-structure-type",level:2},{value:"Arrays:",id:"arrays",level:2},{value:"Operations:",id:"operations-1",level:3},{value:"Slices:",id:"slices",level:2},{value:"Operations:",id:"operations-2",level:3},{value:"Maps:",id:"maps",level:2},{value:"Operations:",id:"operations-3",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-types"},"Data Types"),(0,r.kt)("p",null,"Go has several built-in data types, including:"),(0,r.kt)("h2",{id:"boolean"},"Boolean:"),(0,r.kt)("p",null,"a type that can hold either true or false values"),(0,r.kt)("h2",{id:"integer"},"Integer:"),(0,r.kt)("p",null,"a type that can hold whole numbers, such as -1, 0, 1, 2, etc."),(0,r.kt)("h2",{id:"in-go-there-are-several-integer-types"},"In Go, there are several integer types:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"int:")," This is the default integer type in Go. It is the same size as a machine word on the host system, which means it can be either 32-bit or 64-bit depending on the system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"int8"),": This is an 8-bit integer type, which can hold values from -128 to 127."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"int16"),": This is a 16-bit integer type, which can hold values from -32768 to 32767."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"int32"),": This is a 32-bit integer type, which can hold values from -2147483648 to 2147483647."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"int64"),": This is a 64-bit integer type, which can hold values from -9223372036854775808 to 9223372036854775807."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint"),": This is an unsigned integer type, which means it can only hold positive values. It is the same size as a machine word on the host system."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint8"),": This is an 8-bit unsigned integer type, which can hold values from 0 to 255."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint16"),": This is a 16-bit unsigned integer type, which can hold values from 0 to 65535."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint32"),": This is a 32-bit unsigned integer type, which can hold values from 0 to 4294967295."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint64"),": This is a 64-bit unsigned integer type, which can hold values from 0 to 18446744073709551615."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"There are several operations that can be performed on integers in Go"),":"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Addition"),': This is performed using the "+" operator. For example: a + b'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subtraction"),': This is performed using the "-" operator. For example: a - b'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multiplication"),': This is performed using the "',(0,r.kt)("em",{parentName:"p"},'" operator. For example: a ')," b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Division"),': This is performed using the "/" operator. For example: a / b'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Modulus:"),' This is performed using the "%" operator. For example: a % b'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Increment:"),' This is performed using the "++" operator. For example: a++'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Decrement:"),' This is performed using the "--" operator. For example: a--'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bitwise operations"),": "),(0,r.kt)("p",null,'These include "&" (and), "|" (or), "^" (xor), "&^" (and not), "<<" (left shift), and ">>" (right shift). These operations are performed on the binary representation of integers.'),(0,r.kt)("p",null,"It is important to note that Go does not support automatic type coercion, so you must ensure that the operands of an operation are of the same type. You can also use type conversions to convert an integer type to another integer type."),(0,r.kt)("h2",{id:"float"},"Float:"),(0,r.kt)("p",null,"a type that can hold decimal numbers, such as 1.5, 2.7, etc."),(0,r.kt)("p",null,"The float type in Go represents a floating point number, which is a number with a decimal point. There are two types of float in Go: ",(0,r.kt)("strong",{parentName:"p"},"float32")," and ",(0,r.kt)("strong",{parentName:"p"},"float64"),". Float32 has a precision of about 6 digits, while float64 has a precision of about 15 digits."),(0,r.kt)("p",null,"Operations that can be performed on floats include addition, subtraction, multiplication, division, and modulus. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"x := 5.5\ny := 3.2\n\nsum := x + y // sum is 8.7\ndifference := x - y // difference is 2.3\nproduct := x * y // product is 17.6\nquotient := x / y // quotient is 1.71875\nremainder := x % y // remainder is 1.9\n")),(0,r.kt)("p",null,"It is also possible to use comparison operators, such as ==, !=, >, >=, <, and <=, to compare float values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'x := 5.5\ny := 3.2\n\nif x > y {\nfmt.Println("x is greater than y")\n} else {\nfmt.Println("y is greater than x")\n}\n')),(0,r.kt)("p",null,"// Output: x is greater than y"),(0,r.kt)("h2",{id:"string"},"String:"),(0,r.kt)("p",null,'a type that can hold a sequence of characters, such as "hello", "world", etc.'),(0,r.kt)("p",null,'In Go, a string is a sequence of characters, represented as a type called "string". Strings can be declared using either single or double quotes, like this:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var s1 string = \"Hello, world!\"\nvar s2 string = 'Hello, world!'\n")),(0,r.kt)("h3",{id:"there-are-several-operations-that-can-be-performed-on-strings-in-go"},"There are several operations that can be performed on strings in Go:"),(0,r.kt)("p",null,'Concatenation: You can concatenate two or more strings using the "+" operator.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'s1 := "Hello"\ns2 := "World"\ns3 := s1 + s2 // s3 will be "HelloWorld"\n')),(0,r.kt)("p",null,'Substrings: You can get a substring of a string by using the "s',"[start:end]",'" syntax, where start is the index of the first character in the substring and end is the index of the last character.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'s := "Hello World"\nsubstr := s[5:10] // substr will be "World"\n\n')),(0,r.kt)("p",null,'Length: You can get the length of a string using the "len()" function.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'s := "Hello World"\nlength := len(s) // length will be 11\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Comparison"),': You can compare two strings using the "==" operator.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'s1 := "Hello"\ns2 := "Hello"\nif s1 == s2 {\n  fmt.Println("The strings are equal")\n} else {\n  fmt.Println("The strings are not equal")\n}\n')),(0,r.kt)("p",null,"Conversion: You can convert a string to a different type, such as an integer or float, using the appropriate conversion function, such as "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'a := "123"\nb, _ := strconv.ParseInt(a, 10, 64) // b is now an int with the value 123\nc := strconv.ParseFloat(a, 64) // c is now a float64 with the value 123.0\n')),(0,r.kt)("p",null,"Searching: You can search for a specific character or substring within a string using the function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"strings.Index()  \n")),(0,r.kt)("p",null,'Replacing: You can replace a specific character or substring within a string using the "strings.Replace()" function.'),(0,r.kt)("p",null,'Trimming: The "trim" function removes leading and trailing spaces from a string.'),(0,r.kt)("p",null,'Splitting: You can split a string into an array of strings using the "strings.Split()" function.'),(0,r.kt)("h2",{id:"pointer"},"Pointer:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pointer")," type in Go is a type that stores the memory address of a value. It is represented by the ",(0,r.kt)("strong",{parentName:"p"},'" * "')," symbol followed by the type of the value it points to. For example, a pointer to an integer would be represented as ",(0,r.kt)("strong",{parentName:"p"},'"*int"'),"."),(0,r.kt)("h3",{id:"there-are-several-operations-that-can-be-performed-with-pointer-types-in-go"},"There are several operations that can be performed with pointer types in Go:"),(0,r.kt)("p",null,'Assigning a value to a pointer: This is done using the "&" symbol, which returns the memory address of a value. For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"intValue := 10\nintPointer := &intValue\n")),(0,r.kt)("p",null,'Dereferencing a pointer: This is done using the "*" symbol, which retrieves the value\nstored at the memory address pointed to by the pointer. For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"fmt.Println(*intPointer) // prints 10\n")),(0,r.kt)("p",null,"Changing the value of a pointer: This is done by dereferencing the pointer and assigning a new value to it. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"*intPointer = 15\nfmt.Println(*intPointer) // prints 15\n")),(0,r.kt)("p",null,'Comparing pointers: Pointers can be compared using the "==" and "!=" operators. For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'ptr1 := &intValue\nptr2 := &intValue\n\nif ptr1 == ptr2 {\nfmt.Println("Pointers point to the same memory location")\n}\n')),(0,r.kt)("p",null,'Pointer arithmetic: Pointers can be incremented or decremented using the "+" or "-" operators. This can be useful for iterating through arrays or slices. For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"slice := []int{1, 2, 3, 4, 5}\nptr := &slice[0]\n\nfor i := 0; i < len(slice); i++ {\nfmt.Println(*ptr)\nptr++\n}\n")),(0,r.kt)("p",null,'Creating a new pointer: A pointer can be created using the "new" function, which allocates memory for a new value and returns a pointer to it. For example:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"ptr := new(int)\n*ptr = 10\nfmt.Println(*ptr) // prints 10\n")),(0,r.kt)("p",null,"a type that holds the memory address of another value"),(0,r.kt)("h2",{id:"struct"},"Struct"),(0,r.kt)("p",null,"A struct is a user-defined type that consists of a collection of fields. Structs can be used to define custom data structures and can contain fields of any type.\nits a composite data type that groups together related data fields."),(0,r.kt)("h3",{id:"operations"},"Operations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Accessing a field: struct.field")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Setting the value of a field: struct.field = value")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Iterating through the fields: for _, field := range struct"),(0,r.kt)("p",{parentName:"li"},"In Go, you can define a struct using the following syntax:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"type Point struct {\nX int\nY int\n}\n")),(0,r.kt)("p",null,"This creates a struct with two fields: X and Y, both of which are integers. You can create an instance of the struct using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"p := Point{X: 1, Y: 2}\n")),(0,r.kt)("p",null,"You can also initialize a struct with a set of values using the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"p := Point{1, 2}\n")),(0,r.kt)("h2",{id:"data-structure-type"},"Data structure type"),(0,r.kt)("p",null,"In Go, there are several data structures available for storing and manipulating data. These include:"),(0,r.kt)("h2",{id:"arrays"},"Arrays:"),(0,r.kt)("p",null,"An array is a fixed-size collection of elements of the same type. The size of the array is set when it is created and cannot be changed. Arrays can be accessed using their index, and they are 0-indexed, meaning that the first element is at index 0."),(0,r.kt)("p",null,"syntax"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"var arrayName = ","[length]","type{value1, value2, value3, ...}"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"arrayName := ","[length]","type{value1, value2, value3, ...}")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var fruitArray = [3]string{"apple", "banana", "cherry"}\n\nnumbers := [5]int{1, 2, 3, 4, 5}\n')),(0,r.kt)("h3",{id:"operations-1"},"Operations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Accessing an element: arr","[i]"),(0,r.kt)("li",{parentName:"ol"},"Setting the value of an element: arr","[i]"," = value"),(0,r.kt)("li",{parentName:"ol"},"Iterating through the elements: for i, value := range arr"),(0,r.kt)("li",{parentName:"ol"},"Appending elements to the end of the array"),(0,r.kt)("li",{parentName:"ol"},"Inserting elements at a specific index"),(0,r.kt)("li",{parentName:"ol"},"Removing elements at a specific index"),(0,r.kt)("li",{parentName:"ol"},"Sorting the array")),(0,r.kt)("h2",{id:"slices"},"Slices:"),(0,r.kt)("p",null,"A slice is a variable-size collection of elements of the same type. Unlike arrays, slices can be resized and have a capacity, which is the number of elements that can be stored in the slice before it needs to be reallocated."),(0,r.kt)("p",null,"Slice syntax in Go is as follows:"),(0,r.kt)("p",null,"slice","[start:end]"),(0,r.kt)("p",null,"Where 'start' is the index of the first element in the slice and 'end' is the index of the last element in the slice (not including the element at the index of 'end')."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"mySlice := []int{1, 2, 3, 4, 5}\nnewSlice := mySlice[1:3] // newSlice = [2, 3]\n")),(0,r.kt)("p",null,"Note that if 'start' is omitted, the slice starts at the beginning of the original slice. If 'end' is omitted, the slice ends at the end of the original slice."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"mySlice := []int{1, 2, 3, 4, 5}\nnewSlice := mySlice[:3] // newSlice = [1, 2, 3]\nnewSlice := mySlice[2:] // newSlice = [3, 4, 5]\n")),(0,r.kt)("h3",{id:"operations-2"},"Operations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Accessing an element: slice","[i]"),(0,r.kt)("li",{parentName:"ol"},"Setting the value of an element: slice","[i]"," = value"),(0,r.kt)("li",{parentName:"ol"},"Iterating through the elements: for i, value := range slice"),(0,r.kt)("li",{parentName:"ol"},"Appending an element: slice = append(slice, value)"),(0,r.kt)("li",{parentName:"ol"},"Removing an element: slice = append(slice","[:i]",", slice","[i+1:]","...)")),(0,r.kt)("h2",{id:"maps"},"Maps:"),(0,r.kt)("p",null,"A map is a collection of key-value pairs, where the keys are unique and the values can\nbe of any type. Maps can be accessed using the key, and they are not ordered."),(0,r.kt)("p",null,"In Go, map syntax looks like this:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"var mapName map","[keyType]","valueType")),(0,r.kt)("p",null,"For example, to create a map of strings to integers:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"var stringToInt map[string]int\n")),(0,r.kt)("p",null,"To create a map and initialize it with values, you can use the following syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'var stringToInt = map[string]int{\n"one": 1,\n"two": 2,\n"three": 3,\n}\n')),(0,r.kt)("h3",{id:"operations-3"},"Operations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Accessing a value: map","[key]"),(0,r.kt)("li",{parentName:"ol"},"Setting the value of a key: map","[key]"," = value"),(0,r.kt)("li",{parentName:"ol"},"Iterating through the keys and values: for key, value := range map"),(0,r.kt)("li",{parentName:"ol"},"Removing a key-value pair: delete(map, key)")))}c.isMDXComponent=!0}}]);