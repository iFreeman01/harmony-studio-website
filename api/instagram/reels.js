// Instagram Reels API endpoint for Vercel serverless functions
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

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Instagram API configuration (tokens will be added later)
    const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
    const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;

    // Check if tokens are configured
    if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
      return res.status(200).json({
        reels: [],
        message: 'Instagram tokens not configured yet',
        configured: false
      });
    }

    // Fetch user's media (including reels)
    const mediaResponse = await fetch(
      `https://graph.instagram.com/${INSTAGRAM_USER_ID}/media?fields=id,media_type,media_url,thumbnail_url,permalink,caption,timestamp&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    if (!mediaResponse.ok) {
      throw new Error(`Instagram API error: ${mediaResponse.status}`);
    }

    const mediaData = await mediaResponse.json();

    // Filter for reels and check for @freemanstudio mentions
    const reels = mediaData.data
      ?.filter(media => media.media_type === 'VIDEO' || media.media_type === 'REEL')
      ?.filter(media => {
        // Check if caption contains @freemanstudio mention
        const caption = media.caption || '';
        return caption.toLowerCase().includes('@freemanstudio') || 
               caption.toLowerCase().includes('freemanstudio');
      })
      ?.map(reel => ({
        id: reel.id,
        mediaUrl: reel.media_url,
        thumbnailUrl: reel.thumbnail_url,
        permalink: reel.permalink,
        caption: reel.caption,
        timestamp: reel.timestamp
      }))
      ?.slice(0, 6) || []; // Limit to 6 most recent reels

    // If no reels found, also search for tagged media (requires additional permissions)
    let taggedReels = [];
    if (reels.length === 0) {
      try {
        // This would require Instagram Basic Display API or Instagram Graph API with additional permissions
        // For now, we'll return the filtered reels from user's own media
        console.log('No reels with @freemanstudio mentions found in user media');
      } catch (tagError) {
        console.error('Error fetching tagged media:', tagError);
      }
    }

    return res.status(200).json({
      reels: reels,
      configured: true,
      count: reels.length,
      message: reels.length > 0 ? 'Reels fetched successfully' : 'No reels with @freemanstudio mentions found'
    });

  } catch (error) {
    console.error('Instagram API Error:', error);
    return res.status(500).json({
      error: 'Failed to fetch Instagram reels',
      message: error.message,
      configured: false
    });
  }
} 