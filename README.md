#Netflix GPT

1.Create React App using:
''''''''

          npm create vite@latest
''''''''
2.Configured Tailwind Css: 

'''''''

       1.   npm install -D tailwindcss postcss autoprefixer
          npx tailwindcss init -p
        2.  tailwind.config.js: 
        /** @type {import('tailwindcss').Config} */
            export default {
            content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
            ],
            theme: {
            extend: {},
            },
            plugins: [],
            }

           3.index.css
           @tailwind base;
            @tailwind components;
            @tailwind utilities; 
'''''''

##Features

>>Login/Sign Up
    -Sign In/Sign up form
    - redirect to Browse Page
>>Browse (after authentication )
    - Header
    - Main Movie
        -Trailer in Background
        -Title & Description
        - MovieSuggestion and MovieLists*N
>>NetflixGPT
     -Search Bar
     - Movie Suggestions

