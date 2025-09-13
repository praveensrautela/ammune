import useScrollAnimation from '../../hooks/useScrollAnimation';
import useUpDownScroll from '../../hooks/useUpDownScroll';
// import thumb11 from '/assets/img/thumb/11.jpg';
// import { Link } from "react-router-dom";
import DiploymentTypesData from "../../assets/jsonData/deploymenttypes/DiploymentTypesData.json";


interface DataType {
    sectionClass?: string
}

const AboutV3 = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();
    useUpDownScroll(".upDownScrol");

    return (
        <div
            className={`about-style-three-area  ${sectionClass ? sectionClass : ""
                }`}
        >
            <div className="container">
                {DiploymentTypesData.map((type, index) => (
                    <div className="row  align-center default-padding" key={type.id}>
                        {index % 2 === 0 ? (
                            <>
                                {/* Even rows → Image left, Text right */}
                                <div className="col-lg-7">
                                    <div className="thumb-style-three">
                                        <img
                                            src={`/assets/img/diployment-types/${type.img}`}
                                            alt={type.title}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4 offset-lg-1">
                                    <div
                                        className="about-style-three-info text-scroll-animation"
                                        ref={containerRef}
                                    >
                                        <h2 className="title text">{type.title}</h2>
                                        <div className="d-flex mt-40">
                                            <div className="right">
                                                <p className="text">{type.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Odd rows → Text left, Image right */}
                                <div className="col-lg-4">
                                    <div
                                        className="about-style-three-info text-scroll-animation"
                                        ref={containerRef}
                                    >
                                        <h2 className="title text">{type.title}</h2>
                                        <div className="d-flex mt-40">
                                            <div className="right">
                                                <p className="text">{type.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 offset-lg-1">
                                    <div className="thumb-style-three">
                                        <img
                                            src={`/assets/img/diployment-types/${type.img}`}
                                            alt={type.title}
                                        />
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default AboutV3;