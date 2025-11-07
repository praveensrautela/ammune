// import ServicesV1Data from "../../../src/assets/jsonData/services/ServicesV1Data.json"
import SplitText from "../animation/SplitText.jsx"
import mainimg from "../../assets/images/ammunebanner.png";
import { Link } from "react-router-dom";
// import { useState } from "react";

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
}

const ServicesV1new = ({ hasTitle, sectionClass }: DataType) => {

    // const [activeServiceId, setActiveServiceId] = useState(ServicesV1Data[0]?.id || null);

    // const handleMouseEnter = (id: number) => {
    //     setActiveServiceId(id);
    // };

    // const handleMouseLeave = () => {
    //     // Do nothing on mouse leave to keep the active item
    // };

    return (
        <>
            <div className={`services-style-one-area ${sectionClass ? sectionClass : ""}`}>

                {/* Service Title */}
                {hasTitle &&
                    <div className="service-style-one-heading">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="site-heading text-center">
                                        <h4 className="sub-title ">A New Era of Security</h4>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6 mt-2">

                                            <h2 className="title split-text mb-2">
                                                <SplitText
                                                    delay={40}
                                                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                    easing="easeOutCubic"
                                                    threshold={0.2}
                                                    rootMargin="-50px"
                                                >
                                                    Beyond API Protection - Securing the Intelligence Layer
                                                </SplitText>
                                            </h2>

                                            <SplitText
                                                delay={5}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                                threshold={0.2}
                                                rootMargin="-50px"
                                            >
                                               The digital world is shifting from connected APIs to intelligent, AI-driven ecosystems.
                                               Ammune.ai extends its proven API security technology to safeguard AI data centers, inference pipelines, and hybrid workloads — providing a single layer of defense across all environments.
                                            </SplitText>
                                            <br />
                                            <div className="defaultbtn ">
                                                <Link className="" to="/platform"><span>View Platform </span> <i className="fas fa-arrow-right" /> </Link>
                                            </div>
                                        </div>

                                        <div className="col-md-6 mt-2">
                                            <div className="thumb">
                                                <img src={mainimg} alt="" width={100} />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    );
};

export default ServicesV1new;