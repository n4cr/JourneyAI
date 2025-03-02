# Journey.ai Landing Page

This is a landing page for Journey.ai, showcasing AI implementation services for Go-To-Market strategies.

## Features

- **Responsive Design**: Works on all devices from mobile to desktop
- **Modern UI**: Clean, professional design with smooth interactions
- **Lead Capture Form**: Contact form to capture potential client information
- **Service Showcasing**: Clear presentation of the company's service offerings
- **Team Section**: Introduction to the team members
- **GitHub Pages Integration**: Automatic deployment to GitHub Pages

## Getting Started

### Prerequisites

- Any modern web browser
- A web server (can be a local development server)
- Git (for version control and deployment)

### Installation

1. Clone this repository or download the files
2. Host the files on a web server
3. Open index.html in a web browser

### GitHub Pages Deployment

This repository is set up to automatically deploy to GitHub Pages when changes are pushed to the main branch.

To set up GitHub Pages deployment:

1. Fork or clone this repository to your GitHub account
2. Go to your repository settings
3. Navigate to the "Pages" section
4. Under "Source", select "GitHub Actions"
5. Push changes to the main branch to trigger automatic deployment

The deployment workflow is defined in `.github/workflows/deploy.yml`.

## Customization

### Replacing Placeholder Images

The landing page uses placeholder images. Replace them with actual images:

1. Replace all occurrences of `https://via.placeholder.com/...` in the HTML with real image URLs
2. Recommended image sizes:
   - Team photos: 300x300px (square)
   - Service illustrations: 500x400px

### Customizing Colors

The color scheme can be modified in the `styles.css` file. Look for the `:root` section at the top:

```css
:root {
    --primary: #2563EB; /* Primary brand color */
    --primary-dark: #1D4ED8; /* Darker variant of primary */
    --secondary: #0F172A; /* Secondary color */
    /* other color variables */
}
```

### Form Submission

The current form simply shows a success message when submitted. To make it functional:

1. Set up a server-side endpoint to receive form data
2. Modify the form submission code in `script.js` to send data to your endpoint
3. Implement email notifications or CRM integration as needed

## Lead Capture

The contact form collects the following information:
- Full Name
- Company Name
- Email Address
- Phone Number (optional)
- Team Size (optional)
- Message/Inquiry

This data can be integrated with:
- CRM systems
- Email marketing platforms
- Lead tracking software

## Browser Compatibility

This landing page is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

All rights reserved, Journey.ai

## Contact

For questions about this website, please contact:
- Stephane Maes: stephane@semicolon.io
- Nasir Shadravan: nasir@semicolon.io 