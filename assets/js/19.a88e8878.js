(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{345:function(s,a,t){s.exports=t.p+"assets/img/8.277d4fac.png"},416:function(s,a,t){s.exports=t.p+"assets/img/1.bdef7f0b.png"},417:function(s,a,t){s.exports=t.p+"assets/img/2.eb7ef842.png"},418:function(s,a,t){s.exports=t.p+"assets/img/3.4a6267ff.png"},419:function(s,a,t){s.exports=t.p+"assets/img/4.16398379.png"},420:function(s,a,t){s.exports=t.p+"assets/img/5.57efaf3d.png"},421:function(s,a,t){s.exports=t.p+"assets/img/6.eb5011c8.png"},422:function(s,a,t){s.exports=t.p+"assets/img/7.1c567a55.png"},613:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"실습용-카프카-브로커-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#실습용-카프카-브로커-설치"}},[s._v("#")]),s._v(" 실습용 카프카 브로커 설치")]),s._v(" "),a("h2",{attrs:{id:"aws-ec2-인스턴스-발급-및-보안-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aws-ec2-인스턴스-발급-및-보안-설정"}},[s._v("#")]),s._v(" AWS EC2 인스턴스 발급 및 보안 설정")]),s._v(" "),a("p",[s._v("aws에서 카프카를 구축할 수 있는 방법은 크게 두가지가 있다")]),s._v(" "),a("ul",[a("li",[s._v("MSK(Managed Service Kafka) : aws에서 지원하는 완전 관리형 카프카 서비스")]),s._v(" "),a("li",[s._v("EC2(Elastic Compute Cloud) 에서 인스턴스(가상서버)를 발급받아 설치 및 실행")])]),s._v(" "),a("p",[s._v("카프카를 안전하게 서비스로 운영하기 위해서는 최소 3대의 서버로 카프카 클러스터를 구축해야 한다.\n카프카 클라이언트 개발 실습은 1대로 충분")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("aws 계정 생성\n"),a("img",{staticClass:"lazy",attrs:{alt:"1","data-src":t(416),loading:"lazy"}})])]),s._v(" "),a("li",[a("p",[s._v("EC2 대시보드 이동, 인스턴스 시작\n"),a("img",{staticClass:"lazy",attrs:{alt:"2","data-src":t(417),loading:"lazy"}})])]),s._v(" "),a("li",[a("p",[s._v("AMI 선택 : Amazon Linux 2 AMI (HVM), SSD Volume Type\n"),a("img",{staticClass:"lazy",attrs:{alt:"3","data-src":t(418),loading:"lazy"}})])]),s._v(" "),a("li",[a("p",[s._v("인스턴스 유형 선택 : t2.micro\n"),a("img",{staticClass:"lazy",attrs:{alt:"4","data-src":t(419),loading:"lazy"}})])]),s._v(" "),a("li",[a("p",[s._v("키페어 설정\n"),a("img",{staticClass:"lazy",attrs:{alt:"5","data-src":t(420),loading:"lazy"}})])]),s._v(" "),a("li",[a("p",[s._v("보안그룹 규칙 추가")])])]),s._v(" "),a("ul",[a("li",[s._v("카프카 브로커의 기본 포트 : 9092")]),s._v(" "),a("li",[s._v("주키퍼 기본 포트 : 2181")])]),s._v(" "),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"6","data-src":t(421),loading:"lazy"}})]),s._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[s._v("인스턴스 시작")])]),s._v(" "),a("h2",{attrs:{id:"인스턴스-접속하기"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#인스턴스-접속하기"}},[s._v("#")]),s._v(" 인스턴스 접속하기")]),s._v(" "),a("ol",[a("li",[s._v("test-kafka-server-key.pem 파일을 -i 명령어로 읽어오기 위해 유저 권한 변경")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v(" test-kafka-server-key.pem\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("명령어 실행")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"test-kafka-server-key.pem"')]),s._v(" ec2-user@3.21.129.47\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"7","data-src":t(422),loading:"lazy"}})]),s._v(" "),a("h2",{attrs:{id:"인스턴스에-자바-설치"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#인스턴스에-자바-설치"}},[s._v("#")]),s._v(" 인스턴스에 자바 설치")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" java-1.8.0-openjdk-devel.x86_64\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# java -version 으로 설치확인")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"주키퍼-카프카-브로커-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#주키퍼-카프카-브로커-실행"}},[s._v("#")]),s._v(" 주키퍼, 카프카 브로커 실행")]),s._v(" "),a("h3",{attrs:{id:"카프카-바이너리-패키지-다운"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#카프카-바이너리-패키지-다운"}},[s._v("#")]),s._v(" 카프카 바이너리 패키지 다운")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://archive.apache.org/dist/kafka/2.5.0/kafka_2.12-2.5.0.tgz "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 카프카 패키지 다운")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" xvf kafka_2.12-2.5.0.tgz "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 압축풀기")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" kafka_2.12-2.5.0\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"카프카-브로커-힙-메모리-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#카프카-브로커-힙-메모리-설정"}},[s._v("#")]),s._v(" 카프카 브로커 힙 메모리 설정")]),s._v(" "),a("p",[s._v("카프카 브로커는 레코드의 내용은 페이지 캐시로 시스템 메모리를 사용하고 나머지 객체들을 힙 메모리에 저장하여 사용. 카프카 브로커를 운영할때 힙 메모리를 5GB 이상으로 설정하지 않는 것이 일반적이다.")]),s._v(" "),a("p",[s._v("카프카 힙메모리는 카프카 브로커 1G, 주키퍼는 512MB로 기본 설정 되어 있다. 실습용으로 400, 400 으로 설정")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KAFKA_HEAP_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xmx400m -Xms400m"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KAFKA_HEAP_OPTS")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("터미널 세션이 종료되면 KAFKA_HEAP_OPTS 환경변수 선언문 초기화 되므로 ~./bashrc 파일에 넣어준다")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ~/.bashrc\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# .bashrc")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Source global definitions")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" /etc/bashrc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" /etc/bashrc\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Uncomment the following line if you don't like systemctl's auto-paging feature:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export SYSTEMD_PAGER=")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# User specific aliases and functions")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KAFKA_HEAP_OPTS")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xms400m -Xms400m"')]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("p",[a("code",[s._v("esc")]),s._v(" "),a("code",[s._v(":wq")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 실행")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$KAFKA_HEAP_OPTS")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"kafka-server-start-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kafka-server-start-sh"}},[s._v("#")]),s._v(" kafka-server-start.sh")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" bin/kafka-server-start.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("KAFKA_HEAP_OPTS 이 환경변수로 설정되어 있지 않으면 기본 힙 메모리는 Xms 1G, Xms 1G로 설정된다")]),s._v(" "),a("li",[s._v("-daemon 옵션을 사용하여 카프카 브로커가 실행될때 백그라운드로 실행될지 포어그라운드로 실행될지 설정할 수 있다. -daemon 옵션을 붙여 백그라운드로 실행하는 것이 일반적인 운영 방식이다.")])]),s._v(" "),a("h3",{attrs:{id:"카프카-브로커-실행-옵션-설정"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#카프카-브로커-실행-옵션-설정"}},[s._v("#")]),s._v(" 카프카 브로커 실행 옵션 설정")]),s._v(" "),a("p",[s._v("config 폴더에 있는 server.properties 파일에는 카프카 브로커가 클러스터 운영에 필요한 옵션들을 지정할 수 있다.")]),s._v(" "),a("p",[s._v("advertised.listner는 카프카 클라이언트 또는 커맨드 라인 툴을 브로커와 연결할 때 사용. 현재 접속하고 있는 인스턴스의 퍼블릭 IP와 카프카 기본 포트인 9092를 PLAINTEXT://와 함께 붙여넣고 advertised.listners를 주석에서 해제한다.")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" config/server.properties\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("advertised.listeners")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAINTEXT://3.21.129.47:9092\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"주키퍼-실행"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#주키퍼-실행"}},[s._v("#")]),s._v(" 주키퍼 실행")]),s._v(" "),a("p",[s._v("주키퍼 : 분산 코디네이션 서비스 제공. 카프카 클러스터의 설정 리더 정보, 컨트롤러 정보를 담고 있다. 상용환경에서는 3대 이상의 서버로 구성하여 사용하지만 실습에서는 테스트용으로 1대만 실행(Quick-and-dirty single node)")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("bin/zookeeper-server-start.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-daemon")]),s._v(" config/zookeeper.properties\njps "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-vm")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"카프카-브로커-실행-및-로그-확인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#카프카-브로커-실행-및-로그-확인"}},[s._v("#")]),s._v(" 카프카 브로커 실행 및 로그 확인")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("bin/kafka-server-start.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-daemon")]),s._v(" config/server.properties\njps "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" logs/server.log\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"9","data-src":t(345),loading:"lazy"}})]),s._v(" "),a("h3",{attrs:{id:"로컬-컴퓨터에서-카프카와-통신-확인"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#로컬-컴퓨터에서-카프카와-통신-확인"}},[s._v("#")]),s._v(" 로컬 컴퓨터에서 카프카와 통신 확인")]),s._v(" "),a("blockquote",[a("p",[s._v("로컬컴퓨터 cmd")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("wsl --install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("우분투 실행")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://archive.apache.org/dist/kafka/2.5.0/kafka_2.12-2.5.0.tgz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--output")]),s._v(" kafka.tgz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-xvf")]),s._v(" kafka.tgz\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" kafka_2.12-2.5.0\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" bin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 카프카 커맨드 라인 툴 확인")]),s._v("\n./kafka-broker-api-versions.sh --bootstrap-server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.21")]),s._v(".129.47:9092\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{staticClass:"lazy",attrs:{alt:"8","data-src":t(345),loading:"lazy"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);