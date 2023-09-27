
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

# pl/sql declare procedure
[https://pgnt.tistory.com/13](https://pgnt.tistory.com/13)

이력 관리를 위해 개발자가 직접 프로시저 수정 하지 말라고 할때, 이미 만들어진 프로시저를 조금 수정해서 간단히 돌려보고 싶을때
CREATE OR REPLACE 를 DECLARE로 바꿔주고 돌려볼 수 있다.

``` sql
DECLARE 
	PROCEDURE temp_procedure
	IS
	-- 프로시저 내용 적어주고
BEGIN
	temp_procedure(); -- 실행
END

```



<!--stackedit_data:
eyJoaXN0b3J5IjpbMTc2ODgwNTE4MSwxNDc1MDEzOTIwLC0xND
MwMzI0NDQ4LC0xOTA5ODE0OTU3LDIwODE0NzMzNTldfQ==
-->