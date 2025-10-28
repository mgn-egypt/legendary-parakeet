# 🎨 Customization Guide

## How to Personalize Your Portfolio Website

This guide will help you customize the website with your own content, images, and links.

---

## 🖼️ Updating Images

### Profile Picture (Hero Section)

**File**: `components/Hero.tsx`  
**Line**: ~50

```typescript
<Image
  src="YOUR_IMAGE_URL_HERE"
  alt="Mahmoud Gamal Nassar"
  fill
  className="object-cover"
  priority
/>
```

**Options**:
1. Use a direct URL (e.g., from Unsplash, Imgur, or your own hosting)
2. Place image in `/public` folder and use `/your-image.jpg`
3. Update `next.config.ts` if using a new domain

### Album Cover Images

**File**: `components/MusicSection.tsx`  
**Line**: ~7-12

```typescript
const songCovers = [
  "YOUR_SONG_1_COVER_URL",
  "YOUR_SONG_2_COVER_URL",
  "YOUR_SONG_3_COVER_URL",
  "YOUR_SONG_4_COVER_URL",
];
```

**Tip**: Use square images (1:1 aspect ratio) for best results.

---

## 🔗 Updating Links

### Music/YouTube Links

**File**: `components/MusicSection.tsx`  
**Line**: ~14-19

```typescript
const youtubeLinks = [
  "https://www.youtube.com/watch?v=YOUR_VIDEO_1",
  "https://www.youtube.com/watch?v=YOUR_VIDEO_2",
  "https://www.youtube.com/watch?v=YOUR_VIDEO_3",
  "https://www.youtube.com/watch?v=YOUR_VIDEO_4",
];
```

### Social Media Links

**File**: `components/Footer.tsx`  
**Line**: ~20-39

```typescript
const socialLinks = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@YOUR_CHANNEL",
    color: "#FF0000",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/YOUR_USERNAME",
    color: "#E4405F",
  },
  {
    name: "TikTok",
    icon: Music2,
    url: "https://tiktok.com/@YOUR_USERNAME",
    color: "#00F2EA",
  },
  {
    name: "X",
    icon: XIcon,
    url: "https://x.com/YOUR_USERNAME",
    color: "#000000",
  },
];
```

---

## ✍️ Updating Text Content

### English Content

**File**: `lib/translations.ts`  
**Section**: `en` object

```typescript
en: {
  hero: {
    name: "Your Name Here",
    subtitle: "Your Title | Your Role | Your Specialty",
    cta: "Your CTA Text",
  },
  music: {
    title: "Your Section Title",
    play: "Play",
    songs: [
      { title: "Song 1 Name", artist: "Your Name" },
      { title: "Song 2 Name", artist: "Your Name" },
      { title: "Song 3 Name", artist: "Your Name" },
      { title: "Song 4 Name", artist: "Your Name" },
    ],
  },
  about: {
    title: "About",
    description: "Your bio here. Tell your story...",
  },
  footer: {
    rights: "© 2025 Your Name. All rights reserved.",
    follow: "Follow Me",
  },
}
```

### Arabic Content

**File**: `lib/translations.ts`  
**Section**: `ar` object

```typescript
ar: {
  hero: {
    name: "اسمك هنا",
    subtitle: "لقبك | دورك | تخصصك",
    cta: "نص الدعوة للعمل",
  },
  music: {
    title: "عنوان القسم",
    play: "تشغيل",
    songs: [
      { title: "اسم الأغنية 1", artist: "اسمك" },
      { title: "اسم الأغنية 2", artist: "اسمك" },
      { title: "اسم الأغنية 3", artist: "اسمك" },
      { title: "اسم الأغنية 4", artist: "اسمك" },
    ],
  },
  about: {
    title: "نبذة عني",
    description: "سيرتك الذاتية هنا. احكِ قصتك...",
  },
  footer: {
    rights: "© 2025 اسمك. جميع الحقوق محفوظة.",
    follow: "تابعني",
  },
}
```

---

## 🎨 Changing Colors

### Primary Colors

**File**: `tailwind.config.ts`  
**Line**: ~11-14

```typescript
colors: {
  primary: {
    dark: "#0B3D2E",  // Change to your dark color
    light: "#00FF8C", // Change to your light/accent color
  },
},
```

**Effect**: Changes the entire color scheme including:
- Background gradient
- Glow effects
- Accent colors
- Button colors

### Background Gradient

**File**: `app/globals.css`  
**Line**: ~20

```css
body {
  background: linear-gradient(135deg, #0B3D2E 0%, #00FF8C 100%);
}
```

Change the hex colors to match your `tailwind.config.ts` colors.

---

## 🔤 Changing Fonts

### English Font

**File**: `app/globals.css`  
**Line**: ~1

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;500;600;700;800;900&display=swap');
```

**File**: `tailwind.config.ts`  
**Line**: ~16

```typescript
fontFamily: {
  orbitron: ["YOUR_FONT", "sans-serif"],
  cairo: ["Cairo", "sans-serif"],
},
```

### Arabic Font

**File**: `app/globals.css`  
**Line**: ~2

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_ARABIC_FONT:wght@400;500;600;700;800;900&display=swap');
```

**File**: `tailwind.config.ts`  
**Line**: ~17

```typescript
fontFamily: {
  orbitron: ["Orbitron", "sans-serif"],
  cairo: ["YOUR_ARABIC_FONT", "sans-serif"],
},
```

**Popular Font Combinations**:
- Modern: Montserrat (EN) + Tajawal (AR)
- Futuristic: Exo 2 (EN) + Cairo (AR)
- Elegant: Playfair Display (EN) + Amiri (AR)
- Tech: Rajdhani (EN) + Almarai (AR)

---

## 🎭 Adding/Removing Songs

### Add More Songs

**File**: `components/MusicSection.tsx`

1. Add image URL to `songCovers` array
2. Add YouTube link to `youtubeLinks` array
3. Add song info to `lib/translations.ts` in both `en.music.songs` and `ar.music.songs`

**Example**:
```typescript
// MusicSection.tsx
const songCovers = [
  "url1", "url2", "url3", "url4",
  "url5", // New song
];

const youtubeLinks = [
  "link1", "link2", "link3", "link4",
  "link5", // New song
];

// translations.ts
songs: [
  { title: "Song 1", artist: "Artist" },
  { title: "Song 2", artist: "Artist" },
  { title: "Song 3", artist: "Artist" },
  { title: "Song 4", artist: "Artist" },
  { title: "Song 5", artist: "Artist" }, // New song
],
```

### Remove Songs

Simply remove the corresponding entries from all three arrays. The grid will automatically adjust.

---

## 🌐 Adding More Languages

### Step 1: Add Translation

**File**: `lib/translations.ts`

```typescript
export const translations = {
  en: { /* existing */ },
  ar: { /* existing */ },
  fr: { // New language
    hero: {
      name: "Votre Nom",
      subtitle: "Votre Titre",
      cta: "Écoutez Maintenant",
    },
    // ... rest of translations
  },
};

export type Language = "en" | "ar" | "fr"; // Add new language
```

### Step 2: Update Language Switcher

**File**: `components/LanguageSwitcher.tsx`

Modify the button to cycle through languages:
```typescript
const languages: Language[] = ["en", "ar", "fr"];
const currentIndex = languages.indexOf(language);
const nextLanguage = languages[(currentIndex + 1) % languages.length];

// In button onClick:
setLanguage(nextLanguage);
```

### Step 3: Add Font Support

**File**: `app/globals.css`

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FRENCH_FONT&display=swap');
```

**File**: `tailwind.config.ts`

```typescript
fontFamily: {
  orbitron: ["Orbitron", "sans-serif"],
  cairo: ["Cairo", "sans-serif"],
  french: ["YOUR_FRENCH_FONT", "sans-serif"], // Add new font
},
```

---

## 🎬 Customizing Animations

### Animation Speed

**File**: `tailwind.config.ts`  
**Line**: ~18-22

```typescript
animation: {
  "gloss-slide": "gloss-slide 3s ease-in-out infinite", // Change 3s
  "float": "float 3s ease-in-out infinite",             // Change 3s
  "glow-pulse": "glow-pulse 2s ease-in-out infinite",   // Change 2s
},
```

### Disable Animations

To disable specific animations, remove or comment out the animation classes:

**Example** (disable gloss effect):
```typescript
// In MusicSection.tsx, remove this div:
<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
  <div className="... animate-gloss-slide" /> // Remove this
</div>
```

---

## 📱 Adjusting Responsive Breakpoints

**File**: `components/MusicSection.tsx`  
**Line**: ~32

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

**Breakpoints**:
- `grid-cols-1`: Mobile (default)
- `md:grid-cols-2`: Tablet (768px+)
- `lg:grid-cols-4`: Desktop (1024px+)

**Change to 3 columns on desktop**:
```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

---

## 🔧 Advanced Customizations

### Change Glass Blur Amount

**File**: `app/globals.css`  
**Line**: ~45-56

```css
.glass {
  backdrop-filter: blur(20px); /* Change 20px */
}

.glass-strong {
  backdrop-filter: blur(30px); /* Change 30px */
}
```

### Adjust Glow Intensity

**File**: Various component files

Look for `shadow-[0_0_40px_rgba(0,255,140,0.6)]` and adjust:
- First number: horizontal offset
- Second number: vertical offset
- Third number: blur radius (increase for more glow)
- Last number: opacity (0-1)

### Change Wave Animation

**File**: `components/WaveTransition.tsx`  
**Line**: ~30-35

```typescript
animate={{ 
  y: progress > 0.5 ? "-100%" : `${100 - progress * 200}%` 
}}
```

Adjust the formula to change wave speed and behavior.

---

## 📝 Metadata & SEO

**File**: `app/layout.tsx`  
**Line**: ~4-16

```typescript
export const metadata: Metadata = {
  title: "Your Name | Your Title",
  description: "Your description here...",
  keywords: ["your", "keywords", "here"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name | Your Title",
    description: "Your description here...",
    type: "website",
  },
};
```

---

## 🚀 After Customization

1. **Save all files**
2. **Test locally**: `pnpm run dev`
3. **Check both languages**: Click the language switcher
4. **Test all links**: Click every button and link
5. **Check responsive**: Resize browser window
6. **Build for production**: `pnpm run build`
7. **Deploy**: Push to your hosting platform

---

## 💡 Tips

- **Test after each change**: Don't change everything at once
- **Keep backups**: Copy files before major changes
- **Use consistent colors**: Stick to your color palette
- **Optimize images**: Compress images before uploading
- **Check accessibility**: Ensure good contrast ratios
- **Mobile first**: Always test on mobile devices

---

## 🆘 Need Help?

If something breaks:
1. Check the browser console for errors (F12)
2. Run `pnpm run build` to see build errors
3. Revert your last change
4. Compare with the original files
5. Check the documentation files (PROJECT_SUMMARY.md, QUICK_START.md)

---

**Happy Customizing! 🎉**
