(this.webpackJsonprestaurants=this.webpackJsonprestaurants||[]).push([[0],{23:function(e,t,a){e.exports=a(56)},34:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(6),c=a.n(s),l=a(5),i=a(4),o=a(20),u=(a(34),function(e){var t=e.list;return r.a.createElement("div",{className:"ui cards"},r.a.createElement("a",{className:"ui raised link card rest-cards",href:t.reserve_url,target:"_blank"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{class:"right floated mini ui image",src:"https://www.opentable.com/img/restimages/21307.jpg"}),r.a.createElement("div",{className:"header title"},t.name),r.a.createElement("div",{className:"description"},t.address,"  ",r.a.createElement("br",null)," ",t.city,", ",t.state," ",t.postal_code,". ",t.country,r.a.createElement("br",null),r.a.createElement("br",null),"Tel: ",r.a.createElement("a",{className:"phone",href:"tel:".concat(t.phone)},t.phone))),r.a.createElement("div",{className:"extra content"},r.a.createElement("div",{className:"ui two buttons"},r.a.createElement("a",{className:"ui button btn",href:t.reserve_url,target:"_blank"},"More Details")))))}),m=a(1),f=a.n(m),d=a(3),p=a(21),E=a.n(p).a.create({baseURL:"https://opentable.herokuapp.com"}),h=function(e){return function(){var t=Object(d.a)(f.a.mark((function t(a,n){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.get("/api/restaurants",{params:{city:e.city}});case 2:r=t.sent,a({type:"FETCH_RESTS",payload:r.data.restaurants});case 4:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},b=function(e){return function(t){t({type:"FETCH_FIELDS",payload:{fields:e}})}},y=(a(53),Object(l.b)((function(e){return{restaurants:e.restaurants,fields:e.fields}}),{fetchRests:h,fetchFields:b})((function(e){e.fetchRests;var t,a=e.restaurants,n=e.fields,s=a;console.log(s);return n.map((function(e){return e.fields.city})),r.a.createElement("div",{className:"ui container"},r.a.createElement("br",null),r.a.createElement("div",{className:"rest-list"},(t=s,n.map((function(e){if(""!==e.fields.refine){var a="string"===typeof e.fields.refine?e.fields.refine.toLowerCase():e.fields.refine,n=t.filter((function(e){return e.name.toLowerCase().includes(a)||e.address.toLowerCase().includes(a)||e.country.toLowerCase().includes(a)||e.postal_code.toLowerCase().includes(a)}));return n.length>=1?n.map((function(t){return r.a.createElement(u,{key:t.id,list:t,city:e.fields.city})})):r.a.createElement("h3",{className:"error-message",key:Math.random()},"No resturants in ",r.a.createElement("span",{className:"error-filter-message"},e.fields.city)," city with ",r.a.createElement("span",{className:"error-filter-message"},e.fields.refine)," filter. Please try different refined search.")}return s.map((function(e){return r.a.createElement("div",{className:"four wide column"},r.a.createElement(u,{key:e.id,list:e}))}))})))))}))),v=a(22),N=(a(54),Object(l.b)(null,{fetchFields:b,fetchRests:h})((function(e){var t=Object(v.a)({defaultValues:{city:"",refine:""}}),a=t.handleSubmit,n=t.register;return r.a.createElement("div",{className:"ui container "},r.a.createElement("form",{className:"ui form form-field",onSubmit:a((function(t){e.fetchFields(t),e.fetchRests(t)}))},r.a.createElement("div",{className:"field"},r.a.createElement("div",{className:"inline fields form-container"},r.a.createElement("div",{className:"field city-field"},r.a.createElement("label",{className:"city-label"},"City: "),r.a.createElement("input",{className:"city-input",type:"text",name:"city",ref:n({required:"Required"})})),r.a.createElement("div",{className:"field ref-field"},r.a.createElement("label",{className:"ref-label"},"Refine Search : "),r.a.createElement("input",{type:"text",className:"ref-input",name:"refine",placeholder:"optional",ref:n})),r.a.createElement("button",{type:"submit",className:"ui button btn sub-btn"},"Search")))))}))),g=(a(55),function(){return r.a.createElement("div",{className:"ui container main-container"},r.a.createElement("h1",{className:"main-title",onClick:function(){window.location.reload(!1)}},"RESTAURANT FINDER"),r.a.createElement(N,null),r.a.createElement(y,null))}),w=Object(i.c)({restaurants:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_RESTS":return t.payload;default:return e}},fields:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_FIELDS":return[t.payload];default:return e}}}),R=Object(i.d)(w,Object(i.a)(o.a));c.a.render(r.a.createElement(l.a,{store:R},r.a.createElement(g,null)),document.querySelector("#root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.eba449bc.chunk.js.map