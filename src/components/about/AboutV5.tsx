// import illustration6 from '/assets/img/illustration/6.png';
import companyai from '/assets/img/icon/companyai.webp';
import icon12 from '/assets/img/icon/12.png';
import icon13 from '/assets/img/icon/13.png';
import icon31 from '/assets/img/icon/31.png';
import icon32 from '/assets/img/icon/32.png';
import SplitText from "../animation/SplitText.jsx"

// import { Link } from 'react-router-dom';
import useUpDownScroll from '../../hooks/useUpDownScroll';

interface DataType {
    sectionClass?: string
}

const AboutV5 = ({ sectionClass }: DataType) => {
    useUpDownScroll(".upDownScrol");

    return (
        <>
            <div className={`about-style-five-area overflow-hidden ${sectionClass ? sectionClass : ""}`}>

                <div className="container">
                    <div className="about-five-one-info">
                        <div className="row">
                            <div className="col-md-12 text-center mb-5">
                                <h2 className="title">
                                    <SplitText
                                        delay={80}
                                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                                        easing="easeOutCubic"
                                        threshold={0.2}
                                        rootMargin="-50px"
                                    >
                                        Ammune.ai
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
                                    ammune.ai helps organizations to protect their infrastructure, applications, customers, employees, and partners against the growing risk of API-borne attacks. With a team of experienced leaders and innovators, ammune.ai revolutionizes the way organizations protect their APIs using its awarded AI-based technology.
                                </SplitText>
                            </div>


                            <div className="row">
                                <div className="col-xl-6">
                                    <div className="banner-style-five-info">
                                        <div className="">
                                            <ul className="list-style-four">
                                                <li>
                                                    <div className="icon">
                                                        <img className="regular-img" src={icon12} alt="Image Not Found" />
                                                        <img className="light-img" src={icon31} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4>Mission</h4>
                                                        <p>
                                                            Excellence projects regus remarkably on estimating. Side in so life past are awesome dine. Melancholy themselves.
                                                        </p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <img className='regular-img' src={icon13} alt="Image Not Found" />
                                                        <img className="light-img" src={icon32} alt="Image Not Found" />
                                                    </div>
                                                    <div className="info">
                                                        <h4>Vision</h4>
                                                        <p>
                                                            Detailing projects regus remarkably on estimating. Side in so life past are awesome dine. Melancholy themselves.
                                                        </p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-6">
                                    <div className="banner-style-five-info">
                                        <div className="">
                                            <div className="thumb">
                                                <img src={companyai} alt="Image Not Found" />
                                            </div>

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

export default AboutV5;