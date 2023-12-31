import { Router } from "express";
import AuthController from "../controller/authController";
import multer from "multer"; 


let authController = new AuthController();
let AuthRouter : Router = Router();

let upload = multer({
    storage : multer.memoryStorage()
});

AuthRouter.post("/createUser",upload.single('image'),authController.CreateUser);
AuthRouter.put("/updateUser/:id",upload.single('image'),authController.UpdateUser);
AuthRouter.get("/GetUserById/:id",authController.GetUserById);
AuthRouter.get("/GetAllUsers",authController.GetAllUsers);
AuthRouter.delete("/DeleteUser/:id",authController.DeleteUser);
AuthRouter.delete("/BulkDeleteUser",authController.BulkDeleteUser);


export default AuthRouter;