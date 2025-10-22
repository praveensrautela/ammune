import ServicesV1Data from "../../../src/assets/jsonData/services/WhatweofferData.json";
import SplitText from "../animation/SplitText.jsx"

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
}
const Whatweoffer = ({ }: DataType) => {
    // const [activeServiceId, setActiveServiceId] = useState(ServicesV1Data[0]?.id || null);
    return (
        <>
            <div className="container blurry-shape-right blurry-shape-top-left">
                <div className="services-more mt-100 mb-50 mt-xs-30">
                    <h2 className="title split-text mb-20 text-center">
                        <SplitText
                            delay={40}
                            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                            easing="easeOutCubic"
                            threshold={0.2}
                            rootMargin="-50px"
                        >
                            Most popular services
                        </SplitText>
                    </h2>
                    <div className="row">
                        {ServicesV1Data.slice(0, 6).map(service =>
                            <div className="col-lg-4 col-md-6 text-center" key={service.id}>
                                <div className="item">
                                    <img
                                        src={`/assets/img/svg/${service.icon}`}
                                        alt={service.title}
                                        style={{ height: "auto", marginBottom: 0 }}
                                    />
                                    <h4>{service.title}</h4>
                                    <p>{service.text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Whatweoffer;