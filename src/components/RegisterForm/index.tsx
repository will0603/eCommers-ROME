import { initialValuesRegisterForm } from "@/interfaces/initials";
import { registerFormSchema } from "@/schemas";
import { Formik } from "formik";
import React from "react";
import InputForm from "../InputForm";
import Button from "../Button";
import "./index.scss";

const RegisterForm = () => {
  const handleSubmitRegister = () => {
    console.log("Registrar cuenta");
  };
  return (
    <div className="register--form--main--container">
      <div className="register--form--header--container">
        <strong>Registrarse.</strong>
      </div>
      <form>
        <Formik
          validationSchema={registerFormSchema}
          onSubmit={handleSubmitRegister}
          initialValues={initialValuesRegisterForm}
        >
          {({ handleSubmit }) => {
            return (
              <>
                <InputForm
                  type="text"
                  placeholder="Username"
                  label="Nombre de usuario"
                  name="username"
                />
                <InputForm
                  type="email"
                  placeholder="Email"
                  label="Correo electrónico"
                  name="email"
                />
                <InputForm
                  type="text"
                  placeholder="DNI"
                  label="DNI"
                  regex={/[0-9]/}
                  name="dni"
                />
                <InputForm
                  type="password"
                  placeholder="*******"
                  label="Contraseña"
                  name="password"
                />
                <Button
                  text="Crear cuenta"
                  styles={{ padding: "15px 0" }}
                  btnClass="btn-primary"
                  onClick={handleSubmit}
                />
              </>
            );
          }}
        </Formik>
      </form>
    </div>
  );
};

export default RegisterForm;
