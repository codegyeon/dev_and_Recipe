# TodoList_TypeScript

## 기존에 CRA 기반 REACT로 완성된 TODOLIST의 프론트 코드를 
## VITE 기반의 TypeScript코드로 리팩토링 하는 레포 입니다.

## 1차완료 7/12

- 모든 파일 tsx/ts로 전환 및 allowJS off 시에도 에러 없이 실행가능
- 필수 타이핑 및 인터페이스와 제네릭 선언
- 기존 컴포넌트 구조 리팩토링
- 필수 예외 처리 및 타이핑

## 구현기능

- **TodoList CRUD**
- **TodoList 인피니트스크롤/페이지네이션**
- **JWT기반 액세스토큰 리프레시토큰 로그인**
- **패스포트기반 구글 / 네이버 / 카카오 소셜 회원가입/로그인**
- **자신의 아이디를 기반으로한 TODO만 불러오기**

## 사용기술

### FRONT

VITE TYPESCRIPT REACT REDUX IMMER REDUX TOOLKIT REACT QUERY AXIOS AXIOS INTERCEPTOR STYLED-COMPONENT

### BACK

NODE EXPRESS NODEMON MONGOOSE MONGODB PASSPORT DOTENV MORGAN CORS JSONWEBTOKEN BCRYPT


### tsconfig.json
```tsx
{
  "compilerOptions": {
    "target": "es2020",
    "noEmit": true,
    "jsx": "react-jsx",
    "module": "es2020",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "moduleResolution": "node",
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```
## 프로젝트 구조

- **api**
    - 리액트쿼리 API 관련 코드

- **axios**
    - Axios 미들웨어

- **components**: 프로젝트의 주요 컴포넌트들
    - **AddForm**: Todo 작성 컴포넌트
    - **CustomButton**: 전체 프로젝트에서 공통으로 사용되는 커스텀 버튼 컴포넌트
    - **CustomModal**: Todo 상세 정보를 보여주는 모달 컴포넌트
    - **Loading**: 로딩 애니메이션 컴포넌트
    - **Pagination**: Todo 리스트의 페이지네이션 컴포넌트
    - **Profile**: 메인 페이지의 프로필 컴포넌트
    - **ReadTodo**: Todo의 상세 페이지 컴포넌트
    - **TodoCard**: 각각의 Todo를 표시하는 카드 컴포넌트
    - **Todos**: 메인 화면의 Todo 리스트 컴포넌트
    - **TodosInfinite**: 무한 스크롤이 적용된 Todo 리스트 컴포넌트
    - **TodosList**: 조건에 따라 TodoCard를 렌더링하는 컴포넌트
    - **TodosPagination**: 페이지네이션이 적용된 Todo 리스트 컴포넌트
    - **UpdateTodo**: Todo의 상세 페이지에서 Todo를 수정하는 컴포넌트

- **hooks**: 사용자 정의 훅
    - **useInput**
    - **useMutate**

- **layout**: 기본 레이아웃 컴포넌트
    - **Header**: 헤더 컴포넌트
    - **Main**: 메인 컴포넌트

- **pages**: 각 페이지 컴포넌트
    - **Login**: 로그인 페이지
    - **SignUp**: 회원가입 페이지

- **redux**: Redux 관련 코드
    - **config**: 리덕스 스토어 설정
    - **reducers**: 리덕스 리듀서

- **type**: TypeScript 타입 정의
