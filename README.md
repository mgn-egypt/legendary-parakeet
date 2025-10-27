# Mahmoud Gamal Nassar - Portfolio Website

A stunning cinematic Glassmorphism website for Mahmoud Gamal Nassar, an Arabic-English rapper and songwriter, featuring 3D interactive elements and smooth animations.

## 🌟 Features

- **Bilingual Support**: Seamless switching between English (LTR) and Arabic (RTL) with animated transitions
- **Glassmorphism Design**: Beautiful glass effects with blur, glow, and realistic light reflections
- **3D Wave Animation**: Glass wave transition effect when switching languages
- **Flying Birds**: Animated birds that carry UI cards during language transitions
- **Smooth Scrolling**: Lenis-powered smooth scrolling experience
- **Interactive Music Cards**: Hover effects with gloss animations and play buttons
- **Responsive Design**: Fully responsive across all devices
- **Modern Tech Stack**: Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion

## 🎨 Design Elements

- **Background**: Gradient from #0B3D2E → #00FF8C with smooth motion
- **Glass Panels**: 20-30px blur with rgba(255,255,255,0.2-0.3) glow
- **Fonts**: Orbitron for English, Cairo for Arabic
- **Animations**: Smooth transitions (0.5s-1s) with depth shadows

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/vercel/sandbox/
├── app/
│   ├── page.tsx          # Main page component
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Hero.tsx          # Hero section with profile
│   ├── MusicSection.tsx  # Music cards with play buttons
│   ├── AboutSection.tsx  # About section with glass panel
│   ├── Footer.tsx        # Footer with social links
│   ├── LanguageSwitcher.tsx  # Language toggle button
│   └── WaveTransition.tsx    # Wave animation component
├── contexts/
│   └── LanguageContext.tsx   # Language state management
├── hooks/
│   └── useSmoothScroll.tsx   # Lenis smooth scroll hook
└── lib/
    └── translations.ts       # Translation strings
```

## 🎵 Sections

### Hero Section
- Circular profile image with glow effect
- Animated name in neon text
- Subtitle with role description
- "Listen Now" CTA button
- Floating 3D microphone representation

### Music Section
- 4 glass cards with album covers
- Diagonal gloss animation
- Play buttons linking to YouTube
- Hover effects with scale and glow

### About Section
- Translucent glass panel
- Gradient border effects
- Light reflection animations
- Floating particles

### Footer
- Social media icons (YouTube, Instagram, TikTok, X)
- Hover effects with glow and scale
- Tooltips on hover
- Copyright information

## 🌐 Language Switching

Click the floating glass orb button in the top-right corner to switch between English and Arabic. The transition features:

1. Glass wave rising from bottom to top
2. Animated birds flying across the screen
3. Smooth content transition
4. RTL/LTR layout adjustment
5. Font family change

## 🎨 Technologies Used

- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lenis**: Smooth scrolling
- **Lucide React**: Icon library
- **Three.js**: 3D graphics (ready for integration)

## 📱 Social Media Links

- YouTube: https://youtube.com/@mahmoudgamalnassar
- Instagram: https://instagram.com/mahmoudgamalnassar
- TikTok: https://tiktok.com/@mahmoudgamalnassar
- X (Twitter): https://x.com/mahmoudgnassar

## 🎯 Performance

- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Smooth 60fps animations
- Minimal bundle size
- Fast page loads

## 📄 License

© 2025 Mahmoud Gamal Nassar. All rights reserved.

---

Built with ❤️ using Next.js and modern web technologies.
