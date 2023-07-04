import { useLoaderData } from "@remix-run/react"
import { getPost } from "../models/guitarras.server"
import Post from "../components/post"

export async function loader(){
  const post = await getPost()
  return post.data
}

const Blog = () => {
  const posts = useLoaderData()
  return (
    <div className="contenedor">
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post=>(
          <Post key={post.id} post={post.attributes} />
        ))}
      </div>
    </div>
  )
}

export default Blog