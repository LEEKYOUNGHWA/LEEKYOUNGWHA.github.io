# [ORACLE] 실행계획 보기

## PLAN 보는법

1.  위에서 아래로 내려가면서 제일 먼저 읽을 위치 찾기
2.  내려가는 과정에서 같은 들여쓰기가 있으면, 무조건 위에서 아래 순으로 읽기
3.  같은 레벨에 들여쓰기된 하위 스텝이 존재하면, 가장 안쪽으로 들여쓰기 된 스텝을 시작으로 상위 스텝으로 읽기

## PLAN 용어

PLAN에 보이는 용어에 대한 의미 입니다.

-   **Cost**  
    -. 쿼리를 수행함에 있어 사용된 자원이나, 작업의 단위를 나타냅니다. 적을 수록 쿼리가 더 효율적이겠죠  
    -. 단, 어쩔수 없이 Full Scan을 해야 하는 쿼리는 의미가 없을 수도 있습니다.
-   **Cardinality**  
    -. 행 집합에서 행의 수를 표시 합니다. 행 집합은 기본 테이블, 뷰, 조인이나, GROUP BY의 결과 입니다.  
    -. 행 집합을 의미하니 적게 나타날수록 SQL이 빠를 수 있습니다.

## dbeaver 실행계획 보기
![enter image description here](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https://blog.kakaocdn.net/dn/cePSzY/btqBFvRIEwL/EtNlFachAd2fuhKV925NJ0/img.png)
<!--stackedit_data:
eyJoaXN0b3J5IjpbNzExODk3NzhdfQ==
-->