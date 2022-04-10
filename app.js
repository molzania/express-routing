const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

const allRouter = require("./routes")

// menggunakan middleare secara global
app.use(express.json())
// app.use(myMiddleware)
app.use(allRouter)

app.listen(PORT, () => {
  console.log("server running on port " + PORT);
})