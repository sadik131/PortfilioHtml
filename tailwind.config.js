/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '0px',
      screens: {
        'lg': '1366px',
      },
    },
    extend: {
      textShadow: {
        md: '2px 2px 4px rgba(0, 0, 0, 0.3)',
      },
      backgroundImage:{
        "heroImage":"url('./img/projectHero.png')"
      },
      colors: {
        primary: "#494E59",
        color1: "#EEEEEE",
        bgColor: "#222831",
        contentTextColor: "#75A2E9",
        color3:"#00ADB5"

      },
      fontFamily: {
        poppin: ["Poppins", "sans-serif"],
        oswale: ["Oswald", "sans-serif"]
      },
    },
  },
  plugins: [],
}

