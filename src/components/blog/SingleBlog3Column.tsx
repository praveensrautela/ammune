import { Link } from "react-router-dom";
import { BlogType } from "./Blog3ColumnContent";
import ENDPOINTS from "../../config/endpoints";

const SingleBlog3Column = ({ blog }: { blog: BlogType }) => {
    const { slug, title, description, featured_image, category } = blog;

    const blogUrl = category && category.trim() !== ""
        ? `/blog/${category}/${slug}`
        : `/blog/${slug}`;

    return (
        <div className="home-blog-style-one">
            <div className="thumb">
                <Link to={blogUrl}>
                    <img
                        src={`${ENDPOINTS.BLOG_IMAGE_URL}/blogs/${featured_image}`}
                        width={800}
                        height={600}
                        alt={title}
                    />
                </Link>
                <div className="info">
                    <h2 className="post-title">
                        <Link to={blogUrl}>{title}</Link>
                    </h2>
                    <div
                        className="descriptionblog"
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                    <Link to={blogUrl} className="button-regular">
                        Continue Reading <i className="fas fa-long-arrow-right" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog3Column;
