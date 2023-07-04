import imagen from "../../public/img/nosotros.jpg"
import styles from "../styles/nosotros.css"

export function meta() {
    return [
        { title: 'Guitar - LA - Remix' },
        { description: 'Sitio web de guitarras' },
    ]
}

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: "preload",
            href: imagen,
            as: "image"
        }
    ]
}

const Nosotros = () => {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>

            <div className="contenido">
                <img src={imagen} alt="imagen sobre nosotros" />
                <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem labore voluptatibus voluptatum enim illo necessitatibus. Porro veritatis adipisci error asperiores esse fuga distinctio dolorum, nulla tempore illum? Doloremque est eius maxime mollitia illum enim, optio dicta minus beatae similique.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis autem labore voluptatibus voluptatum enim illo necessitatibus. Porro veritatis adipisci error asperiores esse fuga distinctio dolorum, nulla tempore illum? Doloremque est eius maxime mollitia illum enim, optio dicta minus beatae similique.
                </p>
            </div>
            </div>
            
        </main>
    )
}

export default Nosotros