import { Link } from "react-router-dom";
import { BlogType } from "./Blog3ColumnContent";
import ENDPOINTS from "../../config/endpoints";



const SingleBlog3Column = ({ blog }: { blog: BlogType }) => {
    const { slug, title, description, featured_image } = blog;

    return (
        <div className="home-blog-style-one">
            <div className="thumb">
                <Link to={`/blog/${slug}`}>
                    <img
                        src={`${ENDPOINTS.BLOG_IMAGE_URL}/blogs/${featured_image}`}
                        width={800}
                        height={600}
                        alt={title}
                    />
                </Link>
                <div className="info">
                    <h2 className="post-title">
                        <Link to={`/blog/${slug}`}>{title}</Link>
                    </h2>
                    <div
                        className="descriptionblog"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <Link to={`/blog/${slug}`} className="button-regular">
                        Continue Reading <i className="fas fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog3Column;
