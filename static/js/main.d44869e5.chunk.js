(this["webpackJsonpfree-roam"]=this["webpackJsonpfree-roam"]||[]).push([[0],{100:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),i=n.n(r),a=n(25),l=n.n(a),o=(n(51),n(14)),s=(n(52),n(6)),d=(n(53),n(9)),u=n(3),b=(n(58),n(28)),f=n(5),j=n(19),h=n(7),p=n(15),x=n.n(p),O=n(38),v=n.n(O);x.a.extend(v.a);var k="MMMM Do, YYYY",m="YYYY-MM-DD",I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=void 0===t?Object(h.c)(8):t,c=e.parentId,r=void 0===c?null:c,i=e.text,a=e.childrenIds,l=void 0===a?[]:a,o=e.created,s=void 0===o?Date.now():o,d=e.dailyNote,u=void 0===d?null:d,b=arguments.length>1?arguments[1]:void 0,f=!r;if(f&&!u){var j=x()(i,k);j.isValid()&&(u=j.format(m))}if(u){if(u in b)return null;n=u}else if(n in b)for(;n in b;)n=Object(h.c)(8);return{id:n,parentId:r,text:i,childrenIds:l,created:s,updated:null,dailyNote:u}},g=function e(t,n){return t.parentId?e(n[t.parentId],n):t},y=function e(t,n){return t.childrenIds.length?e(n[t.childrenIds.slice(-1)],n):t},N=function e(t,n){var c=t.childrenIds,r=Object(j.a)(t,["childrenIds"]);return c.length?Object(f.a)(Object(f.a)({},r),{},{children:c.map((function(t){var c=n[t];return e(c,n)}))}):r},w=function e(t,n){var c;return t.childrenIds.length?(c=[t.id]).concat.apply(c,Object(b.a)(t.childrenIds.map((function(t){return e(n[t],n)})))):t.id},S=n(101),B=n(102),C=(n(59),Object(h.b)({name:"viewPane",initialState:{views:[{type:"page",blockId:"efgh"}]},reducers:{setViewPaneState:function(e,t){var n=t.payload;if(n&&"views"in n)return n},pushView:function(e,t){var n=t.payload,c=n.type,r=n.blockId;e.views.find((function(e){return e.type===c&&e.blockId===r}))||e.views.unshift(t.payload)},popView:function(e,t){var n=t.payload,c=n.type,r=n.blockId;e.views=e.views.filter((function(e){return"all"!==c&&e.type!==c||e.blockId!==r}))}}})),P=C.actions,M=P.setViewPaneState,R=P.pushView,T=P.popView,_=C.reducer,X=function(e){var t=e.blockId,n=e.isPage,r=void 0===n||n,i=e.children,a=e.noStyling,l=e.afterClick,s=Object(j.a)(e,["blockId","isPage","children","noStyling","afterClick"]),d=Object(u.b)(),b="/page/".concat(t);return Object(c.jsx)(o.b,Object(f.a)(Object(f.a)({to:b,onClick:function(e){e.shiftKey&&(e.preventDefault(),d(R({type:r?"page":"block",blockId:t}))),l&&l(),e.stopPropagation()},className:"block-link".concat(a?" block-link--no-styling":"")},s),{},{children:i}))},F=function(e){var t=e.block,n=e.isMain,i=Object(r.useState)(!0),a=Object(d.a)(i,2),l=a[0],o=a[1],s=Object(r.useState)(!1),b=Object(d.a)(s,2),f=b[0],j=b[1],h=Object(r.useState)(null),p=Object(d.a)(h,2),x=p[0],O=p[1],v=Object(u.c)((function(e){return e.links})),k=Object(u.c)((function(e){return e.blocks})),m=v.to[t.id];return Object(c.jsxs)("div",{children:[null===t.parentId&&m&&m.length>0&&n&&Object(c.jsxs)("div",{className:"references references--linked",children:[Object(c.jsxs)("span",{className:"references__toggle no-select",onClick:function(){return o((function(e){return!e}))},children:[l?Object(c.jsx)(S.a,{color:"white"}):Object(c.jsx)(B.a,{color:"white"}),Object(c.jsxs)("b",{children:[m.length," Linked References"]})]}),l&&function(){if(!t.parentId&&m&&m.length)return m.map((function(e){if(!(e in k))return null;var t=k[e],r=g(t,k);return Object(c.jsxs)("div",{children:[Object(c.jsx)(X,{blockId:r.id,children:Object(c.jsx)("h5",{children:r.text})}),Object(c.jsx)("div",{className:"reference-container",children:Object(c.jsx)(Oe,{blockId:e,isRoot:!1,isMain:n,fold:!0,showBreadcrumbs:!0})})]},e)}))}()]}),null===t.parentId&&n&&Object(c.jsxs)("div",{className:"references references--unlinked",children:[Object(c.jsxs)("span",{className:"references__toggle no-select",onClick:function(e){f?j(!1):(j(!0),O(function(e){var t=new RegExp("(?<![\\[\\w])".concat(e,"(?![\\[\\w]+)"),"gi");return Object.values(k).filter((function(e){return e.parentId&&t.test(e.text)}))}(t.text)))},children:[f?Object(c.jsx)(S.a,{color:"white"}):Object(c.jsx)(B.a,{color:"white"}),Object(c.jsxs)("b",{children:[x&&x.length?x.length:""," Unlinked References"]})]}),f&&function(){if(!t.parentId&&f)return x.length?x.map((function(e){var t=g(e,k);return Object(c.jsxs)("div",{children:[Object(c.jsx)(X,{blockId:t.id,children:Object(c.jsx)("h5",{children:t.text})}),Object(c.jsx)("div",{className:"reference-container",children:Object(c.jsx)(Oe,{blockId:e.id,isRoot:!1,isMain:n,fold:!0,showBreadcrumbs:!0})})]},e.id)})):Object(c.jsx)("p",{children:"No unlinked references"})}()]})]})},D=(n(61),n(45)),q=n(39),L=n.n(q),E=n(40),Y={abcd:{id:"abcd",parentId:null,text:"Hello World",childrenIds:["ijkl","mnop"]},efgh:{id:"efgh",parentId:null,text:"Lorem ipsum",childrenIds:["qrst"]},ijkl:{id:"ijkl",parentId:"abcd",text:"Normal *italics* **bold** ***bold italics***",childrenIds:[]},mnop:{id:"mnop",parentId:"abcd",text:"Link to [[Lorem ipsum]]",childrenIds:["uvwx","a1"]},qrst:{id:"qrst",parentId:"efgh",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",childrenIds:[]},uvwx:{id:"uvwx",parentId:"mnop",text:"I'm a third layer block",childrenIds:["a2"]},a1:{id:"a1",parentId:"mnop",text:"I'm another third layer block",childrenIds:[]},a2:{id:"a2",parentId:"uvwx",text:"I'm a fourth layer block",childrenIds:[]},"2021-02-17":{id:"2021-02-17",parentId:null,text:"February 17th, 2021",childrenIds:["a4"],created:1613546102e3,updated:null,dailyNote:"2021-02-17"},a4:{id:"a4",parentId:"a3",text:"Click here to edit",childrenIds:[]},plXnqf7B:{id:"plXnqf7B",parentId:"welcome",text:"Welcome to Free-Roam!",childrenIds:[],created:1613962018019,updated:1613962047962,dailyNote:null},welcome:{id:"welcome",parentId:null,text:"Welcome",childrenIds:["plXnqf7B","0NOhIzxB","H-O00XW0","64SNNX17"],created:1613962018016,updated:null,dailyNote:null},"0NOhIzxB":{id:"0NOhIzxB",parentId:"welcome",text:"Take a look around; you can check out:",childrenIds:["pKs_vxuk","ANZddpXT","NMb4Yf1z"],created:1613962048878,updated:1613962057083,dailyNote:null},pKs_vxuk:{id:"pKs_vxuk",parentId:"0NOhIzxB",text:"[Daily Notes](#/daily-notes) (like a journal)",childrenIds:[],created:1613962057397,updated:1613962069453,dailyNote:null},ANZddpXT:{id:"ANZddpXT",parentId:"0NOhIzxB",text:"All of the [current pages](#/all-pages)",childrenIds:[],created:1613962070989,updated:1613962076848,dailyNote:null},NMb4Yf1z:{id:"NMb4Yf1z",parentId:"0NOhIzxB",text:"A sample page: [[Hello World]]",childrenIds:["nbGfXXqe"],created:1613962077493,updated:1613962081636,dailyNote:null},nbGfXXqe:{id:"nbGfXXqe",parentId:"NMb4Yf1z",text:"Shift+click to open in side bar",childrenIds:[],created:1613962082245,updated:1613962090754,dailyNote:null},"H-O00XW0":{id:"H-O00XW0",parentId:"welcome",text:"Be sure to save your work if you wish to persist it",childrenIds:["mPiN8jkq"],created:1613962091917,updated:1613962107536,dailyNote:null},mPiN8jkq:{id:"mPiN8jkq",parentId:"H-O00XW0",text:"Save/load buttons in top left",childrenIds:[],created:1613962107877,updated:1613962114571,dailyNote:null},"64SNNX17":{id:"64SNNX17",parentId:"welcome",text:"Enjoy! Check out [the repo](https://github.com/cofinley/free-roam) to learn more and/or contribute!",childrenIds:[],created:1613962115053,updated:1613962120478,dailyNote:null}},A=Object(h.b)({name:"blocks",initialState:Y,reducers:{setBlocksState:function(e,t){var n=t.payload;if(n&&"object"===typeof n)return n},addBlock:function(e,t){var n=t.payload;if(n.parentId){e[n.parentId].childrenIds.push(n.id)}else{var c=I({parentId:n.id,text:"Click here to edit"},e);n.childrenIds.push(c.id),e[c.id]=c}e[n.id]=n},removeBlock:function(e,t){var n=t.payload.blockId,c=e[n];if(!c.childrenIds.length){var r=e[c.parentId];e[c.parentId].childrenIds=r.childrenIds.filter((function(e){return e!==n})),delete e[n]}},removePage:function(e,t){var n=t.payload.blockId,c=e[n];if(c.childrenIds.length){var r,i=Object(E.a)(c.childrenIds);try{for(i.s();!(r=i.n()).done;){var a=r.value;A.caseReducers.removePage(e,{payload:{blockId:a}})}}catch(l){i.e(l)}finally{i.f()}delete e[n]}else delete e[n]},changeParent:function(e,t){var n=t.payload,c=n.blockId,r=n.parentId;e[c].parentId=r,e[r].childrenIds.push(c)},updateBlock:function(e,t){var n=t.payload,c=n.blockId,r=n.parentId,i=n.childrenIds,a=n.text,l=e[c];if(l){l.parentId=r||l.parentId,l.childrenIds=i||l.childrenIds;var o=l.text;l.text="string"===typeof a?a:o,l.updated=Date.now(),e[c]=l,l.parentId||A.caseReducers.changeTitle(e,{payload:{currentTitle:o,newTitle:a}})}},changeTitle:function(e,t){var n=t.payload,c=n.currentTitle,r=n.newTitle,i=new RegExp("\\[\\[".concat(c,"\\]\\]"),"g");Object.values(e).map((function(t){return i.test(t.text)&&(e[t.id].text=t.text.replace("[[".concat(c,"]]"),"[[".concat(r,"]]"))),!0}))},repositionBlock:function(e,t){var n=t.payload,c=n.blockId,r=n.direction,i=e[c],a=e[i.parentId],l=a.childrenIds.indexOf(i.id);if("forward"===r){if(l>0){var o=e[a.childrenIds[l-1]];a.childrenIds.splice(l,1),o.childrenIds.push(c),i.parentId=o.id}}else{var s=e[i.parentId];if(s.parentId){var d=e[s.parentId],u=d.childrenIds.indexOf(s.id);-1!==u&&(s.childrenIds.splice(l,1),d.childrenIds.splice(u+1,0,c),i.parentId=d.id)}}},makeSibling:function(e,t){var n=t.payload,c=n.firstSiblingBlockId,r=n.secondSiblingBlockId,i=e[c];if(i.parentId){var a=e[r];if(a.parentId){var l=e[a.parentId],o=l.childrenIds.indexOf(r);l.childrenIds.splice(o,1)}var s=e[i.parentId],d=s.childrenIds.indexOf(c);e[s.id].childrenIds.splice(d+1,0,r)}}}}),H=A.actions,z=H.setBlocksState,V=(H.getBlockByText,H.addBlock),W=H.removeBlock,J=H.removePage,K=H.updateBlock,Q=H.repositionBlock,G=H.makeSibling,Z=A.reducer,U=Object(h.b)({name:"editor",initialState:{focusedBlock:{blockId:"",isMain:!0,caretPos:0}},reducers:{setEditorState:function(e,t){var n=t.payload;if(n&&"focusedBlock"in n)return n},updateFocusedBlock:function(e,t){e.focusedBlock=t.payload}}}),$=U.actions,ee=$.setEditorState,te=$.updateFocusedBlock,ne=U.reducer,ce=(n(62),function(e){var t=e.query,n=e.useLinks,r=e.onResultClick,a=e.onlyPages,l=e.allowCreation,o=e.onCreateClick,s=Object(u.c)((function(e){return e.blocks})),d=[];if(t&&t.length){var b=Object.values(s).filter((function(e){return(!a||null===e.parentId)&&-1!==e.text.indexOf(t)}));if(d=b.map((function(e){return n?Object(c.jsx)(X,{blockId:e.id,className:"search-result",afterClick:r,children:e.text},e.id):Object(c.jsx)("li",{className:"search-result",onMouseDown:r.bind(null,e),children:e.text},e.id)})),l)if(!(void 0!==b.find((function(e){return e.text===t})))){var f=Object(c.jsxs)("li",{className:"search-result",onClick:o,children:[Object(c.jsx)("b",{children:"Create"})," ",t]},"new-page-".concat(t));d.splice(0,0,f)}}return Object(c.jsx)(i.a.Fragment,{children:d.length>0&&Object(c.jsx)("div",{className:"search-results",children:Object(c.jsx)("ul",{className:"list-group list-group-flush",children:d})})})}),re=function(e){var t=e.block,n=e.isMain,i=e.isTitle,a=e.cursorCaret,l=e.setCursorCaret,o=e.onRender,s=Object(u.b)(),b=Object(r.useRef)(null),f=Object(r.useState)(!1),j=Object(d.a)(f,2),h=j[0],p=j[1],x=Object(u.c)((function(e){return e.editor.focusedBlock})),O=Object(u.c)((function(e){return e.blocks})),v=Object(r.useState)(!1),k=Object(d.a)(v,2),m=k[0],N=k[1],w=function(e){e.preventDefault(),e.shiftKey?s(Q({blockId:t.id,direction:"backward"})):s(Q({blockId:t.id,direction:"forward"})),s(te({blockId:t.id,isMain:n,caretPos:e.target.selectionStart}))},S=function(e){e.preventDefault();var c="";if(e.target.selectionStart!==e.target.value.length){var r=e.target.selectionStart;c=t.text.substring(r);var i=t.text.substring(0,r);s(K({blockId:t.id,text:i})),e.target.value=i}var a=I({text:c,parentId:t.parentId},O);s(V(a)),s(G({firstSiblingBlockId:t.id,secondSiblingBlockId:a.id})),s(te({blockId:a.id,isMain:n,caretPos:0}))},B=function(e){e.preventDefault();var t=e.target.selectionStart,n=e.target.value,c=n.charAt(t-1);e.target.value=n.substring(0,t)+"[]"+n.substring(t,n.length),e.target.selectionStart=t+1,e.target.selectionEnd=t+1,"["!==c||h?p(!1):(p(!0),N(""))},C=function(e){if(0===b.current.selectionStart&&!t.childrenIds.length){e.preventDefault();var c=g(t,O);if(!(t.parentId===c.id&&c.childrenIds[0]===t.id)){var r=function(e,t){var n=function(e,t){var n=t[e.parentId],c=n.childrenIds.indexOf(e.id);return c<1?null:t[n.childrenIds[c-1]]}(e,t);return n?n.childrenIds.length?y(n,t):n:t[e.parentId]}(t,O),i=r.text.length;s(K({blockId:r.id,text:r.text+t.text})),s(W({blockId:t.id})),s(te({blockId:r.id,isMain:n,caretPos:i}))}}},P=x.blockId&&x.blockId===t.id&&x.isMain===n&&x.caretPos;return P&&b.current&&(b.current.focus(),b.current.selectionStart=x.caretPos),Object(c.jsxs)("div",{className:"block__autocomplete-container",children:[Object(c.jsx)(D.a,{ref:b,className:"block-text block-text--edit".concat(i?" block-text--title":""),autoFocus:!0,onFocus:function(e){P?e.target.selectionStart=x.caretPos:null!==a.offsetX&&function(e){if(e){for(var t=["*","_"],n=e.value,c=1e4,r=0,i=[],o=0;o<=e.value.length;o++){var s=e.value.charAt(o);if(t.includes(s)){var d=e.value.split("");d.splice(o,1),e.value=d.join(""),i.push(o),o--}var u=L()(e,o),b=u.left,f=u.top,j=Math.sqrt(Math.pow(b-a.offsetX,2)+Math.pow(f-a.offsetY,2));j<c&&(c=j,r=o)}e.value=n;var h=r;i.length&&i[0]<=h&&(h+=i.filter((function(e){return e<=r})).length),e.selectionStart=h,e.selectionEnd=h,l({offsetX:null,offsetY:null,width:null})}}(e.target)},onKeyDown:function(e){var t;"Tab"===e.key?w(e):"Enter"!==e.key||e.shiftKey?"["===e.key?B(e):"Backspace"===e.key?C(e):h&&(48<=(t=e.keyCode)&&t<91||96<=t&&t<112&&108!==t||186<=t)&&N(m+e.key):S(e)},onChange:function(e){h||t.text===e.target.value||s(K({blockId:t.id,text:e.target.value}))},onBlur:o,defaultValue:t.text}),h&&Object(c.jsx)(ce,{query:m,onlyPages:!0,useLinks:!1,onResultClick:function(e,n){n.preventDefault();var c=e.text,r=b.current.value,i=b.current.selectionStart,a=r.substring(0,i).search(/\[\[(?!.*\]\])/gm),l=Array.from(r.substring(i).matchAll(/(?<!\[\[[^\]]+)]]/gm)).slice(-1)[0].index+i,o=r.substring(0,a+2)+c+r.substring(l);b.current.value=o,p(!1),N(null),s(K({blockId:t.id,text:o}))}})]})},ie=n(41),ae=n(42),le=n.n(ae),oe=Object(h.b)({name:"links",initialState:{to:{efgh:["mnop"]},from:{mnop:["efgh"]}},reducers:{setLinksState:function(e,t){var n=t.payload;if(n&&"to"in n&&"from"in n)return n},setLinks:function(e,t){var n=t.payload,c=n.sourceBlockId,r=n.linkedBlockIds;if(c&&r&&r.length){var i;if(c in e.from){if(JSON.stringify(e.from[c].sort())===JSON.stringify(r.sort()))return;var a=e.from[c].filter((function(e){return!r.includes(e)}));a.length&&a.map((function(t){return e.to[t]=e.to[t].filter((function(e){return c!==e})),!0})),i=r.filter((function(t){return!e.from[c].includes(t)}))}else i=r;i.length&&i.map((function(t){return t in e.to||(e.to[t]=[]),e.to[t].push(c),!0})),e.from[c]=r}},removeBlockLinks:function(e,t){var n=t.payload.blockId,c=e.from[n];oe.caseReducers.setLinks(e,{payload:{sourceBlockId:n,linkedBlockIds:[]}}),c&&c.map((function(t){return e.to[t]=e.to[t].filter((function(e){return e!==n})),!0})),delete e.from[n]}}}),se=oe.actions,de=se.setLinksState,ue=se.setLinks,be=se.removeBlockLinks,fe=oe.reducer,je=function(e){var t=e.block,n=e.isTitle,r=e.onEdit,a=Object(u.b)(),l=Object(u.c)((function(e){return e.blocks})),o=Object(u.c)((function(e){return e.links.from})),s=function(e){var n=new Set,r=le()(e,/\[\[([^[\]]*)\]\]/g,(function(e,t){var r=d(e);return n.add(r.id),Object(c.jsx)(X,{blockId:r.id,children:r.text},"".concat(e,"-").concat(t))})),i=Array.from(n),l=t.id in o;return i.length&&(l&&JSON.stringify(i.sort())===JSON.stringify(o[t.id].sort())||a(ue({sourceBlockId:t.id,linkedBlockIds:i}))),r},d=function(e){var t=Object.values(l).filter((function(e){return!e.parentId})).find((function(t){return t.text===e}));if(t)return t;var n=I({text:e},l);return a(V(n)),n};return Object(c.jsx)("span",{className:"block-text".concat(n?" block-text--title":""),onClick:r,children:function(){var e=t.text;return s(e).map((function(e){if("string"===typeof e){var t=Object(ie.a)(e);return i.a.cloneElement(t,{key:e})}return e}))}()})},he=function(e){var t=e.block,n=e.isMain,i=e.isTitle,a=Object(u.c)((function(e){return e.editor.focusedBlock})),l=Object(r.useState)(a.isMain===n&&a.blockId===t.id),o=Object(d.a)(l,2),s=o[0],b=o[1],f=Object(r.useState)({offsetX:null,offsetY:null,width:null}),j=Object(d.a)(f,2),h=j[0],p=j[1];return a.blockId&&a.blockId===t.id&&a.isMain===n&&a.caretPos&&!s&&b(!0),Object(c.jsx)("div",{className:"block",children:s?Object(c.jsx)(re,{block:t,isMain:n,isTitle:i,cursorCaret:h,setCursorCaret:p,onRender:function(e){b(!1)}}):Object(c.jsx)(je,{block:t,isTitle:i,onEdit:function(e){if(!t.dailyNote){var n=e.clientX,c=e.clientY,r=n-e.currentTarget.offsetLeft,i=c-e.currentTarget.offsetTop,a=e.currentTarget.offsetWidth;p({offsetX:r,offsetY:i,width:a}),b(!0)}}})})},pe=function(e){var t=e.block,n=Object(u.c)((function(e){return e.blocks}));return Object(c.jsx)("div",{className:"breadcrumbs text-muted",children:function e(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!t)return r.reverse();var i=n[t],a=Object(c.jsx)(X,{blockId:t,isPage:null===i.parentId,noStyling:!0,children:i.text},t);return e(i.parentId,r.concat(a))}(t.parentId)})},xe=(n(83),function(e){var t=e.block,n=e.hasChildren,r=e.foldBlock,i=e.setFoldBlock;return Object(c.jsxs)("div",{className:"block-actions-container",children:[Object(c.jsxs)("span",{className:"block-actions block-actions--toggle".concat(n?"":" hidden"),children:[r&&Object(c.jsx)(B.a,{color:"white",onClick:function(){return i(!1)}}),!r&&Object(c.jsx)(S.a,{color:"white",onClick:function(){return i(!0)}})]}),Object(c.jsx)(X,{blockId:t.id,noStyling:!0,isPage:!1,children:Object(c.jsx)("div",{className:"block-actions block-actions--bullet".concat(r&&n?" fold":""),children:Object(c.jsx)("span",{children:"\u2022"})})})]})}),Oe=function e(t){var n=t.blockId,i=t.isRoot,a=t.showBreadcrumbs,l=void 0!==a&&a,o=t.isMain,s=t.fold,b=void 0!==s&&s,f=Object(u.c)((function(e){return e.blocks}))[n],j=Object(r.useState)(b),h=Object(d.a)(j,2),p=h[0],x=h[1],O=Object(r.useState)(!1),v=Object(d.a)(O,2),k=v[0],m=v[1];if(Object(r.useEffect)((function(){x(b)}),[b]),!f)return Object(c.jsx)("h1",{className:"text-light",children:"Page not found"});var I=null===f.parentId,g=I&&i,y=f.childrenIds.map((function(t){return Object(c.jsx)(e,{isRoot:!1,isMain:o,blockId:t,fold:k},t)}));return Object(c.jsxs)("div",{className:"editor ".concat(i?"editor--root":"editor--child").concat(I?" editor--page":""),children:[(l||i&&!I)&&Object(c.jsx)(pe,{block:f}),Object(c.jsxs)("div",{className:"d-flex",children:[!g&&Object(c.jsx)(xe,{block:f,foldBlock:p,setFoldBlock:x,hasChildren:y.length>0}),Object(c.jsx)(he,{block:f,isTitle:g,isMain:o})]}),!p&&y.length>0&&Object(c.jsxs)("div",{className:"editor__children",children:[null!==f.parentId&&Object(c.jsx)("div",{className:"editor__children__thread-line",onClick:function(){return m(!k)}}),Object(c.jsx)("div",{className:"editor__children__container",children:y})]}),i&&Object(c.jsx)(F,{block:f,isMain:o},f.id)]})},ve=n(103),ke=n(104),me=n(105),Ie=(n(84),Object(h.b)({name:"navbar",initialState:{searchQuery:""},reducers:{setNavbarState:function(e,t){var n=t.payload;if(n&&"searchQuery"in n)return n},updateSearchQuery:function(e,t){var n=t.payload.query;e.searchQuery=n}}})),ge=Ie.actions,ye=ge.setNavbarState,Ne=ge.updateSearchQuery,we=(ge.removeShortcut,Ie.reducer),Se=Object(h.b)({name:"filePane",initialState:{favoriteBlockIds:["abcd","efgh"]},reducers:{setFilePaneState:function(e,t){var n=t.payload;if(n&&"favoriteBlockIds"in n)return n},toggleShortcut:function(e,t){var n=t.payload.blockId;e.favoriteBlockIds.indexOf(n)>-1?e.favoriteBlockIds=e.favoriteBlockIds.filter((function(e){return n!==e})):e.favoriteBlockIds.push(n)},removeShortcut:function(e,t){var n=t.payload.blockId;e.favoriteBlockIds=e.favoriteBlockIds.filter((function(e){return e!==n}))}}}),Be=Se.actions,Ce=Be.setFilePaneState,Pe=Be.toggleShortcut,Me=Be.removeShortcut,Re=Se.reducer,Te=function(e){var t,n=e.blockId,r=Object(u.b)(),i=Object(u.c)((function(e){return e.navbar.searchQuery})),a=Object(u.c)((function(e){return e.blocks})),l=Object(u.c)((function(e){return e.filePane.favoriteBlockIds})),o=Object(s.f)(),d=function e(t){return t.parentId?e(a[t.parentId]):t.id};if(n){var b=a[n];if(b){var f=d(b);t=l.includes(f)}}var j;void 0!==t&&(j=t?Object(c.jsx)(ve.a,{color:"white"}):Object(c.jsx)(ke.a,{color:"white"}));var h=function(e){r(Ne({query:""}))};return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsxs)("div",{className:"search-container",children:[Object(c.jsxs)("div",{className:"input-group",children:[Object(c.jsx)("div",{className:"input-group-prepend",children:Object(c.jsx)("span",{className:"input-group-text bg-dark text-dark border-secondary",children:Object(c.jsx)(me.a,{color:"white"})})}),Object(c.jsx)("input",{type:"text",className:"form-control bg-dark text-light border-secondary",placeholder:"Find or Create Page",onChange:function(e){return r(Ne({query:e.target.value}))},value:i})]}),Object(c.jsx)(ce,{query:i,useLinks:!0,onResultClick:h,allowCreation:!0,onCreateClick:function(){var e=I({text:i},a);r(V(e)),h(),o.push("/page/".concat(e.id))}})]}),void 0!==j&&Object(c.jsx)("button",{className:"btn btn--toggle-favorite",onClick:function(e){var t=d(a[n]);r(Pe({blockId:t}))},children:j})]})},_e=n(27),Xe=n.n(_e);n(85);x.a.extend(Xe.a);var Fe=function(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e.blocks})),r=Object.values(n).filter((function(e){return!!e.dailyNote})).sort((function(e,t){return e.dailyNote.localeCompare(t.dailyNote)})).reverse(),i=x()(),a=i.format(k),l=r.find((function(e){return e.text===a}));l||(l=I({text:a,dailyNote:i.format(m)},n),t(V(l)));var o=r.map((function(e){return Object(c.jsx)(Oe,{blockId:e.id,isMain:!0,isRoot:!0},e.id)}));return Object(c.jsx)("div",{className:"daily-notes",children:o})},De=n(29),qe=n(106),Le=n(107),Ee=n(108),Ye=n(109),Ae=n(43),He=n(44),ze=n.n(He),Ve=(n(96),function(e){var t=new ze.a;e.map((function(e){var n=e.content,c=e.fileName;return t.file(c||"free-roam.json",JSON.stringify(n)),!0})),t.generateAsync({type:"blob"}).then((function(e){Object(Ae.saveAs)(e,"Free-Roam-Export-".concat(Date.now()))}))}),We=function(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e}));return Object(c.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(c.jsx)("label",{className:"load-button-input mr-3",children:Object(c.jsx)("input",{type:"file",className:"btn btn-secondary",accept:".json",onChange:function(e){e.preventDefault();var n=new FileReader;n.onload=function(e){var n=JSON.parse(e.target.result);"blocks"in n&&t(z(n.blocks)),"editor"in n&&t(ee(n.editor)),"filePane"in n&&t(Ce(n.filePane)),"links"in n&&t(de(n.links)),"navbar"in n&&t(ye(n.navbar)),"viewPane"in n&&t(M(n.viewPane))},n.readAsText(e.target.files[0])}})}),Object(c.jsx)("button",{className:"btn btn-secondary",onClick:function(){return Ve([{content:n,fileName:"free-roam.json"}])},children:"Save"})]})},Je=i.a.forwardRef((function(e,t){var n=e.indeterminate,r=Object(j.a)(e,["indeterminate"]),a=i.a.useRef(),l=t||a;return i.a.useEffect((function(){l.current.indeterminate=n}),[l,n]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("input",Object(f.a)({type:"checkbox",ref:l},r))})})),Ke=function(e){var t=e.columns,n=e.data,r=Object(u.b)(),i=Object(u.c)((function(e){return e.blocks})),a=Object(u.c)((function(e){return e.links.to})),l=function(e){e.length&&e.map((function(e){return e.original.blockId})).map((function(e){var t=i[e];return w(i[e],i).map((function(e){return r(T({type:"all",blockId:e})),(a[e]||[]).map((function(e){var n=i[e],c=new RegExp("\\[\\[(".concat(t.text,")\\]\\]"),"g"),a=n.text.replace(c,"$1");return r(K({blockId:e,text:a})),!0})),r(be({blockId:e})),!0})),r(Me({blockId:e})),r(J({blockId:e})),!0}))},o=Object(De.useTable)({columns:t,data:n},De.useSortBy,De.useRowSelect,(function(e){e.visibleColumns.push((function(e){return[{id:"selection",Header:function(e){var t=e.getToggleAllRowsSelectedProps;return Object(c.jsx)("div",{children:Object(c.jsx)(Je,Object(f.a)({},t()))})},Cell:function(e){var t=e.row;return Object(c.jsx)("div",{children:Object(c.jsx)(Je,Object(f.a)({},t.getToggleRowSelectedProps()))})}}].concat(Object(b.a)(e))}))})),s=o.getTableProps,d=o.getTableBodyProps,j=o.headerGroups,h=o.rows,p=o.prepareRow,x=o.selectedFlatRows,O=o.state.selectedRowIds;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"all-pages__toolbar",children:[Object(c.jsx)(qe.a,{onClick:function(){return l(x)},className:"mr-3 all-pages__button".concat(Object.keys(O).length?" active":"")}),Object(c.jsx)(Le.a,{onClick:function(){return function(e){if(e.length){var t=e.map((function(e){return e.original.blockId})).map((function(e){var t=i[e];return{content:N(t,i),fileName:"".concat(t.text,".json")}}));Ve(t)}}(x)},className:"all-pages__button".concat(Object.keys(O).length?" active":"")}),Object(c.jsx)("div",{className:"flex-grow-1"})]}),Object(c.jsxs)("table",Object(f.a)(Object(f.a)({className:"table table-dark"},s()),{},{children:[Object(c.jsx)("thead",{className:"thead-dark",children:j.map((function(e){return Object(c.jsx)("tr",Object(f.a)(Object(f.a)({},e.getHeaderGroupProps()),{},{children:e.headers.map((function(e){return Object(c.jsxs)("th",Object(f.a)(Object(f.a)({scope:"col"},e.getHeaderProps([{className:e.className},e.getSortByToggleProps()])),{},{children:[e.render("Header"),Object(c.jsx)("span",{children:e.isSorted?e.isSortedDesc?Object(c.jsx)(Ee.a,{color:"white"}):Object(c.jsx)(Ye.a,{color:"white"}):""})]}))}))}))}))}),Object(c.jsx)("tbody",Object(f.a)(Object(f.a)({},d()),{},{children:h.map((function(e,t){return p(e),Object(c.jsx)("tr",Object(f.a)(Object(f.a)({},e.getRowProps()),{},{children:e.cells.map((function(e){return Object(c.jsx)("td",Object(f.a)(Object(f.a)({},e.getCellProps([{className:e.column.className}])),{},{children:e.render("Cell")}))}))}))}))}))]}))]})};n(97);x.a.extend(Xe.a);var Qe=function(e){var t=Object(u.b)(),n=Object(u.c)((function(e){return e.blocks})),a=Object(u.c)((function(e){return e.links.to})),l=Object(r.useCallback)((function(e,n){t(R({type:"references",blockId:e}))}),[t]),o=i.a.useMemo((function(){return[{Header:"Title",className:"font-weight-bold",accessor:function(e){return Object(c.jsx)(X,{blockId:e.blockId,children:e.text},e.blockId)},sortType:function(e,t,n,c){return e.original.text.localeCompare(t.original.text)}},{Header:"Mentions",accessor:"mentions",className:"text-center",Cell:function(e){var t=e.row,n=e.value;return Object(c.jsx)("div",{className:"mentions-bubble",onClick:l.bind(null,t.original.blockId),children:Object(c.jsx)("span",{children:n.length})})},sortType:function(e,t,n,c){return e.original.mentions.length-t.original.mentions.length}},{Header:"Updated",accessor:"updated",className:"text-right",Cell:function(e){var t=e.value;return t?x()(t).format(k):null}},{Header:"Created",accessor:"created",className:"text-right",Cell:function(e){var t=e.value;return t?x()(t).format(k):null}}]}),[l]),s=i.a.useMemo((function(){return function(e,t){return Object.values(e).filter((function(e){return!e.parentId})).map((function(e){return{text:e.text,blockId:e.id,created:e.created,updated:e.updated,mentions:t[e.id]||[]}}))}(n,a)}),[n,a]);return Object(c.jsx)("div",{className:"all-pages",children:Object(c.jsx)(Ke,{columns:o,data:s})})},Ge=function(e){var t=e.blockId;return Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(Te,{blockId:t}),Object(c.jsxs)("div",{className:"stage",children:[Object(c.jsx)(s.b,{exact:!0,path:"/",children:Object(c.jsx)(s.a,{to:"/page/welcome"})}),Object(c.jsx)(s.b,{path:"/page/:blockId",render:function(e){var t=e.match;return Object(c.jsx)(Oe,{blockId:t.params.blockId,isRoot:!0,isMain:!0})}}),Object(c.jsx)(s.b,{path:"/daily-notes",render:function(){return Object(c.jsx)(Fe,{})}}),Object(c.jsx)(s.b,{path:"/all-pages",render:function(){return Object(c.jsx)(Qe,{})}})]})]})},Ze=n(110),Ue=n(111);n(98);var $e=function(e){var t=Object(u.c)((function(e){return e.blocks})),n=Object(u.c)((function(e){return e.filePane.favoriteBlockIds})).map((function(e){var n=t[e];return Object(c.jsx)(X,{blockId:e,className:"list-group-item list-group-item-action bg-dark text-light",children:n.text},e)}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("h5",{children:[Object(c.jsx)(ve.a,{color:"white",width:"15px",style:{marginRight:"10px"}}),"Shortcuts"]}),Object(c.jsx)("div",{className:"list-group list-group-flush mt-3",children:n})]})},et=function(e){return Object(c.jsxs)("div",{className:"pane file-pane",children:[Object(c.jsx)(o.b,{to:"/",children:Object(c.jsx)("h2",{className:"text-light text-center",children:"Free-roam"})}),Object(c.jsx)(We,{}),Object(c.jsxs)("div",{className:"list-group list-group-flush mt-3",children:[Object(c.jsxs)(o.b,{to:"/daily-notes",className:"list-group-item list-group-item-action bg-dark text-light",children:[Object(c.jsx)(Ze.a,{color:"white"})," Daily Notes"]}),Object(c.jsxs)(o.b,{to:"/all-pages",className:"list-group-item list-group-item-action bg-dark text-light",children:[Object(c.jsx)(Ue.a,{color:"white"})," All Pages"]})]}),Object(c.jsx)("hr",{}),Object(c.jsx)($e,{})]})},tt=n(112),nt=(n(99),function(e){var t=Object(u.c)((function(e){return e.blocks})),n=Object(u.c)((function(e){return e.links})),r=Object(u.c)((function(e){return e.viewPane.views})),i=Object(u.b)(),a=function(e,t,n){i(T({type:e,blockId:t}))},l=function(e,t){var n;switch(e){case"page":n="Outline of:";break;case"block":n="Block outline of:";break;case"references":n=Object(c.jsxs)("span",{children:["References to: ",Object(c.jsx)(X,{blockId:t.id,children:t.text})]});break;default:n="Outline of:"}return n},o=r.map((function(e){var r=e.type,o=e.blockId;if(!(o in t))return null;var s=t[o],d=n.to[s.id]||[];return Object(c.jsxs)("div",{className:"view-pane__section",children:[Object(c.jsxs)("div",{className:"d-flex align-items-center",children:[l(r,s),Object(c.jsx)("div",{className:"flex-grow-1"}),"page"===r&&Object(c.jsx)("button",{className:"btn btn-dark btn-sm px-1 py-0",onClick:function(){return i(R({type:"references",blockId:o}))},children:d.length}),Object(c.jsx)(tt.a,{className:"btn-close",onClick:a.bind(null,r,s.id)})]}),"references"===r?Object(c.jsx)(F,{block:s,isMain:!0}):Object(c.jsx)(Oe,{blockId:s.id,isRoot:!0,isMain:!1})]},"".concat(r,"-").concat(s.id))}));return Object(c.jsx)("div",{className:"pane view-pane",children:o})}),ct=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(et,{}),Object(c.jsx)(Ge,{}),Object(c.jsx)(nt,{})]})})},rt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,113)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),i(e),a(e)}))},it=Object(h.a)({reducer:{blocks:Z,filePane:Re,viewPane:_,navbar:we,links:fe,editor:ne}});window.addEventListener("beforeunload",(function(e){e.preventDefault(),e.returnValue=""})),l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(u.a,{store:it,children:Object(c.jsx)(ct,{})})}),document.getElementById("root")),rt()},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[100,1,2]]]);
//# sourceMappingURL=main.d44869e5.chunk.js.map