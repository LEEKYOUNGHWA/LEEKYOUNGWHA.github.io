(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{602:function(t,s,a){"use strict";a.r(s);var _=a(2),v=Object(_.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"restful-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restful-api"}},[t._v("#")]),t._v(" RESTful API")]),t._v(" "),s("h2",{attrs:{id:"api란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api란"}},[t._v("#")]),t._v(" API란?")]),t._v(" "),s("p",[t._v("Application Programming Interface (API) : Application을 Programming 할 때 사용되는 인터페이스이다."),s("br"),t._v("\n(인터페이스는 간단히 말해서, 어려운 것은 감추고 보다 쉽게 상호작용할 수 있도록 해주는 것들을 의미한다.)\n한마디로, API는 소프트웨어 간의 상호 작용을 가능하게 하는 규칙과 프로토콜의 집합이다.")]),t._v(" "),s("h2",{attrs:{id:"restful-api란"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restful-api란"}},[t._v("#")]),t._v(" RESTful API란?")]),t._v(" "),s("p",[t._v("REST(Representational State Transfer)는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍쳐이며, REST를 준수하는 API를 REST API라고 한다.")]),t._v(" "),s("h3",{attrs:{id:"rest-api의-세-가지-요소"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-api의-세-가지-요소"}},[t._v("#")]),t._v(" REST API의 세 가지 요소")]),t._v(" "),s("p",[t._v("자원(URI), 행위(HTTP요청 메서드), 표현(페이로드)")]),t._v(" "),s("h3",{attrs:{id:"rest의-주요-원칙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest의-주요-원칙"}},[t._v("#")]),t._v(" REST의 주요 원칙")]),t._v(" "),s("h4",{attrs:{id:"_1-리소스-식별"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-리소스-식별"}},[t._v("#")]),t._v(" 1. 리소스 식별")]),t._v(" "),s("p",[t._v("고유한 URL을 통해 모든 자원이 식별 되어야 한다. 즉, URL을 통해 모든 자원을 파악할 수 있다는 것이다.\n다음 URL을 분석해보자")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("https://api.example.com/users/1\n")])])]),s("ul",[s("li",[t._v('"http://api.example.com" 을  통해 시스템에 접근한다.')]),t._v(" "),s("li",[t._v("user id가 1인 데이터에 접근한다.")])]),t._v(" "),s("p",[t._v("이처럼 url을 통해 사용자는 직관적으로 자원을 식별할 수 있어야한다.")]),t._v(" "),s("h4",{attrs:{id:"_2-무상태성-statelessness"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-무상태성-statelessness"}},[t._v("#")]),t._v(" 2. 무상태성 (statelessness)")]),t._v(" "),s("p",[t._v("서버는 클라이언트는 서로의 상태를 알 수 없다. 따라서 요청을 처리할 충분한 정보를 포함해야한다.\n만약 로그인 상태를 체크하여 로그인 된 유저에게만 api 접근을 허용하려고한다.\n이 때 서버에서는 클라이언트에서 로그인이 되었는지 알 수 없기 때문에 토큰 정보를 같이 보낸다.")]),t._v(" "),s("h4",{attrs:{id:"_3-자원의-조작-representation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-자원의-조작-representation"}},[t._v("#")]),t._v(" 3. 자원의 조작 (Representation)")]),t._v(" "),s("p",[t._v("JSON이나 XML 등의 형식으로 요청과 응답이 처리되며, 이 때 전송 받은 데이터는 가공하여 사용 가능하다.")]),t._v(" "),s("h4",{attrs:{id:"_4-모든-내용을-담아야-한다"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-모든-내용을-담아야-한다"}},[t._v("#")]),t._v(" 4. 모든 내용을 담아야 한다.")]),t._v(" "),s("p",[t._v("요청과 응답 시 전송하는 메시지를 통해 모든 처리가 가능해야한다.")]),t._v(" "),s("h4",{attrs:{id:"_5-추가적인-상태-변화를-위한-정보를-공유한다-hateoas-선택적-사용"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-추가적인-상태-변화를-위한-정보를-공유한다-hateoas-선택적-사용"}},[t._v("#")]),t._v(" 5. 추가적인 상태 변화를 위한 정보를 공유한다. (HATEOAS, 선택적 사용)")]),t._v(" "),s("p",[t._v("서버를 통한 응답을 통해 이후 가능한 행동에 대한 하이퍼링크를 포함해야한다.\n이 말의 뜻은 사용자 정보를 조회하는 GET 요청을 서버에 전송하였을 때, 서버로부터 받는 응답에는 사용자를 수정하거나 삭제할 수 있는 URL, method를 포함된다는 것이다. 해당 특징은 선택적 사용된다.")]),t._v(" "),s("h4",{attrs:{id:"_6-캐시-가능-여부-포함"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-캐시-가능-여부-포함"}},[t._v("#")]),t._v(" 6. 캐시 가능 여부 포함")]),t._v(" "),s("p",[t._v("응답을 통해 해당 정보가 캐시 가능 여부와 가능 시 유지 기간을 포함해야한다.")]),t._v(" "),s("h3",{attrs:{id:"rest-api의-설계-원칙"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-api의-설계-원칙"}},[t._v("#")]),t._v(" REST API의 설계 원칙")]),t._v(" "),s("p",[t._v("URI는 리소스를 표현해야 한다.\n리소스에 대한 행위는 HTTP 요청 메서드로 표현한다.(URI에 표현하지 않는다.)\nREST의 기본 원칙을 성실히 지킨 서비스 디자인을 Restful하다고 한다.")]),t._v(" "),s("p",[t._v("RESTful API의 설계 원칙을 준수하여 각 리소스에 대해 일관된 메소드를 사용하면 API를 이해하기 쉽고 유지보수하기 편해진다.")]),t._v(" "),s("ol",[s("li",[t._v("URI에 동사가 포함이 되어선 안된다.")]),t._v(" "),s("li",[t._v("URI에서 단어의 구분이 필요한 경우 -(하이픈)을 이용한다.")]),t._v(" "),s("li",[t._v("자원은 기본적으로 복수형으로 표현한다.")]),t._v(" "),s("li",[t._v("단 하나의 자원을 명시적으로 표현을 하기 위해서는 /users/id와 같이 식별 값을 추가로 사용한다.")]),t._v(" "),s("li",[t._v("자원 간 연관 관계가 있을 경우 이를 URI에 표현한다.")])]),t._v(" "),s("h2",{attrs:{id:"_1-api-설계"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-api-설계"}},[t._v("#")]),t._v(" 1. API 설계")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("HTTP Method")]),t._v(" "),s("th",[t._v("Endpoint")]),t._v(" "),s("th",[t._v("설명")]),t._v(" "),s("th",[t._v("인증 필요 여부")]),t._v(" "),s("th",[t._v("요청 예시")]),t._v(" "),s("th",[t._v("상태 코드 (HTTP Status)")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("POST")])]),t._v(" "),s("td",[s("code",[t._v("/auth/login")])]),t._v(" "),s("td",[t._v("로그인 (토큰 발급)")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("로그인 요청: "),s("code",[t._v("email")]),t._v(", "),s("code",[t._v("password")])]),t._v(" "),s("td",[t._v("200 OK, 400 Bad Request, 401 Unauthorized")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("POST")])]),t._v(" "),s("td",[s("code",[t._v("/auth/signup")])]),t._v(" "),s("td",[t._v("회원 가입")]),t._v(" "),s("td",[t._v("❌")]),t._v(" "),s("td",[t._v("회원가입 요청: "),s("code",[t._v("name")]),t._v(", "),s("code",[t._v("email")]),t._v(", "),s("code",[t._v("password")])]),t._v(" "),s("td",[t._v("201 Created, 400 Bad Request")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("GET")])]),t._v(" "),s("td",[s("code",[t._v("/users")])]),t._v(" "),s("td",[t._v("모든 회원 조회")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("토큰 포함 헤더: "),s("code",[t._v("Authorization: Bearer <token>")])]),t._v(" "),s("td",[t._v("200 OK, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("GET")])]),t._v(" "),s("td",[s("code",[t._v("/users/{id}")])]),t._v(" "),s("td",[t._v("특정 회원 조회")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("토큰 포함 헤더: "),s("code",[t._v("Authorization: Bearer <token>")])]),t._v(" "),s("td",[t._v("200 OK, 401 Unauthorized, 403 Forbidden, 404 Not Found")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("PUT")])]),t._v(" "),s("td",[s("code",[t._v("/users/{id}")])]),t._v(" "),s("td",[t._v("회원 정보 수정")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("토큰 포함 헤더 + 데이터: "),s("code",[t._v("name")]),t._v(", "),s("code",[t._v("email")]),t._v(", "),s("code",[t._v("password")])]),t._v(" "),s("td",[t._v("200 OK, 400 Bad Request, 401 Unauthorized, 404 Not Found")])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("DELETE")])]),t._v(" "),s("td",[s("code",[t._v("/users/{id}")])]),t._v(" "),s("td",[t._v("회원 삭제")]),t._v(" "),s("td",[t._v("✅")]),t._v(" "),s("td",[t._v("토큰 포함 헤더: "),s("code",[t._v("Authorization: Bearer <token>")])]),t._v(" "),s("td",[t._v("204 No Content, 401 Unauthorized, 403 Forbidden, 404 Not Found")])])])]),t._v(" "),s("hr"),t._v(" "),s("h2",{attrs:{id:"_2-상태-코드"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-상태-코드"}},[t._v("#")]),t._v(" 2. 상태 코드")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("상태 코드")]),t._v(" "),s("th",[t._v("이름")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("1xx")])]),t._v(" "),s("td",[s("strong",[t._v("정보 응답 (Informational)")])]),t._v(" "),s("td",[s("strong",[t._v("요청 처리 중")])])]),t._v(" "),s("tr",[s("td",[t._v("100")]),t._v(" "),s("td",[t._v("Continue")]),t._v(" "),s("td",[t._v("서버가 요청의 일부를 받았으며 계속해서 요청을 보내도 됨.")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("상태 코드")]),t._v(" "),s("th",[t._v("이름")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("2xx")])]),t._v(" "),s("td",[s("strong",[t._v("성공 (Success)")])]),t._v(" "),s("td",[s("strong",[t._v("요청이 성공적으로 처리되었음")])])]),t._v(" "),s("tr",[s("td",[t._v("200")]),t._v(" "),s("td",[t._v("OK")]),t._v(" "),s("td",[t._v("요청이 성공적으로 처리되었으며, 결과가 포함되어 반환됨.")])]),t._v(" "),s("tr",[s("td",[t._v("201")]),t._v(" "),s("td",[t._v("Created")]),t._v(" "),s("td",[t._v("요청이 성공적으로 처리되어 자원이 생성됨.")])]),t._v(" "),s("tr",[s("td",[t._v("202")]),t._v(" "),s("td",[t._v("Accepted")]),t._v(" "),s("td",[t._v("요청이 수락되었으나 아직 처리되지 않음.")])]),t._v(" "),s("tr",[s("td",[t._v("204")]),t._v(" "),s("td",[t._v("No Content")]),t._v(" "),s("td",[t._v("요청이 성공했으나 반환할 데이터가 없음.")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("상태 코드")]),t._v(" "),s("th",[t._v("이름")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("3xx")])]),t._v(" "),s("td",[s("strong",[t._v("리다이렉션 (Redirection)")])]),t._v(" "),s("td",[s("strong",[t._v("요청에 대한 추가 작업 필요")])])]),t._v(" "),s("tr",[s("td",[t._v("301")]),t._v(" "),s("td",[t._v("Moved Permanently")]),t._v(" "),s("td",[t._v("요청한 리소스가 영구적으로 이동됨.")])]),t._v(" "),s("tr",[s("td",[t._v("302")]),t._v(" "),s("td",[t._v("Found")]),t._v(" "),s("td",[t._v("요청한 리소스가 임시적으로 다른 위치에 있음.")])]),t._v(" "),s("tr",[s("td",[t._v("304")]),t._v(" "),s("td",[t._v("Not Modified")]),t._v(" "),s("td",[t._v("요청한 리소스가 수정되지 않았으므로 캐시된 버전을 사용할 수 있음.")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("상태 코드")]),t._v(" "),s("th",[t._v("이름")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("4xx")])]),t._v(" "),s("td",[s("strong",[t._v("클라이언트 오류 (Client Error)")])]),t._v(" "),s("td",[s("strong",[t._v("클라이언트 요청에 문제가 있음")])])]),t._v(" "),s("tr",[s("td",[t._v("400")]),t._v(" "),s("td",[t._v("Bad Request")]),t._v(" "),s("td",[t._v("잘못된 요청으로 서버가 이해하지 못함.")])]),t._v(" "),s("tr",[s("td",[t._v("401")]),t._v(" "),s("td",[t._v("Unauthorized")]),t._v(" "),s("td",[t._v("인증이 필요하거나 인증에 실패함.")])]),t._v(" "),s("tr",[s("td",[t._v("403")]),t._v(" "),s("td",[t._v("Forbidden")]),t._v(" "),s("td",[t._v("요청이 금지됨 (권한 부족).")])]),t._v(" "),s("tr",[s("td",[t._v("404")]),t._v(" "),s("td",[t._v("Not Found")]),t._v(" "),s("td",[t._v("요청한 리소스를 찾을 수 없음.")])]),t._v(" "),s("tr",[s("td",[t._v("405")]),t._v(" "),s("td",[t._v("Method Not Allowed")]),t._v(" "),s("td",[t._v("허용되지 않은 HTTP 메서드를 사용함.")])]),t._v(" "),s("tr",[s("td",[t._v("409")]),t._v(" "),s("td",[t._v("Conflict")]),t._v(" "),s("td",[t._v("요청이 현재의 서버 상태와 충돌함.")])]),t._v(" "),s("tr",[s("td",[t._v("422")]),t._v(" "),s("td",[t._v("Unprocessable Entity")]),t._v(" "),s("td",[t._v("요청이 올바르지만 처리가 불가능함 (주로 유효성 검증 실패).")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("상태 코드")]),t._v(" "),s("th",[t._v("이름")]),t._v(" "),s("th",[t._v("설명")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("5xx")])]),t._v(" "),s("td",[s("strong",[t._v("서버 오류 (Server Error)")])]),t._v(" "),s("td",[s("strong",[t._v("서버에서 요청을 처리할 수 없음")])])]),t._v(" "),s("tr",[s("td",[t._v("500")]),t._v(" "),s("td",[t._v("Internal Server Error")]),t._v(" "),s("td",[t._v("서버에서 일반적인 오류가 발생함.")])]),t._v(" "),s("tr",[s("td",[t._v("501")]),t._v(" "),s("td",[t._v("Not Implemented")]),t._v(" "),s("td",[t._v("서버에 요청 처리 기능이 구현되어 있지 않음.")])]),t._v(" "),s("tr",[s("td",[t._v("502")]),t._v(" "),s("td",[t._v("Bad Gateway")]),t._v(" "),s("td",[t._v("서버가 잘못된 응답을 받음.")])]),t._v(" "),s("tr",[s("td",[t._v("503")]),t._v(" "),s("td",[t._v("Service Unavailable")]),t._v(" "),s("td",[t._v("서버가 과부하 상태이거나 유지 관리 중임.")])]),t._v(" "),s("tr",[s("td",[t._v("504")]),t._v(" "),s("td",[t._v("Gateway Timeout")]),t._v(" "),s("td",[t._v("게이트웨이가 응답하지 않아 요청이 처리되지 않음.")])])])]),t._v(" "),s("h2",{attrs:{id:"_3-토큰-기반-인증-처리"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-토큰-기반-인증-처리"}},[t._v("#")]),t._v(" 3. 토큰 기반 인증 처리")]),t._v(" "),s("h3",{attrs:{id:"post-auth-login-로그인-토큰-발급"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#post-auth-login-로그인-토큰-발급"}},[t._v("#")]),t._v(" "),s("strong",[t._v("POST "),s("code",[t._v("/auth/login")]),t._v(" (로그인 - 토큰 발급)")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Request")]),t._v(": 클라이언트가 이메일과 비밀번호를 보내면 서버는 해당 사용자를 인증하고 JWT 토큰을 발급합니다.")]),t._v(" "),s("li",[s("strong",[t._v("Response")]),t._v(":"),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bearer"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[s("strong",[t._v("200 OK")]),t._v(": 토큰 발급 성공")]),t._v(" "),s("li",[s("strong",[t._v("400 Bad Request")]),t._v(": 잘못된 요청 (예: 이메일 또는 비밀번호 누락)")]),t._v(" "),s("li",[s("strong",[t._v("401 Unauthorized")]),t._v(": 인증 실패 (잘못된 자격 증명)")])])])]),t._v(" "),s("h3",{attrs:{id:"get-users-회원-조회"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#get-users-회원-조회"}},[t._v("#")]),t._v(" "),s("strong",[t._v("GET "),s("code",[t._v("/users")]),t._v(" (회원 조회)")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Request")]),t._v(": 사용자는 헤더에 JWT 토큰을 포함하여 요청합니다."),s("div",{staticClass:"language-http line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-http"}},[s("code",[s("span",{pre:!0,attrs:{class:"token header"}},[s("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Authorization")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token header-value"}},[t._v("Bearer <valid-jwt-token>")])]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])]),t._v(" "),s("li",[s("strong",[t._v("Response")]),t._v(":"),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"john@example.com"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Jane Doe"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jane@example.com"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("ul",[s("li",[s("strong",[t._v("200 OK")]),t._v(": 요청한 모든 회원 정보 반환")]),t._v(" "),s("li",[s("strong",[t._v("401 Unauthorized")]),t._v(": 토큰 누락 또는 유효하지 않은 토큰")]),t._v(" "),s("li",[s("strong",[t._v("403 Forbidden")]),t._v(": 해당 리소스에 접근 권한이 없는 경우")]),t._v(" "),s("li",[s("strong",[t._v("500 Internal Server Error")]),t._v(": 서버 내부 오류")])])])]),t._v(" "),s("h3",{attrs:{id:"put-users-id-회원-수정"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#put-users-id-회원-수정"}},[t._v("#")]),t._v(" "),s("strong",[t._v("PUT "),s("code",[t._v("/users/{id}")]),t._v(" (회원 수정)")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Request")]),t._v(": "),s("code",[t._v("Authorization")]),t._v(" 헤더에 유효한 토큰을 포함하고 수정할 데이터를 보냅니다."),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe Updated"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"john_updated@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"password"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"new_secure_password"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])])]),t._v(" "),s("li",[s("strong",[t._v("Response")]),t._v(":"),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe Updated"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"john_updated@example.com"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("ul",[s("li",[s("strong",[t._v("200 OK")]),t._v(": 회원 정보 수정 성공")]),t._v(" "),s("li",[s("strong",[t._v("400 Bad Request")]),t._v(": 잘못된 요청 데이터")]),t._v(" "),s("li",[s("strong",[t._v("401 Unauthorized")]),t._v(": 유효하지 않은 토큰 또는 인증되지 않은 사용자")]),t._v(" "),s("li",[s("strong",[t._v("404 Not Found")]),t._v(": 존재하지 않는 회원 ID")])])])]),t._v(" "),s("h3",{attrs:{id:"delete-users-id-회원-삭제"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-users-id-회원-삭제"}},[t._v("#")]),t._v(" "),s("strong",[t._v("DELETE "),s("code",[t._v("/users/{id}")]),t._v(" (회원 삭제)")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Request")]),t._v(": "),s("code",[t._v("Authorization")]),t._v(" 헤더에 유효한 토큰을 포함하여 요청합니다.")]),t._v(" "),s("li",[s("strong",[t._v("Response")]),t._v(":\n"),s("ul",[s("li",[s("strong",[t._v("204 No Content")]),t._v(": 회원 삭제 성공 (응답 본문 없음)")]),t._v(" "),s("li",[s("strong",[t._v("401 Unauthorized")]),t._v(": 유효하지 않은 토큰")]),t._v(" "),s("li",[s("strong",[t._v("403 Forbidden")]),t._v(": 삭제 권한이 없는 사용자")]),t._v(" "),s("li",[s("strong",[t._v("404 Not Found")]),t._v(": 해당 ID의 회원을 찾을 수 없음")])])])]),t._v(" "),s("hr")])}),[],!1,null,null,null);s.default=v.exports}}]);