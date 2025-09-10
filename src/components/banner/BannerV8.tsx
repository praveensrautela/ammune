// import illustration1 from '/assets/img/illustration/1.png';
import homevideo from '../../assets/video/homevideo.mp4';
import { Link } from "react-router-dom";
// import CountUp from 'react-countup';
import SplitText from "../animation/SplitText.jsx"

const BannerV8 = () => {
    return (
        <>
            <div className="banner-style-eight-area bg-cover"
                style={{ backgroundImage: 'url(/assets/img/shape/3.jpg)' }}>
                <div className="light-banner-active bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/4.jpg)' }} />
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="banner-style-eight-heading">
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
                            <div className="row mt-3">
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-shield h-4 w-4 text-primary" data-lov-id="src/components/HeroSection.tsx:45:18" data-lov-name="item.icon" data-component-path="src/components/HeroSection.tsx" data-component-line="45" data-component-file="HeroSection.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                        </div>
                                        <div className="col-10">
                                            <p className="">Zero Trust Architecture</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap h-4 w-4 text-primary" data-lov-id="src/components/HeroSection.tsx:45:18" data-lov-name="item.icon" data-component-path="src/components/HeroSection.tsx" data-component-line="45" data-component-file="HeroSection.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
                                        </div>
                                        <div className="col-10">
                                            <p className="">Air-Gapped Deployment</p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-4">
                                    <div className="row">
                                        <div className="col-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-lock h-4 w-4 text-primary" data-lov-id="src/components/HeroSection.tsx:45:18" data-lov-name="item.icon" data-component-path="src/components/HeroSection.tsx" data-component-line="45" data-component-file="HeroSection.tsx" data-component-name="item.icon" data-component-content="%7B%22className%22%3A%22h-4%20w-4%20text-primary%22%7D"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                        </div>
                                        <div className="col-10">
                                            <p className="">Offline AI Protection</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Link className="btn-animation mt-10" to="/platform"><i className="fas fa-arrow-right" /> <span>View Platform </span></Link>

                        </div>
                        <div className="col-xl-5">
                            <div className="">
                                <video
                                    src={homevideo}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{ width: "100%", height: "auto" }}
                                />
                                {/* <img src={illustration1} alt="Image Not Found" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV8;