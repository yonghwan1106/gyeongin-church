# 이미지 자동 생성 — 이어가기 메모

마지막 작업일: 2026-04-20 (23:16 기준)

## 📊 진행 현황

- **총 60컷 중 46컷 완료** (event_thanksgiving까지 저장 확인)
- **남은 작업: 14컷**
- 저장 위치: `public/images/generated/`
- 생성 방식: Playwright(Chromium)가 Gemini 2.5 Flash Image(Nano Banana) 웹 UI를 제어,
  프롬프트 자동 입력 → 이미지 다운로드 → 파일 저장
- 모든 프롬프트 원본: `C:\Users\user\.claude\playwright-profiles\queue_batch.py` (PROMPTS 리스트)

## ✅ 어제까지 완료된 카테고리

1. 담임목사 프로필 (3/3)
2. 푸드뱅크 (6/6)
3. 공간 나눔 (4/4)
4. 시민기자단 (4/4)
5. 교육부서 (8/8)
6. 예배 (6/6)
7. 외관·시설 (7/7)
8. 공동체 (5/5)
9. 절기·행사 (3/5) — christmas, easter, thanksgiving 완료

## ⏳ 남은 작업 (14컷)

### 절기·행사 (나머지 2컷)
- [ ] event_baptism_group.png — 세례 단체 기념촬영
- [ ] event_anniversary.png — 창립기념 케이크 커팅

### 디자인·웹 에셋 (6컷)
- [ ] og_image_main.png — OG 메타 이미지 (1200×630, 라인아트 십자가 + 크림→허니 그라디언트)
- [ ] bg_pattern_stained.png — 스테인드글라스 시임리스 패턴
- [ ] bg_texture_paper.png — 크림 종이 질감 텍스처
- [ ] icon_illustration_hands.png — 빵 나누는 두 손 라인아트 (투명 PNG)
- [ ] icon_illustration_dove.png — 비둘기 라인아트 (투명 PNG)
- [ ] icon_illustration_cross.png — 수채화 나무 십자가

### 디테일 스틸라이프 (6컷)
- [ ] detail_bible_open.png — 펼쳐진 성경
- [ ] detail_offering_envelope.png — 헌금봉투
- [ ] detail_weekly_bulletin.png — 주보
- [ ] detail_hands_holding_candle.png — 촛불 감싼 두 손
- [ ] detail_cross_necklace.png — 올리브우드 십자가 목걸이
- [ ] detail_prayer_journal.png — 기도 일지

## 🚀 내일 재개 순서 (복붙 가능한 명령)

### 1) Gemini 로그인 상태로 런처 재실행
```bash
cd "C:/Users/user/.claude/playwright-profiles"
python gemini_launch.py
```
(persistent 프로필이라 Google 로그인 유지됨. Chrome 창이 `https://gemini.google.com/app` 자동 접속 확인)

### 2) 상태 확인 (ready가 떠야 큐잉 가능)
```bash
cat "C:/Users/user/.claude/playwright-profiles/cmds/status.json"
```

### 3) 남은 프롬프트만 선별 큐잉
`queue_batch.py`의 PROMPTS 리스트에서 인덱스 **45~58번** (0-based) 이 남은 15컷입니다.
Claude한테 "남은 15컷 큐잉해줘" 라고 말하면 다음 스크립트를 생성·실행합니다.

```python
# C:/Users/user/.claude/playwright-profiles/queue_remaining.py
import json, sys
from pathlib import Path
sys.path.insert(0, r"C:\Users\user\.claude\playwright-profiles")
from queue_batch import PROMPTS, GLOBAL, CMD_DIR

REMAINING_FILENAMES = [
    "event_thanksgiving.png", "event_baptism_group.png", "event_anniversary.png",
    "og_image_main.png", "bg_pattern_stained.png", "bg_texture_paper.png",
    "icon_illustration_hands.png", "icon_illustration_dove.png", "icon_illustration_cross.png",
    "detail_bible_open.png", "detail_offering_envelope.png", "detail_weekly_bulletin.png",
    "detail_hands_holding_candle.png", "detail_cross_necklace.png", "detail_prayer_journal.png",
]

idx = 46  # cmd 파일 순번 시작
for fname, text in PROMPTS:
    if fname in REMAINING_FILENAMES:
        # 이미 저장된 파일은 스킵
        out = Path(r"C:\Users\user\Desktop\경인블루저널\경인교회_푸드뱅크\gyeongin-church\public\images\generated") / fname
        if out.exists() and out.stat().st_size > 10000:
            continue
        cmd = {"action": "prompt", "filename": fname, "timeout": 220, "text": text + GLOBAL}
        (CMD_DIR / f"cmd_{idx:03d}.json").write_text(
            json.dumps(cmd, ensure_ascii=False), encoding="utf-8"
        )
        idx += 1
print("queued remaining prompts")
```

### 4) 모니터링
```bash
tail -f "C:/Users/user/.claude/playwright-profiles/cmds/run.log"
```

### 5) 완료 후 종료
```bash
echo '{"action":"exit"}' > "C:/Users/user/.claude/playwright-profiles/cmds/cmd_zzz_exit.json"
```

## 📁 파일 경로 요약

| 역할 | 경로 |
|---|---|
| 런처 스크립트 | `C:\Users\user\.claude\playwright-profiles\gemini_launch.py` |
| 배치 큐잉 스크립트 | `C:\Users\user\.claude\playwright-profiles\queue_batch.py` |
| 명령 큐 디렉터리 | `C:\Users\user\.claude\playwright-profiles\cmds\` |
| 상태 파일 | `cmds\status.json` |
| 실행 로그 | `cmds\run.log` |
| Chrome 프로필(로그인 유지) | `C:\Users\user\.claude\playwright-profiles\gemini\` |
| 이미지 저장 폴더 | `public\images\generated\` |

## 🔎 품질 검수 체크리스트 (생성 완료 후)

- [ ] 60컷 모두 용량 ≥ 100KB (손상 파일 없음)
- [ ] 얼굴·손·손가락 디스토션 없는지 샘플 확인
- [ ] 한국인 얼굴/교회 컨텍스트 적절한지
- [ ] 2~3컷은 Gemini에서 변형 재생성 필요할 수 있음 (특히 담임목사 개인 유사도)
- [ ] 확정본을 `public\images\` 루트로 이동(또는 심볼릭/참조 업데이트)
- [ ] 컴포넌트 코드에서 경로 연결:
  - `Hero.tsx`, `HeroDesktopSlider.tsx` — hero_foodbank.jpg 등 교체 검토
  - `PastorGreeting.tsx` — `/img/kim01.PNG` → `/images/generated/pastor_portrait_01.png` 로 수정
  - `GalleryGrid.tsx` — 새 갤러리 샷 교체
  - `MinistryHubCards.tsx`, `OutreachOverview.tsx` — 필요 시 배경 이미지 추가

## 💡 참고 메모

- 평균 생성 시간: 컷당 약 60~90초
- 15컷 완성 예상 시간: **약 18~25분**
- Gemini가 캡차나 rate limit을 띄우면 런처가 timeout으로 넘어가므로, 해당 파일명만 재큐잉
- 이미지가 마음에 안 들면 Gemini 채팅창에서 직접 "다시 그려줘" 로 변형 생성 후 수동 다운로드해 `generated/` 에 덮어쓰기
