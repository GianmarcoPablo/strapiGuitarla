import { useLoaderData } from "@remix-run/react"
import { getPost } from "../models/posts.server"
import { formatearFecha } from "../utils/helpers"
import styles from "../styles/blog.css"

export function links(){
    return[
        {rel: "stylesheet", href: styles}
    ]
}

export function meta({data}){
    if(!data){
        return[
            {title: "GuitarLa - Entrada no encontrada"},
            {description: "Entrada no encontrada"}
        ]
    }
    return[
        {title: `GuitarLa - ${data[0]?.attributes.titulo}`},
        {description: `Guitarras, venta de guitarras, entrada ${data[0]?.attributes.titulo}`}
    ]
}
export async function loader({params}){
    const {blogUrl} = params
    const post = await getPost(blogUrl)
    if(post.data.length === 0){
        throw new Response("",{
            status: 404,
            statusText: "Entrada no encontrada"
        })
    }

    return post.data
}

const BlogUrl = () => {
    const post = useLoaderData()
    const {titulo,contenido,imagen,publishedAt} = post[0].attributes
    return (
        <article className="contenedor post mt-3">
            <img className="imagen" src={imagen.data.attributes.url} alt={`imagen blog ${titulo}`} />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="texto">{contenido}</p>
            </div>
        </article>

        
    )
}

export default BlogUrl