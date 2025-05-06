
# Chatty API PROJECT

## 프로젝트 개요

Chatty API는 Django를 기반으로 구축된 백엔드 API 프로젝트입니다. 이 프로젝트는 사용자 간의 익명 질문과 답변을 주고받을 수 있는 기능을 제공하며, 사용자 관리, 질문 관리, 팔로우/팔로잉, 차단 등의 기능을 포함합니다. 본 README에서는 프로젝트의 목적, 주요 기능, 설정 방법, 실행 방법, 그리고 API 경로에 대해 상세히 설명합니다.


~~상업 프로젝트였으나 망해서 공개합니다. 걱정마세요. 제가 대표였습니다.~~
- 개발 기간 및 운영 2022.10 ~ 2023.11
- AppStore : https://apps.apple.com/kr/app/chatty/id6448687261
- Figma : https://www.figma.com/design/uFgTRPtPbbPqyYiOmLD9YN/Chatty---Final?node-id=607-6191
- Notion : [Chatty Project](https://www.notion.so/Chatty-Project-646b95357aac43bb82995c5b6db2239f?pvs=21)
- 정부 지원금 : 16,000,000원 조달 성공
- 기술 스택 : React, Nginx, Django, RDS, EC2, AWS Route 53, Jenkins, SwiftUI
- PM, 백엔드, ios 앱 개발(프로토타입), DB, 서버 구축 담당
- React 개발자(현업), 웹디자이너(현업), ios 개발자와 협업
- Wireguard를 통한 VPC 접속 보안 관리, Jenkins를 통한 배포 설계 및 구축 완료
- 베타 서비스 10일 실적 - MAU 1.5k, 가입자 233명
- 프로젝트 실패 분석 보고서 : [3분기 분석](https://www.notion.so/3-823fb712fa94496bb9b6f75dcd38aa20?pvs=21)
- api : https://github.com/clyde0813/chatty-api
- ios : https://github.com/clyde0813/chatty-ios
  
## 프로젝트 목적

Chatty 프로젝트의 주요 목적은 사용자 간의 원활한 커뮤니케이션을 지원하는 것입니다. 사용자는 질문을 생성하고, 다른 사용자의 질문에 답변할 수 있으며, 관심 있는 사용자를 팔로우하고, 불쾌한 사용자를 차단할 수 있습니다.

## 주요 기능

1. **사용자 관리**: 회원가입, 로그인, 사용자 정보 조회/수정, 팔로우/팔로잉, 사용자 차단, 랭킹 시스템, 검색 기능  
2. **질문 관리**: 질문 생성, 특정 사용자 질문 조회, 질문 도착 알림, 질문 거절, 질문 신고, 내가 보낸 질문 조회, 질문 좋아요 기능, 답변 생성, 타임라인 조회  
3. **푸시 알림**: APNs를 통한 푸시 알림 기능  
4. **차단 기능**: 특정 사용자를 차단하여 해당 사용자의 활동이 사용자에게 보이지 않도록 함  
5. **토큰 기반 인증**: JWT 토큰을 사용한 안전한 인증 시스템 제공  

### 1. 사용자 API

사용자 관련 기능은 다음과 같습니다.

-   **회원가입 (POST /user/register/)**: 새로운 사용자 계정을 생성합니다.
-   **이메일 검증 (POST /user/email/verify)** : 이메일을 검증합니다.
-   **로그인 (POST /user/login/)**: 기존 사용자의 로그인을 처리합니다.
-   **사용자 정보 조회 (GET /user/profile/(username)/)**: 특정 사용자의 프로필 정보를 조회합니다.
    - `<username>`: 조회하려는 사용자의 고유한 사용자 이름입니다.
-   **사용자 정보 수정 (PUT /user/profile/)**: 사용자의 프로필 정보를 업데이트합니다.
-   **팔로워 리스트 조회 (GET /user/profile/(username)/followers)**: 특정 사용자의 팔로워 목록을 조회합니다.
    - `<username>`: 팔로워 목록을 조회하려는 사용자의 고유한 사용자 이름입니다.
-   **팔로잉 리스트 조회 (GET /user/profile/(username)/followings)**: 특정 사용자가 팔로잉하는 사용자 목록을 조회합니다.
    - `<username>`: 팔로잉 목록을 조회하려는 사용자의 고유한 사용자 이름입니다.
-   **팔로우 (POST /user/follow)**: 특정 사용자를 팔로우합니다.
-   **유저 차단 (POST /user/block)**: 특정 사용자를 차단합니다.
-   **랭킹 리스트 조회 (GET /user/ranking)**: 사용자 랭킹 목록을 조회합니다.
-   **랭킹 토글 (POST /user/ranking/toggle)**: 사용자 랭킹 상태를 변경합니다.
-   **FCM 토큰 등록 (POST /user/FCM/ios)**: 사용자의 FCM 토큰을 등록합니다.
-   **유저 검색 (GET /user/search)**: 사용자들을 검색합니다.
-   **토큰 획득 (POST /user/api/token/)**: JWT 토큰을 발급받습니다.
-   **토큰 새로고침 (POST /user/api/token/refresh/)**: 만료된 JWT 토큰을 갱신합니다.
-   **토큰 검증 (POST /user/api/token/verify/)**: JWT 토큰의 유효성을 검사합니다.

### 2. 질문 API

질문 및 답변 관련 기능은 다음과 같습니다.

-   **질문 생성 (POST /chatty/)**: 새로운 질문을 생성합니다.
-   **특정 유저 질문 조회 (GET /chatty/user/(username)/)**: 특정 사용자에게 온 질문들을 조회합니다.
    - `<username>`: 질문들을 조회하려는 사용자의 고유한 사용자 이름입니다.
-   **질문 도착 알림 (POST /chatty/arrived)**: 질문이 도착했음을 알립니다.
-   **질문 거절 (POST /chatty/refuse)**: 질문을 거절합니다.
-   **질문 신고 (POST /chatty/report)**: 질문을 신고합니다.
-   **내가 보낸 질문 (GET /chatty/sent)**: 사용자가 보낸 질문 목록을 조회합니다.
-   **질문 좋아요 (POST /chatty/like)**: 특정 질문에 좋아요를 표시합니다.
-   **답변 생성 (POST /chatty/answer)**: 특정 질문에 대한 답변을 생성합니다.
-   **타임라인 조회 (GET /chatty/timeline)**: 사용자의 타임라인을 조회합니다.
-   **주의사항**: 모든 질문(익명 포함)은 작성자와 작성자의 IP가 기록됩니다.
  
### 3. 차단 필터 (Filter/Block.py)

-   **차단 필터**: 이 파일에는 사용자가 차단한 사용자들과 차단당한 사용자를 필터링하는 로직이 구현되어 있습니다. 차단 필터는 다음과 같은 상황에서 작동합니다.
    -   **질문을 보여줄 때**: 사용자가 차단한 사용자의 질문이나, 사용자를 차단한 사용자의 질문은 목록에 표시되지 않습니다.
    -   **질문을 보낼 때**: 사용자가 차단한 사용자에게는 질문을 보낼 수 없으며, 사용자를 차단한 사용자에게 질문을 받을 수 없습니다.
    -   **유저 리스트를 보여줄 때**: 사용자가 차단한 사용자나, 사용자를 차단한 사용자는 유저 목록에 표시되지 않습니다.
    -   **팔로워/팔로잉 리스트를 보여줄 때**: 사용자가 차단한 사용자나, 사용자를 차단한 사용자는 팔로워/팔로잉 리스트에 표시되지 않습니다.
    -   **익명 질문의 경우**: A 사용자가 C 사용자를 차단했을 때, B 사용자의 익명 게시판에 C 사용자가 익명으로 작성한 질문을 A에게 보여줄지에 대한 고민이 있었습니다. 익명성 보장을 위해 사용자를 추적할 방법이 없어야 한다는 판단하에, 차단하더라도 익명 질문은 필터링하지 않는 정책을 적용하였고, 이를 백엔드 로직에도 개발 및 반영했습니다.

## 프로젝트 설정 방법

1.  **가상 환경 설정**: 프로젝트를 위한 가상 환경을 생성하고 활성화합니다.
```
bash
    python3 -m venv venv
    source venv/bin/activate
    
```
2.  **필수 패키지 설치**: `requirements.txt` 파일에 정의된 필수 패키지를 설치합니다.
```
bash
    pip install -r requirements.txt
    
```
3.  **데이터베이스 설정**: `config/settings/base.py` 파일에서 데이터베이스 설정을 구성합니다.

4. **환경변수 설정** : .env 파일을 생성후 환경변수를 작성합니다.
```
bash
    SECRET_KEY= # Django에서 사용되는 시크릿 키
    DATABASE_URL= # 데이터베이스 URL
    REDIS_HOST= # 레디스 호스트
    REDIS_PORT= # 레디스 포트
    DJANGO_ALLOWED_HOSTS= # 허용할 호스트
    
```
## 실행 방법

1.  **마이그레이션 실행**: 데이터베이스 스키마를 업데이트합니다.
```
bash
    python manage.py makemigrations
    python manage.py migrate
    
```
2.  **서버 실행**: 개발 서버를 실행합니다.
```
bash
    python manage.py runserver
    
```
## 추가 정보

-   프로젝트의 모든 API는 RESTful 원칙에 따라 설계되었습니다.
-   API 요청 및 응답은 JSON 형식으로 이루어집니다.
-   JWT (JSON Web Token) 기반의 인증 시스템을 사용합니다.

## 문의

이 프로젝트에 대한 문의 사항이나 개선 제안이 있으시면 언제든지 연락 주시기 바랍니다.
