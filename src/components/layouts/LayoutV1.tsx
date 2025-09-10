import FooterV1 from "../footer/FooterV1";
// import HeaderV7 from "../header/HeaderV7";
import HeaderV1 from "../header/HeaderV1";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="smooth-scroll-container">
                <HeaderV1 />
                {children}
                <FooterV1 sectionClass='bg-gray' />
            </div>
        </>
    );
};

export default LayoutV1;