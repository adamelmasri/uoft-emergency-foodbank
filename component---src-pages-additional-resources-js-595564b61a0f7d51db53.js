(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"4m0H":function(e,a,t){e.exports=t.p+"static/cf-18d677cfb2fdd3faaed8dad6fb5047d6.jpg"},O7CH:function(e,a,t){e.exports=t.p+"static/utsu-40345d32f8fd99330b24a06ad1c3a6d8.jpg"},Wx8P:function(e,a,t){e.exports=t.p+"static/peoplespantry-390ce5a41cf20db762ee650cdc481979.png"},"hd/x":function(e,a,t){e.exports=t.p+"static/cupe-acf1ebc98bb498f35b888c4c86fa4a30.png"},vrRU:function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("7oih"),o=t("rQCx"),i=t("6xyR"),c=t("wx14"),s=t("zLVn"),m=t("TSYQ"),u=t.n(m),d=t("y8DL"),f=t("vUet"),E=l.a.createContext(null),g=l.a.createContext(null);g.displayName="AccordionContext";var p=g;var v,h=l.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"button":t,o=e.children,i=e.eventKey,m=e.onClick,u=Object(s.a)(e,["as","children","eventKey","onClick"]),d=function(e,a){var t=Object(n.useContext)(p),l=Object(n.useContext)(E);return function(n){l&&l(e===t?null:e,n),a&&a(n)}}(i,m);return"button"===r&&(u.type="button"),l.a.createElement(r,Object(c.a)({ref:a,onClick:d},u),o)})),y=t("7j6X"),b=t("dRu9"),w=t("wsUu"),T=t("Qg85"),k=t("z+q/"),C={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function O(e,a){var t=a["offset"+e[0].toUpperCase()+e.slice(1)],n=C[e];return t+parseInt(Object(y.a)(a,n[0]),10)+parseInt(Object(y.a)(a,n[1]),10)}var N=((v={})[b.c]="collapse",v[b.d]="collapsing",v[b.b]="collapsing",v[b.a]="collapse show",v),j={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:O},x=l.a.forwardRef((function(e,a){var t=e.onEnter,r=e.onEntering,o=e.onEntered,i=e.onExit,m=e.onExiting,d=e.className,f=e.children,E=e.dimension,g=void 0===E?"height":E,p=e.getDimensionValue,v=void 0===p?O:p,h=Object(s.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),y="function"==typeof g?g():g,C=Object(n.useMemo)((function(){return Object(T.a)((function(e){e.style[y]="0"}),t)}),[y,t]),j=Object(n.useMemo)((function(){return Object(T.a)((function(e){var a="scroll"+y[0].toUpperCase()+y.slice(1);e.style[y]=e[a]+"px"}),r)}),[y,r]),x=Object(n.useMemo)((function(){return Object(T.a)((function(e){e.style[y]=null}),o)}),[y,o]),K=Object(n.useMemo)((function(){return Object(T.a)((function(e){e.style[y]=v(y,e)+"px",Object(k.a)(e)}),i)}),[i,v,y]),U=Object(n.useMemo)((function(){return Object(T.a)((function(e){e.style[y]=null}),m)}),[y,m]);return l.a.createElement(b.e,Object(c.a)({ref:a,addEndListener:w.a},h,{"aria-expanded":h.role?h.in:null,onEnter:C,onEntering:j,onEntered:x,onExit:K,onExiting:U}),(function(e,a){return l.a.cloneElement(f,Object(c.a)({},a,{className:u()(d,f.props.className,N[e],"width"===y&&"width")}))}))}));x.defaultProps=j;var K=x,U=l.a.forwardRef((function(e,a){var t=e.children,r=e.eventKey,o=Object(s.a)(e,["children","eventKey"]),i=Object(n.useContext)(p);return l.a.createElement(E.Provider,{value:null},l.a.createElement(K,Object(c.a)({ref:a,in:i===r},o),l.a.createElement("div",null,l.a.Children.only(t))))}));U.displayName="AccordionCollapse";var P=U,B=l.a.forwardRef((function(e,a){var t=Object(d.a)(e,{activeKey:"onSelect"}),n=t.as,r=void 0===n?"div":n,o=t.activeKey,i=t.bsPrefix,m=t.children,g=t.className,v=t.onSelect,h=Object(s.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),y=u()(g,Object(f.a)(i,"accordion"));return l.a.createElement(p.Provider,{value:o||null},l.a.createElement(E.Provider,{value:v||null},l.a.createElement(r,Object(c.a)({ref:a},h,{className:y}),m)))}));B.displayName="Accordion",B.Toggle=h,B.Collapse=P;var A=B,S=t("dbZe"),_=l.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.variant,r=e.size,o=e.active,i=e.className,m=e.block,d=e.type,E=e.as,g=Object(s.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),p=Object(f.a)(t,"btn"),v=u()(i,p,o&&"active",n&&p+"-"+n,m&&p+"-block",r&&p+"-"+r);if(g.href)return l.a.createElement(S.a,Object(c.a)({},g,{as:E,ref:a,className:u()(v,g.disabled&&"disabled")}));a&&(g.ref=a),d?g.type=d:E||(g.type="button");var h=E||"button";return l.a.createElement(h,Object(c.a)({},g,{className:v}))}));_.displayName="Button",_.defaultProps={variant:"primary",active:!1,disabled:!1};var L=_,I=t("Wx8P"),R=t.n(I),H=t("O7CH"),D=t.n(H),F=t("4m0H"),G=t.n(F),M=t("i252"),W=t.n(M),Q=t("YI8I"),V=t.n(Q),q=t("4pfT"),z=t.n(q),Y=t("hd/x"),J=t.n(Y);a.default=function(){return l.a.createElement(r.a,null,l.a.createElement(o.a,null),l.a.createElement("div",{id:"wrapper"},l.a.createElement("div",{id:"main"},l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Additional Resources"),l.a.createElement("section",null,l.a.createElement("p",null," We've compiled a list of resources and services in the GTA as well as a list of financial services available at UofT. "),l.a.createElement("strong",null,"Instructions"),l.a.createElement("ol",null,l.a.createElement("li",null," Click on the category to see the list of available services."),l.a.createElement("li",null," Once the list appears you can click on the name for more information or on the image to go the resource.")),l.a.createElement("div",{className:"features"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"Financial resources available at the University of Toronto                     ")),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://utsu.formstack.com/forms/bursaries_and_grants",className:"image"},l.a.createElement("img",{src:D.a,alt:"UTSU Logo"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"UTSU Financial Aid Bursaries"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"The UTSU offers 7 types of bursaries to help alleviate financial burdens for undergraduate students. ",l.a.createElement("strong",null,"The emergency bursary can be used for groceries.")))))))),l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://future.utoronto.ca/finances/financial-aid/emergency-assistance-grants/",className:"image"},l.a.createElement("img",{src:W.a,alt:"UofT Logo"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"UofT Emergency Assistance Grants"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"The University of Toronto provides 3 grants for undergraduate and graduate students facing financial hardship. These can often be used to account for cost-of-living andd educational expenses not completed covered by your current income and loan-based financial aid programs."))))))),l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://utgsu.ca/funding-2/",className:"image"},l.a.createElement("img",{src:V.a,alt:"UTGSU Logo"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"UTGSU Financial Assistance"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"The UTGSU provides several sources of funding for UTGSU members and for groups and events that serve their members."))))))),l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://apus.ca/services/scholarships-bursaries/",className:"image"},l.a.createElement("img",{src:z.a,alt:"APUS Logo"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"APUS Scholarships & Bursaries"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"Recognizing that part-time students face barriers to accessing funding from governmental and institutional programs, APUS bursaries are available to part-time undergraduate students on all three campuses of the University of Toronto. These bursaries are provided on the basis of financial need as determined by the Office of Enrolment Services."))))))),l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://www.cupe3902.org/",className:"image"},l.a.createElement("img",{src:J.a,alt:"CUPE 3902 Logo"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"CUPE 3902 Financial Supports"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"CUPE 3902 provides a comprehensive set of financial supports for it's members. Please visit their website and select your unit to determine what is available."))))))))))),l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"City-listed resources in Toronto, Peel, Durham and York regions                   ")),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://211central.ca/",className:"image"},l.a.createElement("img",{src:"https://211central.ca/wp-content/uploads/2019/04/cropped-211central_logo.png",alt:"211 Central Logo"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"211 Central"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"A list of searchable services, including food, for Toronto, Durham, Peel and York Region"))))))),l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://www.torontocentralhealthline.ca/listservices.aspx?id=10572&region=TorontoCentral",className:"image"},l.a.createElement("img",{src:"https://www.torontocentralhealthline.ca/Images/HLlogo-TCO.png",alt:"Toronto Central Healthline Logo"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"Toronto Central Healthline"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"A list of food banks and food services within the City of Toronto. Make sure to select the region of Toronto you're in before providing your postal code."))))))))))),l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"Community-led grassroots services                      ")),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://docs.google.com/forms/d/e/1FAIpQLScmtnMtpsWjTp5kicU3_X2mrM5t57A-4k7U7jYDaiWdFmSAfQ/viewform?fbclid=IwAR0NGWUuJj8hkW1CPvj3-xp8vwKtx0YEgG9JNR6GLVhinj6Fd0mzmNqiDMA",className:"image"},l.a.createElement("img",{src:R.a,alt:"The People's Pantry Logo"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"The People's Pantry"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"The COVID-19 crisis has left many in our community struggling to access food as we are faced with mass unemployment and loss of income, excessive hoarding at grocery stores, reduced transportation options, and more. Particularly hard-hit communities include, but are not limited to, low-income and working-class families, QTBIPOC (Queer, Trans*, Black, Indigenous, and People of Colour), single parents, sex workers, those living in precarious housing situations, those living with underlying medical conditions, those with disabilities, newly-arrived immigrants, and the elderly."),l.a.createElement("p",null,"In response to the pandemic, The People's Pantry is a grassroots initiative providing home-cooked meals and grocery bundles to individuals and families across the GTA who have been disproportionately affected by the COVID-19 crisis. We serve those who are struggling financially or are otherwise unable to provide sufficient food for themselves and their family. Meals and groceries will be delivered right to their door, 100% free of charge, no questions asked, no fixed address required."))))))),l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://www.upliftkitchen.ca/",className:"image"},l.a.createElement("img",{src:"https://static.ucraft.app/fs/ucraft/userFiles/upliftkitchen/images/logo.png?v=1591563056",alt:"Uplift Kitchen Logo"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"Uplift Kitchen"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"Uplift Kitchen is two friends who see a need in our community and have the means to help. Our goal is to give Black identifying folks the food and resources they need to survive during this time of global crisis, and in the future.                         "))))))),l.a.createElement("article",null,l.a.createElement("a",{target:"_blank",rel:"noreferrer nofollow",href:"https://www.instagram.com/cf___to/",className:"image"},l.a.createElement("img",{src:G.a,alt:"Community Fridge Toronto"})),l.a.createElement("div",{className:"inner"},l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"Community Fridge Toronto"),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"refrigerators run by the community for the community. aiming to tackle food disparity and redistribute wealth n privilege.cleaned and restocked daily                         "))))))))))),l.a.createElement(A,null,l.a.createElement(i.a,null,l.a.createElement(i.a.Header,null,l.a.createElement(A.Toggle,{as:L,variant:"link",eventKey:"0"},"Automated chatbot (Chalmers Bot) for seeking resources within Ontario                 ")),l.a.createElement(A.Collapse,{eventKey:"0"},l.a.createElement(i.a.Body,null,l.a.createElement("p",null,"This chatbot requires your location and a bit of interaction but it can help you find local and available resources at any time."),l.a.createElement("iframe",{src:"https://chalmers.amplelabs.co/",width:"100%",height:"700px"}))))))))))))}}}]);
//# sourceMappingURL=component---src-pages-additional-resources-js-595564b61a0f7d51db53.js.map