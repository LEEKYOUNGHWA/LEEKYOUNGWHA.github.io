

* **SQLCODE** : 오류코드 반환  
**0** : 정상  
**100** : no data found 오류  
**1** : (기본값)사용자 정의 예외의 경우  
**음수**  : 오류 코드  
  
* **SQLERRM** : SQLCODE에 해당하는 오류 메시지 반환  
  
_-- Create Procedure_  
CREATE OR REPLACE PROCEDURE P_ERROR  
IS  
I_VAL NUMBER(5,2);  
BEGIN  
-- DBMS_OUTPUT.PUT_LINE( TO_CHAR(SQLCODE) ||' : ' ||SQLERRM(SQLCODE));  
--> 0 : ORA-0000: normal, successful completion  
-- DBMS_OUTPUT.PUT_LINE( SQLERRM(-6508));  
--> ORA-06508: PL/SQL: could not find program unit being called.  
-- ORA-01476: divisor is equal to zero,  제수가 0 입니다  
-- ORA-04098: trigger '.' is invalid and failed re-validation  
-- ORA-04042: procedure, function, package, or package body does not exist  
-- ORA-01012: not logged on  
SELECT 10 / 'ABC'  
INTO I_VAL  
FROM DUAL;  
  
EXCEPTION  
WHEN OTHERS THEN  
_DBMS_OUTPUT.PUT_LINE_('Error Code: ' || TO_CHAR(**SQLCODE**));  
_DBMS_OUTPUT.PUT_LINE_('Error Message : ' || **SQLERRM**);  
END;  
/  
  
_-- Execute_  
**EXEC**  P_ERROR  

![](https://mblogthumb-phinf.pstatic.net/MjAxODEwMDFfMjM2/MDAxNTM4MzYxNTc2MDEw.UuYuNCXLzIQKFaPBTATCImrYCDEba78KGyJ10obWSJ0g.-q3pSt6R8Hfgyxmwnr_le6oTsDi8lgEx7leyF7eUzekg.PNG.giriyo/image.png?type=w800)

  
--  100 : no data found 오류  
CREATE OR REPLACE PROCEDURE P_ERROR  
IS  
I_EMPNO NUMBER(10);  
BEGIN  
  
WITH EMP AS  
(SELECT 7369 EMPNO FROM DUAL UNION ALL  
SELECT 7499 EMPNO FROM DUAL UNION ALL  
SELECT 7521 EMPNO FROM DUAL  
)  
SELECT *  
INTO I_EMPNO  
FROM EMP  
WHERE EMPNO =7533;  
  
EXCEPTION  
WHEN OTHERS THEN  
_DBMS_OUTPUT.PUT_LINE_('Error Code: ' || TO_CHAR(**SQLCODE**));  
_DBMS_OUTPUT.PUT_LINE_('Error Message : ' || **SQLERRM**);  
END;  
/  

![](https://mblogthumb-phinf.pstatic.net/MjAxODEwMDFfMjEg/MDAxNTM4MzkzNzQ3MzA3.AIebTdSpww7kfuZ1l8LxbhyaQIfxtiEOCWDyFiovjJ8g._iFaEvPwtU_5oT7hRQblJ4i5-Ty7vLc3DwRo69Ck1ogg.PNG.giriyo/image.png?type=w800)

  
--  1 : (기본값)사용자 정의 예외의 경우  
CREATE OR REPLACE PROCEDURE P_ERROR  
IS  
I_CNT NUMBER(10);  
**USER_EXCEPTION**  EXCEPTION;  
  
BEGIN  
  
WITH EMP AS  
(SELECT 7369 EMPNO FROM DUAL UNION ALL  
SELECT 7499 EMPNO FROM DUAL UNION ALL  
SELECT 7521 EMPNO FROM DUAL  
)  
SELECT COUNT(*)  
INTO I_CNT  
FROM EMP  
WHERE EMPNO =7533;  
  
IF I_CNT = 0 THEN  
**RAISE** **USER_EXCEPTION**;  
END IF;  
  
EXCEPTION  
WHEN **USER_EXCEPTION** THEN  
_DBMS_OUTPUT.PUT_LINE_('Error Code: ' || TO_CHAR(**SQLCODE**));  
_DBMS_OUTPUT.PUT_LINE_('Error Message : ' || **SQLERRM**);  
END;  
/  

![](https://mblogthumb-phinf.pstatic.net/MjAxODEwMDFfMTM0/MDAxNTM4Mzk0MTQ1MjYx.ASrOG_z1q4rDJZICu_ajjXsnlBNqSVf92Ltiz3_q1EYg.1q1uiC2hmUkxWDQ9Ljf3lbindoXgm4r-Ng7Ti58uwyIg.PNG.giriyo/image.png?type=w800)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMTg5MzUwODM3MV19
-->