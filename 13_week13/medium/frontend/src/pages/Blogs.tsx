import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/Blogcard"
import { Blogskeleton } from "../components/Blogskeleton";
import { useBlogs } from "../hooks";

export const Blogs = () => {
    const  {loading ,blogs} = useBlogs();
    if(loading){
        return<div>
             <Blogskeleton/>
            <Blogskeleton/>
            <Blogskeleton/>
        </div>
    }
    return (
        <div>
            <Appbar  />
            <div className="flex justify-center">
                <div className="max-w-xl w-full px-4">
                {blogs.map(blog =>  <BlogCard
                        id={blog.id}
                        authorName={blog.author.name}
                        title={blog.title}
                        content={blog.content}
                        publishedDate={"2nd Feb 2024"}
                    />)}
                  
                </div>
            </div>
        </div>
    );
};
