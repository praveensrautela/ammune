import useScrollAnimation from '../../hooks/useScrollAnimation';
import useUpDownScroll from '../../hooks/useUpDownScroll';
import resourceimg from '/assets/img/resources/resources.png';
import { Link } from "react-router-dom";
import SplitText from "../animation/SplitText.jsx"


interface DataType {
    sectionClass?: string
}

const Resources = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();
    useUpDownScroll(".upDownScrol");

    return (
        <div
            className={`about-style-three-area  ${sectionClass ? sectionClass : ""
                }`}
        >
            <div className="container">
                <div className="row  align-center default-padding" >
                    {/* Even rows → Image left, Text right */}

                    <div className="col-lg-6">
                        <div
                            className="about-style-three-info text-scroll-animation"
                            ref={containerRef}
                        >
                            <h2 className="title">
                                <SplitText
                                    delay={80}
                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                    easing="easeOutCubic"
                                    threshold={0.2}
                                    rootMargin="-50px"
                                >
                                    Deep Dive Into API Security
                                </SplitText>
                            </h2>

                            <div className="d-flex mt-40">
                                <div className="right">
                                    <SplitText
                                        delay={5}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Ammune.ai is a leading AI-led API security firm, and we take pride in enabling our clients to transform their business securely.That’s why we’ve curated an extensive library of resources to demystify the world of
                                        API security for our clients
                                    </SplitText>
                                </div>
                            </div>

                            <div className="defaultbtn ">
                                <Link className="" target='_blank' to="https://calendly.com/yisrael-ammune/30min"><span>Schedule a meeting </span> <i className="fas fa-arrow-right" /> </Link>
                            </div>

                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="thumb-style-three">
                            <img
                                src={resourceimg}
                                alt="Ammune ai"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Resources;