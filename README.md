# MD Shaz Ahmed — Personal Portfolio

> Production-ready portfolio built with Next.js 14 (App Router) + Tailwind CSS + Framer Motion + GSAP featuring dark glassmorphism UI with neon blue/purple accents.

## ✨ Features

- 🌑 Dark theme with glassmorphism cards
- 💠 Neon blue/purple gradient accents
- 🎞️ Heavy Framer Motion scroll animations
- 🖱️ Custom animated cursor with magnetic effect
- 🌐 Floating particles network background
- ⌨️ Type animation for hero role
- 📱 Fully responsive (mobile-first)
- 🔍 SEO optimized with Next.js metadata
- 📧 EmailJS contact form integration
- ⬇️ Resume download button
- 🚀 Deployable to Vercel & Cloudflare Pages
- 🏃 Animated page loader
- 📊 Animated skill progress bars
- ⏳ Animated experience timeline

## 📁 Folder Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   └── page.tsx            # Main page composing all sections
├── components/
│   ├── ui/
│   │   ├── CustomCursor.tsx     # Animated cursor dot + ring
│   │   ├── Footer.tsx           # Footer with nav & socials
│   │   ├── Navbar.tsx           # Scroll-aware navbar with active indicator
│   │   ├── PageLoader.tsx       # Animated intro loader
│   │   ├── ParticlesBackground.tsx  # Canvas-based floating particles
│   │   └── SectionHeading.tsx   # Reusable animated section heading
│   ├── animations/
│   │   └── ScrollReveal.tsx     # IntersectionObserver-based reveal
│   └── sections/
│       ├── AboutSection.tsx      # Bio, stats, and summary
│       ├── CertificationsSection.tsx
│       ├── ContactSection.tsx    # EmailJS contact form
│       ├── ExperienceSection.tsx # Timeline with education
│       ├── HeroSection.tsx      # GSAP parallax + type animation
│       ├── SkillsSection.tsx    # Animated skill bars
│       └── TechStackSection.tsx # Tech grid with hover glow
├── lib/
│   ├── animations.ts       # Framer Motion variants & utilities
│   └── utils.ts            # Resume data & cn() utility
├── styles/
│   └── globals.css         # Global styles, glassmorphism, cursor
├── public/
│   └── resume.pdf          # Your resume PDF (add this!)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### 1. Install dependencies

```bash
npm install
```

### 2. Add your resume PDF

Place your resume at `public/resume.pdf` — this powers the download button.

### 3. Set up EmailJS (Contact Form)

1. Go to [emailjs.com](https://www.emailjs.com/) and create a free account
2. Create an Email Service (Gmail, Outlook, etc.)
3. Create an Email Template with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — message subject
   - `{{message}}` — message body
4. Get your **Service ID**, **Template ID**, and **Public Key**
5. Open `components/sections/ContactSection.tsx` and replace:

```typescript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to [vercel.com](https://vercel.com) for automatic deploys.

### Cloudflare Pages

1. Push your code to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Connect GitHub repo
4. Build settings:
   - **Build command:** `npm run build`
   - **Build output:** `.next`
   - **Node version:** 20

> **Note:** Cloudflare Pages requires `@cloudflare/next-on-pages` adapter for full Next.js support. Consider using Vercel for the easiest deployment.

## 🎨 Customization

### Updating Resume Data

All personal data lives in `lib/utils.ts` inside the `RESUME_DATA` object. Update any field there and it propagates throughout the entire site.

### Changing Colors

Edit the CSS variables in `styles/globals.css`:

```css
:root {
  --neon-blue: #00d4ff;
  --neon-purple: #7b2fff;
  --dark-base: #020408;
}
```

Also update corresponding values in `tailwind.config.ts`.

### Particle Count / Behavior

Adjust particle density and speed in `components/ui/ParticlesBackground.tsx`:

```typescript
for (let i = 0; i < 70; i++) { // Change particle count here
```

### Animation Speed

All Framer Motion animation durations and easing are in `lib/animations.ts`.

## 📦 Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion + CSS |
| Type Animation | react-type-animation |
| Contact Form | EmailJS |
| Fonts | Oxanium (display) + Space Grotesk (body) + JetBrains Mono |
| Deployment | Vercel / Cloudflare Pages |

## 🔧 Performance Tips

- Replace `text-3xl` emoji icons in TechStack with actual SVG icons for better rendering
- Add a real avatar image in the About section
- Use `next/image` if you add any photos
- Set proper `robots.txt` for production
- Add Google Analytics via `app/layout.tsx`

## 📄 License

MIT — free to use and modify for personal portfolio purposes.

---

**Built for MD Shaz Ahmed** · [shazahmed290@gmail.com](mailto:shazahmed290@gmail.com)
