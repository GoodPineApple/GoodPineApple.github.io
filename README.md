# taemin-portfolio

김태민의 웹 포트폴리오와 제출용 이력서를 관리하는 프로젝트입니다.

## 구성

```
taemin-portfolio/
├── index.html              # 웹 포트폴리오 (메인 페이지)
├── story.html              # AI와 일하는 방식 스토리 슬라이드
├── styles/main.css         # 포트폴리오 스타일
├── styles/story.css        # 슬라이드 스타일
├── scripts/main.js         # Lenis + 모바일 네비
├── scripts/story.js        # 슬라이드 네비게이션
├── assets/
│   ├── portrait.jpg        # 프로필 사진 (상반신)
│   ├── id-photo.jpg        # 증명사진 (프로필 PDF에서 추출, 저해상도)
│   ├── claude.svg          # Claude 아이콘 (Simple Icons, CC0)
│   ├── openai.svg          # OpenAI 심볼 (Codex 표기용)
│   └── goosepeak-logo.png  # 구스피크 로고 (goosepeak.kr)
└── resume/
    ├── 이력서_김태민_범용.md    # 이직/채용용 이력서 (원본, 마크다운)
    ├── 이력서_김태민_강사.md    # 강의/강사용 이력서 (원본, 마크다운)
    ├── html/
    │   ├── resume-general.html  # 범용 이력서 인쇄용 (PDF 변환 소스)
    │   └── resume-lecture.html  # 강사용 이력서 인쇄용 (PDF 변환 소스)
    └── pdf/
        ├── 이력서_김태민_범용.pdf
        └── 이력서_김태민_강사.pdf
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

## 배포 (GitHub Pages)

정적 사이트이므로 저장소를 GitHub에 올리고 Pages를 활성화하면 바로 배포됩니다.
기존 `GoodPineApple.github.io` 저장소에 파일을 복사해 배포할 수도 있습니다.

## 원본 증빙 자료

증빙 서류 원본(경력증명서, 자격 확인서, 졸업/성적증명서)은
`~/Downloads/김태민-이력서및경력증명서20260722/`에 있습니다.
개인정보(주민등록번호 등)가 포함되어 있으므로 이 저장소에는 커밋하지 않습니다.
