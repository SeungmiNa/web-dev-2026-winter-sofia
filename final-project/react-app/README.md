# React App — Module 7 Assignment

기술 스택:

- **React** (functional components)
- **Tailwind CSS**
- **State management**: Context API (`AppContext`) + local component state (e.g. Contact form)
- **Client-side routing**: React Router v6

## 실행 방법

```bash
cd react-app
npm install
npm run dev
```

브라우저에서 http://localhost:5173 으로 접속합니다.

## 프로젝트 구조

```
react-app/
├── public/
│   └── images/          # 정적 이미지 (interior.jpg 등)
├── src/
│   ├── context/
│   │   └── AppContext.jsx   # 전역 상태 (theme, visitorCount)
│   ├── components/
│   │   └── Layout.jsx       # 공통 레이아웃 + 네비게이션
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 구현 내용

- **Context**: `AppContext`에서 `theme`, `visitorCount` 관리. `useApp()` 훅으로 접근.
- **로컬 state**: Contact 페이지의 폼 입력은 `useState`로 관리.
- **라우팅**: `/`, `/about`, `/contact` — React Router `Routes`/`Route` 사용.
- **Tailwind**: 레이아웃·타이포·다크 모드 등 스타일링.

## Extra credit (Next.js / SSR)

서버 사이드 렌더링이나 hydration을 원하면 이 앱을 Next.js로 마이그레이션할 수 있습니다. 필요하면 별도로 Next.js 버전 구조를 만들어 드릴 수 있습니다.
