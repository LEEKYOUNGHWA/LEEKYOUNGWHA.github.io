(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{386:function(t,s,a){t.exports=a.p+"assets/img/tampermonkey4.5f88a34f.png"},387:function(t,s,a){t.exports=a.p+"assets/img/tampermonkey3.b85c3e59.png"},388:function(t,s,a){t.exports=a.p+"assets/img/tampermonkey2.de68cd85.png"},389:function(t,s,a){t.exports=a.p+"assets/img/tampermonkey1.e5a76aa6.png"},573:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"frontmatter-title"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "+t._s(t.$frontmatter.title))]),t._v(" "),s("blockquote",[s("p",[t._v("아니 원래 넘어가기가 안됬었는데 넘어가지는군요?"),s("br"),t._v("\n버튼을 100번 누르느냐 세팅해놓고 자동 재생 시키느냐는 여러분들의 선택..."),s("br"),t._v("\n++ 영재M 의 스크립트 보완(감사감사) 에 제가 더 수정함"),s("br"),t._v("\n++ 지현M 문의 보완")])]),t._v(" "),s("p",[t._v("getSmart 라는 사내 교육프로그램이 있는데 다음 차시로 넘어갈때마다 확인 누르는게 너무 귀찮다."),s("br"),t._v("\n다음 차시로 자동으로 넘어가게 alert(confirm)을 없애는 스크립트를 짜봤다."),s("br"),t._v("\n의무교육들을때 크롬 탭에서 한꺼번에 4개의 강좌를 동시에 돌리면 됨."),s("br"),t._v("\n다음 페이지로 넘어갈때 화면에서 발생하는 alert 이나 confirm 없애고 재생 위치를 뒤쪽으로 당겨 자동으로 재생시켜 줍니다")]),t._v(" "),s("ul",[s("li",[t._v("참고 : "),s("a",{attrs:{href:"https://stackoverflow.com/questions/4866986/detect-if-an-alert-or-confirm-is-displayed-on-a-page",target:"_blank",rel:"noopener noreferrer"}},[t._v("detect-if-an-alert-or-confirm-is-displayed-on-a-page"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"사내-자체-프로그램용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#사내-자체-프로그램용"}},[t._v("#")]),t._v(" 사내 자체 프로그램용")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tampermonkey 크롬 확장 프로그램"),s("OutboundLink")],1),t._v(" 설치해 주세용. 한번 세팅해놓으면 두고두고 사용 가능")]),t._v(" "),s("li",[s("em",[s("strong",[t._v("!!!확장 프로그램 개발자 모드 켜주세요!!!")])]),t._v(" 안키면 파란 메시지 뜨면서 작동이 안됩니당 ㅠ"),s("br"),t._v(" "),s("code",[t._v("크롬 더보기")]),t._v(" > "),s("code",[t._v("확장 프로그램")]),t._v(" > "),s("code",[t._v("확장 프로그램 관리")]),t._v(" > 우측 상단 "),s("code",[t._v("개발자 모드")]),t._v(" 활성화\n"),s("img",{staticClass:"lazy",attrs:{alt:"tampermonkey4","data-src":a(386),loading:"lazy"}}),t._v(" "),s("img",{staticClass:"lazy",attrs:{alt:"tampermonkey3","data-src":a(387),loading:"lazy"}})]),t._v(" "),s("li",[t._v("Tampermonkey 스크립트 어떻게 공유하는지 모르겠군용 하나 만들어 주세요\n"),s("img",{staticClass:"lazy",attrs:{alt:"tampermonkey2","data-src":a(388),loading:"lazy"}})]),t._v(" "),s("li",[t._v("스크립트 작성후 "),s("code",[t._v("ctrl")]),t._v("+"),s("code",[t._v("s")]),t._v(" 저장! (상단 주석도 중요합니다용 전체 복사 후 붙여넣기 해주세요)")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ==UserScript==")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @name         getsmart 알럿 없애기 및 동영상 자동 재생, 끝으로 이동")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @namespace    https://leekyounghwa.github.io/posts/2023/autoConfirmClick.html")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @version      2024-10-31")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @description  getsmart 알럿 없애기, 동영상 자동 재생 및 끝으로 이동")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @match        https://gsitm.getsmart.co.kr/*")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// @grant        none")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ==/UserScript==")]),t._v("\n \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'use strict'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pageload"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 알림 창 자동 확인 설정")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" _old_confirm "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("confirm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("confirm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 자동 확인")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("_old_confirm")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arguments"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInterval")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 동영상 요소 찾기")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" video "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"video"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("video "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 동영상 자동 재생")]),t._v("\n      video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("play")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"동영상이 자동 재생되었습니다."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 동영상을 끝으로 이동 (끝에서 5초 전)")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" videoDuration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        video"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("currentTime "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" videoDuration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"동영상이 끝부분으로 이동했습니다."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("catch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"자동 재생 실패:"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 5초마다 체크")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br"),s("span",{staticClass:"line-number"},[t._v("34")]),s("br"),s("span",{staticClass:"line-number"},[t._v("35")]),s("br"),s("span",{staticClass:"line-number"},[t._v("36")]),s("br"),s("span",{staticClass:"line-number"},[t._v("37")]),s("br"),s("span",{staticClass:"line-number"},[t._v("38")]),s("br"),s("span",{staticClass:"line-number"},[t._v("39")]),s("br")])]),s("p",[s("img",{staticClass:"lazy",attrs:{alt:"tampermonkey1","data-src":a(389),loading:"lazy"}})]),t._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[t._v("크롬 탭에서 강의 4개 한꺼번에 돌려주세요!!!! 금방 끝납니다!@@@@@!@!@")])])])}),[],!1,null,null,null);s.default=e.exports}}]);