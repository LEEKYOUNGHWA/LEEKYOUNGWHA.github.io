---
lastUpdated: 2024/10/28 09:22:00
image: https://kafka.apache.org/logos/kafka_logo--simple.png
tags: ["kafka"]
---

# Kafka broker + Spring boot kafka producer + Spring Kafka batch listner

## 박M 저번 시간 피드백

1. 공통고민
2. 왜 를 고민하는 과정
3. java util화 component 화
4. 시나리오 타겟 우리 환경에서 이렇게 이렇게 그래서 나는 이걸 컴포넌트로 만들었다
5. 스토리 라인

## 시나리오 

1. 스프링 부트 카프카 프로듀서 사용하여 사용자가 인사정보 생성(localhost:8081)  
    
    1-1. api로 인사정보 1000건 전송 가정 하였을때 1000건 모두 직렬화 하여 한번에 카프카 전송  
    1-2. api로 인사정보 1000건 전송, 서버에서 루프 돌려서 인사정보 1건씩 카프카 전송  
    1-3. api로 단건 전송 1000번 실행, 카프카로 단건전송  

2. 카프카 브로커 전송(aws) 
3. 배치에서 실시간 전송 받음

## spring boot + kafka producer

```javascript
// arr
var arr = [];
for(var i=0;i<userCnt;i++){
    arr.push({"name":"이름"+i, "no":i}); // 갯수만큼 임의 더미 유저 생성
}
$.ajax({
    url: 'http://localhost:8081/sendKafka'
    , type: 'post'
    , dataType: 'json' // 데이터 타입을 Json으로 변경
    , contentType: 'application/json' // Content-Type을 Json으로 변경
    , data: JSON.stringify(arr) // JSON String으로 전환하여 보낸다.
    , success: function(response) {
    }
});

function sendDatasingle() {
    var userCnt = Number($("#user_name").val());
    alert("sendData");
    for(var i=0;i<userCnt;i++){
        var arr = {"name":"이름"+i, "no":i};
        $.ajax({
        url: 'http://localhost:8081/sendKafkasingle'
        , type: 'post'
        , contentType: 'application/json' // 데이터 타입을 Json으로 변경
        , data: JSON.stringify(arr) // JSON String으로 전환하여 보낸다.
        , success: function(response) {
        }
    });
    }
}
```

현재 gw api가 스프링 부트 이므로 스프링 부트에 카프카 프로듀서를 붙인다 가정

```
dependencies {
    implementation 'org.springframework.kafka:spring-kafka:2.5.10.RELEASE'
    implementation 'org.springframework.boot:spring-boot-starter-web:2.3.4.RELEASE'
    implementation 'com.google.code.gson:gson:2.8.6'
}
```

### 공통 모듈화

- common 패키지 아래 클래스 생성 `com.example.common.KafkaProducer.java`
- 템플릿 화 시켜서 클래스와 List클래스 둘다 한 함수로 전송 가능

```java
@Service
public class KafkaProducer {

    private final Logger logger = LoggerFactory.getLogger(KafkaProducer.class);

    private final KafkaTemplate<String, String> kafkaTemplate;

    public KafkaProducer(KafkaTemplate<String, String> kafkaTemplate) {
        this.kafkaTemplate = kafkaTemplate;
    }

    public <T> void send(String topic, T data) {
        Gson gson = new Gson();
        String jsonColorLog = gson.toJson(data);
        kafkaTemplate.send(topic, jsonColorLog).addCallback(new ListenableFutureCallback<SendResult<String, String>>() {
            @Override
            public void onSuccess(SendResult<String, String> result) {
                logger.info("success"+result.toString());
            }

            @Override
            public void onFailure(Throwable ex) {
                logger.error(ex.getMessage(), ex);
            }
        });
    }
}
```


컨트롤러단에서 호출

```java
// 시나리오 1. 리스트 전송
@PostMapping("/sendKafka")
public void url(@RequestBody List<MemberVO> members) {
    this.kafkaProducer.send("select-color", members); 
}

// 시나리오 2. 인스턴스 하나 전송
@PostMapping("/sendKafka2")
public void sendKafka2(@RequestBody List<MemberVO> members) {
    members.forEach( memberVO -> this.kafkaProducer.send("select-color", memberVO)); 
}

// 시나리오 3. api 단건 전송
@PostMapping("/sendKafkasingle")
public void url(@RequestBody MemberVO member) {
    this.kafkaProducer.send("select-color", member);
}
```

## kafka batch listner

배치 리스너에서 실시간 전송 받음

```
dependencies {
    implementation 'org.springframework.kafka:spring-kafka:2.5.10.RELEASE'
    implementation 'org.springframework.boot:spring-boot-starter:2.4.0'
}
```

```java
@KafkaListener(topics = "select-color", groupId = "test-group-01")
public void batchListener(ConsumerRecords<String, String> records) { 
    records.forEach(record -> logger.info(record.toString()));
}
```