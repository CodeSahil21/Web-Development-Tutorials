import { Blogs } from "../hooks"
import { Appbar } from "./Appbar"
import { Avatar } from "./Blogcard"

export const FullBlog = ({blog} :{blog:Blogs})=>{
    return<div>
        <Appbar/>
        <div className="flex justify-center">
    <div className="grid grid-cols-12 px-10 w-full pt-70 max-w-screen-2xl ">
        <div className="col-span-8">
           <div className="text-3xl font-extrabold">
         {blog.title}
           </div>
           <div className="text-gray-500 pt-2">
            Posted on 23rd December
           </div>
           <div className="pt-4">
            {blog.content}
           </div>
        </div>
        <div className="col-span-4">
            <div className="text-slate-500 text-lg">
            Author
            </div>
            <div className="flex w-full">
                <div className="pr-4 flex flex-col justify-center">
                <Avatar size="big" name={blog.author.name}/>
                </div>
                <div>
                <div className="text-xl font-bold">
            {blog.author.name}
            </div>
            <div className="pt-1 text-slate-500">
                Random catch phrase about the author's ability to grab the user's attention
            </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
}