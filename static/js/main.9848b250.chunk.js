(this.webpackJsonpcryptoapp=this.webpackJsonpcryptoapp||[]).push([[0],{224:function(e,t,c){},362:function(e,t,c){},364:function(e,t,c){"use strict";c.r(t);var a,n=c(0),s=c.n(n),i=c(31),r=c.n(i),l=(c(224),c(32)),o=c(367),j=c(369),d=c(376),h=c(6),b=c(373),u=c(213),x=c(375),O=c(43),p=c(377),m=c(378),v=c(379),g=c(380),y=c(381),f=c.p+"static/media/crypto.1548aced.png",N=c(2),w=function(){var e=Object(n.useState)(!0),t=Object(h.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(null),i=Object(h.a)(s,2),r=i[0],l=i[1];return Object(n.useEffect)((function(){var e=function(){return l(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),Object(n.useEffect)((function(){a(!(r<768))}),[r]),Object(N.jsxs)("div",{className:"nav-container",children:[Object(N.jsxs)("div",{className:"logo-container",children:[Object(N.jsx)(b.a,{src:f,size:"large"}),Object(N.jsx)(j.a.Title,{level:2,className:"logo",children:Object(N.jsx)(O.b,{to:"/",children:"CryptoBook"})}),Object(N.jsx)(u.a,{className:"menu-control-container",onClick:function(){return a(!c)},children:Object(N.jsx)(p.a,{})})]}),c&&Object(N.jsxs)(x.a,{theme:"dark",children:[Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(m.a,{}),children:Object(N.jsx)(O.b,{style:{color:"#EEF5B2",textAlign:"center"},to:"/",children:"Home"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(v.a,{}),children:Object(N.jsx)(O.b,{style:{color:"#EEF5B2",textAlign:"center"},to:"/cryptocurrencies",children:"Cryptocurrencies"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(g.a,{}),children:Object(N.jsx)(O.b,{style:{color:"#EEF5B2",textAlign:"center"},to:"/exchanges",children:"Exchanges"})}),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(y.a,{}),children:Object(N.jsx)(O.b,{style:{color:"#EEF5B2",textAlign:"center"},to:"/news",children:"News"})})]})]})},k=c(371),C=c(98),S=c(59),E=c(368),T=c(203),F=c.n(T),P=c(133),A=c(46),M={"x-bingapis-sdk":"true","x-rapidapi-host":"bing-news-search1.p.rapidapi.com","x-rapidapi-key":"d795149401msha79e75d7202b7d0p1a1d38jsne9edbd918063"},q=Object(P.a)({reducerPath:"cryptoNewsApi",baseQuery:Object(A.d)({baseUrl:"https://bing-news-search1.p.rapidapi.com"}),endpoints:function(e){return{getCryptoNews:e.query({query:function(e){var t=e.newsCategory,c=e.count;return{url:"/news/search?q=".concat(t,"&safeSearch=Off&textFormat=Raw&freshness=Day&count=").concat(c),headers:M}}})}}}),I=q.useGetCryptoNewsQuery,L={"x-rapidapi-host":"coinranking1.p.rapidapi.com","x-rapidapi-key":"d795149401msha79e75d7202b7d0p1a1d38jsne9edbd918063"},V=function(e){return{url:e,headers:L}},D=Object(P.a)({reducerPath:"cryptoApi",baseQuery:Object(A.d)({baseUrl:"https://coinranking1.p.rapidapi.com"}),endpoints:function(e){return{getCryptos:e.query({query:function(e){return V("/coins/?limit=".concat(e))}}),getCryptoDetails:e.query({query:function(e){return V("/coin/".concat(e))}}),getCryptoHistory:e.query({query:function(e){var t=e.coinId,c=e.timeperiod;return V("/coin/".concat(t,"/history/").concat(c))}}),getExchanges:e.query({query:function(){return V("/exchanges")}})}}}),U=D.useGetCryptosQuery,H=D.useGetCryptoDetailsQuery,$=D.useGetCryptoHistoryQuery,B=D.useGetExchangesQuery,G=c(366),Q=function(){return Object(N.jsx)("div",{className:"loader",children:Object(N.jsx)(G.a,{})})},z=j.a.Text,_=j.a.Title,R=k.a.Option,J="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News",W=function(e){var t,c=e.simplified,a=Object(n.useState)("Cryptocurrency"),s=Object(h.a)(a,2),i=s[0],r=s[1],l=U(100).data,o=I({newsCategory:i,count:c?6:12}).data;return(null===o||void 0===o?void 0:o.value)?Object(N.jsxs)(C.a,{gutter:[24,24],children:[!c&&Object(N.jsx)(S.a,{span:24,children:Object(N.jsxs)(k.a,{showSearch:!0,className:"select-news",placeholder:"Select a Crypto",optionFilterProp:"children",onChange:function(e){return r(e)},filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:[Object(N.jsx)(R,{value:"Cryptocurrency",children:"Cryptocurrency"}),null===l||void 0===l||null===(t=l.data)||void 0===t?void 0:t.coins.map((function(e){return Object(N.jsx)(R,{value:e.name,children:e.name})}))]})}),o.value.map((function(e,t){var c,a,n,s,i,r;return Object(N.jsx)(S.a,{xs:24,sm:12,lg:8,children:Object(N.jsx)(E.a,{hoverable:!0,className:"news-card",children:Object(N.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:[Object(N.jsxs)("div",{className:"news-image-container",children:[Object(N.jsx)(_,{className:"news-title",level:4,children:e.name}),Object(N.jsx)("img",{style:{maxWidth:"200px",maxHeight:"100px"},src:(null===e||void 0===e||null===(c=e.image)||void 0===c||null===(a=c.thumbnail)||void 0===a?void 0:a.contentUrl)||J,alt:"news"})]}),Object(N.jsx)("p",{children:e.description>100?"".concat(e.description.substring(0,100),"..."):e.description}),Object(N.jsxs)("div",{className:"provider-container",children:[Object(N.jsxs)("div",{children:[Object(N.jsx)(b.a,{src:(null===(n=e.provider[0])||void 0===n||null===(s=n.image)||void 0===s||null===(i=s.thumbnail)||void 0===i?void 0:i.contentUrl)||J,alt:""}),Object(N.jsx)(z,{className:"provider-name",children:null===(r=e.provider[0])||void 0===r?void 0:r.name})]}),Object(N.jsx)(z,{children:F()(e.datePublished).startOf("ss").fromNow()})]})]})})},t)}))]}):Object(N.jsx)(Q,{})},Z=c(36),K=c.n(Z),X=c(370),Y=j.a.Title,ee=function(){var e,t=U(10),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.stats;return a?Object(N.jsx)(Q,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(Y,{level:2,className:"heading",children:"Global Crypto Statistics"}),Object(N.jsxs)(C.a,{children:[Object(N.jsx)(S.a,{span:12,children:Object(N.jsx)(X.a,{title:"Total Cryptocurrencies",value:n.total})}),Object(N.jsx)(S.a,{span:12,children:Object(N.jsx)(X.a,{title:"Total Exchanges",value:K()(n.totalExchanges)})}),Object(N.jsx)(S.a,{span:12,children:Object(N.jsx)(X.a,{title:"Total Market Cap",value:K()(n.totalMarketCap)})}),Object(N.jsx)(S.a,{span:12,children:Object(N.jsx)(X.a,{title:"24 Hour Volume",value:K()(n.total24hVolume)})}),Object(N.jsx)(S.a,{span:12,children:Object(N.jsx)(X.a,{title:"Total Market",value:K()(n.totalMarkets)})})]}),Object(N.jsxs)("div",{className:"home-heading-container",children:[Object(N.jsx)(Y,{level:2,className:"home-title",children:"Top 10 Cryptocurrencies"}),Object(N.jsx)(Y,{level:3,className:"show-more",children:Object(N.jsx)(O.b,{to:"/cryptocurrencies",children:"More"})})]}),Object(N.jsx)(ye,{simplified:!0}),Object(N.jsxs)("div",{className:"home-heading-container",children:[Object(N.jsx)(Y,{level:2,className:"home-title",children:"Latest Crypto News"}),Object(N.jsx)(Y,{level:3,className:"show-more",children:Object(N.jsx)(O.b,{to:"/news",children:"More"})})]}),Object(N.jsx)(W,{simplified:!0})]})},te=c(374),ce=c(136),ae=j.a.Text,ne=te.a.Panel,se=function(){var e,t=B(),c=t.data,a=t.isFetching,n=null===c||void 0===c||null===(e=c.data)||void 0===e?void 0:e.exchanges;return a?Object(N.jsx)(Q,{}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(C.a,{children:[Object(N.jsx)(S.a,{span:6,children:"Exchanges"}),Object(N.jsx)(S.a,{span:6,children:"24h Trade Volume"}),Object(N.jsx)(S.a,{span:6,children:"Markets"}),Object(N.jsx)(S.a,{span:6,children:"Change"})]}),Object(N.jsx)(C.a,{children:n.map((function(e){return Object(N.jsx)(S.a,{span:24,children:Object(N.jsx)(te.a,{children:Object(N.jsx)(ne,{showArrow:!1,header:Object(N.jsxs)(C.a,{children:[Object(N.jsxs)(S.a,{span:6,children:[Object(N.jsx)(ae,{children:Object(N.jsxs)("strong",{children:[e.rank,"."]})}),Object(N.jsx)(b.a,{className:"exchange-image",src:e.iconUrl}),Object(N.jsx)(ae,{children:Object(N.jsx)("strong",{children:e.name})})]}),Object(N.jsxs)(S.a,{span:6,children:["$",K()(e.volume)]}),Object(N.jsx)(S.a,{span:6,children:K()(e.numberOfMarkets)}),Object(N.jsxs)(S.a,{span:6,children:[K()(e.marketShare),"%"]})]},e.id),children:Object(ce.a)(e.description||"")},e.id)})})}))})]})},ie=c(382),re=c(383),le=c(384),oe=c(385),je=c(138),de=c(386),he=c(217),be=c(214),ue=j.a.Title,xe=function(e){for(var t,c=e.coinHistory,a=e.currentPrice,n=e.coinName,s=[],i=[],r=0;r<(null===c||void 0===c||null===(l=c.data)||void 0===l||null===(o=l.history)||void 0===o?void 0:o.length);r+=1){var l,o;s.push(c.data.history[r].price),i.push(new Date(c.data.history[r].timestamp).toLocaleDateString())}var j={labels:i,datasets:[{label:"Price in US$",data:s,fill:!1,backgroundColor:"#0071bd",borderColor:"#0071bd"}]};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(C.a,{className:"chart-header",children:[Object(N.jsxs)(ue,{level:2,className:"chart-title",children:[n," Price Chart"]}),Object(N.jsxs)(S.a,{className:"price-container",children:[Object(N.jsxs)(ue,{level:5,className:"price-change",children:[null===c||void 0===c||null===(t=c.data)||void 0===t?void 0:t.change,"%"]}),Object(N.jsxs)(ue,{level:5,className:"current-price",children:["Current ",n," Price: $",a]})]})]}),Object(N.jsx)(be.a,{data:j,options:{scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}})]})},Oe=j.a.Title,pe=j.a.Text,me=k.a.Option,ve=function(){var e,t,c,a,s=Object(l.f)().coinId,i=Object(n.useState)("7d"),r=Object(h.a)(i,2),o=r[0],j=r[1],d=H(s),b=d.data,u=d.isFetching,x=$({coinId:s,timeperiod:o}).data,O=null===b||void 0===b||null===(e=b.data)||void 0===e?void 0:e.coin;if(u)return Object(N.jsx)(Q,{});var p=[{title:"Price to USD",value:"$ ".concat(O.price&&K()(O.price)),icon:Object(N.jsx)(ie.a,{})},{title:"Rank",value:O.rank,icon:Object(N.jsx)(re.a,{})},{title:"24h Volume",value:"$ ".concat(O.volume&&K()(O.volume)),icon:Object(N.jsx)(le.a,{})},{title:"Market Cap",value:"$ ".concat(O.marketCap&&K()(O.marketCap)),icon:Object(N.jsx)(ie.a,{})},{title:"All-time-high(daily avg.)",value:"$ ".concat(K()(O.allTimeHigh.price)),icon:Object(N.jsx)(oe.a,{})}],m=[{title:"Number Of Markets",value:O.numberOfMarkets,icon:Object(N.jsx)(v.a,{})},{title:"Number Of Exchanges",value:O.numberOfExchanges,icon:Object(N.jsx)(g.a,{})},{title:"Approved Supply",value:O.approvedSupply?Object(N.jsx)(je.a,{}):Object(N.jsx)(de.a,{}),icon:Object(N.jsx)(he.a,{})},{title:"Total Supply",value:"$ ".concat(K()(O.totalSupply)),icon:Object(N.jsx)(he.a,{})},{title:"Circulating Supply",value:"$ ".concat(K()(O.circulatingSupply)),icon:Object(N.jsx)(he.a,{})}];return Object(N.jsxs)(S.a,{className:"coin-detail-container",children:[Object(N.jsxs)(S.a,{className:"coin-heading-container",children:[Object(N.jsxs)(Oe,{level:2,className:"coin-name",children:[null===b||void 0===b||null===(t=b.data)||void 0===t?void 0:t.coin.name," (",null===b||void 0===b||null===(c=b.data)||void 0===c?void 0:c.coin.slug,") Price"]}),Object(N.jsxs)("p",{children:[O.name," live price in US Dollar (USD). View value statistics, market cap and supply."]})]}),Object(N.jsx)(k.a,{defaultValue:"7d",className:"select-timeperiod",placeholder:"Select Timeperiod",onChange:function(e){return j(e)},children:["3h","24h","7d","30d","1y","3m","3y","5y"].map((function(e){return Object(N.jsx)(me,{children:e},e)}))}),Object(N.jsx)(xe,{coinHistory:x,currentPrice:K()(O.price),coinName:O.name}),Object(N.jsxs)(S.a,{className:"stats-container",children:[Object(N.jsxs)(S.a,{className:"coin-value-statistics",children:[Object(N.jsxs)(S.a,{className:"coin-value-statistics-heading",children:[Object(N.jsxs)(Oe,{level:3,className:"coin-details-heading",children:[O.name," Value Statistics"]}),Object(N.jsxs)("p",{children:["An overview showing the statistics of ",O.name,", such as the base and quote currency, the rank, and trading volume."]})]}),p.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(N.jsxs)(S.a,{className:"coin-stats",children:[Object(N.jsxs)(S.a,{className:"coin-stats-name",children:[Object(N.jsx)(pe,{children:t}),Object(N.jsx)(pe,{children:c})]}),Object(N.jsx)(pe,{className:"stats",children:a})]})}))]}),Object(N.jsxs)(S.a,{className:"other-stats-info",children:[Object(N.jsxs)(S.a,{className:"coin-value-statistics-heading",children:[Object(N.jsx)(Oe,{level:3,className:"coin-details-heading",children:"Other Stats Info"}),Object(N.jsxs)("p",{children:["An overview showing the statistics of ",O.name,", such as the base and quote currency, the rank, and trading volume."]})]}),m.map((function(e){var t=e.icon,c=e.title,a=e.value;return Object(N.jsxs)(S.a,{className:"coin-stats",children:[Object(N.jsxs)(S.a,{className:"coin-stats-name",children:[Object(N.jsx)(pe,{children:t}),Object(N.jsx)(pe,{children:c})]}),Object(N.jsx)(pe,{className:"stats",children:a})]})}))]})]}),Object(N.jsxs)(S.a,{className:"coin-desc-link",children:[Object(N.jsxs)(C.a,{className:"coin-desc",children:[Object(N.jsxs)(Oe,{level:3,className:"coin-details-heading",children:[O.name," Details"]}),Object(ce.a)(O.description)]}),Object(N.jsxs)(S.a,{className:"coin-links",children:[Object(N.jsxs)(Oe,{level:3,className:"coin-details-heading",children:["Some important ",O.name," links"]}),null===(a=O.links)||void 0===a?void 0:a.map((function(e){return Object(N.jsxs)(C.a,{className:"coin-link",children:[Object(N.jsx)(Oe,{level:5,className:"link-name",children:e.type}),Object(N.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:e.name})]},e.name)}))]})]})]})},ge=c(372),ye=function(e){var t=e.simplified,c=U(t?10:100),a=c.data,s=c.isFetching,i=Object(n.useState)([]),r=Object(h.a)(i,2),l=r[0],o=r[1],j=Object(n.useState)(""),d=Object(h.a)(j,2),b=d[0],u=d[1];return Object(n.useEffect)((function(){var e,t=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.coins.filter((function(e){return e.name.toLowerCase().includes(b.toLowerCase())}));o(t)}),[a,b]),s?Object(N.jsx)(Q,{}):Object(N.jsxs)(N.Fragment,{children:[!t&&Object(N.jsx)("div",{className:"search-crypto",children:Object(N.jsx)(ge.a,{placeholder:"Search",onChange:function(e){return u(e.target.value)}})}),Object(N.jsx)(C.a,{gutter:[32,32],className:"crypto-card-container",children:null===l||void 0===l?void 0:l.map((function(e){return Object(N.jsx)(S.a,{xs:24,sm:12,lg:6,className:"crypto-card",children:Object(N.jsx)(O.b,{to:"/crypto/".concat(e.id),children:Object(N.jsxs)(E.a,{title:"".concat(e.rank,". ").concat(e.name),extra:Object(N.jsx)("img",{className:"crypto-image",src:e.iconUrl}),hoverable:!0,children:[Object(N.jsxs)("p",{children:["Price:   ",K()(e.price)]}),Object(N.jsxs)("p",{children:["Market Cap:  ",K()(e.marketCap)]}),Object(N.jsxs)("p",{children:["Change:    ",K()(e.change),"%"]})]})})},e.id)}))})]})},fe=(c(362),function(){return Object(N.jsxs)("div",{className:"app",children:[Object(N.jsx)("div",{className:"navbar",children:Object(N.jsx)(w,{})}),Object(N.jsxs)("div",{className:"main",children:[Object(N.jsx)(o.a,{children:Object(N.jsx)("div",{className:"routes",children:Object(N.jsxs)(l.c,{children:[Object(N.jsx)(l.a,{exact:!0,path:"/",children:Object(N.jsx)(ee,{})}),Object(N.jsx)(l.a,{exact:!0,path:"/exchanges",children:Object(N.jsx)(se,{})}),Object(N.jsx)(l.a,{exact:!0,path:"/cryptocurrencies",children:Object(N.jsx)(ye,{})}),Object(N.jsx)(l.a,{exact:!0,path:"/crypto/:coinId",children:Object(N.jsx)(ve,{})}),Object(N.jsx)(l.a,{exact:!0,path:"/news",children:Object(N.jsx)(W,{})})]})})}),Object(N.jsxs)("div",{className:"footer",children:[Object(N.jsxs)(j.a.Title,{level:5,style:{color:"black",textAlign:"center"},children:["CryptoBook by Vishnu Sivadas",Object(N.jsx)("br",{}),"2021"]}),Object(N.jsxs)(d.b,{children:[Object(N.jsx)("a",{className:"footlink",href:"https://www.linkedin.com/in/sivadasv/",target:"_blank",children:"LinkedIn"}),Object(N.jsx)("a",{className:"footlink",href:"https://github.com/VishnuSivadas1994",target:"_blank",children:"GitHub"})]})]})]})]})}),Ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,387)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))},we=c(44),ke=c(7),Ce=c(14),Se=Object(Ce.a)({reducer:(a={},Object(ke.a)(a,D.reducerPath,D.reducer),Object(ke.a)(a,q.reducerPath,q.reducer),a)});c(363);r.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(O.a,{children:Object(N.jsx)(we.a,{store:Se,children:Object(N.jsx)(fe,{})})})}),document.getElementById("root")),Ne()}},[[364,1,2]]]);
//# sourceMappingURL=main.9848b250.chunk.js.map