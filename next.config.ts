import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Every image is now self-hosted from /public, so no remote hosts are needed.
    // The icon set is SVG, and the optimizer rejects SVG unless this is enabled —
    // safe here because we only ever serve our own files.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}

export default nextConfig
