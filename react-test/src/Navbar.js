function Navbar() {

    return ( 
        <nav className="navbar">
            <h1>CrApp</h1>
            <div className="links">
                <a href="/">Home</a>
                <br></br>
                <a href="/upload">Upload a crossword</a>
            </div>
        </nav>
    );
}
 
export default Navbar;