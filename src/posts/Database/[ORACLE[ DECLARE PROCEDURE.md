
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
eyJoaXN0b3J5IjpbMTkyNDk5MzQxNl19
-->