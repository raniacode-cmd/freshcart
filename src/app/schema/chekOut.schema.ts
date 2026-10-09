import z from "zod";

export const chekOutSchema = z.object({
 
 
 details:z.string().min(1, "details is requierd")  ,
phone:z.string().min(1, "phone is requierd").regex(/^01[0125][0-9]{8}$/,"invalid number"),
city:z.string().min(1, "city is requierd"),
});



export  type ChekOutSchemaType =z.infer<typeof chekOutSchema>