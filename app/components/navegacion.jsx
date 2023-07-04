import { Link,useLocation } from "@remix-run/react"

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
                to="/tienda"
                className={pathname === '/tienda' ? 'activo' : ''}
            >
                Tienda
            </Link>
            <Link
                to="/blog"
                className={pathname === '/blog' ? 'activo' : ''}
            >
                Blog
            </Link>
        </nav>
    )
}

export default Navegacion