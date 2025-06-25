# Instagram API Setup Guide

This guide will help you set up the Instagram Basic Display API to enable the Instagram Reels feature on the Casa Koba website.

## Prerequisites

- Facebook Developer Account
- Instagram Business or Creator Account
- Vercel account for deployment

## Step 1: Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" → "Create App"
3. Choose "Consumer" as the app type
4. Fill in app details:
   - App Name: "Casa Koba Studio"
   - App Contact Email: your email
   - App Purpose: "Business"

## Step 2: Add Instagram Basic Display Product

1. In your Facebook App dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Go to Instagram Basic Display → Basic Display

## Step 3: Configure Instagram Basic Display

1. **Valid OAuth Redirect URIs**: Add these URLs:
   ```
   https://your-domain.vercel.app/
   https://localhost:5173/
   ```

2. **Deauthorize Callback URL**:
   ```
   https://your-domain.vercel.app/api/instagram/deauth
   ```

3. **Data Deletion Request URL**:
   ```
   https://your-domain.vercel.app/api/instagram/delete
   ```

## Step 4: Create Instagram Test User

1. Go to "Instagram Basic Display" → "Basic Display"
2. Scroll to "User Token Generator"
3. Click "Add or Remove Instagram Testers"
4. Add your Instagram account as a tester
5. Accept the invitation on Instagram

## Step 5: Generate Access Token

1. In "User Token Generator" section
2. Click "Generate Token" next to your Instagram account
3. Authorize the app on Instagram
4. Copy the generated **User Access Token**
5. Copy the **User ID** (displayed after token generation)

## Step 6: Get Long-Lived Access Token

Instagram User Access Tokens expire after 1 hour. Convert to long-lived token (60 days):

```bash
curl -i -X GET "https://graph.instagram.com/access_token
  ?grant_type=ig_exchange_token
  &client_secret={your-app-secret}
  &access_token={your-short-lived-token}"
```

Or use this API endpoint in your browser:
```
https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=YOUR_SHORT_LIVED_TOKEN
```

## Step 7: Set Environment Variables

### For Local Development

Create `.env.local` file:
```env
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token
INSTAGRAM_USER_ID=your_instagram_user_id
INSTAGRAM_APP_ID=your_facebook_app_id
INSTAGRAM_APP_SECRET=your_facebook_app_secret
```

### For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to "Settings" → "Environment Variables"
3. Add each variable:
   - `INSTAGRAM_ACCESS_TOKEN`
   - `INSTAGRAM_USER_ID`
   - `INSTAGRAM_APP_ID`
   - `INSTAGRAM_APP_SECRET`

## Step 8: Test the Integration

1. Deploy your changes to Vercel
2. Visit your website's Gallery page
3. Check if Instagram Reels section loads properly
4. Test API endpoints:
   - `GET /api/instagram/config` - Should return `configured: true`
   - `GET /api/instagram/reels` - Should return reels data

## Step 9: App Review (Production)

For production use, you need Facebook App Review:

1. Go to "App Review" in your Facebook App
2. Request permissions:
   - `instagram_graph_user_profile`
   - `instagram_graph_user_media`
3. Provide detailed use case explanation
4. Submit for review

## Token Refresh

Long-lived tokens expire after 60 days. Set up automatic refresh:

```javascript
// Example refresh endpoint
const refreshToken = async (currentToken) => {
  const response = await fetch(
    `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`
  );
  return response.json();
};
```

## Troubleshooting

### Common Issues

1. **"Invalid OAuth access token"**
   - Check if token has expired
   - Ensure token is long-lived
   - Verify Instagram account is still a tester

2. **"Application does not have permission"**
   - Complete App Review process
   - Check required permissions are approved

3. **"User does not exist"**
   - Verify User ID is correct
   - Ensure Instagram account is connected

4. **CORS Errors**
   - Check Vercel CORS configuration
   - Verify redirect URIs in Facebook App

### Testing API Endpoints

Test your configuration:

```bash
# Check configuration
curl https://your-domain.vercel.app/api/instagram/config

# Fetch reels
curl https://your-domain.vercel.app/api/instagram/reels
```

## Security Best Practices

1. **Never commit tokens to git**
2. **Use environment variables only**
3. **Regularly rotate access tokens**
4. **Monitor API usage in Facebook Developer dashboard**
5. **Implement rate limiting**

## API Limits

Instagram Basic Display API limits:
- 200 requests per hour per user
- Rate limiting applies per access token

## Support

- [Instagram Basic Display API Documentation](https://developers.facebook.com/docs/instagram-basic-display-api)
- [Facebook Developer Community](https://developers.facebook.com/community/)
- Casa Koba development team

## Next Steps

After setup is complete:
1. Monitor API usage
2. Set up token refresh automation
3. Consider implementing caching for better performance
4. Add error monitoring and logging 