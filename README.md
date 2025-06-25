# Freeman Studio

**Professional Music Recording Studio Website**

Freeman Studio is a modern, fully responsive website for a premium music recording studio. The website showcases the studio's services, facilities, and expertise while providing clients with an easy way to connect and book sessions.

## 🎵 What is Freeman Studio?

Freeman Studio is a home-based recording studio dedicated to bringing artists' musical visions to life. We offer comprehensive audio services including recording, mixing, mastering, and specialized services like Dolby Atmos spatial audio and session drumming.

## ✨ Website Features

### **Multi-Language Support**
- English and Spanish language options
- Complete translation coverage for all content
- Seamless language switching

### **Professional Services Showcase**
- **Recording**: State-of-the-art facilities with premium equipment
- **Mixing & Mastering**: Expert audio engineering services  
- **Dolby Atmos**: Immersive spatial audio for modern platforms
- **Session Drums**: Professional drumming services
- **Production**: Full-scale music production from concept to master

### **Interactive Experience**
- Smooth page transitions and animations
- Light/dark theme toggle
- Responsive design for all devices
- Professional gallery with audio samples
- Direct contact integration (email & WhatsApp)

### **Client-Focused Design**
- Clear service descriptions and pricing
- Easy booking process
- Studio tour through photo gallery
- Client testimonials and success stories
- About section highlighting expertise and passion

### **Contact & Booking**
- Direct email integration for detailed inquiries
- WhatsApp chat for quick assistance  
- Professional consultation scheduling
- Custom quote requests

The website serves as both a portfolio showcasing Freeman Studio's capabilities and a professional platform for client acquisition and project management.

---

*Built with modern web technologies to provide a premium experience that reflects the quality of our audio services.*

## Instagram Reels Integration

The website now includes an Instagram Reels section that displays reels where the studio has been tagged with `@freemanstudio`. This feature uses:

- **Vercel Serverless Functions**: API endpoints for Instagram data fetching
- **Instagram Basic Display API**: To retrieve user media and tagged content
- **Real-time Updates**: Automatic fetching of new reels
- **Responsive Design**: Mobile-optimized reel display with modal previews

### Instagram API Setup

1. Create an Instagram Developer Account
2. Set up an Instagram Basic Display App
3. Configure environment variables:
   ```
   INSTAGRAM_ACCESS_TOKEN=your_access_token
   INSTAGRAM_USER_ID=your_user_id
   ```
4. Deploy to Vercel with environment variables configured

## Tech Stack

- **Frontend**: React 18, Vite, Styled Components
- **Animation**: Framer Motion
- **Backend**: Vercel Serverless Functions
- **APIs**: Instagram Basic Display API, Spotify Embed
- **Deployment**: Vercel
- **Styling**: CSS-in-JS with styled-components
- **Icons**: Custom SVG icons

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn
- Instagram Developer Account (for reels integration)

### Installation

1. Clone the repository
```bash
git clone [repository-url]
cd cursorProyect
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env.local
# Edit .env.local with your Instagram API credentials
```

4. Start development server
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Deployment

This project is configured for Vercel deployment:

1. Connect your repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## API Endpoints

### Instagram Reels
- `GET /api/instagram/reels` - Fetch reels with @freemanstudio mentions
- `GET /api/instagram/config` - Check API configuration status
- `POST /api/instagram/config` - Validate Instagram credentials

## Project Structure

```
cursorProyect/
├── api/                    # Vercel serverless functions
│   └── instagram/         # Instagram API endpoints
├── src/
│   ├── components/        # Reusable components
│   │   ├── InstagramReels.jsx  # Instagram reels component
│   │   └── ...
│   ├── pages/            # Page components
│   ├── context/          # React context providers
│   ├── styles/           # Global styles and theme
│   └── utils/            # Utility functions
├── public/               # Static assets
└── vercel.json          # Vercel configuration
```

## Environment Variables

Create a `.env.local` file with the following variables:

```env
INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token
INSTAGRAM_USER_ID=your_instagram_user_id
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support or questions, contact the development team or open an issue in the repository. 