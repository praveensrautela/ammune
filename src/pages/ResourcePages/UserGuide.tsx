import { Helmet } from "react-helmet-async";
import UserGuideContent from "../../components/resources/UserGuideContent";
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
                <Breadcrumb title='User Guide' breadCrumb='user-guide' />
                <UserGuideContent sectionClass="default-padding " />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Casestudies;