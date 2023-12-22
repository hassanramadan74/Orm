import  express  from "express"
const app = express()
const port = 3000
import { conn } from "./databases/dbconnection.js"
import userRouter from "./src/modules/users/user.routes.js"
app.use(express.json())
app.use('/api/v1', userRouter)
conn.sync()



app.listen(port, () => console.log(`Example app listening on port ${port}!`))