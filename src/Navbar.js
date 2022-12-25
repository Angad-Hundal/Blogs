
//sfc

const Navbar = () => {


    return ( 

        <nav className="navbar">

            <h1> Blog </h1>

            <div className="links">

                {/* various links to navigate */}
                <a href="/"> Home </a>
    
                <a href="/create"> New Blog </a>

            </div>
        </nav>
    );


}
 
export default Navbar;