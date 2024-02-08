import "./index.scss";

const ExchangePolicy = () => {
  return (
    <div className="exchange--policy--main--container">
      <p>
        Contáctate con nosotros indicando tu número de pedido (Para ubicar los
        datos de tu compra) y cuál es el producto que deseas cambiar.
      </p>
      <ul>
        <li>El producto debe estar en buen estado (No sucio, roto o usado).</li>
        <li>
          Sólo se hará cambio del producto que adquirió{" "}
          <b> ( Talla ó Color ) </b>
          no por otros modelos.
        </li>
        <li>
          Entregar el producto en bolsa con sus respectivas etiquetas al
          motorizado.
        </li>
        <li>
          Tiene 15 días continuos desde que realizó su compra para realizar la
          solicitud.
        </li>
        <li>
          Para proceder con el cambio tendrá que cancelar el costo del
          motorizado nuevamente.
        </li>
      </ul>
      <p>
        De no cumplir con las condiciones antes mencionadas
        <b> NO se procederá </b> al cambio de su producto.
        <b> No emitimos reembolsos </b>
        por los productos vendidos.
      </p>
    </div>
  );
};

export default ExchangePolicy;
