# 김태민 - 개발자 포트폴리오

> 개발, 강의, 사업 개발을 아우르는 다재다능한 기술 리더의 포트폴리오 사이트

## 🌟 프로젝트 소개

이 프로젝트는 김태민님의 개인 포트폴리오 웹사이트입니다. VanillaJS로 제작된 모던하고 반응형 디자인의 정적 웹사이트로, GitHub Pages를 통해 호스팅됩니다.

### 🎯 주요 특징

- **모던 디자인**: 최신 웹 디자인 트렌드를 반영한 깔끔하고 전문적인 UI
- **완전 반응형**: 모바일, 태블릿, 데스크톱 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션**: 스크롤 기반 애니메이션과 인터랙티브 요소들
- **성능 최적화**: 빠른 로딩 속도와 효율적인 코드 구조
- **접근성**: 웹 접근성 표준을 준수한 사용자 친화적 인터페이스

## 🚀 기술 스택

- **Frontend**: HTML5, CSS3, VanillaJS
- **디자인**: CSS Grid, Flexbox, CSS Variables
- **애니메이션**: CSS Transitions, Keyframes, Intersection Observer API
- **폰트**: Google Fonts (Noto Sans KR, Inter)
- **아이콘**: Font Awesome 6
- **호스팅**: GitHub Pages

## 📱 섹션 구성

### 1. Hero Section
- 매력적인 첫인상을 위한 메인 소개 영역
- 부유하는 기술 스택 아이콘 애니메이션
- 명확한 CTA(Call-to-Action) 버튼

### 2. About Me
- 개인 소개 및 전문 분야 강조
- 경력 하이라이트 카드
- 기본 정보 및 전문성 태그

### 3. Experience
- 타임라인 형태의 경력 히스토리
- 각 회사별 상세 프로젝트 경험
- 시각적으로 구분된 경력 단계

### 4. Skills & Technologies
- 카테고리별 기술 스택 분류
- 애니메이션 프로그레스 바
- 6개 주요 분야 (언어, 프론트엔드, 백엔드, AI, DevOps, 관리)

### 5. Featured Projects
- 주요 프로젝트 6개 하이라이트
- 프로젝트별 기술 스택 및 성과 표시
- 정부과제, 스타트업, 교육 프로젝트 등 다양한 영역

### 6. Education & Certifications
- 학력 사항
- 전문 자격증 (Google Cloud, 정보처리기사 등)
- 교육 이수 내역

### 7. Teaching Experience
- 강사 경력 하이라이트
- 교육 철학 및 활동 내역
- 다양한 교육 기관에서의 경험

### 8. Contact
- 연락처 정보
- 인터랙티브 연락 폼
- 소셜 미디어 링크

## 🛠️ 설치 및 실행

### 로컬 개발 환경

1. 저장소 클론:
```bash
git clone https://github.com/GoodPineApple/GoodPineApple.github.io.git
cd GoodPineApple.github.io
```

2. 로컬 서버 실행:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server 설치 필요)
npx http-server -p 8000

# PHP
php -S localhost:8000
```

3. 브라우저에서 접속:
```
http://localhost:8000
```

### GitHub Pages 배포

1. GitHub에 저장소 생성:
   - 저장소 이름을 `{username}.github.io` 형태로 생성
   - 예: `GoodPineApple.github.io`

2. 코드 업로드:
```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

3. GitHub Pages 설정:
   - GitHub 저장소 → Settings → Pages
   - Source: Deploy from a branch
   - Branch: main / (root)
   - Save 클릭

4. 배포 확인:
   - 5-10분 후 `https://{username}.github.io`에서 확인 가능

## 📁 파일 구조

```
GoodPineApple.github.io/
├── index.html              # 메인 HTML 파일
├── styles/
│   └── main.css            # 메인 스타일시트
├── scripts/
│   └── main.js             # 메인 JavaScript 파일
├── assets/                 # 이미지 및 미디어 파일 (향후 추가)
│   ├── images/
│   └── documents/
└── README.md               # 프로젝트 문서
```

## 🎨 커스터마이징

### 색상 테마 변경

CSS 변수를 통해 쉽게 색상 테마를 변경할 수 있습니다:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #7c3aed;
    --accent-color: #10b981;
    --text-color: #1f2937;
    --background-color: #ffffff;
}
```

### 콘텐츠 수정

1. **개인 정보 수정**: `index.html`의 각 섹션에서 텍스트 내용 변경
2. **프로젝트 추가**: `projects` 섹션에 새로운 프로젝트 카드 추가
3. **이미지 추가**: `assets/images/` 폴더에 이미지 파일 추가 후 HTML에서 참조

### 새로운 섹션 추가

1. HTML 구조 추가
2. CSS 스타일링
3. JavaScript 인터랙션 (필요시)
4. 네비게이션 메뉴에 링크 추가

## 🔧 주요 기능

### 인터랙티브 요소
- 부드러운 스크롤 네비게이션
- 스크롤 기반 애니메이션
- 반응형 모바일 메뉴
- 스킬 바 애니메이션
- 연락처 정보 클릭-복사 기능

### 성능 최적화
- 이미지 레이지 로딩
- CSS/JS 최적화
- 부드러운 애니메이션 성능
- 모바일 최적화

### 접근성
- 키보드 네비게이션 지원
- 적절한 색상 대비
- 스크린 리더 호환성
- 의미론적 HTML 구조

## 📊 브라우저 지원

- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)
- 모바일 브라우저 (iOS Safari, Chrome Mobile)

## 📈 SEO 최적화

- 메타 태그 최적화
- 구조화된 데이터
- 의미론적 HTML
- 빠른 로딩 속도
- 모바일 친화성

## 🤝 기여하기

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

- **이메일**: forest0121@gmail.com
- **전화**: 010-8331-9717
- **GitHub**: [@GoodPineApple](https://github.com/GoodPineApple)
- **웹사이트**: [https://goodpineapple.github.io](https://goodpineapple.github.io)

---

**⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!**

> "기술은 나누어야 더 큰 가치를 가진다" - 김태민 