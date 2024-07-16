/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        keyframes: {
          slidein: {
            from: {
              opacity: "0",
              transform: "translateY(-15px)",
            },
            to: {
              opacity: "1",
              transform: "translateY(0)",
            },
          },
        },
        animation: {
          slidein: "slidein 1s ease forwards",
          slidein100: "slidein 1s ease 100ms forwards",
          slidein200: "slidein 1s ease 200ms forwards",
          slidein300: "slidein 1s ease 300ms forwards",
          slidein400: "slidein 1s ease 400ms forwards",
          slidein500: "slidein 1s ease 500ms forwards",
          slidein1300: "slidein 1s ease 1300ms forwards"
        },
        textShadow: {
          'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
          // Add more if needed
        },
      }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
  }
  ],
}

