import React from "react";
import VideoHero from "@assets/videos/herovideo.mp4";
import "./index.scss";
import Button from "../Button";

const Hero = () => {
  return (
    <div className="hero--home--container">
      <div className="hero--home--layout">
        <strong>Diviertete creando la prenda de tus sueños!</strong>
        <p>
          Te brindamos acceso a nuestro servicio de personalización de prendas
          para que puedas diseñar esa prenda que tanto soñaste. Atrévete a darle
          un toque de personalidad a tu manera de vestir.
        </p>
        <Button
          styles={{ padding: "10px 20px" }}
          onClick={() => console.log("redirigir a person")}
          btnClass="btn-primary"
          text="Vamos!"
        />
      </div>
      <video loop autoPlay muted src={VideoHero}></video>
    </div>
  );
};

export default Hero;
