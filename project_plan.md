# 헤이리 오베르원 (Heyri Auversone) 랜딩페이지 재구축

## 1. Project Description
파주 서부권 프리미엄 장기일반민간임대주택 "헤이리 오베르원" 홍보 랜딩페이지. 관심고객 등록과 단지 정보를 제공하는 단일 페이지 웹사이트.

## 2. Page Structure
- `/` - Home (단일 랜딩페이지)
  - Hero Section: 메인 비주얼
  - 사업개요 (Overview)
  - 브랜드 (Brand)
  - 입지환경 (Environment)
  - 프리미엄 (Premium)
  - 단지안내 / ARCHITECTURE PLAN (Complex)
  - 커뮤니티 / CLUB AUVERSONE (Community)
  - 세대안내 / UNIT PLAN (Floor Plans)
  - 관심고객 등록 (Registration Form)
  - 오시는길 / CONTACT (Location)
  - Footer

## 3. Core Features
- [ ] 팝업 오버레이 (오늘 하루 보지않기 기능 포함)
- [ ] 고정 헤더 네비게이션 (스크롤 시 스타일 변화)
- [ ] 앵커 스크롤 내비게이션
- [ ] 관심고객 등록 폼 (이름, 연락처, 방문일자, 문의내용)
- [ ] 평면도 갤러리 (hover zoom 효과)
- [ ] 커뮤니티 시설 카드
- [ ] 오시는 길 / 지도 링크
- [ ] 모바일 하단 액션 바
- [ ] 반응형 디자인

## 4. Data Model Design
폼 데이터는 Readdy Form을 통해 수집. 별도 데이터베이스 테이블 불필요.

## 5. Backend / Third-party Integration Plan
- Readdy Form: 관심고객 등록 폼 데이터 수집
- Google Map embed: 오시는길 지도 표시
- Naver/Kakao Map 링크: 외부 지도 서비스 연결

## 6. Development Phase Plan

### Phase 1: 랜딩페이지 UI 구축
- Goal: 원본 사이트의 모든 섹션을 React + Tailwind로 재구축
- Deliverable: 완성된 단일 페이지 랜딩페이지 (팝업, 헤더, 히어로, 8개 섹션, 푸터, 모바일 바)

### Phase 2: 폼 연동 및 인터랙션 완성
- Goal: 관심고객 등록 폼을 Readdy Form과 연동, 모든 인터랙션 완성
- Deliverable: 동작하는 폼 제출, 스크롤 애니메이션, 팝업 쿠키/로컬스토리지 처리