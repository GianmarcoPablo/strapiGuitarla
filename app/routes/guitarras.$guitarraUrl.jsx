import { getGuitarra } from "../models/guitarras.server"
import { useLoaderData } from "@remix-run/react"
import styles from "../styles/guitarra.css"

export async function loader({params}){
  const {guitarraUrl} = params
  const guitarra = await getGuitarra(guitarraUrl)

  if(guitarra.data.length === 0){
    throw new Response("",{
      status: 404,
      statusText: "Guitarra no encontrada"
    })
  }
  return guitarra
}

export function meta({data}){

  if(!data){
    return[
      {title: "guitarra no encontrada"},
      {descripcion: "guitarra no encontrada"}
    ]
  }
  return[
    {title: `GuitarLa - ${data.data[0].attributes.nombre}`},
    {descripcion: `GuitarLa - venta de guitarras, guitarra ${data.data[0].attributes.nombre}`}
  ]
}

export function links(){
  return [
    {rel: "stylesheet", href: styles}
  ]
}



const GuitarraURL = () => {
  const guitarra = useLoaderData()
  const {nombre,descripcion,imagen,precio} = guitarra.data[0].attributes
  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`imagen de la guitarra ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  )
}

export default GuitarraURL