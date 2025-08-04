import axios from "axios"
import { useEffect, useState } from "react"


export const Allpost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get("http://localhost:5000/post/AdminAccess")
                 setPosts(res.data.posts);
            } catch(error){
                console.error("Error fetching posts:", error);
            }
        }
        fetchPosts()
    },[])

    return <div className="min-h-screen bg-slate-200 p-6 rounded-2xl">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {posts.map((post, i) => (
      <RenderPost post={post} index={i} key={i} />
    ))}
  </div>
</div>
}

interface Post {
    _id: string;
  title: string;
  description: string;
  timestamp: string;
  userId?: string;
  authorName?: string;  
}

interface InputProps {
  post: Post;
  index: number;
}


const RenderPost = ({post,index}:InputProps) => {

    return (
         <div className="w-full">
      <div className="flex flex-col border border-black bg-white p-6 rounded-xl shadow-md h-full">
        {post.authorName && (
          <div className="font-semibold text-sm text-white bg-black rounded-full px-3 py-1 w-fit mb-2">
            {post.authorName}
          </div>
        )}
        <h2 className="text-xl font-bold mb-1">{post.title}</h2>
        <p className="text-gray-700 mb-2 text-sm whitespace-pre-wrap">
          {post.description}
        </p>
        <p className="text-xs text-gray-500 mt-auto">
          {new Date(post.timestamp).toLocaleString()}
        </p>
      </div>
    </div>
    )
}