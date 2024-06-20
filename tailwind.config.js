/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './*.html',
    './*.js',
  ],
  content: [],
  theme: {
    extend: {
			colors: {				
				'light-grayish-blue': 'hsl(210, 60%, 98%)',
				'grayish-blue-1': 'hsl(211, 68%, 94%)',
				'grayish-blue-2': 'hsl(205, 33%, 90%)',
				'grayish-blue-3': 'hsl(219, 14%, 63%)',
				'dark-grayish-blue': 'hsl(219, 12%, 42%)',
				'dark-blue': 'hsl(224, 21%, 14%)',
				'red': 'hsl(1, 90%, 64%)',
				'blue': 'hsl(219, 85%, 26%)'
			}
		},
  },
  plugins: [],
}

