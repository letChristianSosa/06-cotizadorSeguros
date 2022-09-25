import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";

const useCotizador = () => {
  return useContext(CotizadorContext);
};

export default useCotizador;

// Lo que hace este hook es ahorrarnos estar invocando el useContext(CotizadorContext) en cada componente. Simplemente se importa el useCotizador()
