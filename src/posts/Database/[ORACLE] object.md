
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

dblink를 synonym 으로 감싸서 사용하기도 한다. 예전에 유행하던 스타일이라고 한다. 탈오라클 프로젝트 하면서 처음봤다.. 이게 감싸 놓으니까 그냥 대충 봤을땐 이게 뭔지.. 어디서 온건지.. 알기가 참 까다롭다. 아무튼 이
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE1MjI3NTE5MTFdfQ==
-->