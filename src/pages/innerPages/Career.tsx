import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import DarkClass from "../../components/classes/DarkClass";
import Career from "../../components/about/AboutV7";

const Platform = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Career' breadCrumb='Career' />
                <Career sectionClass="default-padding bg-gray" />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Platform;