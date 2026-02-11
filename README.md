# Anurag Wazarkar - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## ✨ Features

- **Responsive Design** - Mobile-first approach with breakpoints for all devices
- **Light/Dark Theme** - Toggle between themes with preference persistence
- **Interactive Projects** - Modal case studies for each project
- **Todo List** - Task management with localStorage persistence
- **Testimonials** - Client feedback carousel
- **Contact Form** - Validated form with anti-spam protection
- **SEO Optimized** - Meta tags and Open Graph for social sharing

## 📝 Customization

All content is centralized in `lib/data.ts`. Update:
- Personal information (name, email, social links)
- Projects and case studies
- Services offered
- Skills and technologies  
- Client testimonials

### Add Your Resume
Place your resume PDF in `public/resume.pdf`

### Add Project Images
Add project screenshots to `public/images/` and update the `thumbnail` paths in `lib/data.ts`

## 🎨 Design System

### Color Themes
- **Light Mode:** White background, cyan accents
- **Dark Mode:** Dark background, coral accents

### Typography
- Font: Inter (Google Fonts)
- Headings: Bold, gradient effects
- Body: Clean, readable

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout + metadata
│   ├── page.tsx         # Main page
│   └── globals.css      # Design system
├── components/          # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Services.tsx
│   ├── Skills.tsx
│   ├── TodoList.tsx
│   ├── Feedback.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── ui/             # Reusable UI components
├── lib/
│   └── data.ts         # Portfolio content
└── public/             # Static assets
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import repository to [Vercel](https://vercel.com)
3. Vercel auto-detects Next.js configuration
4. Click Deploy!

Your site will be live at `your-username.vercel.app`

### Deploy to Netlify

1. Push code to GitHub
2. Import repository to [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 🔧 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Font:** Inter (Google Fonts)
- **Deployment:** Vercel/Netlify

## 📊 Performance

- **Fast Loading:** Optimized with Next.js automatic code splitting
- **SEO Ready:** Meta tags, Open Graph, semantic HTML
- **Accessible:** WCAG AA compliant design
- **Responsive:** Mobile-first with smooth animations

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ❤️ using Next.js and Tailwind CSS
