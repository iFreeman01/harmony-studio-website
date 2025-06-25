// Instagram API configuration endpoint
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    // Check configuration status
    const hasAccessToken = !!process.env.INSTAGRAM_ACCESS_TOKEN;
    const hasUserId = !!process.env.INSTAGRAM_USER_ID;

    return res.status(200).json({
      configured: hasAccessToken && hasUserId,
      hasAccessToken,
      hasUserId,
      message: hasAccessToken && hasUserId 
        ? 'Instagram API is configured' 
        : 'Instagram API tokens not configured'
    });
  }

  if (req.method === 'POST') {
    // This endpoint could be used to validate tokens (in a secure environment)
    const { accessToken, userId } = req.body;

    if (!accessToken || !userId) {
      return res.status(400).json({
        error: 'Access token and user ID are required'
      });
    }

    try {
      // Validate the token by making a test request
      const testResponse = await fetch(
        `https://graph.instagram.com/${userId}?fields=id,username&access_token=${accessToken}`
      );

      if (!testResponse.ok) {
        throw new Error('Invalid Instagram credentials');
      }

      const userData = await testResponse.json();

      return res.status(200).json({
        valid: true,
        user: userData,
        message: 'Instagram credentials are valid'
      });

    } catch (error) {
      return res.status(400).json({
        valid: false,
        error: 'Invalid Instagram credentials',
        message: error.message
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
} 