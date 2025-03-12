# Sylvan North Forestry Website

This repository contains the website for Sylvan North Forestry, a sustainable forestry and carbon sequestration initiative in Northern Ontario.

## About the Project

Sylvan North Forestry is dedicated to:
- Acquiring and restoring 100+ acres of land in Northern Ontario
- Practicing sustainable timber harvesting
- Operating a tree nursery for native species
- Implementing agroforestry systems
- Generating carbon credits

## Website Features

- Responsive design that works on all devices
- Crowdfunding functionality to support the initiative
- Information about our mission, approach, and impact
- Contact form for inquiries
- Newsletter signup

## Technical Implementation

This website is built using:
- HTML5, CSS3, and JavaScript
- No framework dependencies
- Hosted on GitHub Pages
- Form handling via Formspree

## Setup Instructions

### Local Development

1. Clone this repository
```bash
git clone https://github.com/yourusername/sylvannorth.github.io.git
cd sylvannorth.github.io
```

2. Open the project in your code editor

3. Preview locally with a simple server (if you have Python installed)
```bash
# If you have Python 3
python -m http.server

# If you have Python 2
python -m SimpleHTTPServer
```

4. Visit `http://localhost:8000` in your browser

### Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch.

## Customization

### Content Updates

Most content can be updated by editing the `js/data.js` file, including:
- Funding progress and goals
- Services and projects information
- Impact metrics
- Testimonials

### Image Replacement

Replace placeholder images in the `images` directory with your own images. Make sure to maintain the same file names or update the references in the code.

### Form Setup

1. Create an account at [Formspree](https://formspree.io/)
2. Create two forms (one for contact, one for newsletter)
3. Replace the placeholder form action URLs in `index.html` with your own Formspree form URLs

### Payment Integration

To integrate payment processing:
1. Update the payment configuration in `js/data.js`
2. Uncomment and configure the payment integration code in `js/main.js`

## Directory Structure

```
sylvannorth.github.io/
├── index.html          # Main HTML file
├── CNAME               # Custom domain configuration
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   ├── data.js         # Content configuration
│   └── main.js         # JavaScript functionality
├── images/             # Website images
└── README.md           # This file
```

## License

This project is copyright © 2025 Sylvan North Forestry. All rights reserved.

## Contact

For questions or support, contact info@sylvannorth.com.
