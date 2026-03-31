# Club Caliche - DJ Website

A bold, immersive single-page website for Caliche, a DJ specializing in hip-hop, R&B, freestyle, pop, and 80s music. Dark nightclub-inspired design with neon accents, smooth animations, and full responsiveness.

## 📁 Project Structure

```
clubcaliche/
├── index.html      # HTML structure and semantic markup
├── styles.css      # All styling, animations, and responsive design
├── script.js       # Vanilla JavaScript for interactions and DOM manipulation
└── README.md       # This file
```

## 🚀 How to Use

1. **Open the website:** Simply open `index.html` in any modern web browser
2. **No dependencies required:** Pure HTML, CSS, and vanilla JavaScript—no frameworks or external libraries
3. **Responsive design:** Works seamlessly on desktop, tablet, and mobile devices

## 🎨 Features

### Design
- **Dark nightclub aesthetic** with gradient backgrounds
- **Neon accents:** Cyan, hot pink, purple, and lime green
- **Smooth animations:** Glowing effects, floating elements, fade-in cards
- **Fully responsive** CSS Grid and Flexbox layouts

### Functionality
- **Sticky navigation header** that responds to scroll position
- **Mobile hamburger menu** that auto-closes on link selection
- **Smooth scroll navigation** between all sections
- **Active link highlighting** based on scroll position
- **Fade-in animations** triggered by Intersection Observer
- **Contact form** with real-time feedback and validation
- **Social media links** in footer (easily customizable)

### Content Sections
1. **Hero** – Bold brand introduction with call-to-action
2. **Genres Showcase** – Interactive cards for 5 music genres
3. **About/Bio** – DJ background and professional story
4. **Bookings/Contact** – Functional contact form for event inquiries
5. **Footer** – Social links and copyright

## 📝 Customization Guide

### Update Content

**Hero Section (index.html):**
```html
<h1>Club Caliche</h1>
<p class="tagline">Rhythm. Sound. Energy. 🎧</p>
```

**About Image (index.html):**
Replace the `.about-image` div with:
```html
<img src="your-dj-photo.jpg" alt="Caliche DJ" style="width: 100%; height: 100%; object-fit: cover;">
```

**Contact Email (index.html):**
Update the email placeholder:
```html
<span style="color: var(--accent-neon-cyan);">your-email@example.com</span>
```

**Social Media Links (index.html, footer):**
```html
<a href="https://instagram.com/your-handle" target="_blank" class="social-link">📷</a>
```

### Customize Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-dark: #0a0e27;           /* Main background */
    --secondary-dark: #1a1f3a;         /* Section backgrounds */
    --accent-neon-cyan: #00f7ff;       /* Primary accent */
    --accent-neon-pink: #ff006e;       /* Secondary accent */
    --accent-neon-purple: #b537f2;     /* Tertiary accent */
    --accent-neon-lime: #39ff14;       /* Success/highlight */
}
```

### Connect Contact Form to Backend

Currently, the form logs data to the browser console. To integrate with a backend service:

```javascript
// In script.js, replace the form handler with:
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        event: document.getElementById('event').value,
        message: document.getElementById('message').value
    };
    
    try {
        const response = await fetch('your-backend-endpoint.com/submit-booking', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        // Handle response...
    } catch (error) {
        console.error('Error:', error);
    }
});
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop:** 1024px and above
- **Tablet:** 768px to 1023px
- **Mobile:** 480px to 767px
- **Small Mobile:** Below 480px

## 🔧 Performance Optimizations

- Lightweight CSS animations using `transform` and `opacity`
- Intersection Observer for efficient scroll animations
- CSS custom properties for efficient variable management
- Minimal JavaScript footprint (~5.5KB unminified)
- Optimized media queries for mobile-first design

## 📂 File Sizes

- `index.html` – ~8KB
- `styles.css` – ~15KB
- `script.js` – ~5.5KB
- **Total:** ~28.5KB (highly compressible for production)

## 💡 Tips for Deployment

1. **Minify CSS/JS** before production for faster load times
2. **Add meta tags** for SEO and social sharing (og:image, og:description, etc.)
3. **Optimize images** before replacing placeholders
4. **Add Google Analytics** or tracking code to `index.html`
5. **Set up email service** for contact form submissions (Formspree, SendGrid, etc.)

## 🎵 Feel the Rhythm. Experience the Energy. 🎧

Designed to deliver an immersive brand experience that captures the essence of Club Caliche's diverse music identity.

---

**Made with passion for the music.** ✨
