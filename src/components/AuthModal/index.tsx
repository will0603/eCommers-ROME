import { useState } from "react";
import "./index.scss";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

const AuthModal = () => {
  const [authOption, setAuthOption] = useState<string>("login");
  return (
    <div className="auth--modal--main--container">
      <div className="auth--modal--forms--container">
        <div
          className={
            authOption === "login"
              ? "auth--modal--login--container visible"
              : "auth--modal--login--container"
          }
        >
          <LoginForm />
          <p className="auth--modal--login--options">
            <span>¿Olvidaste tu contraseña?</span>
            <br></br>
            <span>-</span>
            <br></br>
            <span onClick={() => setAuthOption("register")}>
              ¿No tienes una cuenta? Registrate{" "}
            </span>
          </p>
        </div>
        <div
          className={
            authOption !== "login"
              ? "auth--modal--register--container visible"
              : "auth--modal--register--container"
          }
        >
          <RegisterForm />
          <p
            className="auth--modal--register--options"
            onClick={() => setAuthOption("login")}
          >
            <MdOutlineKeyboardDoubleArrowLeft /> Regresar
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
