# WebpackFailError 
# Repository to reproduce the error with webpack dev server and webpack beta with sytemjs output build
npm run start
You will see failure message This is failure case instead it should have shown Webpack passed message if you downgrade the webpack in package.json you will see the corect message which means
If we downgrade the webpack version to 4.43 we can see the correct default message exported from index.js "Webpack passed"
