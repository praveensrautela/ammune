import { Link } from "react-router-dom";
import SplitText from "../animation/SplitText.jsx";
// import Homeimage from "../../../public/assets/img/banner/banner-new.jpg";
import aiimage from "../../assets/images/hero-category-bg2.svg";


const BannerV8 = () => {
    return (
        <>
            <div
                className="banner-style-eight-area bg-contain blurry-shape-home-right blurry-shape-home-top-left"
                style={{
                    background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${aiimage}) no-repeat center/contain`
                }}
            >
                <div className="light-banner-active  bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/4.jpg)' }} />
                <div className="container herobannernew" >
                    <div className="row ">
                        <div className="col-xl-2"></div>
                        <div className="col-xl-8 text-center ">
                            {/* <img src={aiimage} alt="" className="bannerimg" /> */}
                            <div className="banner-style-eight-heading mt-2">
                                <div className="banner-title">
                                    {/* <h4 className="sub-title">AI-Powered API Security</h4> */}
                                    <h2>
                                        <SplitText
                                            className="title-left split-text"
                                            delay={40}
                                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                            easing="easeOutCubic"
                                            threshold={0.2}
                                            rootMargin="-50px"
                                        >
                                            From APIs to AI - The Immune System for the Digital Age
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
                                Ammune.ai protects the digital backbone of modern enterprises - securing APIs, AI workloads, and data centers through adaptive, self-learning, zero-trust defense.
                            </SplitText>
                            <br />
                            <div className="d-flex justify-content-center gap-2">
                                <div className="defaultbtn ">
                                    <Link className="" to="/contact"><span>Request a Demo </span> <i className="fas fa-arrow-right" /> </Link>
                                </div>

                                <div className="defaultbtn supportcenter">
                                    <Link className="" to="/platform" target="_blank"><span>Learn More  </span> <i className="fas fa-arrow-right" /> </Link>
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