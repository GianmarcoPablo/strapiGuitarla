import { Link,useLocation } from "@remix-run/react"
import imagen from "../../public/img/carrito.png"

const Navegacion = () => {
    const {pathname} = useLocation()
    return (
        <nav className='navegacion'>
            <Link
                to="/"
                className={pathname === '/' ? 'activo' : ''}
            >
                Inicio
            </Link>
            <Link
                to="/nosotros"
                className={pathname === '/nosotros' ? 'activo' : ''}
            >
                Nosotros
            </Link>
            <Link
                to="/guitarras"
                className={pathname === '/guitarras' ? 'activo' : ''}
            >
                Tienda
            </Link>
            <Link
                to="/blog"
                className={pathname === '/blog' ? 'activo' : ''}
            >
                Blog
            </Link>
            <Link
                to="/carrito"
            >
                <img src={imagen} alt="carrito de compras" />
            </Link>
        </nav>
    )
}

export default Navegacion