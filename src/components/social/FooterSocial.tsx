import twitter from "/assets/img/icon/twitter.png"
import { Link } from "react-router-dom";

const FooterSocial = () => {
    return (
        <>
            <li>
                <Link to="https://www.facebook.com/L7Defense/" target='_blank'><i className="fab fa-facebook-f" /></Link>
            </li>
            <li>
                <Link to="https://www.youtube.com/channel/UC0-MRMUCvxcy_sHNXfUDuvA" target='_blank'><i className="fab fa-youtube" /></Link>
            </li>
            <li>
                <Link to="https://www.linkedin.com/company/ammune/?viewAsMember=true" target='_blank'><i className="fab fa-linkedin-in" /></Link>
            </li>
            <li>
                <Link to="https://x.com/l7defense?lang=he" target='_blank'><img src={twitter} alt="Image Not Found" /></Link>
            </li>
        </>
    );
};

export default FooterSocial;