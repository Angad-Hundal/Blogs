import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 

        <div className="not-found">
            <h2> Sorry </h2>
            <p> THAT PAGE CANNOT BE FOUND </p>
            <Link to="/"> BACK TO THE HOME PAGE </Link>
        </div>
     );
}
 
export default NotFound;