(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{317:function(t,e,r){"use strict";var s=r(8),a=r(11),i=r(5),n=r(43),o=r(0),_=r(44),c=r(318),l=r(122),m=r(27),u=r(319),v=r(321),h=r(15),g=r(18),d=h("replace"),f=TypeError,p=i("".indexOf),w=i("".replace),k=i("".slice),M=Math.max;s({target:"String",proto:!0},{replaceAll:function(t,e){var r,s,i,h,b,j,y,T,z,N,x=n(this),X=0,O="";if(!_(t)){if((r=c(t))&&(s=l(n(u(t))),!~p(s,"g")))throw new f("`.replaceAll` does not allow non-global regexes");if(i=m(t,d))return a(i,t,x,e);if(g&&r)return w(l(x),t,e)}for(h=l(x),b=l(t),(j=o(e))||(e=l(e)),y=b.length,T=M(1,y),z=p(h,b);-1!==z;)N=j?l(e(b,z,h)):v(b,h,z,[],void 0,e),O+=k(h,X,z)+N,X=z+y,z=z+T>h.length?-1:p(h,b,z+T);return X<h.length&&(O+=k(h,X)),O}})},318:function(t,e,r){"use strict";var s=r(9),a=r(23),i=r(15)("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"===a(t))}},319:function(t,e,r){"use strict";var s=r(11),a=r(10),i=r(26),n=r(320),o=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in o||a(t,"flags")||!i(o,t)?e:s(n,t)}},320:function(t,e,r){"use strict";var s=r(1);t.exports=function(){var t=s(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e}},321:function(t,e,r){"use strict";var s=r(5),a=r(28),i=Math.floor,n=s("".charAt),o=s("".replace),_=s("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,s,m,u){var v=r+t.length,h=s.length,g=l;return void 0!==m&&(m=a(m),g=c),o(u,g,(function(a,o){var c;switch(n(o,0)){case"$":return"$";case"&":return t;case"`":return _(e,0,r);case"'":return _(e,v);case"<":c=m[_(o,1,-1)];break;default:var l=+o;if(0===l)return a;if(l>h){var u=i(l/10);return 0===u?a:u<=h?void 0===s[u-1]?n(o,1):s[u-1]+n(o,1):a}c=s[l-1]}return void 0===c?"":c}))}},343:function(t,e,r){},378:function(t){t.exports=JSON.parse('{"subjective":[{"link":"https://www.imdb.com/title/tt0259711/?ref_=nm_knf_t_3","img":"https://m.media-amazon.com/images/M/MV5BYzFlMTJjYzUtMWFjYy00NjkyLTg1Y2EtYmZkMjdlOGQ1ZGYwL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg","name":"바닐라스카이","memo":"누가 내 최애 영화가 뭔지 물어봐서,, 이거 진짜 뻥안치고 100번 봄","star":10},{"link":"https://www.imdb.com/title/tt0094625/?ref_=nv_sr_srsg_0_tt_4_nm_4_in_0_q_akira","img":"https://m.media-amazon.com/images/M/MV5BM2NiMTIzZWEtM2Y2ZS00NTg1LTlhZTgtOThjMTkwNzQ4NzBlXkEyXkFqcGc@._V1_SX300.jpg","name":"아키라","memo":"미쳤다.. 영화관에서 두번 봤다. 후회없는 선택... 포스터 겟...","star":10},{"link":"https://www.imdb.com/title/tt0113568/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_Ghost%2520in%2520the%2520Shell","img":"https://m.media-amazon.com/images/M/MV5BNzljMjA3MTQtMjM1OS00OGJjLWJiYzctZDRiMTk1NWI5YzQ5XkEyXkFqcGc@._V1_SX300.jpg","name":"공각기동대","memo":"내 고스트 업로드","star":10},{"link":"https://www.imdb.com/title/tt0338013/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_eternal%2520sunshie","img":"https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg","name":"이터널 선샤인","memo":"어릴땐 아무것도 몰랐다.. 늙어서 다시 보니까 아오 심장아파 ㅠㅜ","star":10},{"link":"https://www.imdb.com/title/tt14599438/?ref_=nv_sr_srsg_0_tt_1_nm_7_in_0_q_jeen-","img":"https://m.media-amazon.com/images/M/MV5BODI1Yjg3ODEtYTgxNC00NzA0LWIyODItMTA3NWFhNjVjZGE5XkEyXkFqcGc@._V1_SX300.jpg","name":"지-니어스: 카니예 3부작","memo":"몇번을 봐도 눈물나는 2편......진짜로 울었다......","star":10}]}')},379:function(t,e,r){"use strict";r(343)},538:function(t,e,r){"use strict";r.r(e);r(317);var s=r(378),a={methods:{movieId:t=>t.replaceAll(" ","-")},data:()=>({movies:s.subjective})},i=(r(379),r(2)),n=Object(i.a)(a,(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"주관적-취향이-다분한-movie-series-리스트"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#주관적-취향이-다분한-movie-series-리스트"}},[t._v("#")]),t._v(" 주관적 취향이 다분한 Movie(+Series) 리스트")]),t._v(" "),e("blockquote",[e("p",[t._v("......이제 검증되지 않은 영화를 영화관에서 보는건 고문이다")]),t._v(" "),e("h2",{attrs:{id:"leekyounghwa-s-imdb-watchlist"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#leekyounghwa-s-imdb-watchlist"}},[t._v("#")]),t._v(" "),e("a",{attrs:{href:"https://www.imdb.com/user/ur191119219/watchlist/?ref_=ext_shr_lnk",target:"_blank",rel:"noopener noreferrer"}},[t._v("leekyounghwa's IMDB Watchlist"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("여기서 n번 시청한 영화 리스트업")])]),t._v(" "),e("br"),t._v(" "),t._l(t.movies,(function(r,s){return[e("div",{staticClass:"container",attrs:{id:t.movieId(r.name)}},[e("a",{attrs:{href:r.link,target:"_blank"}},[e("img",{staticClass:"movie-img",attrs:{src:r.img}})]),t._v(" "),e("div",{staticClass:"blog-content"},[e("h4",[t._v(t._s(r.date))]),t._v(" "),e("h3",[e("a",{staticClass:"header-anchor",attrs:{href:"#"+t.movieId(r.name),"aria-hidden":"true"}},[t._v("#")]),t._v("\n                "+t._s(s+1)+". "+t._s(r.name)+"\n            ")]),t._v(" "),e("p",[t._v(t._s(r.memo))]),t._v(" "),e("ul",t._l(r.star,(function(r){return e("li",{staticClass:"star"},[t._v("⭐")])})),0)])])]}))],2)}),[],!1,null,"1a1b5984",null);e.default=n.exports}}]);