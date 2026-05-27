import { useEffect, useState } from "react";
import SingleBlog3Column from './SingleBlog3Column';
import ENDPOINTS from "../../config/endpoints";


interface DataType {
    sectionClass?: string;
}

export interface BlogType {
    id: number;
    slug: string;
    title: string;
    description: string;
    featured_image: string;
    created_at: string;
    category: string;
}

const Blog3ColumnContent = ({ sectionClass }: DataType) => {
    const [blogs, setBlogs] = useState<BlogType[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch(ENDPOINTS.BLOG_API);
                const result = await res.json();

                if (result.success) {
                    // Map backend data to frontend BlogType
                    const formattedBlogs: BlogType[] = result.data.map((blog: any) => ({
                        id: blog.id,
                        slug: blog.slug,
                        title: blog.title,
                        description: blog.description,
                        featured_image: blog.featured_image,
                        created_at: blog.created_at,
                        category: blog.category,
                    }));
                    setBlogs(formattedBlogs);
                } else {
                    console.error("Failed to fetch blogs", result.message);
                }
            } catch (err) {
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    if (loading) return <p>Loading blogs...</p>;

    return (
        <div className={`blog-area blog-grid-colum ${sectionClass ? sectionClass : ""}`}>
            <div className="container">
                <div className="row">
                    {blogs.map(blog =>
                        <div className="col-lg-4 col-md-6 mb-50" key={blog.id}>
                            <SingleBlog3Column blog={blog} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog3ColumnContent;
