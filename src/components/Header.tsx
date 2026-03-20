import { NavLink } from "react-router-dom";
export const Header = () => {

    return (
        <>
        <header id="main-header">
            <h1>React Session Management</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({isActive}) => isActive ? 'active' : ''} end>Our Mission</NavLink></li>
                    <li><NavLink to="/sessions" className={({isActive}) => isActive ? 'active' : ''} end>Browse Sessions</NavLink></li>
                </ul>

            </nav>

        </header>
        </>
    )

};

export default Header;