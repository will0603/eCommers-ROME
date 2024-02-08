import * as Yup from "yup";

export const loginFormSchema = Yup.object().shape({
  email: Yup.string().required("Completar campo"),
  password: Yup.string().required("Completar campo"),
});
export const registerFormSchema = Yup.object().shape({
  username: Yup.string().required("Completar campo"),
  email: Yup.string().required("Completar campo"),
  dni: Yup.string()
    .required("Completar campo")
    .test("len", "Digite un DNI válido", (val) => val.length === 8),
  password: Yup.string()
    .required("Porfavor digite una contraseña")
    .test("len", "Digite una contraseña válida", (val) => val.length <= 20),
});
