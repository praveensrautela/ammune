import ServiceListData from "../../../src/assets/jsonData/services/CaseStudyData.json";

import CaseStudylist from "../services/Casestudylist";
import { useState } from "react";


interface DataType {
    sectionClass?: string
}


const Blog3ColumnContent = ({ sectionClass }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(ServiceListData[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };


    return (
        <>
            <div className={`blog-area   blog-grid-colum ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        {ServiceListData.map(service =>
                            <div className="col-md-4 mb-2 text-center">
                                <a
                                    href={`/assets/resources/casestudy/${encodeURIComponent(service.link)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={activeServiceId === service.id ? "active" : ""}
                                >
                                    <div className="card bg-gray py-3">
                                        <div className="card-body text-white" key={service.id}
                                            onMouseEnter={() => handleMouseEnter(service.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <CaseStudylist service={service} /> <i className="fa fa-file-pdf"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    );
};

export default Blog3ColumnContent;
