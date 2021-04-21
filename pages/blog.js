import Layout from '../components/Layout';
import {posts} from '../profile';
import Link from 'next/link';

const PostCard = ({post}) => (
    <div className="col-md-4">
        <div className="card">
            <div className="overflow">
                <img src={ post.imageURL} className="card-img-top"/>
            </div>
            <div className="card-body">
                <h1>{ post.title }</h1>
                <p>{ post.content }</p>
               <Link href="https://portafolio-app.netlify.app/">
                <button className="btn btn-light">See More</button>
               </Link>
               <Link href="https://my-taskapp.netlify.app/">
                <button className="btn btn-dark">See More</button>
               </Link>      
            </div>
        </div>
    </div>
)


const Blog = () => (

 <Layout footer={false} title="My blog" dark>
    <div className="row">
     {
         posts.map((post,i) => (
            <PostCard post={ post } key={i}/>
         ))
     } 
    </div>
 </Layout>

)

export default Blog;        