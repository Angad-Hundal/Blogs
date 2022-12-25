import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {

    //let name = "Mario";

    const [name, setName] = useState('Mario');
    const [age, setAge] = useState(25);


    const handleClick = (e) => {
        setName('Mario Puzo');
        setAge(30);
    }

    const handleClickAgain = (name, e) => {
        console.log("Hello " + name, e.target);
    }


    const [blogs, setBlogs] = useState( [
        {title: "My new website", body:"the body of the blog", author: 'Mario', id:1},
        {title: "Welcome to blogs!", body:"the body of the blog", author: 'Ali', id:2},
        {title: "React learning", body:"the body of the blog", author: 'Robert', id:3}
    ] );


    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id );
        setBlogs(newBlogs);
    }


    return (  

        <div className="home">


            {/* LIKE A FOR LOOP */}

            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}> </BlogList>


        </div>
     );
}
 
export default Home;