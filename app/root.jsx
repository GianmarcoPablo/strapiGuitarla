import { useState } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  isRouteErrorResponse,
  useRouteError,
  Link,
} from "@remix-run/react";

import styles from "./styles/index.css";
import Header from "./components/header";
import Footer from "./components/footer";


export const meta = () => {
    return [
        { charset: 'utf-8' },
        { title: 'Guitar - LA - Remix' },
        { viewport: "width=device-width, initial-scale=1.0"}
    ]    
}

export const links = () => {
    return [
        //normalize
        {rel: 'stylesheet', href: "https://necolas.github.io/normalize.css/8.0.1/normalize.css"},
        { rel: 'stylesheet', href: styles }
    ]
}


export default function App(){

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (guitarra) => {
    if(carrito.some(guitarraState=> guitarraState.id === guitarra.id)){
      //actualizar cantidad
      const carritoActulizado = carrito.map(guitarraState => {
        if(guitarraState.id === guitarra.id){
          // rescribir la cantidad
          guitarraState.cantidad = guitarra.cantidad
        }
        return guitarraState
      })
      setCarrito(carritoActulizado)
    }else{
      //registro nuevo, agregar al carrito
      setCarrito([...carrito, guitarra])
    }
  }

  const actualizarCantidad = guitarra => {
    const carritoActulizado = carrito.map(guitarraState =>{
      if(guitarraState.id === guitarra.id){
        guitarraState.cantidad = guitarra.cantidad
      }
      return guitarraState
    })
    setCarrito(carritoActulizado)
  }

  const eliminarGuitarra = id => {
    const carrritoActualizado = carrito.filter(carritoState => carritoState.id !== id)
    setCarrito(carrritoActualizado)
  }

  return(
    <Document>
      <Outlet 
        context={ {
          agregarAlCarrito,
          carrito,
          actualizarCantidad,
          eliminarGuitarra
        } }
      />
    </Document>
  )
}

export function Document({ children }) {
  return (
    <html lang="en">
        <head>
            <Meta />
            <Links />
        </head>
        <body>
            <Header />
            {children}
            <Footer />
            <Scripts />
        </body>
    </html>
  );
}

//* Manejo de errores **/


export function ErrorBoundary(){
    const error = useRouteError()
    if(isRouteErrorResponse(error)){
        return (
            <Document>
                <p className="error">{error.status}{error.statusText}</p>
                <Link className="error-enlace" to="/">Volver al inicio</Link>
            </Document>
        )
    }
}