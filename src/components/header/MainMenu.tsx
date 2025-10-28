/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
interface DataType {
    navbarPlacement?: string;
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
                {/* <li>
                    <Link to="#" onClick={toggleSubMenu}>Home</Link>
                </li> */}
                <li>
                    <Link to="/why-ammuneai" >Why Ammune.AI</Link>
                </li>
                 <li>
                    <Link to="/why-ammuneai" >Platform</Link>
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Technology</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/technology">Overview</Link></li>
                        <li><Link to="/deployment-types">Deployment Types</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="/resources" >Resources</Link>
                    {/* <ul className="dropdown-menu">
                        <li><Link to="/user-guides">User Guides</Link></li>
                        <li><Link to="/case-studies">Case Studies & Whitepapers</Link></li>
                        <li><Link to="/press-release">Press Releases</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Company</Link>
                    <ul className="dropdown-menu">
                        <li><Link to="/company">About Us </Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/press-releases">Press Releases</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                    </ul>
                </li>
                <li><Link to="/partner-portal">Partners Portal </Link></li>
            </ul>

        </>
    );
};

export default MainMenu;