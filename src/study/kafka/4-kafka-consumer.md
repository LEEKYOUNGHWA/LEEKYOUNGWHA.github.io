---
lastUpdated: 2024/10/08 14:43:00
image: https://kafka.apache.org/logos/kafka_logo--simple.png
tags: ["kafka"]
---

# 컨슈머 API

## 카프카 컨슈머 프로젝트 생성

클라이언트와 동일하게 프로젝트 생성

```java
public class SimpleConsumer {
    private final static Logger logger = LoggerFactory.getLogger(SimpleConsumer.class);
    private final static String TOPIC_NAME = "test";
    private final static String BOOTSTRAP_SERVICES = "my-kafka:9092";
    private final static String GROUP_ID = "test-group";

    public static void main(String[] args) {
        Properties configs = new Properties();
        configs.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, BOOTSTRAP_SERVICES);
        configs.put(ConsumerConfig.GROUP_ID_CONFIG,GROUP_ID);
        configs.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class.getName());
        configs.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG,StringDeserializer.class.getName());

        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(configs);
        consumer.subscribe(Arrays.asList(TOPIC_NAME));

        while (true) {
            ConsumerRecords<String, String> records = consumer.poll(Duration.ofSeconds(1));
            for(ConsumerRecord<String, String> record : records) {
                logger.info("{}",record);
            }
        }
    }
}
```

test에 데이터를 넣어주자

```sh
bin/kafka-console-producer.sh --bootstrap-server my-kafka:9092 --topic test
testMessage
```

출력확인
![16](~@image/2024/kafka/16.png)

