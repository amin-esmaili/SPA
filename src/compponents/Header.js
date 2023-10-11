import { NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Webdev</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className={(navData)=> navData.isActive ? "nav-link active" : "nav-link"} aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={(navData)=> navData.isActive ? "nav-link active" : "nav-link"} to="/Users">Users</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={(navData)=> navData.isActive ? "nav-link active" : "nav-link"} to="/Posts">Posts</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header