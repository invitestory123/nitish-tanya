/**
 * wedding-data.js — Customer-facing editable data layer for kerala-sands
 * Nitish Dhiman & Tanya Sharma — Wedding Invitation
 */

window.WEDDING_DATA = {
  couple: {
    groom: {
      name: "Nitish",
      fullName: "Nitish Dhiman",
      line: "With love & blessings of family",
      note: "Ready to begin this beautiful journey together, stepping into a lifetime of endless laughter and shared dreams.",
      photo: "./editable/assets/groom.jpg",
    },
    bride: {
      name: "Tanya",
      fullName: "Tanya Sharma",
      line: "With love & blessings of family",
      note: "Looking forward to forever with her best friend, turning every ordinary moment into a cherished memory.",
      photo: "./editable/assets/bride.jpg",
    },
  },

  wedding: {
    dateISO: "2026-11-21T19:00:00+05:30",
    endISO: "2026-11-21T23:59:00+05:30",
    dateLabel: "Saturday, 21 November 2026",
    dateShort: "21 · 11 · 2026",
    timeLabel: "7:00 PM onwards",
    muhurthamLabel: "Wedding · 7:00 PM",
    footerDateLocation: "21 · 11 · 2026 · Zirakpur",
  },

  venue: {
    name: "Master Farm Resort",
    address: "Zirakpur-Patiala Highway, Rampur Kalan, Zirakpur, Punjab 140603",
    locationShort: "Zirakpur, Punjab",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Master+Farms+Resort+Zirakpur",
  },

  images: {
    coupleHero: "./editable/assets/couple-hero.png",
    mapPreview: "./editable/assets/map-preview.jpg",
    events: "./editable/assets/events.jpg",
    groom: "./editable/assets/groom.jpg",
    bride: "./editable/assets/bride.jpg",
  },

  music: {
    src: "./editable/assets/bg-music.mp3",
    title: "Kaafi Hai Na (Instrumental)",
  },
};
