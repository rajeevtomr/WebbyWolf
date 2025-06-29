# Professional Landing Page

A modern, responsive landing page built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Next.js 15** with TypeScript for type safety
- **Tailwind CSS** for styling with custom design system
- **Framer Motion** for smooth animations and transitions
- **React Hook Form** with Zod validation for forms
- **Fully Responsive** design across all screen sizes
- **SEO Optimized** with proper metadata
- **Component-based Architecture** for maintainability
- **Custom Color Palette** and typography as per requirements

## 🎨 Design System

### Colors
- Primary: `#1959AC`
- Primary Dark: `#0546D2`
- Secondary: `#0546D2`

### Typography
- **Headings**: Roboto Condensed, 42px, Bold (700), -2% letter spacing
- **Subheadings**: Inter, 20px/24px, Semi Bold (600), -2% letter spacing
- **Body**: Inter, regular weight

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with Navbar & Footer
│   ├── page.tsx           # Main page component
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components (Button, LoadingScreen)
│   └── layout/           # Layout components (Navbar, Footer)
├── sections/             # Page sections
│   ├── Hero.tsx          # Hero section with newsletter form
│   ├── Features.tsx      # Features section
│   └── Contact.tsx       # Contact section with quote form
├── lib/                  # Utilities and configurations
│   ├── utils.ts          # Utility functions
│   └── validations.ts    # Zod validation schemas
└── types/                # TypeScript type definitions
    └── index.ts          # Global types
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd assesment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Requirements Met

### ✅ Tech Stack
- [x] Next.js with TypeScript (Mandatory)
- [x] Tailwind CSS for styling
- [x] Framer Motion for animations
- [x] Zod for form validation
- [x] React Hook Form for form handling

### ✅ Responsiveness & UI
- [x] Fully responsive across all screen sizes (XS, SM, MD, LG, XL)
- [x] Smooth hover-triggered menu popups with fluid transitions
- [x] Button animations (hover, active, clicked)
- [x] Scroll-based animations (fade-ins, slide-ins)
- [x] Smooth transitions for all UI elements

### ✅ Forms & Validation
- [x] Contact Form with comprehensive validation
- [x] Newsletter Form (Hero section)
- [x] Zod validation schemas
- [x] Error messages for incorrect inputs
- [x] Success confirmation messages

### ✅ Animations & Effects
- [x] Page loading animation (full-screen)
- [x] Smooth UI transitions
- [x] Scroll-triggered animations
- [x] Hover effects and micro-interactions

### ✅ Next.js Features
- [x] SEO optimization with metadata
- [x] Loading animations
- [x] Component-based architecture
- [x] Optimized performance

## 🎯 Key Components

### Navbar
- Responsive navigation with mobile menu
- Smooth hover animations
- Fixed positioning with backdrop blur

### Hero Section
- Newsletter subscription form
- Animated content with staggered animations
- Floating elements with continuous motion

### Features Section
- Grid layout with animated cards
- Icon integration with Lucide React
- Hover effects and transitions

### Contact Section
- Comprehensive quote request form
- Form validation with error handling
- Success confirmation messages

### Footer
- Multi-column layout
- Animated content reveal
- Responsive design

## 🚀 Deployment

The project is ready for deployment on Vercel, Netlify, or any other hosting platform that supports Next.js.

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Breakpoints

- **XS**: 0px - 639px
- **SM**: 640px - 767px
- **MD**: 768px - 1023px
- **LG**: 1024px - 1279px
- **XL**: 1280px+

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    DEFAULT: '#1959AC',
    dark: '#0546D2',
  },
  secondary: {
    DEFAULT: '#0546D2',
  }
}
```

### Typography
Modify font sizes and weights in `tailwind.config.ts`:
```typescript
fontSize: {
  'heading': ['42px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
  'subheading': ['24px', { lineHeight: '1.3', letterSpacing: '-0.02em', fontWeight: '600' }],
}
```

## 📄 License

This project is created for assessment purposes.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
