import diagramimg from "../../assets/images/digram-technology.png";
import architecturemodule from "../../assets/images/architect-module.png";

const Diagram = () => {
    return (
        <>
            <div className="barnd-style-two-area py-3">
                <div className="container text-center">
                    <div className="thumb ">
                        <img src={diagramimg} alt="" className="img" width={100} />
                        <br />
                        <br />
                        <br />
                        <h2>ammune™ Architecture Model (Basic)</h2>
                        <br />
                        <br />
                        <img src={architecturemodule} alt="" className="img" width={100} />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Diagram;