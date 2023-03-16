import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </nav>
        </header>
    )
}
export default Header