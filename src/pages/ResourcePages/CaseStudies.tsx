import { Helmet } from "react-helmet-async";
import CasestudyColumnContent from "../../components/resources/CasestudyColumnContent";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";

const Casestudies = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Case Studies' breadCrumb='case-studies' />
                <CasestudyColumnContent sectionClass="default-padding " />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Casestudies;