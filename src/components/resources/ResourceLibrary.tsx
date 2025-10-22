import ResourceData from "../../../src/assets/jsonData/services/ResourceData.json";

import SplitText from "../animation/SplitText.jsx"
import { Link } from "react-router-dom";
import { useState } from "react";

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
}

const ResourceLibrary = ({ hasTitle, sectionClass }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(ResourceData[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`services-style-one-area ${sectionClass ? sectionClass : ""}`}>

                {/* Service Title */}
                {hasTitle &&
                    <div className="service-style-one-heading">
                        <div className="container">
                            <div className="row">
                                <div className="text-center">
                                    <div className="site-heading">
                                        <h4 className="sub-title">Resource Library</h4>
                                        <h2 className="title split-text">
                                            <SplitText
                                                delay={40}
                                                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                                easing="easeOutCubic"
                                                threshold={0.2}
                                                rootMargin="-50px"
                                            >
                                                Explore Our Resource Library
                                            </SplitText>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container">
                    <div className="services-style-one-items">
                        <div className="row">
                            {ResourceData.slice(0, 3).map((service) => (
                                <div
                                    className="col-xl-4 col-lg-6 col-md-6 d-flex"
                                    key={service.id}
                                    onMouseEnter={() => handleMouseEnter(service.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div
                                        className={`services-style-one-item d-flex flex-column w-100 ${activeServiceId === service.id ? 'active' : ''}`}
                                    >
                                        <div className="icon">
                                            <img
                                                className="regular-img"
                                                src={`/assets/img/icon/${service.icon}`}
                                                alt="Image Not Found"
                                                width={75}
                                                height={60}
                                            />
                                        </div>
                                        <h4>
                                            <Link to={'/why-ammuneai'}>{service.title}</Link>
                                        </h4>
                                        <p>{service.text}</p>

                                        {/* push button down */}
                                        <div className="mt-auto">
                                            <Link className="btn-full"  to={service.link}>
                                                {service.label} <i className="fas fa-arrow-right" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ResourceLibrary;