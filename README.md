# SLOW FORM 카페 홈페이지

SLOW FORM은 "일상의 속도를 낮추는 커피"를 주제로 만든 모던 카페 홈페이지입니다.
따뜻한 색감과 여백을 활용해 브랜드 이야기, 메뉴, 매장 정보를 소개합니다.

## 주요 기능

- 데스크톱과 모바일 화면에 대응하는 반응형 레이아웃
- 브랜드 소개 및 매장 운영 시간·주소 안내
- 커피, 논커피 음료, 디저트를 소개하는 메뉴 카드
- 모바일 내비게이션 메뉴
- 네이버 지도 검색 링크를 통한 위치 안내

## 기술 스택

- React 19
- TypeScript
- Vite
- CSS

## 프로젝트 구조

```text
src/
  App.tsx       페이지 콘텐츠와 메뉴 데이터
  App.css       홈페이지 레이아웃과 반응형 스타일
  index.css     전역 스타일과 기본 디자인 설정
  main.tsx      React 앱 진입점
index.html      문서 메타데이터와 앱 루트
```

## 시작하기

Node.js와 npm을 설치한 다음 프로젝트 폴더에서 실행합니다.

```bash
npm install
npm run dev
```

## 빌드 및 미리보기

```bash
npm run build
npm run preview
```

빌드 결과물은 `dist/` 디렉터리에 생성됩니다.
