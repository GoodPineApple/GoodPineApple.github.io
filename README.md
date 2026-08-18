# taemin-portfolio

김태민의 웹 포트폴리오와 제출용 이력서를 관리하는 프로젝트입니다.

## 구성

```
taemin-portfolio/
├── index.html              # 웹 포트폴리오 (메인 페이지)
├── story.html              # AI와 일하는 방식 스토리 슬라이드
├── teaching.html           # 수강생 히스토리 (사례 캐러셀)
├── styles/main.css         # 포트폴리오 스타일
├── styles/story.css        # 슬라이드 스타일
├── styles/teaching.css     # 수강생 히스토리 스타일
├── scripts/main.js         # Lenis + 모바일 네비
├── scripts/story.js        # 슬라이드 네비게이션
├── scripts/teaching.js     # 사례 캐러셀
├── site.webmanifest        # PWA 매니페스트 (아이콘·테마색)
├── assets/
│   ├── portrait.jpg        # 프로필 사진 (상반신)
│   ├── id-photo.jpg        # 증명사진 (프로필 PDF에서 추출, 저해상도)
│   ├── claude.svg          # Claude 아이콘 (Simple Icons, CC0)
│   ├── openai.svg          # OpenAI 심볼 (Codex 표기용)
│   ├── goosepeak-logo.png  # 구스피크 로고 (goosepeak.kr)
│   ├── og-image.png        # 메인 OG 이미지 (1200x630)
│   ├── og-story.png        # 스토리 OG 이미지 (1200x630)
│   ├── og-teaching.png     # 수강생 히스토리 OG 이미지 (1200x630)
│   ├── favicon.svg         # 파비콘 (SVG)
│   ├── favicon-32.png      # 파비콘 (32px)
│   ├── apple-touch-icon.png # 애플 터치 아이콘 (180px)
│   ├── icon-192.png        # 매니페스트 아이콘 (192px)
│   └── students/           # 수강생 서비스 화면 캡처 (teaching.html 갤러리)
├── tools/                  # 이미지 생성 소스 (사이트에 링크되지 않음)
│   ├── og-main.html        # 메인 OG 이미지 소스
│   ├── og-story.html       # 스토리 OG 이미지 소스
│   └── icon.html           # 파비콘·터치 아이콘 소스
└── resume/
    ├── 이력서_김태민_범용.md    # 이직/채용용 이력서 (원본, 마크다운)
    ├── 이력서_김태민_강사.md    # 강의/강사용 이력서 (원본, 마크다운)
    ├── 강사소개글.md             # 강의 플랫폼 프로필용 자기소개 원문
    ├── 수강생사례_입력양식.md    # teaching.html 사례 작성용 양식
    ├── html/
    │   ├── resume-general.html  # 범용 이력서 인쇄용 (PDF 변환 소스)
    │   └── resume-lecture.html  # 강사용 이력서 인쇄용 (PDF 변환 소스)
    └── pdf/
        ├── 이력서_김태민_범용.pdf   # 포트폴리오 #resume 섹션에서 다운로드 제공
        └── 이력서_김태민_강사.pdf   # 포트폴리오 #resume 섹션에서 다운로드 제공
```

## 포트폴리오 로컬 미리보기

```bash
python3 -m http.server 8734
# → http://localhost:8734
```

## 이력서 수정 및 PDF 재생성

1. `resume/html/` 아래 HTML을 수정합니다. (마크다운 원본도 함께 갱신 권장)
2. 헤드리스 크롬으로 PDF를 다시 생성합니다.

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="resume/pdf/이력서_김태민_범용.pdf" \
  "file://$PWD/resume/html/resume-general.html"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="resume/pdf/이력서_김태민_강사.pdf" \
  "file://$PWD/resume/html/resume-lecture.html"
```

## OG 이미지 · 아이콘 재생성

`tools/` 아래 HTML을 수정한 뒤 헤드리스 크롬으로 다시 캡처합니다.

```bash
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless --disable-gpu --hide-scrollbars --window-size=1200,630 \
  --screenshot="$PWD/assets/og-image.png" "file://$PWD/tools/og-main.html"
"$CHROME" --headless --disable-gpu --hide-scrollbars --window-size=1200,630 \
  --screenshot="$PWD/assets/og-story.png" "file://$PWD/tools/og-story.html"
"$CHROME" --headless --disable-gpu --hide-scrollbars --window-size=180,180 \
  --screenshot="$PWD/assets/apple-touch-icon.png" "file://$PWD/tools/icon.html"
sips -z 32 32 assets/apple-touch-icon.png --out assets/favicon-32.png
sips -z 192 192 assets/apple-touch-icon.png --out assets/icon-192.png
```

## 글쓰기 규칙

- 본문에 em dash(—)를 쓰지 않습니다. 기간 표기(`2017.08 — 2019.11`)에만 사용합니다.
- 경력 연차는 2017.08 입사 기준으로 계산합니다. (현재 10년 차)

## 배포 (GitHub Pages)

정적 사이트이므로 저장소를 GitHub에 올리고 Pages를 활성화하면 바로 배포됩니다.
기존 `GoodPineApple.github.io` 저장소에 파일을 복사해 배포할 수도 있습니다.

## 원본 증빙 자료

증빙 서류 원본(경력증명서, 자격 확인서, 졸업/성적증명서)은
`~/Downloads/김태민-이력서및경력증명서20260722/`에 있습니다.
개인정보(주민등록번호 등)가 포함되어 있으므로 이 저장소에는 커밋하지 않습니다.
