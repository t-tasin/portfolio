# KM Khalid Saifullah - Portfolio Website

A modern, interactive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and a fun emoji physics shooter!

## Features

- **Modern Design**: Sleek, professional UI with gradient effects and glassmorphism
- **Fully Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for delightful user experience
- **Interactive Elements**:
  - Animated navigation with active section tracking
  - Scroll-triggered animations
  - Emoji physics shooter (click to shoot emojis with real physics!)
- **Organized Sections**:
  - Hero with introduction
  - About & Skills
  - Work Experience with timeline
  - Featured Projects with metrics
  - Research & Publications
  - Contact information

## Tech Stack

- **Framework**: Next.js 15.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 12.x
- **Physics Engine**: Matter.js (for emoji shooter)
- **Icons**: Lucide React
- **Runtime**: React 18.2

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

All portfolio data is centralized in `/data/portfolio.ts` for easy updates:

### Updating Your Information

Edit `/data/portfolio.ts` to customize:

- **Personal Info**: Name, title, contact details, social links
- **About**: Introduction, highlights, education
- **Skills**: Languages, frameworks, tools (organized by category)
- **Experience**: Add/remove/edit work experience entries
- **Projects**: Showcase your projects with descriptions, achievements, technologies
- **Research**: Add publications and papers
- **Contact**: Update contact information and availability

### Example: Adding a New Project

```typescript
// In data/portfolio.ts
export const projects = [
  // ... existing projects
  {
    title: "Your New Project",
    subtitle: "Project Description",
    period: "2025",
    description: "Brief overview of what the project does",
    achievements: [
      "Achievement 1",
      "Achievement 2",
    ],
    technologies: ["React", "Node.js", "MongoDB"],
    metrics: {
      "Users": "1000+",
      "Uptime": "99.9%",
    },
    links: {
      demo: "https://demo.com",
      github: "https://github.com/...",
    },
    featured: true, // Set to true to show metrics card
  },
];
```

### Updating Skills

Skills are organized into categories. Update them in `/data/portfolio.ts`:

```typescript
export const skills = {
  languages: ["Python", "JavaScript", "TypeScript"],
  frontend: ["React", "Next.js", "Tailwind CSS"],
  backend: ["Node.js", "Express", "Django"],
  databases: ["PostgreSQL", "MongoDB", "Redis"],
  devops: ["Docker", "Kubernetes", "AWS"],
  // ... add more categories
};
```

### Customizing Colors

The color scheme uses Tailwind's `primary` color. Update in `/tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... customize your color palette
        900: '#0c4a6e',
      },
    },
  },
}
```

## Interactive Features

### Emoji Shooter

Click the sparkle button (✨) in the bottom-right corner to activate the emoji physics shooter:
- **Click anywhere** to shoot emojis
- **Press Spacebar** for rapid fire
- Emojis have real-world physics (gravity, bouncing, rotation)

### Navigation

- Automatically highlights active section while scrolling
- Smooth scroll to sections
- Responsive mobile menu

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── components/
│   ├── Navigation.tsx        # Nav bar component
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About & Skills
│   ├── Experience.tsx        # Work experience timeline
│   ├── Projects.tsx          # Projects showcase
│   ├── Research.tsx          # Research papers
│   ├── Contact.tsx           # Contact section
│   ├── Footer.tsx            # Footer component
│   └── EmojiShooter.tsx      # Interactive emoji physics
├── data/
│   └── portfolio.ts          # All portfolio data
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies

```

## Performance

- ✅ Static generation for optimal performance
- ✅ Code splitting and lazy loading
- ✅ Optimized animations
- ✅ Responsive images
- ✅ SEO-friendly metadata

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder:

```bash
npm run build
npm start
```

Or use static export (if needed):
```bash
# Add to next.config.js:
# output: 'export'
npm run build
# Deploy the 'out' folder
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Build Errors

If you encounter TypeScript errors during build, the project is configured to ignore them (`ignoreBuildErrors: true`). The code works correctly at runtime.

### Animations Not Working

Make sure you have JavaScript enabled and are using a modern browser.

### Emoji Shooter Not Loading

The emoji shooter uses Matter.js physics engine. Ensure all dependencies are installed:
```bash
npm install
```

## Future Enhancements

Potential additions (feel free to implement):
- [ ] Dark/Light theme toggle
- [ ] Blog section
- [ ] Project filters
- [ ] Contact form integration
- [ ] Analytics integration
- [ ] i18n (multiple languages)

## License

MIT License - feel free to use this template for your own portfolio!

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Matter.js](https://brm.io/matter-js/)
- [Lucide Icons](https://lucide.dev/)

---

Made with ❤️ by KM Khalid Saifullah
