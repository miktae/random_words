(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var r=n(3),c=n.n(r),o=n(21),a=n.n(o),u=n(90),i=n(0),s=n(4),f=n(10),d=n(93),l=console.log.bind(console),p={method:"GET",headers:{"X-RapidAPI-Key":"004c008df7msh873d3c4709f2eb3p15615bjsn6188cad98adb","X-RapidAPI-Host":"wordsapiv1.p.rapidapi.com"}},j=n(22),b=n.n(j),h=n(63),g=n.n(h)()((function(e){return{count:0,increment:function(){return e((function(e){return{count:e.count+1}}))},en:[],update:function(t){return e((function(e){return{en:[].concat(b()(e.en),[t])}}))},meaning:[],updateMeaning:function(t){return e((function(e){return{meaning:[].concat(b()(e.meaning),[t])}}))}}})),x=n(19),O=n(82),m=n(95),y=n(96),v=n(91),w=n(64);var S=n(94),k=n(6);function C(e){var t=Object(i.useState)(),n=a()(t,2),r=n[0],c=(n[1],Object(i.useState)(!1)),o=a()(c,2),u=o[0],s=o[1],d=Object(i.useState)("play"),p=a()(d,2),j=p[0],b=p[1],h=Object(i.useState)(!1),C=a()(h,2),T=C[0],A=C[1],E=Object(i.useState)(""),H=a()(E,2),I=H[0],R=H[1],W=Object(i.useState)([]),z=a()(W,2),B=(z[0],z[1],g((function(e){return e.en}))),K=(g((function(e){return e.count})),g((function(e){return e.increment})));Object(i.useEffect)((function(){for(var e=B.map((function(e){return e.results})),t=0;t<e.length;t++)void 0!==e[t]&&K()}),[]),Object(i.useEffect)((function(){return r?function(){console.log("Unloading Sound"),r.unloadAsync()}:void 0}),[r]);return Object(k.jsxs)(f.default,{style:P.card,children:[Object(k.jsxs)(f.default,{style:P.cardHeader,children:[T?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(O.default,{style:P.inputText,placeholder:"",onChangeText:function(e){return R(e)}}),Object(k.jsx)(m.default,{title:"Check",style:P.button,onPress:function(){l(I),l(e.name),I===e.name?A(!1):(A(!0),w.default.alert("Wrong answer",[{text:"Cancel",onPress:function(){return console.log("Cancel Pressed")},style:"cancel"},{text:"OK",onPress:function(){return console.log("OK Pressed")}}]))}})]}):Object(k.jsxs)(x.default,{style:[P.text,P.textHeader],children:[e.word," (","noun"==e.typeOf?"n":"adjective"==e.typeOf?"adj":"verb"==e.typeOf?"v":e.typeOf[0]+", "+e.typeOf[1],")",e.prounciation]}),Object(k.jsx)(v.default,{name:j,size:20,color:"#000",style:P.icon,onPress:function(){var t;s(!0),t=e.word,u?(console.log("Loading Sound"),b("pausecircle"),S.speak(t),setTimeout((function(){b("play")}),1100)):b("play")}})]}),Object(k.jsx)(x.default,{style:T?{display:"none"}:P.checkText,onPress:function(){A(!0)},children:"Check this word"}),Object(k.jsx)(y.default,{style:P.img,source:{uri:e.src}}),Object(k.jsx)(x.default,{style:[P.text,P.textBody],children:e.example}),Object(k.jsx)(x.default,{style:P.text,children:e.meaning})]})}var P=s.default.create({card:{width:300,backgroundColor:"#f0f2f5",padding:10,margin:10,borderRadius:7},cardHeader:{flexDirection:"row",justifyContent:"center",alignItems:"center"},inputText:{height:30,margin:12,borderWidth:1,padding:10},button:{borderWidth:1,padding:4},textHeader:{marginRight:10},textBody:{textAlign:"justify",fontSize:18},checkText:{textAlign:"center",marginTop:5,cursor:"pointer"},text:{fontSize:20,textAlign:"center"},icon:{marginTop:5,alignItems:"center"},img:{width:300,height:300}});C.defaultProps={src:"https://www.seekpng.com/png/detail/968-9681864_apple-png-background-stock-photo-apple-fruit.png"};var T=n(86);function A(){var e=Object(i.useState)([]),t=a()(e,2),n=t[0],r=t[1],o=Object(i.useState)([]),s=a()(o,2),j=(s[0],s[1],Object(i.useState)([])),b=a()(j,2),h=b[0],x=b[1],O=g((function(e){return e.en})),m=g((function(e){return e.update})),y=Object(T.createClient)("563492ad6f917000010000010eea3c782765431797c7ea8b8176fb5e"),v=Object(i.useState)([]),w=a()(v,2),S=w[0],P=w[1],A=function(){var e=c()((function*(){for(var e=0;e<10;e++)fetch("https://wordsapiv1.p.rapidapi.com/words/?random=true",p).then((function(e){return e.json()})).then((function(e){m(e)})).catch((function(e){l(e)}))}));return function(){return e.apply(this,arguments)}}(),H=function(){var e=c()((function*(){for(var e=0;e<10;e++){var t=S[e],n=(yield y.photos.search({query:t,per_page:1})).photos.map((function(e){return e.src})).map((function(e){return e.medium}));n&&x(n),l(n)}}));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){A(),H()}),[]),Object(i.useEffect)((function(){r(O.map((function(e){return e.word}))),P(n)}),[O]),Object(k.jsxs)(d.default,{style:E.container,children:[Object(k.jsx)(f.default,{style:E.cards,children:O.map((function(e){return e.results&&Object(k.jsx)(C,{word:e.word,meaning:e.results.map((function(e){return e.definition})),typeOf:e.results.map((function(e){return e.partOfSpeech})),prounciation:e.pronunciation?e.pronunciation.all?"\n/"+e.pronunciation.all+"/":"\n/"+e.pronunciation+"/":" ",src:h[0]},e.word)}))}),Object(k.jsx)(u.StatusBar,{style:"auto"})]})}var E=s.default.create({container:{flex:1,backgroundColor:"#fff"},cards:{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",alignItems:"center"}})},97:function(e,t,n){e.exports=n(134)}},[[97,1,2]]]);
//# sourceMappingURL=app.e4cbf488.chunk.js.map