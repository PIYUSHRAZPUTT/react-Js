import {Link} from "react-router-dom";

const Blog = () => {
    const posts=[
        {id:1, title:"React Basics"},
        {id:2, title:"Understand useState"},
        {id:3, title:"Mastering useEffect"},
    ]
  return (
    <div style={{padding:"20px"}}>
        <h1>Blog Posts</h1>
        {posts.map((post)=>(
            <div key={post.id}>
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
            </div>
        ))}
      
    </div>
  )
}

export default Blog
