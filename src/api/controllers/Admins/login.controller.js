import { Admin } from "../../models/index.js";
import { adminService } from "../../services/index.js";
import createError from "http-errors";
// import { userValidation } from "../../validations/validation.js";
// import {
//   signAccessToken,
//   signRefreshToken,
//   verifyRefreshToken,
// } from "../../middlewares/jwt_service.js";
import { jwt_servcie } from "../../utils/index.js";
import { signAccessToken } from "../../utils/jwt_service.js";

export default async function Register(req, res, next) {
    try {
      const { username, password } = req.body;
    //   const { error } = userValidation(req.body);
    //   if (error) {
    //     throw createError(error.details[0].message);
    //   }
      if (!username || !password) {
        throw createError.BadRequest();
      }
    //   const isExits = await Admin.findOne({ username });
    //   if (isExits) {
    //     throw createError.Conflict(`${username} is ready been registered`);
    //   }
      const isCreate = await adminService.Login(username, password);
      if(!isCreate.status === 1){
        throw createError[403]

      }
      console.log(isCreate)
      const accessToken = await jwt_servcie.signAccessToken(isCreate._id)
      res.json({
        status: "okey",
        accessToken
      });
    } catch (error) {
      next(error);
    }
  }