# Derek Engles Portfolio Website

A modern, responsive portfolio website showcasing technology projects and hospitality expertise.

## 📁 Project Structure

```
new-personal-brand-site/
├── index.html          # Main landing page
├── about.html          # About page
├── README.md           # Documentation (this file)
├── css/
│   ├── styles.css      # Main stylesheet with CSS variables and components
│   └── about.css       # About page specific styles
├── js/
│   └── main.js         # JavaScript for interactions and animations
└── images/
    ├── founder_image.png
    ├── beverage_website.png
    ├── bfyi-website.png
    ├── rs-website.png
    ├── st-website.png
    ├── tech-stack.png
    ├── tbc-book.png
    ├── rs-book.png
    ├── wf-book.png
    ├── social-icon-1-ig.svg
    ├── social-icon-2-tt.svg
    ├── social-icon-3-li.svg
    └── social-icon-4-git.svg
```

## 🎨 Design System

### Colors
- **Black**: #030901 (Header & Footer)
- **White**: #FFFFFF
- **Main Background**: #fafafa
- **Light Gray**: #f5f5f5
- **Medium Gray**: #e8e8e8
- **Cobalt Blue**: #004aad (Full Stack section)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Open Sans (sans-serif)

### Breakpoints
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🚀 Deployment Instructions

### Step 1: Prepare Your Files

1. **Verify all files are in place**:
   - All HTML files (index.html, about.html)
   - CSS folder with both stylesheets
   - JS folder with main.js
   - Images folder with all assets

2. **Test locally**:
   - Open index.html in your browser
   - Test all links and navigation
   - Check responsive design at different screen sizes
   - Verify all images load correctly

### Step 2: Git Setup and Deployment

#### Initialize Git Repository (if not already done)
```bash
# Navigate to your project folder
cd new-personal-brand-site

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial portfolio website build"
```

#### Connect to GitHub
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Framework Preset: Select "Other"
   - Build Settings: Leave as default (no build command needed for static site)
   - Click "Deploy"

2. **Via Vercel CLI** (alternative):
```bash
# Install Vercel CLI
npm i -g vercel

# In your project folder
vercel

# Follow the prompts
```

3. **Update Vercel Settings**:
   - Go to Project Settings > Domains
   - Add your custom domain (derekengles.com)

### Step 4: Update GoDaddy DNS

1. **Log into GoDaddy**
2. **Navigate to DNS Management** for derekengles.com
3. **Update/Add Records**:

For apex domain (derekengles.com):
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600
```

For www subdomain:
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 600
```

4. **Remove old records** pointing to your previous hosting
5. **Wait for propagation** (can take up to 48 hours, usually much faster)

### Step 5: Verify Deployment

1. **In Vercel Dashboard**:
   - Go to Project Settings > Domains
   - Verify domain shows "Valid Configuration" ✓

2. **Test your site**:
   - Visit https://derekengles.com
   - Visit https://www.derekengles.com
   - Both should work with HTTPS

### Step 6: Migration Checklist

Before switching from old to new site:

- [ ] Test all links on new site
- [ ] Verify all images load
- [ ] Test on mobile devices
- [ ] Check contact links (mailto: links)
- [ ] Test smooth scrolling
- [ ] Verify social media links
- [ ] Test all external links (Amazon, project sites)
- [ ] Add Google Analytics (if needed)
- [ ] Create 404 page (optional)
- [ ] Add sitemap.xml for SEO
- [ ] Add robots.txt

## 📝 Future Enhancements

Consider adding these features:
- Contact form with backend integration
- Blog section
- Project case studies with detailed pages
- Newsletter signup
- Dark mode toggle
- Loading animations
- SEO meta tags for all pages
- Google Analytics integration
- Testimonials section

## 🛠 Maintenance

### Updating Content
1. Edit HTML files directly for text changes
2. Replace images in the images folder (keep same filenames)
3. Update CSS variables in styles.css for design changes

### Adding New Sections
1. Add HTML structure in index.html
2. Create corresponding CSS in styles.css
3. Add any interactions in main.js
4. Test responsive behavior

### Performance Optimization
- Compress images before uploading
- Minify CSS and JS for production
- Consider lazy loading for images
- Enable caching headers in Vercel

## 📧 Contact

For any questions about deployment or the codebase:
**Derek Engles** - derekengles@gmail.com

---

*Built with modern web standards: HTML5, CSS3, and vanilla JavaScript*