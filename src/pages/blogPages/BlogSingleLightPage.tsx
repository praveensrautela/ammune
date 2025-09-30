import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import { Helmet } from "react-helmet-async";
import ThemeLight from "../../components/switcher/ThemeLight";

const BlogSingleLightPage = () => {


    return (
        <>
            <Helmet>
                <title>Dixor - Blog Single Light</title>
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blog Single' breadCrumb='blog-single-light' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default BlogSingleLightPage;