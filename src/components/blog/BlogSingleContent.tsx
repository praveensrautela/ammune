import Animate from "../animation/Animate";
import ENDPOINTS from "../../config/endpoints";

interface BlogSingleProps {
    blogInfo?: {
        id: number;
        slug: string;
        title: string;
        description: string;
        featured_image: string;
        created_at: string;
        author?: string;
    };
    sectionClass?: string;
}

const BlogSingleContent = ({ blogInfo, sectionClass }: BlogSingleProps) => {
    const { title, description, featured_image } = blogInfo || {};

    return (
        <div className={`blog-area single bg-gray default-padding full-blog ${sectionClass || ""}`}>
            <div className="container">
                <div className="blog-items">
                    <div className="row">
                        <Animate className="animate__animated animate__fadeInUp">
                            <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                                <div className="blog-style-one item">
                                    <div className="blog-item-box">
                                        <div className="thumb">
                                            <img
                                                src={`${ENDPOINTS.BLOG_IMAGE_URL}/blogs/${featured_image}`}
                                                width={1075}
                                                height={546}
                                                alt={title}
                                            />
                                        </div>
                                        <div className="info">
                                            <div dangerouslySetInnerHTML={{ __html: description || "" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                    </div>
                </div>
            </div>
            <style>{`
    ul, li {
        list-style-type: disc;
    }
        table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    vertical-align: top;
    border-collapse: collapse;
}

table th,
table td {
    padding: 0.75rem;
    border: 1px solid #dee2e6;
}

table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    font-weight: 600;
}

`}</style>

        </div>
    );
};

export default BlogSingleContent;
