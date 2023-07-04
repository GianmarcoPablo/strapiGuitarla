import { useLoaderData } from "@remix-run/react"
import { getGuitarras } from "../models/guitarras.server"
import Guitarra from "../components/guitarra"
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
        <h2 className="heading">Nuestra coleccion</h2>
        {guitarras?.length && (
            <div className="guitarras-grid">
            {guitarras.map(guitarra=>(
                <Guitarra
                key={guitarra?.id}
                guitarra={guitarra?.attributes}
                />
            ))}
            </div>
        )}
        </main>
    )
}

export default Tienda