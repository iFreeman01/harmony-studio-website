# Music Studio Website

A professional, modern, and fully responsive website for a premium music recording studio built with React and Vite. This project showcases a visually appealing design with smooth animations and a user-friendly interface.

## 🚀 Features

- **Modern Design**: Sleek, professional UI inspired by top recording studio websites
- **Fully Responsive**: Mobile-first approach ensuring perfect display on all devices
- **Interactive Elements**: Engaging animations and transitions using Framer Motion
- **Page Transitions**: Smooth page transitions for a premium feel
- **Reusable Components**: Well-structured, modular code
- **Form Validation**: Client-side validation for the contact form
- **Image Gallery**: Filterable gallery with lightbox functionality
- **Accessible**: ARIA attributes and keyboard navigation support

## 🛠️ Technologies Used

- **React 18**: Modern component-based UI library
- **Vite**: Next generation frontend tooling
- **React Router**: For seamless page navigation
- **Styled Components**: CSS-in-JS for component styling
- **Framer Motion**: Animation library for React
- **Form Validation**: Using Yup and DOMPurify for secure input handling

## 📋 Pages

1. **Home**: Hero section with video background, services overview, and testimonials
2. **About**: Studio history, team profiles, and facilities information
3. **Services**: Detailed service descriptions and pricing packages
4. **Gallery**: Filterable image grid with lightbox functionality
5. **Contact**: Form with validation and Google Maps integration

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or newer)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## 📤 Sharing Previews

### Local Preview
To generate and preview a production build locally:

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```
The preview will be available at `http://localhost:4173`

### Public Preview (Temporary)
To create a temporary public URL for client review:

1. Install ngrok globally (if not already installed):
```bash
npm install -g ngrok
```

2. Start the preview server:
```bash
npm run build && npm run preview
```

3. In a new terminal, create a temporary public URL:
```bash
npx ngrok http 4173
```

The ngrok URL will be displayed in the terminal. Note that this URL expires when the ngrok process stops.

### Security Notes
- Never commit the `dist/` folder or `.env` files to the repository
- Before sharing previews, scan the `dist/` folder for any accidental secrets or API keys
- If using environment variables, ensure they are properly configured in your deployment platform

## 🏗️ Project Structure

```
/
├── public/             # Static assets
├── src/
│   ├── assets/         # Images and other assets
│   ├── components/     # Reusable components
│   │   ├── Button.jsx  # Button component
│   │   ├── Footer.jsx  # Footer component
│   │   ├── Navbar.jsx  # Navigation component
│   │   ├── PageHeader.jsx    # Page header component
│   │   ├── SectionHeader.jsx # Section header component
│   │   ├── ServiceCard.jsx   # Service card component
│   │   └── ThemeToggle.jsx   # Theme toggle component
│   ├── context/        # React context providers
│   ├── pages/          # Page components
│   │   ├── Home.jsx    # Home page
│   │   ├── About.jsx   # About page
│   │   ├── Services.jsx # Services page
│   │   ├── Gallery.jsx # Gallery page
│   │   └── Contact.jsx # Contact page
│   ├── styles/         # Global styles and theme
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
└── vite.config.js      # Vite configuration
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Acknowledgements

- Images from [Unsplash](https://unsplash.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Inspired by professional recording studio websites 