
# [ORACLE] object

```sql 
-- object 조회
select * from ALL_OBJECTS;
```

```sql 
-- table 조회
select * from ALL_TABLES;
```

```sql 
-- index 조회
select * from ALL_IND_COLUMNS;
```

```sql 
-- column 조회
select * from ALL_TAB_COLUMNS;
```

```sql 
-- comment 조회
select * from ALL_COL_COMMENTS;
```

```sql 
-- dblink 조회
select * from ALL_DB_LINKS;
```

```sql 
-- synonym 조회
SELECT * FROM ALL_SYNONYMS;
```

# synonym DBlink

[http://www.gurubee.net/lecture/1560](http://www.gurubee.net/lecture/1560)
[https://myjamong.tistory.com/179](https://myjamong.tistory.com/179)

dblink를 synonym 으로 감싸서 사용하기도 한다. 예전에 유행하던 스타일이라고 한다.. 아무튼 요즘은 걷어내는 추세!

# Sequence
## 시퀀스 조정..

[https://hye0-log.tistory.com/5](https://hye0-log.tistory.com/5)
```sql
-- 1. 시퀀스 차이가 얼마나 나는지 차이값을 확인한다.  
SELECT [기준 시퀀스 명].NEXTVAL - [변경 대상 시퀀스].NEXTVAL FROM DUAL; 
-- 2. 시퀀스 증가값 일시 변경  
ALTER SEQUENCE [변경 대상 시퀀스] INCREMENT BY  289462; 
-- 3. 시퀀스 값 현행화  
SELECT [변경 대상 시퀀스].NEXTVAL FROM DUAL; 
-- 4. 다시 1씩 증가될 수 있도록 변경  
ALTER SEQUENCE [변경 대상 시퀀스] INCREMENT BY  1;
```
블로그 검색해보니 대부분 증분값 변경해서 조절하는거 같다.
하지만 일개 개발자에게는 권한이 없음
```sql
DECLARE
v_seq NUMBER(10) := 0;
	BEGIN
		FOR i IN 1 .. 10 LOOP
		SELECT GS_SCM_BRAND_REQ_SEQ.nextval INTO v_seq FROM dual;
	END LOOP;
END;
```
물론 이렇게 하면 안된다 권한 없을때 야매로 몰래 하기 좋음





<!--stackedit_data:
eyJoaXN0b3J5IjpbLTQ2NjYwMzI3MSwtOTY3MTIxODEsMTQ3NT
AxMzkyMCwtMTQzMDMyNDQ0OCwtMTkwOTgxNDk1NywyMDgxNDcz
MzU5XX0=
-->