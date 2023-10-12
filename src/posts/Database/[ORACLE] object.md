
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
## 시퀀스 강제조정..
물론 이렇게 하면 안된다
```sql
DECLARE
v_seq NUMBER(10) := 0;
	BEGIN
		FOR i IN 1 .. 10 LOOP
		SELECT GS_SCM_BRAND_REQ_SEQ.nextval INTO v_seq FROM dual;
	END LOOP;
END;
```






<!--stackedit_data:
eyJoaXN0b3J5IjpbLTgxODg4NTI5MywtOTY3MTIxODEsMTQ3NT
AxMzkyMCwtMTQzMDMyNDQ0OCwtMTkwOTgxNDk1NywyMDgxNDcz
MzU5XX0=
-->