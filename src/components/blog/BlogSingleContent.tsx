import Animate from "../animation/Animate";

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
                                                src={`http://localhost/ammuneai/static/blogs/${featured_image}`}
                                                width={1075}
                                                height={546}
                                                alt={title}
                                            />
                                        </div>
                                        <div className="info">
                                            <h2 className="post-title">{title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: description || "" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Animate>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSingleContent;
