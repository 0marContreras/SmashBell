/** @type {import('tailwindcss').Config} */
module.exports = {
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
        
"primary": "#1e667a",
        
"secondary": "#0443d6",
        
"accent": "#ea77c4",
        
"neutral": "#1E141F",
        
"base-100": "#2F2D39",
        
"info": "#4F9EC9",
        
"success": "#196758",
        
"warning": "#F7BA40",
        
"error": "#DB3E29",
        },
      },
    ],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("@tailwindcss/typography"), require("daisyui")
  ],
}

