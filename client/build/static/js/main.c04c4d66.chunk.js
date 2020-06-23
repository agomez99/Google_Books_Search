(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{58:function(e,t,a){e.exports=a(90)},63:function(e,t,a){},67:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(19),r=a.n(l),c=(a(63),a(98)),i=a(100);var s=function(){return o.a.createElement(c.a,{bg:"dark",variant:"dark",expand:"lg"},o.a.createElement(c.a.Brand,{href:"#home"},"Google Books"),o.a.createElement(c.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(c.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(i.a,{className:"mr-auto"},o.a.createElement(i.a.Link,{href:"/"},"Search"),o.a.createElement(i.a.Link,{href:"/saved"},"Save"))))},u=(a(67),a(55)),m=a(14),h=a(23),d=a(24),f=a(27),v=a(25),g=a(28),E=a(92),k=a(94),p=a(53),b=a(101),w=a(95),B=a(18),y=a.n(B),N={addBooks:function(e){return y.a.post("/api/books",e)},deleteBook:function(e){return y.a.delete("/api/books/"+e)},getBooks:function(){return y.a.get("/api/books")},searchBooks:function(e){return y.a.get("/api/search/".concat(e))}},I=a(93);a(85);var S=function(){return o.a.createElement(E.a,{className:"heading-title"},o.a.createElement(I.a,null,o.a.createElement(E.a,null,o.a.createElement("div",{className:"text-center"},o.a.createElement("h1",null," Google Books Search")))))},j=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",authors:"",description:"",image:"",link:""},a.loadBooks=function(){console.log("inside load books"),N.getBooks().then(function(e){console.log(e.data),a.setState({books:e.data,title:e.data.title,authors:e.data.authors,description:e.data.description,image:e.data.image,link:e.data.link})}).catch(function(e){return console.log(e)})},a.deleteBook=function(e){N.deleteBook(e).then(function(e){return a.loadBooks()}).catch(function(e){return console.log(e)})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){console.log("component did mount"),this.loadBooks()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(E.a,{className:"results"},o.a.createElement("h1",{id:"result"},"Your Saved Books:"),o.a.createElement(k.a,{className:"justify-content-center"},this.state.books.length?o.a.createElement(k.a,null,o.a.createElement(p.a,null,this.state.books.map(function(t){return o.a.createElement(b.a,{key:t.title,style:{width:"100%",margin:"10px"},className:"shadow-sm"},o.a.createElement(k.a,null,o.a.createElement(p.a,{className:"col-3"},o.a.createElement(b.a.Img,{className:"ml-5 pl-5 pt-5",style:{width:"45%"},src:t.image})),o.a.createElement(p.a,{className:"col-9"},o.a.createElement(b.a.Body,null,o.a.createElement(w.a,{variant:"danger",className:"float-right",onClick:function(){return e.deleteBook(t._id)}},"Delete"),o.a.createElement(w.a,{className:"float-right mr-2",href:t.link},"View"),o.a.createElement(b.a.Text,null,o.a.createElement("strong",null,t.title)),o.a.createElement(b.a.Text,null,"Written By: ",o.a.createElement("strong",null,t.authors)),o.a.createElement(b.a.Text,null,t.description)))))}))):o.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component),L=a(54),O=a(99),x=a(96),C=a(97),D=(a(86),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],title:"",authors:"",description:"",image:"",link:""},a.handleInputChange=function(e){var t=e.target,n=t.name,o=t.value;a.setState(Object(L.a)({},n,o))},a.handleFormSubmit=function(e){e.preventDefault(),N.searchBooks(a.state.title).then(function(e){return a.setState({books:e.data.items})}).catch(function(e){return console.log(e)})},a.LoadBook=function(){N.searchBooks(a.state.title).then(function(e){a.setState({books:e.data.items}),console.log(e.data.items)})},a.saveButtonSubmit=function(e){e.preventDefault();var t=e.target.value.split(",");N.addBooks({title:t[0],authors:t[2],description:e.target.name,image:t[1],link:t[3]}).then(function(e){console.log(e)}).catch(function(e){return console.log(e)})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.LoadBook()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(S,null),o.a.createElement(E.a,{className:"search-container"},o.a.createElement("h4",null,"Book Search"),o.a.createElement(O.a,null,o.a.createElement(O.a.Group,null,o.a.createElement(O.a.Label,null,"Book"),o.a.createElement(O.a.Control,{name:"title",value:this.state.title,onChange:this.handleInputChange,type:"text",placeholder:"Search"})),o.a.createElement(w.a,{variant:"primary",type:"submit",onClick:this.handleFormSubmit},"Submit"))),o.a.createElement(E.a,{className:"results"},o.a.createElement("h3",{id:"result"},"Results:"),o.a.createElement("div",null,this.state.books.map(function(t){return o.a.createElement("div",{className:"media-div"},o.a.createElement(x.a,{key:t.title},o.a.createElement(x.a.Body,null,t.volumeInfo.imageLinks?o.a.createElement(C.a,{width:100,height:100,className:"align-self-start mr-3",src:t.volumeInfo.imageLinks.thumbnail,alt:"Image"}):o.a.createElement(C.a,{width:100,height:100,className:"align-self-start mr-3",src:"placeholder",alt:"Image"}),o.a.createElement("h5",null,o.a.createElement("strong",null,"title: ",t.volumeInfo.title)),t.volumeInfo.authors?o.a.createElement("h6",null,o.a.createElement("strong",null,"Author: ",t.volumeInfo.authors[0])):o.a.createElement("h6",null,o.a.createElement("strong",null,"Author: Not Defined")),o.a.createElement("p",null,"Description: ",t.volumeInfo.description)),o.a.createElement(w.a,{variant:"danger",href:t.volumeInfo.previewLink},"View"),o.a.createElement(w.a,{variant:"success",type:"submit",onClick:e.saveButtonSubmit,name:t.volumeInfo.description,value:[t.volumeInfo.title,t.volumeInfo.imageLinks.thumbnail,t.volumeInfo.authors[0],t.volumeInfo.previewLink]},"Save")))}))))}}]),t}(n.Component));var A=function(){return o.a.createElement("div",null,o.a.createElement(u.a,null,o.a.createElement("div",null,o.a.createElement(s,null),o.a.createElement(m.c,null,o.a.createElement(m.a,{exact:!0,path:"/",component:D}),o.a.createElement(m.a,{exact:!0,path:"/saved",component:j})))))},W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(A,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");W?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):T(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):T(e)})}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.c04c4d66.chunk.js.map