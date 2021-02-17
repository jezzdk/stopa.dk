module.exports = {
    purge: {
      content: [
        './resources/**/*.antlers.html',
        './resources/**/*.blade.php',
        './content/**/*.md'
      ]
    },
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          title: ['Work Sans', 'sans-serif'],
        },
      },
    },
    variants: {},
    plugins: [],
  }
