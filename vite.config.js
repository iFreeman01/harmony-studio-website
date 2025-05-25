import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    headers: {
      // Content Security Policy headers
      "Content-Security-Policy": `
        default-src 'self';
        script-src 'self' 'unsafe-inline' https://open.spotify.com https://www.youtube-nocookie.com;
        style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
        font-src 'self' https://fonts.gstatic.com;
        img-src 'self' https://images.unsplash.com https://open.spotify.com data:;
        frame-src https://www.google.com https://open.spotify.com https://www.youtube-nocookie.com https://www.youtube.com;
        connect-src 'self' https://open.spotify.com https://www.youtube-nocookie.com;
        object-src 'none';
        base-uri 'self';
      `.replace(/\s+/g, ' ').trim(),
      // Additional security headers
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
    }
  },
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: true
  },
  preview: {
    allowedHosts: [
      'localhost',
      'b42a-2806-262-486-8163-d597-a415-f5a-d67d.ngrok-free.app'
    ]
  }
}) 