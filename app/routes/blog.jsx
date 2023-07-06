import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../models/posts.server"
import styles from "../styles/blog.css"
import ListadoBlogs from "../components/listadoBlogs"

export function links(){
  return [
    { rel: "stylesheet", href: styles }
  ]
}

export function meta(){
  return[
    {title: "GuitarLa - Nuestro Blog"},
    {description: "Blog de GuitarLa, donde encontrarás artículos sobre guitarras, amplificadores, pedales, venta de guitarras, etc."}
  ]
}

export async function loader(){
  const post = await getPosts()
  return post.data
}

const Blog = () => {
  const posts = useLoaderData()
  return (
    <div className="contenedor">
      <ListadoBlogs
        posts={posts}
      />
    </div>
  )
}

export default Blog