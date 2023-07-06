import { getGuitarras } from "../models/guitarras.server"
import { getPosts } from "../models/posts.server"
import { useLoaderData } from "@remix-run/react"
import { getCurso } from "../models/curso.server"
import Curso from "../components/curso"
import ListadoBlogs from "../components/listadoBlogs"
import ListadoGuitarra from "../components/ListadoGuitarra"
import stylesGuitarras from "../styles/guitarra.css"
import stylesBlogs from "../styles/blog.css"
import stylesCurso from "../styles/curso.css"

export function meta(){

}

export function links(){
  return[
    {rel: "stylesheet", href: stylesGuitarras},
    {rel: "stylesheet", href: stylesBlogs},
    {rel: "stylesheet", href: stylesCurso}
  ]
}

export async function loader(){
  const [guitarras,post, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  return {
    guitarras: guitarras.data,
    post: post.data,
    curso: curso.data
  }
}

const Index = () => {
  const {guitarras, post, curso} = useLoaderData()
  
  return (
    <>
      <main className="contendor">
        <ListadoGuitarra
          guitarras={guitarras}
        />
      </main>
        <Curso 
          curso={curso.attributes}
        />
        <section className="contendor">
          <ListadoBlogs
            posts={post}
          />
        </section>
      
    </>
  )
}

export default Index