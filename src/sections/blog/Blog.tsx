import Card from "../../component/card/Card";
import { PrimaryText } from "../../component/PrimaryText";
import { BLOG_LIST } from "../../global/Constant";
import { FontSize, FontWeight } from "../../global/GlobalStyle";
import './Blog.css';

const Blog = () => {
    return (
        <div className="blog-container">
            <PrimaryText text="Medium Blogs" style={{fontSize: FontSize.xxLarge, fontWeight: FontWeight.bold}}/>
            <div className="blog-card-container">
                {BLOG_LIST.map((blog, index) => 
                    <Card
                        key={index}
                        data={blog}
                        type="blog"
                    />
                )}
            </div>
        </div>
    );
}

export default Blog;