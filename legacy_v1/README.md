# Mthobisi Zungu - Portfolio Website

A modern, professional portfolio website showcasing software engineering skills, projects, and experience.

## 🌟 Features

- **Dark Theme Design**: Premium dark navy background with vibrant blue/cyan/purple gradient accents
- **Smooth Animations**: GSAP-powered entrance and scroll-triggered animations
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Glassmorphism UI**: Modern translucent cards with backdrop blur effects
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic navigation
- **Accessibility**: Keyboard navigation, screen reader support, reduced motion support
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML

## 📋 Sections

1. **Hero** - Eye-catching introduction with animated gradient background
2. **About** - Professional bio with stats cards
3. **Skills** - Technical skills organized by category
4. **Projects** - Portfolio of 4 featured projects with descriptions
5. **Experience** - Professional timeline with detailed responsibilities
6. **Education** - Academic credentials and certifications
7. **Contact** - Contact form and information

## 🚀 Quick Start

### View Locally

1. **Using Python HTTP Server** (Recommended):
   ```bash
   cd emerald-zodiac
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser.

2. **Direct File Access**:
   Simply open `index.html` in your web browser.

### Project Structure

```
emerald-zodiac/
├── index.html              # Main HTML file
├── css/
│   ├── reset.css          # CSS reset
│   ├── variables.css      # Design system variables
│   ├── global.css         # Global styles
│   ├── components.css     # Reusable components
│   ├── sections.css       # Section-specific styles
│   └── responsive.css     # Media queries
├── js/
│   ├── utils.js          # Utility functions
│   ├── animations.js     # GSAP animations
│   ├── form.js          # Contact form handling
│   └── main.js          # Main JavaScript
└── assets/
    ├── images/          # Profile and project images
    ├── icons/           # Favicon and icons
    └── documents/       # CV/Resume PDF
```

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript (ES6+)** - No frameworks
- **GSAP 3.12** - Professional animations
- **Font Awesome 6.4** - Icons
- **Google Fonts** - Space Grotesk, Inter, JetBrains Mono

## ⚙️ Configuration

### EmailJS Setup (Contact Form)

1. Create a free account at [EmailJS.com](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Update `js/form.js` with your credentials:
   ```javascript
   // Line 5-7
   emailjs.init("YOUR_USER_ID");
   
   // Line 45
   emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
   ```

### Update Personal Information

1. **Social Media Links** (`index.html`):
   - LinkedIn: Lines 550, 700
   - GitHub: Lines 555, 705

2. **Project Links** (`index.html`):
   - Update all `href="#"` placeholders with real URLs

3. **CV/Resume**:
   - Replace `assets/documents/cv.pdf` with your actual CV

4. **Profile Photo**:
   - Replace `assets/images/profile.jpg` with your professional headshot

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Wide**: 1440px+

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators on interactive elements
- Reduced motion support
- Alt text on all images
- Color contrast meets WCAG AA standards

## 🎨 Customization

### Colors

Edit `css/variables.css` to change the color scheme:
```css
:root {
  --primary: #3b82f6;        /* Change primary color */
  --secondary: #06b6d4;      /* Change secondary color */
  --background-dark: #0f172a; /* Change background */
}
```

### Typography

Change fonts in `css/variables.css`:
```css
:root {
  --font-heading: 'Space Grotesk', Arial, sans-serif;
  --font-body: 'Inter', Helvetica, sans-serif;
}
```

### Animations

Modify or disable animations in `js/animations.js`.

## 🚀 Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```
3. Go to Settings > Pages
4. Select `main` branch and save
5. Your site will be live at `https://yourusername.github.io/portfolio`

### Netlify

1. Drag and drop the `emerald-zodiac` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be live instantly with a random URL
3. Optional: Configure custom domain in site settings

## 📊 Performance

- **Lighthouse Score Target**: 90+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Total Page Size**: < 2MB
- **Animation Frame Rate**: 60fps

## 🐛 Known Issues

- EmailJS integration requires user configuration
- Social media links are placeholders
- Project repository links need to be updated
- CV PDF is a placeholder

## 📝 To-Do

- [ ] Add real profile photo
- [ ] Configure EmailJS
- [ ] Update social media links
- [ ] Add project repository URLs
- [ ] Upload actual CV PDF
- [ ] Optimize images (WebP format)
- [ ] Run Lighthouse audit
- [ ] Deploy to production

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Mthobisi Innocent Zungu**
- Email: mthobisiinnocent373@gmail.com
- Phone: +27 65 807 7607
- Location: Pretoria, Gauteng, South Africa

---

Built with ❤️ using HTML, CSS, and JavaScript
