import { Link } from "react-router-dom";
import SplitText from "../animation/SplitText.jsx"

import useScrollAnimation from "../../hooks/useScrollAnimation";

interface DataType {
    sectionClass?: string;
    title?: string;
    titleBold?: string
}

const QuickContact = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();

    return (
        <>
            <div className={`quick-contact-area default-padding bg-gray ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 offset-xl-2">
                            <div className="quick-contact-items text-scroll-animation" ref={containerRef}>

                                <h2 className="title text-center">
                                    <SplitText
                                        delay={80}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Need Help?
                                    </SplitText>
                                </h2>

                                <div className=" pl-xs-0 text-center">
                                    <SplitText
                                        delay={5}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Still have more questions? Explore our FAQs section. Or feel free to reach out to us.
                                    </SplitText>

                                    <div className=" text-center">
                                        <div className="defaultbtn ">
                                            <Link className="" to="/contact"><span>Write to us </span> <i className="fas fa-arrow-right" /> </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default QuickContact;