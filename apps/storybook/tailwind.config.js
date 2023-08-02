// const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        disabled: {
          DEFAULT: 'hsl(var(--disabled))',
          foreground: 'hsl(var(--disabled-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        // sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        // 'unfold-in': {
        //   '0%': {
        //     transform: `scaleX(0) scaleY(0.005)`,
        //   },
        //   '50%': {
        //     /* 0.5 초간 세로 크기는 작은상태로 가로 너비만 확대  */
        //     transform: `scaleX(1) scaleY(0.005)`,
        //   },
        //   '100%': {
        //     /* 0.5 초간 세로 크기를 확대 */
        //     transform: `scaleY(1) scaleX(1)`,
        //   },
        // },
        // /* Show modal content  */
        // 'zoom-in': {
        //   from: {
        //     transform: `scale(0)`,
        //   },
        //   to: {
        //     transform: `scale(1)`,
        //   },
        // },
        // /* Hide modal content */
        // 'zoom-out': {
        //   from: {
        //     transform: `scale(1)`,
        //   },
        //   to: {
        //     transform: `scale(0)`,
        //   },
        // },
        // /* Dimmed hiding */
        // 'unfold-out': {
        //   '0%': {
        //     transform: `scale(1)`,
        //   },
        //   '50%': {
        //     transform: `scaleX(1) scaleY(0.005)`,
        //   },
        //   '100%': {
        //     transform: `scaleX(0) scaleY(0.005)`,
        //   },
        // },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        // 'zoom-in': 'zoom-in 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
