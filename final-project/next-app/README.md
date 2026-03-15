# Next.js App — Module 7 (Extra Credit: SSR / Hydration)

같은 콘텐츠를 **Next.js App Router**로 구현한 버전입니다.  
서버 사이드 렌더링(SSR)과 클라이언트 hydration이 적용됩니다.

## 기술 스택

- **React** (functional components)
- **Tailwind CSS**
- **State**: Context API (`AppContext`) + 로컬 state (Contact 폼)
- **라우팅**: Next.js 파일 기반 라우팅 (App Router)
- **SSR / Hydration**: 홈·About·Contact 페이지는 서버에서 HTML 생성 후 클라이언트에서 hydrate

## 실행 방법

```bash
cd next-app
npm install
npm run dev
```

브라우저에서 http://localhost:3000 으로 접속합니다.

## 프로젝트 구조

```
next-app/
├── public/
│   └── images/           # 정적 이미지 (interior.jpg)
├── src/
│   ├── app/
│   │   ├── layout.jsx    # 루트 레이아웃 (metadata, Providers, AppLayout)
│   │   ├── page.jsx      # Home (서버 컴포넌트 + VisitorCounter 클라이언트)
│   │   ├── about/page.jsx
│   │   ├── contact/page.jsx
│   │   ├── providers.jsx # AppProvider 래퍼 (client)
│   │   └── globals.css
│   ├── components/
│   │   ├── AppLayout.jsx # 헤더/네비/푸터 (client, Link, usePathname)
│   │   └── VisitorCounter.jsx  # Home 방문 시 카운트 (client, useEffect)
│   └── context/
│       └── AppContext.jsx # theme, visitorCount (client)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── jsconfig.json         # @/* alias
```

## SSR / Hydration 요약

- **서버 컴포넌트**: `layout.jsx`, `page.jsx`(Home)의 정적 콘텐츠는 서버에서 렌더링되어 HTML로 전달됩니다.
- **클라이언트 컴포넌트** (`'use client'`): `Providers`, `AppLayout`, `VisitorCounter`, `About`, `Contact`는 브라우저에서 hydrate되어 인터랙션(테마 토글, 폼, 카운트)이 동작합니다.
- **이미지**: `next/image`로 Home 이미지 최적화 및 우선 로딩(`priority`).

## React 앱(react-app)과 비교

| 항목       | react-app (Vite)   | next-app (Next.js)   |
|------------|-------------------|----------------------|
| 라우팅     | React Router      | 파일 기반 (App Router) |
| 렌더링     | 클라이언트만 (CSR) | SSR + Hydration      |
| 링크       | NavLink           | next/link Link       |
| 이미지     | `<img>`           | next/image           |
