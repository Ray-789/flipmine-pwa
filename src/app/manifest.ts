import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return{
    name: "FlipMine2",
    short_name: "FlipMine",
    description: "A platform for flipping and mining digital assets.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1976d2",
    icons: [
        {
            src: "./s1.png",
            sizes: "192x192",
            type: "image/png"
        },
        {
            src: "./s2.png",
            sizes: "256x256",
            type: "image/png"
        },
        {
            src: "./s3.png",
            sizes: "512x512",
            type: "image/png"
        }
    ],
    lang: "en-US"
}
}





