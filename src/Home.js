import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    //let name = "Mario";

    const { data, isPending, error} = useFetch("http://localhost:8000/blogs")



    return (  

        <div className="home">

            {/* LIKE A FOR LOOP */}

            {error && <div> {error} </div> }
            {isPending && <div> LOADING ...... </div>}
            { data && <BlogList blogs={data} title="All Blogs"> </BlogList>}


        </div>
     );
}
 
export default Home;