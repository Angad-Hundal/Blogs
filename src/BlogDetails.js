import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {

    const { id } = useParams();
    const {data: blog, error, isPeding} = useFetch('http://localhost:8000/blogs/' + id);

    const navigate = useNavigate();

    const handleClick = () => {

        fetch('http://localhost:8000/blogs/' + blog.id , {

        method: 'DELETE'
        }).then( () => {

            navigate("/");
        } )
    }

    return (  
        <div className="blog-details">

            {isPeding && <div> Loading..... </div>}
            {error && <div> {error} </div>}
            {blog && (
                <article>
                    <h2> {blog.title} </h2>
                    <p> Wriiten by {blog.author} </p>
                    <div> {blog.body} </div>

                    <button onClick={handleClick}> Delete Blog </button>
                </article>
            )}
        </div>
    );
}

 
export default BlogDetails;