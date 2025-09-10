import { Link } from "react-router-dom";
import NewsletterV2 from '../newsletter/NewsletterV2';
import FooterSocial from '../social/FooterSocial';
import logoLight from '/assets/img/Logo-01.avif'
import logo from '/assets/img/Logo-01.avif';
import awardimg from '/assets/img/ammunefooter.png';

interface DataType {
    sectionClass?: string;
}

const FooterV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <footer className={`${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="f-items">
                        <div className="row">
                            <div className="col-lg-3 footer-item about ">
                                <div className="top">
                                    <img className="regular-img" src={logoLight} alt="Image Not Found" />
                                    <img className="light-img" src={logo} alt="Image Not Found" />
                                </div>
                                <p>API abuses are the most-frequent attack vector resulting in data breaches for enterprise applications. Enterprises of all sizes trust Ammune™ by ammune.ai to keep their APIs safe</p>
                                <NewsletterV2 />
                            </div>

                            <div className="col-lg-3 footer-item about text-center">
                                <h4 className="widget-title">Useful Link</h4>
                                <ul className="useful-link">
                                    <li><Link to="">Why ammune.ai</Link></li>
                                    <li><Link to="/platform">Platform</Link></li>
                                    <li><Link to="/technology">Technology</Link></li>
                                    <li><Link to="/resources">Resources</Link></li>
                                    <li><Link to="/company">Company</Link></li>
                                    <li><Link to="/careers">Careers</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 footer-item text-center about">
                                <h4 className="widget-title">Case Studies</h4>
                                <ul className="useful-link">
                                    <li><Link to="">Protecting APIs in AWS cloud</Link></li>
                                    <li><Link to="/platform">Protecting APIs in Legacy Environments</Link></li>
                                    <li><Link to="/technology">Protection APIs of an MSSP</Link></li>
                                    <li><Link to="/resources">Blocking Under the Radar API attacks</Link></li>
                                    <li><Link to="/company">Open Banking</Link></li>
                                </ul>
                            </div>

                            <div className="col-lg-3  footer-item text-center">
                                <h4 className="widget-title">Awards and Recognitiom</h4>
                                <img src={awardimg} alt="" width={100} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <ul className="footer-social">
                                    <FooterSocial />
                                </ul>
                            </div>
                            <div className="col-lg-6 text-end">
                                <p>
                                    Copyright &copy; {(new Date().getFullYear())} Ammune.ai. All Rights Reserved
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;