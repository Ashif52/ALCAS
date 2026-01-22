# ALCAS Digital Services - Official Website

> 🚀 **"From Nothing to Something"** - A digital marketing agency transforming businesses through innovative digital solutions.

![ALCAS](resources/alcas/Logo.png)

---

## 📋 Project Overview

**Website URL:** [www.alcas.in](https://www.alcas.in)

**Last Updated:** January 2026

**Tech Stack:**
- HTML5
- CSS3 (Custom + Webflow styles)
- Vanilla JavaScript
- EmailJS for contact form

---

## 📁 Project Structure

```
ALCAS/
├── index.html              # Main website (single-page)
│
├── css/                    # Stylesheets (organized)
│   └── (styles moved here for production)
│
├── js/                     # JavaScript (organized)
│   └── (scripts moved here for production)
│
├── scripts/                # Original JavaScript files
│   ├── content.js          # Dynamic content management
│   ├── script1.js          # Core functionality
│   ├── script2.js          # Animations & interactions
│   ├── script3.js          # Additional features
│   ├── script4.js          # Parallax effects
│   ├── script5.js          # UI interactions
│   └── send-mail.js        # EmailJS contact form handler
│
├── resources/              # Static assets
│   ├── alcas/              # Brand assets (logo, icons)
│   ├── elements/           # UI elements
│   ├── favi/               # Favicons
│   ├── logos/              # Partner/client logos
│   └── other-images/       # Miscellaneous images
│
├── assets/                 # Organized image assets
│   └── images/
│       ├── clients/        # Client project images
│       ├── logos/          # Additional logos
│       └── misc/           # Miscellaneous images
│
├── style.css               # Primary custom styles
├── stylefile.css           # Webflow-generated styles
├── CNAME                   # GitHub Pages domain config
└── README.md               # This file
```

---

## 🎯 Key Features

### 1. **Modern Single-Page Design**
- Smooth scrolling navigation
- Animated sections with scroll effects
- Mobile-responsive layout

### 2. **Services Showcase**
- Web Design & Development
- Social Media Marketing
- SEO & Content Marketing
- Paid Advertising (Google Ads, Meta)
- Branding & Identity

### 3. **Portfolio/Works Section**
- Client case studies
- Before/after results
- Interactive project cards

### 4. **Contact Integration**
- EmailJS-powered contact form
- WhatsApp click-to-chat button
- Social media links

### 5. **WhatsApp Button** (Added Jan 2026)
- Floating button in bottom-right corner
- Pre-filled message for quick contact
- Phone: +91 9791867356

---

## 🛠️ Development Notes

### Contact Form (EmailJS)
```javascript
// EmailJS Configuration
emailjs.init("GztsTIjEgkG6ZB4mD");
// Service ID and Template ID configured in send-mail.js
```

### WhatsApp Integration
```html
<!-- Location: End of index.html, before </body> -->
<a href="https://wa.me/919791867356?text=Hi%20ALCAS%21...">
  <!-- WhatsApp button -->
</a>
```

### Styling Approach
- `style.css` - Custom overrides and additions
- `stylefile.css` - Webflow-exported base styles (DO NOT EDIT)

---

## 🚀 Deployment

**Hosting:** GitHub Pages

**Domain:** www.alcas.in (configured via CNAME)

### To Deploy Updates:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

---

## 📞 Contact Information

- **Website:** [www.alcas.in](https://www.alcas.in)
- **Instagram:** [@alcas_offz](https://instagram.com/alcas_offz)
- **LinkedIn:** [ALCAS Digital Services](https://linkedin.com/company/alcas)
- **WhatsApp:** +91 9791867356

---

## 📝 Change Log

### January 2026
- ✅ Added WhatsApp click-to-chat floating button
- ✅ Organized loose image files into `/assets/images/`
- ✅ Updated README with comprehensive documentation
- ✅ Removed AI chatbot (simplified to WhatsApp only)

### Previous Updates
- Initial website launch with Webflow design
- EmailJS contact form integration
- Social media links added

---

## ⚠️ Important Notes

1. **DO NOT edit `stylefile.css`** - This is Webflow-generated code
2. **EmailJS credentials** are in the HTML and `send-mail.js`
3. **WhatsApp number** is hardcoded in `index.html` - update if changed
4. **CNAME file** - Required for custom domain on GitHub Pages

---

## 📄 License

© 2026 ALCAS Digital Services. All rights reserved.
