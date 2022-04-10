// membuat custom middleware
const myMiddleware = (req, res, next) => {
  console.log("ini dari middleware");
  next()
}

module.exports = myMiddleware