import LayoutV1 from '../../components/layouts/LayoutV1';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import BlogSingleContent from '../../components/blog/BlogSingleContent';
import DarkClass from '../../components/classes/DarkClass';
import ThemeDark from '../../components/switcher/ThemeDark';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import ENDPOINTS from '../../config/endpoints';

interface BlogType {
    id: number;
    slug: string;
    title: string;
    description: string;
    featured_image: string;
    created_at: string;
    author?: string;
    keywords?: string;
    metadescription?: string;
    category?: string;
    metatitle?: string;

}

const BlogSinglePage = () => {
    const { slug } = useParams();
    const [blogData, setBlogData] = useState<BlogType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`${ENDPOINTS.BLOG_DETAILS_API}/${slug}`);
                const result = await res.json();

                if (result.success) {
                    setBlogData(result.data);
                } else {
                    setError(result.message || 'Blog not found');
                }
            } catch (err) {
                setError('Error fetching blog');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        if (slug) fetchBlog();
    }, [slug]);

    return (
        <>

            <Helmet>
                <title>
                    {blogData?.metatitle
                        ? `${blogData.metatitle} | Ammune.ai`
                        : 'Blog Details | Ammune.ai'}
                </title>

                <meta
                    name="keywords"
                    content={
                        blogData?.keywords
                            ? blogData.keywords
                            : 'API security platform, enterprise API protection, API threat detection, API compliance'
                    }
                />

                <meta
                    name="description"
                    content={
                        blogData?.metadescription
                            ? blogData.metadescription
                            : 'Ammune delivers API security tools and services across the full API lifecycle, using real-time analytics to stop threats, abuse & business logic attacks.'
                    }
                />
            </Helmet>

            <LayoutV1>
                <Breadcrumb
                    title={blogData?.title || "Blog Details"}
                    breadCrumb={blogData?.title || "Blog Details"}
                />
                {loading && <p>Loading blog...</p>}
                {error && <p>{error}</p>}
                {blogData && <BlogSingleContent sectionClass='default-padding-bottom' blogInfo={blogData} />}
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default BlogSinglePage;
