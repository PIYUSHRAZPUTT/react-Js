import { useParams } from 'react-router-dom'

const BlogDetails = () => {
    const {id}=useParams();
  return (
    <div style={{padding:"20px"}}>
       <h1>Welcome to My Blog</h1>
        <p>This is the BlogDetails Page</p>
        <h1>Blog Details</h1>
        <p>Post ID: {id}</p>
    </div>
  )
}

export default BlogDetails
