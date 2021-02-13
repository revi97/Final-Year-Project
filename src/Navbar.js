const navbar = () => {
    return (
        <div className="navbar">
            <div className="profile">
                <h2>Hello, John</h2>
            </div>           
            <div className="links">
                <a href="/">Dashboard</a>
                <a href="/attend">Attendence</a>
                <a href="/classes">Classes</a>
                <a href="/notes">Notes</a>
                <a href="/profile">Profile</a>

            </div>
            <button className="logout">
                Logout
            </button>    
        </div>
    );
}
 
export default navbar;