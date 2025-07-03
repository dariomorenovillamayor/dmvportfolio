import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default async function Icon() {
  try {
    // Try to fetch the avatar from the public directory
    const avatarResponse = await fetch(new URL('/images/avatar.jpeg', 'http://localhost:3000'));
    if (!avatarResponse.ok) {
        throw new Error('Failed to fetch avatar');
    }
    const avatarBuffer = await avatarResponse.arrayBuffer();

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg,rgb(78, 121, 94), #10b981)',
            borderRadius: '50%',
          }}
        >
          <img
            src={avatarBuffer as any}
            alt="Dario Moreno Villamayor"
            style={{
              width: '85%',
              height: '85%',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </div>
      ),
      {
        ...size,
      }
    );
  } catch (error) {
    // Fallback to a simple gradient icon
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #22c55e, #10b981)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          DM
        </div>
      ),
      {
        ...size,
      }
    );
  }
} 