/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      spacing: {
        15: "3.75rem", // 60px
        18: "4.5rem", // 72px - 1 rem = 4 tailwind units = 16 px
        22: "5.5rem", // 88px
        68: "17rem", // 272px
        76: "19rem", // 304px
        88: "22rem", // 352px
        90: "22.5rem", // 360px
        100: "25rem", // 400px
        104: "26rem", // 416px
        112: "28rem", // 448px
        120: "30rem", // 480px
        124: "31rem", // 496px
        128: "32rem", // 512px
        136: "34rem", // 544px
        144: "36rem", // 578px
        152: "38rem", // 600px
        160: "40rem", // 640px
        176: "44rem", // 704px
        192: "48rem", // 768px
        200: "50rem", // 800px
        208: "52rem", // 832px
        240: "60rem", // 960px
        272: "68rem", // 1088px
        300: "75rem", // 1200px
        304: "76rem", // 1216px
        336: "84rem", // 1344px
        368: "92rem", // 1472px
        400: "100rem", // 1600px
        432: "108rem", // 1728px
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
