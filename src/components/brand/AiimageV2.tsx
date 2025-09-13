import aiimage from "../../assets/images/hero-category-bg2.svg";

const AiimageV2 = () => {
    return (
        <>
            <div className="barnd-style-two-area py-3 mb-4">
                <div className="container">
                    <div className="thumb positionrelative text-center" style={{
                        backgroundImage: `url(${aiimage})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        padding: "100px 5px"
                    }}>
                        <div className="img-content">
                            <h2>ammune™ protects from a wide range of cyber attacks</h2>
                            <p>ammune™ modules (separated licensed) protect from different types of common API attacks</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AiimageV2;