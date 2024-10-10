---
lastUpdated: 2024/10/08 14:43:00
image: https://kafka.apache.org/logos/kafka_logo--simple.png
tags: ["kafka"]
---

# 카프카 스트림즈

## 스트림즈DSL - stream(), to()

```java
public class SimpleStreamsApplication {
    private static String APPLICATION_NAME = "streams-application"; // 스트림즈 애플리케이션의 애플리케이션 아이디 지정
    private static String BOOTSTRAP_SERVICES = "my-kafka:9092"; // 스트림즈 애플리케이션과 연동할 카프카 클러스터 정보
    private static String STREAM_LOG = "stream_log";
    private static String STREAM_LOG_FILTER = "stream_log_filter";

    public static void main(String[] args) {

        Properties props = new Properties();
        props.put(StreamsConfig.APPLICATION_ID_CONFIG, APPLICATION_NAME);
        props.put(StreamsConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAP_SERVICES);
        // 스트림 처리를 위해 메시지 키와 메시지 값의 역직렬화, 직렬화 방식을 지정
        props.put(StreamsConfig.DEFAULT_KEY_SERDE_CLASS_CONFIG, Serdes.String().getClass());
        props.put(StreamsConfig.DEFAULT_VALUE_SERDE_CLASS_CONFIG, Serdes.String().getClass());

        StreamsBuilder builder = new StreamsBuilder(); // 스트림 토폴로지 정의
        KStream<String, String> streamLog = builder.stream(STREAM_LOG); // KStream 객체 생성
        streamLog.filter((key,value) -> value.length() >5).to(STREAM_LOG_FILTER);

        KafkaStreams streams = new KafkaStreams(builder.build(), props); // KafkaStreams 인스턴스 생성.
        streams.start(); // 인스턴스 실행. stream_log 토픽의 데이터를 stream_log_copy 토픽으로 전달한다
    }
}
```

```sh
lkh@DESKTOP-1L2VEPP:~/kafka_2.12-2.5.0$ bin/kafka-console-producer.sh --bootstrap-server my-kafka:9092 \
> --topic stream_log
>weet
>hellohello
>streams

lkh@DESKTOP-1L2VEPP:~/kafka_2.12-2.5.0$ bin/kafka-console-consumer.sh --bootstrap-server my-kafka:9092 \
> --topic stream_log_filter --from-beginning
hellohello
streams
```