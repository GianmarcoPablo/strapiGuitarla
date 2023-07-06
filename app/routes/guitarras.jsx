import { useLoaderData,Outlet } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import ListadoGuitarra from "../components/ListadoGuitarra"
import styles from "../styles/guitarra.css"

export function meta(){
    return[
        {title: "Tienda de guitarras"},
        {description: "Tienda de guitarras - nuestra coleccion de guitarras"},
    ]
}

export function links(){
    return[
        {rel: "stylesheet", href: styles},
    ]
}

export async function loader(){
  const guitarras = await getGuitarras()
  return guitarras.data
}

const Tienda = () => {
  const guitarras = useLoaderData()
    return (
        <main className="contenedor">
            <ListadoGuitarra
                guitarras={guitarras}
            />
            <Outlet />
        </main>
    )
}

export default Tienda