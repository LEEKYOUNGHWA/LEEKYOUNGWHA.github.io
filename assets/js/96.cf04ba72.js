(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{600:function(t,s,e){"use strict";e.r(s);var a=e(2),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuepress-블로그에-gist-넣기"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-블로그에-gist-넣기"}},[t._v("#")]),t._v(" vuepress 블로그에 gist 넣기")]),t._v(" "),s("p",[t._v("Embed gist to vuepress blog. inspired by "),s("a",{attrs:{href:"https://github.com/sudhanshu-15/vue-embed-gist",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/sudhanshu-15/vue-embed-gist"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("뷰 프레스에 gist를 넣고 싶다! gist 쓰면 소스 바꿀때마다 블로그 게시물 커밋 배포를 안해줘도 된다...\n누군가 만들어 놓았겠지 하고 폭풍 검색을 했다.\nvue에 gist embed 할수있는 npm 패키지 발견.")]),t._v(" "),s("p",[t._v("vue-embed-gist를 설치해서 사용하려고 하였으나 빌드 에러가 났다. 소스 자체는 문제가 없는거 같은데... vuepress 에서 빌드할때 원리를 모르겠어서 정확한 이유는 모르겠음. (추측상 watch 에 jsonp를 달아놔서 그런거 같긴함...) 소스 자체는 복잡해보이지 않으므로 필요한 부분만 가져와서 간단하게 만들어 줬다.")]),t._v(" "),s("h2",{attrs:{id:"_1-install-vue-jsonp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-vue-jsonp"}},[t._v("#")]),t._v(" 1. install "),s("a",{attrs:{href:"https://www.npmjs.com/package/vue-jsonp",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-jsonp"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" i vue-jsonp\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("일단 블로그에 jsonp 깔아준다.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://simsimjae.medium.com/cors%EC%99%80-jsonp%EC%97%90-%EB%8C%80%ED%95%B4%EC%84%9C-aa3ec0456e97",target:"_blank",rel:"noopener noreferrer"}},[t._v("CORS와 JSONP에 대해서"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"_2-create-a-component-gist-vue"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-component-gist-vue"}},[t._v("#")]),t._v(" 2. create a component "),s("code",[t._v("Gist.vue")])]),t._v(" "),s("p",[s("code",[t._v("src/.vuepress/components/Gist.vue")])]),t._v(" "),s("p",[t._v("뷰프레스 블로그 경로 .vuepress/components 아래 Gist.vue 파일을 하나 만들어 주자. 그리고 아래의 소스 코드 작성.")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/sudhanshu-15/vue-embed-gist/blob/master/src/components/VueGist.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("여기서"),s("OutboundLink")],1),t._v(" watch 에 있던 jsonp 소스를 mount로 옮겨주고 쓸데없는 변수들 정리해줬다. 그리고 스타일 덮어써줬음.")]),t._v(" "),s("Gist",{attrs:{gistId:"860bae50029004d949dece769637be0d",file:"Gist.vue"}}),t._v(" "),s("h2",{attrs:{id:"_3-use-at-md-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-use-at-md-file"}},[t._v("#")]),t._v(" 3. use at .md file")]),t._v(" "),s("p",[t._v("이제 마크다운에 태그 사용해주면 끝.")]),t._v(" "),s("div",{staticClass:"language-md line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-md"}},[s("code",[t._v("이것은 마크다운 입니다.\n\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("Gist")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("gistId")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("860bae50029004d949dece769637be0d"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("file")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Gist.vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);