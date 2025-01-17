(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{579:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"frontmatter-title"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[s._v("#")]),s._v(" "+s._s(s.$frontmatter.title))]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 원격저장소 커밋,푸쉬 내용 리셋하기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v(" 0f16a57a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("되돌아가고싶은커밋"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" origin develop "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 강제 푸쉬")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Repository 생성")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 새로운 로컬 저장소를 생성하기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("project_name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 이미 있는 저장소로 부터 다운로드 하기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("url"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Local Repository 살펴보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 아직 commit 되지 않은 새파일 혹은 변경된 파일 목록 보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unstage 파일들의 변경 보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# staged 파일들의 변경 보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cached")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 모든 staged와 unstage 파일들의 변경 보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" HEAD\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 두 commit id들 사이의 변화 보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" commit1 commit2\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 파일의 변경일과 작성자의 변화 목록")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" blame "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# commit와/또는 파일의 변화 보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" show "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("commit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 변경 이력 보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# file/directory의 변경 이력 보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file/directory"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 브랜치 작업")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 모든 로컬 브랜치 목록")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 모든 로컬과 원격 브랜치 보기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-av")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <branch>로 변경하고 작업 디렉토리를 업데이트")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 브랜치 생성하기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("new-branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 브랜치 삭제하기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("branch"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# branch_a를 branch_b로 머지")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout branch_b\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge branch_a\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 현재 커밋에 태그 달기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" tag "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("tag-name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 변경하기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 파일을 stage함")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#변경된 모든 파일을 stage함")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 모든 staged 파일들을 메시지와 함께 commit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit message"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 모든 변경 사항을 반영하여 메시지와 함께 commit")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-am")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit message"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 파일을 unstage함")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("file"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 최근 commit의 모든것을 revert함")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hard")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 동기화하기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 원격 저장소의 변경사항 가져오기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 원격 저장소의 변경사항을 가져오고 머지하기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 원격 저장소의 변경사항을 가져오고 rebase하기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--rebase")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 원격 저장소에 로컬 저장소의 변경사항 넣기")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git 도움말")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--help")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br")])]),t("h2",{attrs:{id:"pull-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-request"}},[s._v("#")]),s._v(" pull request")]),s._v(" "),t("ol",[t("li",[s._v("[github] Fork")]),s._v(" "),t("li",[s._v("clone, remote설정")]),s._v(" "),t("li",[s._v("branch 생성")]),s._v(" "),t("li",[s._v("수정 작업 후 add, commit, push")]),s._v(" "),t("li",[s._v("[github] Pull Request 생성")]),s._v(" "),t("li",[s._v("[github] 코드리뷰, Merge Pull Reqest")]),s._v(" "),t("li",[s._v("Merge 이후 branch 삭제 및 동기화")])])])}),[],!1,null,null,null);t.default=e.exports}}]);