import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";
import Resources from "../../components/about/Resources";
import ResourceLibrary from "../../components/resources/ResourceLibrary";
import QuickContact from "../../components/contact/QuickContact";


const Casestudies = () => {
    return (
        <>
            <Helmet>
                <title>Ammune.ai | API Security</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Resources' breadCrumb='Resources' />
                <Resources sectionClass='bg-gray ' />
                <ResourceLibrary sectionClass='bg-gray default-padding' hasTitle={true} />
                <QuickContact title='Need' titleBold='Help?' />

                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Casestudies;