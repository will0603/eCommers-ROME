import { Formik } from "formik";
import { initialValuesLoginForm } from "@/interfaces/initials";
import { loginFormSchema } from "@/schemas";
import "./index.scss";
import InputForm from "@components/InputForm";
import Button from "@components/Button";

const LoginForm = () => {
  const handleSubmitLogin = () => {
    console.log("Iniciar sesión");
  };
  return (
    <div className="login--form--main--container">
      <div className="login--form--header--container">
        <strong>Iniciar Sesión.</strong>
      </div>
      <form>
        <Formik
          initialValues={initialValuesLoginForm}
          onSubmit={handleSubmitLogin}
          validationSchema={loginFormSchema}
        >
          {({ handleSubmit }) => {
            return (
              <>
                <InputForm
                  type="email"
                  placeholder="Email"
                  label="Correo electrónico"
                  name="emailLogin"
                />
                <InputForm
                  type="password"
                  placeholder="********"
                  label="Contraseña"
                  name="passwordLogin"
                />
                <Button
                  text="Iniciar sesión"
                  styles={{ padding: "15px 0" }}
                  btnClass="btn-primary"
                  onClick={handleSubmit}
                />
              </>
            );
          }}
        </Formik>
      </form>
      <div></div>
    </div>
  );
};

export default LoginForm;
