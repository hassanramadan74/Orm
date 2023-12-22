import  express  from "express"
import { deleteUser, getAllUsers, postUser, updateUser } from "./user.controller.js"

const userRouter  =express.Router()


userRouter.route('/users').get(getAllUsers).post(postUser)
// userRouter.get('/users',getAllUsers)

// userRouter.post('/users',postUser)
userRouter.route('/users/:id').put(updateUser).delete(deleteUser)

// userRouter.put('/users/:id',updateUser)

// userRouter.delete('/users/:id',deleteUser)

export default userRouter