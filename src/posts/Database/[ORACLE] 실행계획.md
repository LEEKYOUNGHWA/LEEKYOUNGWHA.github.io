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
    -. 행 집합에서 행의 수를 표시 합니다. 행 집합은 기본 테이블, 뷰, 조인이나, GROUP BY의 결과 입니다.  
    -. 행 집합을 의미하니 적게 나타날수록 SQL이 빠를 수 있습니다.

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

Id : 실행계획에서의 구분자
Operation : 각 단계에서의 어떤 작업이 일어났는지 표시
Name : 테이블명이나 index 명을 표시함
Rows : 해당 쿼리 계획 단계에서 나올 것으로 예상되는 행의 수
Byte : 실행 계획의 각 단계가 반환할 것으로 예상 되는 데이터의 크기를 바이트로 나타낸 수. 이 수는 행의 수와 행의 예상 길이에 따라 결정됨
Cost : CBO가 쿼리 계획의 각 단계에 할당한 비용. CBO는 동일한 쿼리에 대해 다양한 실행 경로/계획을 생성하며 모든 쿼리에 대해 비용을 할당함
위의 실행 계획에선 전체 비용이 13인것을 알수 있음
Time: 각 단계별 수행 시간

<!--stackedit_data:
eyJoaXN0b3J5IjpbNDgyNDQ4MDM1LC00NTMzNTM4NjhdfQ==
-->