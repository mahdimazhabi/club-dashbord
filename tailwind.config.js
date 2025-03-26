/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          40: 'var(--color-primary-40)',
          30: 'var(--color-primary-30)',
          20: 'var(--color-primary-20)',
          10: 'var(--color-primary-10)',
        },
        secondary: {
          50: 'var(--color-secondary-50)',
          40: 'var(--color-secondary-40)',
          30: 'var(--color-secondary-30)',
          20: 'var(--color-secondary-20)',
          10: 'var(--color-secondary-10)',
        },
        success: {
          50: 'var(--color-success-50)',
          40: 'var(--color-success-40)',
          30: 'var(--color-success-30)',
          20: 'var(--color-success-20)',
          10: 'var(--color-success-10)',
        },
        danger: {
          50: 'var(--color-danger-50)',
          40: 'var(--color-danger-40)',
          30: 'var(--color-danger-30)',
          20: 'var(--color-danger-20)',
          10: 'var(--color-danger-10)',
        },
        neutral: {
          100: 'var(--color-neutral-100)',
          90: 'var(--color-neutral-90)',
          80: 'var(--color-neutral-80)',
          70: 'var(--color-neutral-70)',
          60: 'var(--color-neutral-60)',
          50: 'var(--color-neutral-50)',
          40: 'var(--color-neutral-40)',
          30: 'var(--color-neutral-30)',
          20: 'var(--color-neutral-20)',
          10: 'var(--color-neutral-10)',
          5: 'var(--color-neutral-5)',
        },
      },
    },
  },
  plugins: [],
} 