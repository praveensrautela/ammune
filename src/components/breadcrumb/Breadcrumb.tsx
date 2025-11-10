import { Link } from "react-router-dom";

interface DataType {
    title?: string;
    breadCrumb?: string;
}

const Breadcrumb = ({ title, breadCrumb }: DataType) => {
    return (
        <>
            <div className={`breadcrumb-area text-center `}
            >
                <div className="light-banner-active bg-gray bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/6.jpg)' }} />

                <div className="container blurry-shape-right blurry-shape-top-left">
                    <div className="breadcrumb-item" style={{padding: '170px 0px 64px 0px'}}>
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1>{title ? title : "not found"}</h1>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li><Link to="/"><i className="fas fa-home" /> Home</Link></li>
                                        <li className="active">{breadCrumb ? breadCrumb : "error"}</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Breadcrumb;