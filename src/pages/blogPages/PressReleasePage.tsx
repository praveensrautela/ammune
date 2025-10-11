import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import { Link } from "react-router-dom";
import Press1 from "../../../public/assets/img/banner/Excelsa-logo-black-blue-1.png";
import Press2 from "../../../public/assets/img/banner/logos_0002_intel.png";
import Press3 from "../../../public/assets/img/banner/logos_0006_traxion-logo.png";

const PressReleasePage = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Press Releases' breadCrumb='Press Releases' />
                {/* <Blog3ColumnContent sectionClass='default-padding bg-gray' /> */}
                <div className={`blog-area blog-grid-colum default-padding bg-gray`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 mb-50" >
                                <div className="home-blog-style-one">
                                    <div className="thumb">
                                        <Link to="">
                                            <div className="bg-white  mb-3">
                                                <img
                                                    src={Press1}
                                                    height={100}
                                                    alt="ammune.ai expands into Australia and New Zealand signing a strategic partnership with Excelsa"
                                                    style={{ 'height': '100px' }}
                                                />
                                            </div>
                                        </Link>
                                        <div className="info">
                                            <h2 className="post-title">
                                                <Link to="">ammune.ai expands into Australia and New Zealand signing a strategic partnership with Excelsa</Link>
                                            </h2>
                                            <p className="text-center" style={{ "color": "#ee9304" }}>June 07, 2023</p>
                                            <div
                                                className="descriptionblog"
                                            />
                                            “The partnership with Excelsa allows us to leverage their deep local knowledge and relationships, creating a powerful synergy to address the unique challenges in the Australian and New Zealand markets.”
                                            <br />

                                            <div className="defaultbtn text-center">
                                                <Link className="" to="#"><span>Read More</span> <i className="fas fa-arrow-right" /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-50" >
                                <div className="home-blog-style-one">
                                    <div className="thumb">
                                        <Link target="_blank" to="https://www.businesswire.com/news/home/20230516005099/en">
                                            <div className="bg-white mb-3">
                                                <img
                                                    src={Press2}
                                                    height={100}
                                                    alt="ammune.ai expands into Australia and New Zealand signing a strategic partnership with Excelsa"
                                                    style={{ 'height': '100px' }}
                                                />
                                            </div>
                                        </Link>
                                        <div className="info">
                                            <h2 className="post-title">
                                                <Link target="_blank" to="https://www.businesswire.com/news/home/20230516005099/en">ammune.ai integrates ammune™ API Security Solution with Intel NetSec Accelerator Reference Design.</Link>
                                            </h2>
                                            <p className="text-center" style={{ "color": "#ee9304" }}>May 16, 2023</p>
                                            <div
                                                className="descriptionblog"
                                            />
                                            “Our approach empowers the widespread implementation of ammune™ in modern data centers, safeguarding them from emerging cyber threats that exploit cutting-edge AI technologies and tools”.
                                            <br />

                                            <div className="defaultbtn text-center">
                                                <Link target="_blank" className="" to="https://www.businesswire.com/news/home/20230516005099/en"><span>Read More</span> <i className="fas fa-arrow-right" /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-lg-4 col-md-6 mb-50" >
                                <div className="home-blog-style-one">
                                    <div className="thumb">
                                        <div className="bg-white  mb-3">
                                            <Link target="_blank" to="https://www.businesswire.com/news/home/20230516005099/en">
                                                <img
                                                    src={Press3}
                                                    style={{ 'height': '100px' }}
                                                    alt="ammune.ai expands into Australia and New Zealand signing a strategic partnership with Excelsa"
                                                />
                                            </Link>
                                        </div>
                                        <div className="info">
                                            <h2 className="post-title">
                                                <Link target="_blank" to="https://www.businesswire.com/news/home/20230516005099/en">ammune.ai and Traxion Tech Announce Strategic Partnership to Strengthen API Security in the Philippines' Finance Industry</Link>
                                            </h2>
                                            <p className="text-center" style={{ "color": "#ee9304" }}>May 04, 2023</p>
                                            <div
                                                className="descriptionblog"
                                            />
                                            ammune.ai expressed enthusiasm about the partnership, stating that their collaboration with Traxion will help organizations in the finance industry stay ahead of cyber threats and protect sensitive data.
                                            <br />

                                            <div className="defaultbtn text-center">
                                                <Link className="" to="https://www.businesswire.com/news/home/20230516005099/en" target="_blank"><span>Read More</span> <i className="fas fa-arrow-right" /> </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default PressReleasePage;