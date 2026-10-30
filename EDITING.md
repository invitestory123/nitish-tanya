# Customer Editing Guide — Nitish & Tanya Wedding Invitation

This template is an emerald-and-gold themed wedding invitation featuring an animated split curtain seal intro, live countdown timer, Functions & Ceremonies events itinerary card, background music player, and venue map preview.

---

## Normal Customer Changes

All routine customer edits are configured in:
→ [editable/wedding-data.js](file:///editable/wedding-data.js)

### Couple Profiles (Groom & Bride)
Configured in `couple.groom` and `couple.bride`:
- `name`: Short first name (`"Nitish"`, `"Tanya"`)
- `fullName`: Full legal/ceremonial name (`"Nitish Dhiman"`, `"Tanya Sharma"`)
- `line`: Parentage / greeting line
- `note`: Personal message
- `photo`: Path to portrait photo (`./editable/assets/groom.jpg` and `./editable/assets/bride.jpg`)

### Wedding Date & Times
Configured in `wedding` block:
- `dateISO`: `"2026-11-21T19:00:00+05:30"` — drives live countdown timer and calendar export
- `endISO`: `"2026-11-21T23:59:00+05:30"`
- `dateLabel`: `"Saturday, 21 November 2026"`
- `dateShort`: `"21 · 11 · 2026"`
- `timeLabel`: `"7:00 PM onwards"`
- `muhurthamLabel`: `"Wedding · 7:00 PM"`
- `footerDateLocation`: `"21 · 11 · 2026 · Zirakpur"`

### Venue & Maps
Configured in `venue` block:
- `name`: `"Master Farm Resort"`
- `address`: `"Zirakpur-Patiala Highway, Rampur Kalan, Zirakpur, Punjab 140603"`
- `locationShort`: `"Zirakpur, Punjab"`
- `mapsUrl`: `"https://www.google.com/maps/search/?api=1&query=Master+Farms+Resort+Zirakpur"`

### Functions & Ceremonies (Events)
Configured in `events` array:
- `title`: Event name (`"Engagement"`, `"Mehendi & Sangeet"`, `"Haldi"`, `"Wedding"`)
- `date`: Date label (`"20TH NOV 2026"`, `"21ST NOV 2026"`)
- `time`: Time label (`"4:00 PM ONWARDS"`, `"7:30 PM ONWARDS"`, `"8:00 AM ONWARDS"`)
- `note`: Subtitle or ceremonial note

### Images & Media
- Groom photo: `editable/assets/groom.jpg`
- Bride photo: `editable/assets/bride.jpg`
- Couple hero illustration: `editable/assets/couple-hero.png`
- Map preview image: `editable/assets/map-preview.jpg`
- Background music: `editable/assets/bg-music.mp3` (Kaafi Hai Na Instrumental)

---

## Special Sections & Features

- **Split Curtain Seal Opener**: Opens with smooth slide animation upon tapping the gold seal.
- **Floating Music Player**: Top-right luxury gold audio player with interactive equalizer waves. Plays automatically on user interaction and supports manual play/pause.
- **Live Countdown**: Animated countdown with days, hours, minutes, seconds until 21 November 2026.
- **Functions & Ceremonies**: Dedicated itinerary section rendering Image 3 (Engagement, Mehendi & Sangeet, Haldi, Wedding).
- **Calendar & Maps**: Interactive iCal download and Google Maps directions to Master Farm Resort, Zirakpur.
