import aiimage from "../../assets/images/hero-category-bg2.svg";

const AiimageV1 = () => {
    return (
        <>
            <div className="barnd-style-two-area py-3">
                <div className="container">
                    <div className="thumb">
                        <img src={aiimage} alt="" className="img" width={100} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AiimageV1;