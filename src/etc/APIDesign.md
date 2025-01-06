---
lastUpdated: 2025/01/06 16:01:00
description: 누군가 당신에게 칠판에 RESTful API 설계를 해보라 한다면.. 이불킥
---

# RESTful API

## API란?
Application Programming Interface (API) : Application을 Programming 할 때 사용되는 인터페이스이다.  
(인터페이스는 간단히 말해서, 어려운 것은 감추고 보다 쉽게 상호작용할 수 있도록 해주는 것들을 의미한다.)
한마디로, API는 소프트웨어 간의 상호 작용을 가능하게 하는 규칙과 프로토콜의 집합이다.

## RESTful API란?
REST(Representational State Transfer)는 HTTP를 기반으로 클라이언트가 서버의 리소스에 접근하는 방식을 규정한 아키텍쳐이며, REST를 준수하는 API를 REST API라고 한다.

### REST API의 세 가지 요소

자원(URI), 행위(HTTP요청 메서드), 표현(페이로드)

### REST API의 설계 원칙

URI는 리소스를 표현해야 한다.
리소스에 대한 행위는 HTTP 요청 메서드로 표현한다.(URI에 표현하지 않는다.)
REST의 기본 원칙을 성실히 지킨 서비스 디자인을 Restful하다고 한다.

RESTful API의 설계 원칙을 준수하여 각 리소스에 대해 일관된 메소드를 사용하면 API를 이해하기 쉽고 유지보수하기 편해진다.

1. URI에 동사가 포함이 되어선 안된다.
2. URI에서 단어의 구분이 필요한 경우 -(하이픈)을 이용한다.
3. 자원은 기본적으로 복수형으로 표현한다.
4. 단 하나의 자원을 명시적으로 표현을 하기 위해서는 /users/id와 같이 식별 값을 추가로 사용한다.
5. 자원 간 연관 관계가 있을 경우 이를 URI에 표현한다.

## 1. API 설계

| HTTP Method | Endpoint        | 설명                          | 인증 필요 여부  | 요청 예시                      | 상태 코드 (HTTP Status)                          |
|-------------|-----------------|-------------------------------|----------------|--------------------------------|--------------------------------------------------|
| **POST**    | `/auth/login`   | 로그인 (토큰 발급)            | ❌              | 로그인 요청: `email`, `password` | 200 OK, 400 Bad Request, 401 Unauthorized         |
| **POST**    | `/auth/signup`  | 회원 가입                    | ❌              | 회원가입 요청: `name`, `email`, `password` | 201 Created, 400 Bad Request                      |
| **GET**     | `/users`        | 모든 회원 조회                | ✅              | 토큰 포함 헤더: `Authorization: Bearer <token>` | 200 OK, 401 Unauthorized, 403 Forbidden, 500 Internal Server Error |
| **GET**     | `/users/{id}`   | 특정 회원 조회                | ✅              | 토큰 포함 헤더: `Authorization: Bearer <token>` | 200 OK, 401 Unauthorized, 403 Forbidden, 404 Not Found |
| **PUT**     | `/users/{id}`   | 회원 정보 수정                | ✅              | 토큰 포함 헤더 + 데이터: `name`, `email`, `password` | 200 OK, 400 Bad Request, 401 Unauthorized, 404 Not Found |
| **DELETE**  | `/users/{id}`   | 회원 삭제                     | ✅              | 토큰 포함 헤더: `Authorization: Bearer <token>` | 204 No Content, 401 Unauthorized, 403 Forbidden, 404 Not Found |

---

## 2. 상태 코드 상세 설명

### **2xx (성공)**

- **200 OK**: 요청이 성공적으로 처리되었습니다.
  - 모든 GET, PUT, DELETE 요청에서 정상적으로 처리가 된 경우 사용됩니다.
- **201 Created**: 리소스가 성공적으로 생성되었습니다.
  - 회원가입 요청 후 새로운 회원이 등록된 경우 사용됩니다.
- **204 No Content**: 요청은 성공했지만, 반환할 데이터가 없습니다.
  - 회원 삭제 시, 삭제가 완료되었지만 응답 본문은 없을 때 사용됩니다.

### **4xx (클라이언트 오류)**

- **400 Bad Request**: 잘못된 요청입니다.
  - 예: 필수 파라미터 누락, 잘못된 데이터 형식 등.
- **401 Unauthorized**: 인증이 없거나 인증이 잘못된 경우입니다.
  - 예: 토큰 누락, 유효하지 않은 토큰.
- **403 Forbidden**: 인증은 되었지만, 해당 리소스에 대한 접근 권한이 없는 경우입니다.
  - 예: 관리자 권한이 필요한 리소스 접근 시.
- **404 Not Found**: 요청한 리소스가 존재하지 않는 경우입니다.
  - 예: 존재하지 않는 ID로 회원 조회 시.
- **409 Conflict**: 요청이 리소스 상태와 충돌할 때 사용됩니다.
  - 예: 이미 존재하는 이메일로 회원가입 시.

### **5xx (서버 오류)**

- **500 Internal Server Error**: 서버 측에서 예기치 못한 오류가 발생한 경우입니다.
- **502 Bad Gateway**, **503 Service Unavailable**: 서버가 다운되었거나 네트워크 장애 등으로 API 호출이 실패한 경우.

---

## 3. 토큰 기반 인증 처리

### **POST `/auth/login` (로그인 - 토큰 발급)**

- **Request**: 클라이언트가 이메일과 비밀번호를 보내면 서버는 해당 사용자를 인증하고 JWT 토큰을 발급합니다.
- **Response**:
  ```json
  {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "token_type": "Bearer",
    "expires_in": 3600
  }
  ```
  - **200 OK**: 토큰 발급 성공
  - **400 Bad Request**: 잘못된 요청 (예: 이메일 또는 비밀번호 누락)
  - **401 Unauthorized**: 인증 실패 (잘못된 자격 증명)

### **GET `/users` (회원 조회)**

- **Request**: 사용자는 헤더에 JWT 토큰을 포함하여 요청합니다.
  ```http
  Authorization: Bearer <valid-jwt-token>
  ```
- **Response**:
  ```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@example.com"
    }
  ]
  ```
  - **200 OK**: 요청한 모든 회원 정보 반환
  - **401 Unauthorized**: 토큰 누락 또는 유효하지 않은 토큰
  - **403 Forbidden**: 해당 리소스에 접근 권한이 없는 경우
  - **500 Internal Server Error**: 서버 내부 오류

### **PUT `/users/{id}` (회원 수정)**

- **Request**: `Authorization` 헤더에 유효한 토큰을 포함하고 수정할 데이터를 보냅니다.
  ```json
  {
    "name": "John Doe Updated",
    "email": "john_updated@example.com",
    "password": "new_secure_password"
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "name": "John Doe Updated",
    "email": "john_updated@example.com"
  }
  ```
  - **200 OK**: 회원 정보 수정 성공
  - **400 Bad Request**: 잘못된 요청 데이터
  - **401 Unauthorized**: 유효하지 않은 토큰 또는 인증되지 않은 사용자
  - **404 Not Found**: 존재하지 않는 회원 ID

### **DELETE `/users/{id}` (회원 삭제)**

- **Request**: `Authorization` 헤더에 유효한 토큰을 포함하여 요청합니다.
- **Response**:
  - **204 No Content**: 회원 삭제 성공 (응답 본문 없음)
  - **401 Unauthorized**: 유효하지 않은 토큰
  - **403 Forbidden**: 삭제 권한이 없는 사용자
  - **404 Not Found**: 해당 ID의 회원을 찾을 수 없음

---
