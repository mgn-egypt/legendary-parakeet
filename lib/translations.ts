export const translations = {
  en: {
    hero: {
      name: "Mahmoud Gamal Nassar",
      subtitle: "Rapper | Songwriter | AI Music Visionary",
      cta: "Listen Now",
    },
    music: {
      title: "Latest Tracks",
      play: "Play",
      songs: [
        { title: "Desert Dreams", artist: "Mahmoud Gamal Nassar" },
        { title: "Neon Nights", artist: "Mahmoud Gamal Nassar" },
        { title: "Cairo Vibes", artist: "Mahmoud Gamal Nassar" },
        { title: "Future Flow", artist: "Mahmoud Gamal Nassar" },
      ],
    },
    about: {
      title: "About",
      description:
        "Mahmoud Gamal Nassar is a pioneering Arabic-English rapper and songwriter who seamlessly blends Eastern and Western musical traditions. With a unique voice that bridges cultures, he creates innovative soundscapes that resonate with global audiences. His work explores themes of identity, technology, and the future of music in the AI era.",
    },
    footer: {
      rights: "© 2025 Mahmoud Gamal Nassar. All rights reserved.",
      follow: "Follow Me",
    },
  },
  ar: {
    hero: {
      name: "محمود جمال نصار",
      subtitle: "مغني راب | كاتب أغاني | رائد الموسيقى بالذكاء الاصطناعي",
      cta: "استمع الآن",
    },
    music: {
      title: "أحدث الأغاني",
      play: "تشغيل",
      songs: [
        { title: "أحلام الصحراء", artist: "محمود جمال نصار" },
        { title: "ليالي النيون", artist: "محمود جمال نصار" },
        { title: "أجواء القاهرة", artist: "محمود جمال نصار" },
        { title: "تدفق المستقبل", artist: "محمود جمال نصار" },
      ],
    },
    about: {
      title: "نبذة عني",
      description:
        "محمود جمال نصار هو مغني راب وكاتب أغاني رائد يمزج بسلاسة بين التقاليد الموسيقية الشرقية والغربية. بصوت فريد يربط بين الثقافات، يخلق مناظر صوتية مبتكرة تلقى صدى لدى الجماهير العالمية. يستكشف عمله موضوعات الهوية والتكنولوجيا ومستقبل الموسيقى في عصر الذكاء الاصطناعي.",
    },
    footer: {
      rights: "© 2025 محمود جمال نصار. جميع الحقوق محفوظة.",
      follow: "تابعني",
    },
  },
};

export type Language = "en" | "ar";
export type Translations = typeof translations;
