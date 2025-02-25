/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Futuristic theme colors
                'cyber': {
                    'cyan': {
                        100: 'rgba(0, 255, 255, 0.1)',
                        200: 'rgba(0, 255, 255, 0.2)',
                        300: 'rgba(0, 255, 255, 0.3)',
                        400: 'rgba(0, 255, 255, 0.4)',
                        500: 'rgba(0, 255, 255, 0.5)',
                        600: 'rgba(0, 255, 255, 0.6)',
                        700: 'rgba(0, 255, 255, 0.7)',
                        800: 'rgba(0, 255, 255, 0.8)',
                        900: 'rgba(0, 255, 255, 0.9)',
                    },
                    'magenta': {
                        100: 'rgba(255, 0, 255, 0.1)',
                        200: 'rgba(255, 0, 255, 0.2)',
                        300: 'rgba(255, 0, 255, 0.3)',
                        400: 'rgba(255, 0, 255, 0.4)',
                        500: 'rgba(255, 0, 255, 0.5)',
                        600: 'rgba(255, 0, 255, 0.6)',
                        700: 'rgba(255, 0, 255, 0.7)',
                        800: 'rgba(255, 0, 255, 0.8)',
                        900: 'rgba(255, 0, 255, 0.9)',
                    },
                    'yellow': {
                        100: 'rgba(255, 255, 0, 0.1)',
                        200: 'rgba(255, 255, 0, 0.2)',
                        300: 'rgba(255, 255, 0, 0.3)',
                        400: 'rgba(255, 255, 0, 0.4)',
                        500: 'rgba(255, 255, 0, 0.5)',
                        600: 'rgba(255, 255, 0, 0.6)',
                        700: 'rgba(255, 255, 0, 0.7)',
                        800: 'rgba(255, 255, 0, 0.8)',
                        900: 'rgba(255, 255, 0, 0.9)',
                    },
                    'pink': {
                        100: 'rgba(255, 105, 180, 0.1)',
                        200: 'rgba(255, 105, 180, 0.2)',
                        300: 'rgba(255, 105, 180, 0.3)',
                        400: 'rgba(255, 105, 180, 0.4)',
                        500: 'rgba(255, 105, 180, 0.5)',
                        600: 'rgba(255, 105, 180, 0.6)',
                        700: 'rgba(255, 105, 180, 0.7)',
                        800: 'rgba(255, 105, 180, 0.8)',
                        900: 'rgba(255, 105, 180, 0.9)',
                    },
                },
                'dark': {
                    900: '#121212',
                    800: '#1a1a1a',
                    700: '#222222',
                    600: '#2a2a2a',
                    500: '#333333',
                    400: '#3a3a3a',
                    300: '#444444',
                    200: '#555555',
                    100: '#666666',
                }
            },
            boxShadow: {
                'neon-cyan': '0 0 5px rgba(0, 255, 255, 0.2), 0 0 20px rgba(0, 255, 255, 0.4)',
                'neon-magenta': '0 0 5px rgba(255, 0, 255, 0.2), 0 0 20px rgba(255, 0, 255, 0.4)',
                'neon-yellow': '0 0 5px rgba(255, 255, 0, 0.2), 0 0 20px rgba(255, 255, 0, 0.4)',
                'neon-pink': '0 0 5px rgba(255, 105, 180, 0.2), 0 0 20px rgba(255, 105, 180, 0.4)',
                'neon-cyan-strong': '0 0 10px rgba(0, 255, 255, 0.4), 0 0 30px rgba(0, 255, 255, 0.6)',
                'neon-magenta-strong': '0 0 10px rgba(255, 0, 255, 0.4), 0 0 30px rgba(255, 0, 255, 0.6)',
                'neon-yellow-strong': '0 0 10px rgba(255, 255, 0, 0.4), 0 0 30px rgba(255, 255, 0, 0.6)',
                'neon-pink-strong': '0 0 10px rgba(255, 105, 180, 0.4), 0 0 30px rgba(255, 105, 180, 0.6)',
            },
            backgroundImage: {
                'cyber-grid': "radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
                'cyber-grid-dense': "radial-gradient(circle, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
                'gradient-cyan-magenta': 'linear-gradient(to right, rgba(0, 255, 255, 1), rgba(255, 0, 255, 1))',
                'gradient-cyan-pink': 'linear-gradient(to right, rgba(0, 255, 255, 1), rgba(255, 105, 180, 1))',
                'gradient-magenta-yellow': 'linear-gradient(to right, rgba(255, 0, 255, 1), rgba(255, 255, 0, 1))',
                'gradient-tri': 'linear-gradient(to right, rgba(0, 255, 255, 1), rgba(255, 0, 255, 1), rgba(255, 255, 0, 1))',
            },
            textShadow: {
                'neon-cyan': '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)',
                'neon-magenta': '0 0 5px rgba(255, 0, 255, 0.5), 0 0 10px rgba(255, 0, 255, 0.3)',
                'neon-yellow': '0 0 5px rgba(255, 255, 0, 0.5), 0 0 10px rgba(255, 255, 0, 0.3)',
                'neon-pink': '0 0 5px rgba(255, 105, 180, 0.5), 0 0 10px rgba(255, 105, 180, 0.3)',
            },
            borderWidth: {
                '1': '1px',
            },
            scale: {
                '102': '1.02',
            }
        },
    },
    plugins: [
        // Add Text Shadow Plugin
        function ({ addUtilities }) {
            const newUtilities = {
                '.text-shadow-neon-cyan': {
                    textShadow: '0 0 5px rgba(0, 255, 255, 0.5), 0 0 10px rgba(0, 255, 255, 0.3)',
                },
                '.text-shadow-neon-magenta': {
                    textShadow: '0 0 5px rgba(255, 0, 255, 0.5), 0 0 10px rgba(255, 0, 255, 0.3)',
                },
                '.text-shadow-neon-yellow': {
                    textShadow: '0 0 5px rgba(255, 255, 0, 0.5), 0 0 10px rgba(255, 255, 0, 0.3)',
                },
                '.text-shadow-neon-pink': {
                    textShadow: '0 0 5px rgba(255, 105, 180, 0.5), 0 0 10px rgba(255, 105, 180, 0.3)',
                },
            }
            addUtilities(newUtilities)
        }
    ],
}