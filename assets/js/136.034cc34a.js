(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{546:function(a,t,e){"use strict";e.r(t);var r=e(2),s=function(a){a.options.__data__block__={mermaid_382ee1a2:"graph LR\nA[Project home] --\x3e B[src]\nA  --\x3e C[pom.xml]\nB --\x3e D[main]\nB --\x3e E[test]\nD --\x3e F[java]\nD --\x3e G[resources]\nE --\x3e H[java]\nE --\x3e I[resources]\n"}},v=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"자바-빌드-도구"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#자바-빌드-도구"}},[a._v("#")]),a._v(" 자바 빌드 도구")]),a._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#자바-프로젝트를-메이븐-프로젝트로-변환하기"}},[a._v("자바 프로젝트를 메이븐 프로젝트로 변환하기")])]),t("li",[t("a",{attrs:{href:"#메이븐-프로젝트-구조"}},[a._v("메이븐 프로젝트 구조")])]),t("li",[t("a",{attrs:{href:"#일반적인-메이븐-프로젝트-구조를-요약한-모습"}},[a._v("일반적인 메이븐 프로젝트 구조를 요약한 모습")])]),t("li",[t("a",{attrs:{href:"#메이븐-빌드-파일-예제-pom-xml"}},[a._v("메이븐 빌드 파일 예제 pom.xml")])]),t("li",[t("a",{attrs:{href:"#메이븐-명령어"}},[a._v("메이븐 명령어")])]),t("li",[t("a",{attrs:{href:"#메이븐-vs-그레이들"}},[a._v("메이븐 vs 그레이들")])]),t("li",[t("a",{attrs:{href:"#그레이들-빌드-파일-예제-build-gradle-settings-gradle"}},[a._v("그레이들 빌드 파일 예제 build.gradle settings.gradle")])]),t("li",[t("a",{attrs:{href:"#그레이들-명령어"}},[a._v("그레이들 명령어")])])])]),t("p"),a._v(" "),t("h2",{attrs:{id:"자바-프로젝트를-메이븐-프로젝트로-변환하기"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#자바-프로젝트를-메이븐-프로젝트로-변환하기"}},[a._v("#")]),a._v(" 자바 프로젝트를 메이븐 프로젝트로 변환하기")]),a._v(" "),t("p",[a._v("자바 프로젝트 선택후 마우스 우클릭 -> Configure 선택 -> Convert to Maven Project 선택")]),a._v(" "),t("h2",{attrs:{id:"메이븐-프로젝트-구조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메이븐-프로젝트-구조"}},[a._v("#")]),a._v(" 메이븐 프로젝트 구조")]),a._v(" "),t("ul",[t("li",[a._v("src/main/java : 프로젝트에 필요한 모든 자바 클래스를 개발해 저장하는 폴더")]),a._v(" "),t("li",[a._v("src/test/java : 프로젝트의 테스트 코드를 개발해 저장하는 폴더")]),a._v(" "),t("li",[a._v("src/main/resources : 응용프로그램에서 사용하는 텍스트 파일 등 추가 자원을 포함하는 폴더다")]),a._v(" "),t("li",[a._v("src/test/resources : 테스트에서 사용할 추가 자원을 포함하는 폴더.")])]),a._v(" "),t("h2",{attrs:{id:"일반적인-메이븐-프로젝트-구조를-요약한-모습"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#일반적인-메이븐-프로젝트-구조를-요약한-모습"}},[a._v("#")]),a._v(" 일반적인 메이븐 프로젝트 구조를 요약한 모습")]),a._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee1a2",graph:a.$dataBlock.mermaid_382ee1a2}}),t("h2",{attrs:{id:"메이븐-빌드-파일-예제-pom-xml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메이븐-빌드-파일-예제-pom-xml"}},[a._v("#")]),a._v(" 메이븐 빌드 파일 예제 pom.xml")]),a._v(" "),t("ul",[t("li",[a._v("project : pom.xml 파일의 최상위 수준 요소다")]),a._v(" "),t("li",[a._v("groupId : 프로젝트를 만드는 조직의 고유 식별자를 지정한다")]),a._v(" "),t("li",[a._v("artifactId : 빌드 과정에서 생성된 부산물의 고유한 기본 이름을 지정한다")]),a._v(" "),t("li",[a._v("packaging : 부산물에 사용할 패키지 형식(JAR, WAR, EAR등)을 지정한다. 이 요소를 생략하면 JAR를 사용한다.")]),a._v(" "),t("li",[a._v("version : 프로젝트에서 생성하는 부산물 버전을 지정한다")]),a._v(" "),t("li",[a._v("build : 플러그인, 자원 등 빌드 과정을 가이드하는 다양한 설정을 지정한다.")]),a._v(" "),t("li",[a._v("dependencies : 프로젝트의 디펜던시 목록을 지정한다.")])]),a._v(" "),t("h2",{attrs:{id:"메이븐-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메이븐-명령어"}},[a._v("#")]),a._v(" 메이븐 명령어")]),a._v(" "),t("ul",[t("li",[a._v("mvn clean : 빌드하기 전에 기존 빌드에서 생성된 부산물을 정리한다")]),a._v(" "),t("li",[a._v("mvn compile : 프로젝트의 소스코드를 컴파일(기본적으로 생성된 target 폴더에 결과를 저장) 한다.")]),a._v(" "),t("li",[a._v("mvn test : 컴파일된 소스코드를 테스트한다")]),a._v(" "),t("li",[a._v("mvn package : JAR과 같은 적절한 형식으로 컴파일된 코드를 패키징한다.")])]),a._v(" "),t("h2",{attrs:{id:"메이븐-vs-그레이들"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#메이븐-vs-그레이들"}},[a._v("#")]),a._v(" 메이븐 vs 그레이들")]),a._v(" "),t("p",[a._v("가장 널리 사용되는 도구는 메이븐 이지만,\n메이븐 단점 == "),t("strong",[a._v("xml")]),a._v(" 의 단점 : 작업하기 귀찮고, 가독성이 떨어짐\n반면 그레이들의 가장 큰 장점은 그루비, 코틀린 프로그래밍을 이용해 친근한 도메인 특화 언어 DSL(domain-specifie language)를 적용한다는 점이다.")]),a._v(" "),t("h2",{attrs:{id:"그레이들-빌드-파일-예제-build-gradle-settings-gradle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#그레이들-빌드-파일-예제-build-gradle-settings-gradle"}},[a._v("#")]),a._v(" 그레이들 빌드 파일 예제 build.gradle settings.gradle")]),a._v(" "),t("h2",{attrs:{id:"그레이들-명령어"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#그레이들-명령어"}},[a._v("#")]),a._v(" 그레이들 명령어")]),a._v(" "),t("ul",[t("li",[a._v("gradle clean : 이전 빌드에서 생성된 파일을 정리한다")]),a._v(" "),t("li",[a._v("gradle build : 응용프로그램을 패키징한다")]),a._v(" "),t("li",[a._v("gradle test : 테스트를 실행한다")]),a._v(" "),t("li",[a._v("gradle run : application 플러그인의 mainClassName 으로 지정된 메인 클래스를 실행한다.")])]),a._v(" "),t("p",[t("code",[a._v("실전 자바 소프트웨어개발")])])],1)}),[],!1,null,null,null);"function"==typeof s&&s(v);t.default=v.exports}}]);