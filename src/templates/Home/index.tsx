import { TbTruckDelivery } from "react-icons/tb";
import { MdDesignServices } from "react-icons/md";
import { GrPaint } from "react-icons/gr";
import CategoryList from "@/components/CategoryList";
import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";
import { productsFake } from "@/helpers/datafake";
import "./index.scss";

const HomeTemplate = () => {
  return (
    <div className="home--template--main--container">
      <Hero />
      <CategoryList />
      <div className="home--template--diff--main--container">
        <div className="home--template--diff--content--container content--container">
          <div className="diff--box">
            <strong>Vuele realidad tus sueños</strong>
            <p>Crea tus propias prendas personalizadas</p>
          </div>
          <div className="diff--box">
            <MdDesignServices />
            <p>
              Diseña productos personalizados de manera intuitiva con el Creador
              de diseños gratuitos.
            </p>
          </div>
          <div className="diff--box">
            <GrPaint />
            <p>
              Añade tus creaciones originales y sácale partido a tu creatividad.
            </p>
          </div>
          <div className="diff--box">
            <TbTruckDelivery />
            <p>
              Recibe tus productos personalizados en cualquier parte de Lima
            </p>
          </div>
        </div>
      </div>
      <ProductList productsData={productsFake} titleCollection="NEW ARRIVALS" />
    </div>
  );
};

export default HomeTemplate;
