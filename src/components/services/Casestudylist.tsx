interface DataType {
    id?: number;
    serviceName?: string;
    count?: string;
}

const CaseStudylist = ({ service }: { service: DataType }) => {
    const { serviceName } = service


    return (
        <>
            <div className="icon">
                <i className="fas fa-file-pdf"></i>
            </div>
            {serviceName}
            <span style={{ "float": "right" }}>  <i className="fas fa-long-arrow-right" /></span>
        </>
    );
};

export default CaseStudylist;