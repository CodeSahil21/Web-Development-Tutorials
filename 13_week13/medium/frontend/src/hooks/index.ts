import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";

export interface Blogs{
    "title":string;
    "content":string;
    "id":string
   "author":{
        "name":string;
    }
}

export const useBlog = ({id}:{id:string})=>{
    const [loading ,setloading]  = useState(true);
    const [blog ,setBlog] = useState<Blogs[]>([]);
    try {useEffect( ()=>{
     axios.get(`${BACKEND_URL}/api/v1/post/${id}`,{
        headers:{
            Authorization:localStorage.getItem("token")    
        }
     })
     .then(response=>{
        setBlog(response.data.post);
        setloading(false) ;
     })
    },[])}catch(e){
        console.log(e);
    }
    return{
        loading,
        blog
    }

}
export const  useBlogs =  ()=>{
    const [loading ,setloading]  = useState(true);
    const [blogs ,setBlogs] = useState<Blogs[]>([]);
    try {useEffect( ()=>{
     axios.get(`${BACKEND_URL}/api/v1/post/bulk`,{
        headers:{
            Authorization:localStorage.getItem("token")    
        }
     })
     .then(response=>{
        setBlogs(response.data.posts);
        setloading(false) ;
     })
    },[])}catch(e){
        console.log(e);
    }

    return{
        loading,
        blogs
    }
}