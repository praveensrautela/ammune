import { Link } from "react-router-dom";
import useHoverEffects from "../../hooks/useHoverEffects";

interface DataType {
    id?: number;
    activeClass?: string;
    icon?: string;
    subTitle?: string;
    title?: string;
    text?: string;
    listData?: string[];
    illustration?: string;
}

const SingleServiceV2 = ({ service }: { service: DataType }) => {
    const { id, subTitle, title, text, listData } = service;

    const { activeIndex, hoveredIndex, handleMouseEnter, handleMouseLeave, handleMouseMove, handleMouseLeaveWrapper } = useHoverEffects();

    return (
        <li
            className={`hover-active-item ${activeIndex === hoveredIndex ? 'active' : ''}`}
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={handleMouseLeave} // Call without index
        >
            <Link
                to={'#'}
                className="service-hover-item"
                onMouseMove={(e) => handleMouseMove(e, id)}
                onMouseLeave={() => handleMouseLeaveWrapper(id)}
            >
                <div className="service-hover-content">
                    <div className="left">
                        {/* <div className="icon">
                            {icon && <img src={`/assets/img/icon/${icon}`} alt="Icon" width={145} height={160} />}
                        </div> */}
                        <div className="item-title">
                            <span>{subTitle}</span>
                            <h2>{title}</h2>
                        </div>
                    </div>
                    <div className="details">
                        <p>{text}</p>
                        <ul className="list-style-five">
                            {listData?.map((data, index) => (
                                <li key={index}>{data}</li>
                            ))}
                        </ul>
                    </div>
                    {/* <div className="arrow">
                        <strong className="btn-arrow-xl">
                            <i className="fas fa-long-arrow-right" />
                        </strong>
                    </div> */}
                </div>

            </Link>
        </li>
    );
};

export default SingleServiceV2;
