/** @type {import('tailwindcss').Config} */
module.exports = {
  theme:{
    extend:{
      width:{
        '128':'32rem'
      }
    }
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1e40af",
        
"secondary": "#f3f4f6",
        
"accent": "#1FB2A5",
        
"neutral": "#191D24",
        
"base-100": "#1f2937",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"), require("daisyui")
  ],
}

