import {Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from '../assets/images/brand-logo-preview.png'
const NavBar = () => {

    return (
        <nav className="nav">
            <Link to="/" className="title">
                <img src={logo} width="180px" height="85px" />
            </Link>
            <ul>
                <CustomLink to="/pricing">Pricing</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    );
}

// eslint-disable-next-line react/prop-types,no-unused-vars
function CustomLink({to, children, ...props}) {
    const pathName = useResolvedPath(to)
    const isActive = useMatch({path: pathName.pathname, end: true})
    return (
        <li className={isActive ? "active": ""}><Link to={to}>{children}</Link> </li>
    );
}

export default NavBar;