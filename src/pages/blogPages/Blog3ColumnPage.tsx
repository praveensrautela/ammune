import { Helmet } from "react-helmet-async";
import Blog3ColumnContent from "../../components/blog/Blog3ColumnContent";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import DarkClass from "../../components/classes/DarkClass";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ThemeDark from "../../components/switcher/ThemeDark";

const Blog3ColumnPage = () => {
    return (
        <>
            <Helmet>
                <title> API Security Tips, Trends & Expert Advice-Ammune Blogs</title>
                <meta name="keywords" content="API security platform, enterprise API protection, API threat detection, API compliance" />
                <meta name="description" content="Explore Ammune AI blogs for API security tips, trends, expert advice, threat prevention, and guidance on securing and integrating your APIs." />
            </Helmet>

            <LayoutV1>
                <Breadcrumb title='Blogs' breadCrumb='blogs' />
                <Blog3ColumnContent sectionClass='default-padding bg-gray' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Blog3ColumnPage;