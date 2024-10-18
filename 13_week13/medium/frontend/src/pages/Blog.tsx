import { Blogskeleton } from "../components/Blogskeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";
export const Blog = ()=>{
    const {id} = useParams();
    const {loading,blog} = useBlog(
       { id:id||""}
    );
    if(loading || !blog){
        return<div>
            <Blogskeleton/>
            <Blogskeleton/>
            <Blogskeleton/>
        </div>
    }
    return(
        <div>
           <FullBlog blog={blog} />
           
        </div>
    )
}