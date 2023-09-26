# [ORACLE] 실행계획 보기

## PLAN 보는법

1.  위에서 아래로 내려가면서 제일 먼저 읽을 위치 찾기
2.  내려가는 과정에서 같은 들여쓰기가 있으면, 무조건 위에서 아래 순으로 읽기
3.  같은 레벨에 들여쓰기된 하위 스텝이 존재하면, 가장 안쪽으로 들여쓰기 된 스텝을 시작으로 상위 스텝으로 읽기

## PLAN 용어

PLAN에 보이는 용어에 대한 의미 입니다.

-   **Cost**  
    - 쿼리를 수행함에 있어 사용된 자원이나, 작업의 단위를 나타냅니다. 적을 수록 쿼리가 더 효율적이겠죠  
    - 단, 어쩔수 없이 Full Scan을 해야 하는 쿼리는 의미가 없을 수도 있습니다.
-   **Cardinality**  
    - 행 집합에서 행의 수를 표시 합니다. 행 집합은 기본 테이블, 뷰, 조인이나, GROUP BY의 결과 입니다.  
    - 행 집합을 의미하니 적게 나타날수록 SQL이 빠를 수 있습니다.

## dbeaver 실행계획 보기
![enter image description here](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/cePSzY/btqBFvRIEwL/EtNlFachAd2fuhKV925NJ0/img.png)

[https://sidorl.tistory.com/31](https://sidorl.tistory.com/31)

## EXPLAIN plan  FOR  
```sql
EXPLAIN plan FOR 
SELECT  ename,  sal,  job  
FROM  emp  
WHERE  sal  =  3000;  
  
SELECT  *  
FROM  TABLE(dbms_xplan.display);
```

## DBMS_XPLAN.DISPLAY 출력 이해

![](https://t1.daumcdn.net/cfile/tistory/99C51F3B5C2D640E36)

- Id : 실행계획에서의 구분자
- Operation : 각 단계에서의 어떤 작업이 일어났는지 표시
- Name : 테이블명이나 index 명을 표시함
- Rows : 해당 쿼리 계획 단계에서 나올 것으로 예상되는 행의 수
- Byte : 실행 계획의 각 단계가 반환할 것으로 예상 되는 데이터의 크기를 바이트로 나타낸 수. 이 수는 행의 수와 행의 예상 길이에 따라 결정됨
- Cost : CBO가 쿼리 계획의 각 단계에 할당한 비용. CBO는 동일한 쿼리에 대해 다양한 실행 경로/계획을 생성하며 모든 쿼리에 대해 비용을 할당함
위의 실행 계획에선 전체 비용이 13인것을 알수 있음
- Time: 각 단계별 수행 시간

## 실행계획 초기화

> db 이관 작업후 특정 테이블 포함 쿼리 수행 속도가 느려 원인을 파악해 보니 pk가 누락이 되었었다. (어떻게 그럴수가 있지.. pk 누락된지 모르고 튜닝 요청을 추가로 계속 올렸었따 =3= ) pk 생성후에도 옵티마이저가 계속 이전 실행계획으로 수행한다면 dba에게 실행 계획 초기화를 요청하자.

## SCAN 의 종류와 속도

실행 계획을 분석하기 위해서는 SCAN이라는 용어를 알고 있어야 합니다. SCAN이란, 말 그대로 데이터를 읽는 작업을 말하는데 SCAN을 수행하는 방식을 일컬어 접근 경로라고 합니다. 특히 아래 3가지 SCAN 방법을 아시는 것이 중요합니다.

- **FULL TABLE SCAN :**  테이블의 전체 데이터를 읽어 조건에 맞는 데이터를 추출하는 방식 입니다.

- **ROWID SCAN :**  ROWID를 기준으로 데이터를 추출하며 단일 행에 접근하는 방식 중에서 가장 빠릅니다.

**INDEX SCAN :**  말 그대로 인덱스를 활용하여 원하는 데이터를 추출하는 방식입니다.

이 두 가지 SCAN 방법 중 개발자가 손쉽게 유도할 수 있는 SCAN의 방법은 FULL TABLE SCAN과 INDEX SCAN입니다. 이 중에서 테이블에 데이터가 많지 않아 INDEX를 타야 하는 시간 소요가 불필요하다고 느껴지거나 테이블에서 추출해야 하는 데이터 양이 엄청 많다면 FULL TABLE SCAN을 하는 것이 유리할 수 있고 반대로 많은 데이터가 있는 테이블에서 내가 원하는 데이터를 추출해야 하는 상황이라면 INDEX SCAN을 하는것이 좋습니다.


<!--stackedit_data:
eyJoaXN0b3J5IjpbNjM2NzI2NzYzLDEyODIxNTY0MDcsLTQ1Mz
M1Mzg2OF19
-->