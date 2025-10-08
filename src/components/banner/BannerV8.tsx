import { Link } from "react-router-dom";
import SplitText from "../animation/SplitText.jsx";
import Homeimage from "../../../public/assets/img/banner/banner-new.jpg";


const BannerV8 = () => {
    return (
        <>
            <div className="banner-style-eight-area bg-cover blurry-shape-right blurry-shape-top-left"
                style={{ background: "black" }} >
                <div className="light-banner-active  bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/4.jpg)' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8 text-center">
                            <img src={Homeimage} alt="" style={{ height: "40vh" }} />
                            <div className="banner-style-eight-heading mt-2">
                                <div className="banner-title">
                                    <h4 className="sub-title">AI-Powered API Security</h4>
                                    <h2>
                                        <SplitText
                                            className="title-left split-text"
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Zero Trust
                                        </SplitText>
                                    </h2>

                                    <h2 >
                                        <SplitText
                                            delay={150}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            Air Gapped Security
                                        </SplitText>
                                    </h2>
                                </div>
                            </div>
                            <SplitText
                                delay={5}
                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"
                            >
                                Deploy AI-powered security that operates completely offline. AMMUNE's air-gapped architecture ensures your data never leaves your environment
                            </SplitText>
                            <br />
                            <div className="d-flex justify-content-center gap-2">
                                <div className="defaultbtn ">
                                    <Link className="" to="/platform"><span>View Platform </span> <i className="fas fa-arrow-right" /> </Link>
                                </div>

                                <div className="defaultbtn supportcenter">
                                    <Link className="" to="https://support.ammune.ai/portal/en/home" target="_blank"><span>Suport Center </span> <i className="fas fa-arrow-right" /> </Link>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV8;