import * as Yup from "yup";
export const singupschema=Yup.object({
    name:Yup.string().min(2).max(25).required("please enter your name"),
    email:Yup.string().email().required("please enter your email"),
    password:Yup.string().min(5).required("please enter your password"),
    address:Yup.string().required("please enter your password"),
    mobile:Yup.string().min(10).max(10).required("please enter your paassword"),
    gender:Yup.string().required("gender is reqired"),
    city:Yup.string().required("city is reqired"),
})