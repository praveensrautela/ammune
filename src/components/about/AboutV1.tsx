// import team10 from '/assets/img/team/10.jpg';
// import team11 from '/assets/img/team/11.jpg';
// import team12 from '/assets/img/team/12.jpg';
// import arrowIcon from '/assets/img/icon/arrow.png';
// import arrowThemeIcon from '/assets/img/icon/arrow-theme.png';
// import banner3 from '/assets/img/banner/3.jpg';
// import { Link } from "react-router-dom";
// import SkillProgress from '../process/SkillProgress';
// import SkillProgressData from "../../../src/assets/jsonData/progress/SkillProgressData.json";
import ModalVideo from 'react-modal-video';
import { useState } from 'react';
// import TextScrollAnimation from '../animation/TextScrollAnimation';
import CountUp from 'react-countup';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import useThumbParallax from '../../hooks/useThumbParallax';


interface DataType {
    lightMode?: boolean;
}

const AboutV1 = ({ lightMode }: DataType) => {

    const [isOpen, setOpen] = useState(false);
    const containerRef = useScrollAnimation();

    useThumbParallax()

    return (
        <>
            <div className="about-style-one-area bg-cover default-padding"
                style={{ backgroundImage: lightMode ? 'none' : 'url(/assets/img/shape/13.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="about-style-one-left-info">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={48} enableScrollSpy /></div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">Completed Projects</span>
                                </div>
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer"><CountUp end={16} enableScrollSpy /></div>
                                        <div className="operator">M</div>
                                    </div>
                                    <span className="medium">Awesome Clients</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                            <div className="about-style-one-info text-scroll-animation" ref={containerRef}>
                                <p className="text">
                                    <h2>
                                        ammune™ Actively Protecting APIs from the 1st Request
                                    </h2>
                                </p>
                                <p className="text">
                                    ammune™ presents an advanced concept of API security technology, solely based on AI/ML. It is built at a “bottom-up” approach. Each API, at each protection layer, is protected by a separate “micro-AI/ML machine” (resulting in thousands of them). The protection layer is completed by a robust AI/ML model that protects all APIs throughout, based on the micro-machines’ output.
                                </p>
                                <p className="text">
                                    The ammune™ platform technology was proven to be very accurate in finding threats in years of production experience, while consistently protecting the user experience at high quality.
                                </p>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="izTDbJ23_ws" onClose={() => setOpen(false)} />
        </>
    );
};

export default AboutV1;