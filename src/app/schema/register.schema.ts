import { type } from "os";
import z from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(3, "name must be at least 3 charcters")
    .max(10, "name must be at most 10 charcters")
    .min(1, "name is requierd"),
 
 email:z
 .string().min(1, "email is requierd").pipe(z.email('invalid email'))   ,
password:z.string().min(1, "password is requierd")  .min(6, "password must be at least 6 charcters"),
rePassword:z.string().min(1, "rePassword is requierd") ,
phone:z.string().min(1, "phone is requierd").regex(/^01[0125][0-9]{8}$/,"phone must be an egyptain number") 
}).refine((object)=>object.password === object.rePassword,{
path:["rePassword"],
error:"password and rePassword must be same"
});




export  type registerSchemaType =z.infer<typeof registerSchema>