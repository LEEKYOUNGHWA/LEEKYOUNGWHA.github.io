
# [ORACLE] Error 모음

## ORA-06550: 줄 1, 열7:PLS-00905: STORE_OWN.SP_SUP_PRD_LIMIT 오브젝트가 부당합니다
프로시저를 실행하려고 할때

1. 프로시저가 없는 경우나
2. 프로시저가 있는데 권한이 없는경우
3. 프로시저가 컴파일이 제대로 안됬을 경우
4. 해당 프로시저가 없는경우

발생. 해결방법은 아주 간단하다

1. 프로시저 컴파일이 제대로 되었는지 확인
2. 프로시저 명에 오타가 없는지 확인
3. 프로시저가 없을경우 생성
4. 문자열 오타를 확인
5. 오라클쪽 계정권한을 확인

아니면 Procedure를 만들어 주면된다.
만약 Procedure 생성자와 실행자가 다른 경우 grant, synonym 부여해줍니다.

- 프로시저 생성 후 실행시 해당 GRANT / SYNONYM
```
GRANT EXECUTE ON " ADMIN ". " BTOS002_4 " TO IBUS05;
CREATE SYNONYM "ADMIN"."IBUS05" FOR "ADMIN"."BTOS002_4";
CREATE PUBLIC SYNONYM "BTOS002_4" FOR "ADMIN". "BTOS002_4";
```
프로시저 컴파일 단축키 - F9 (Toad for Oracle) 아니면 그냥 프로시저 우클릭해서 컴파일
프로시저 저장 - F5 (Toad for Oracle)

위의 두가지만 확인 해보시면 왠만해선 해결이 가능.

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNzIxNzQzMDldfQ==
-->