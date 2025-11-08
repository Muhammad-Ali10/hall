import { app } from "./app.js"
import 'dotenv/config'
import { DBConnect } from "./db/index.js"


const PORT = process.env.PORT || 5000

DBConnect()

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})  