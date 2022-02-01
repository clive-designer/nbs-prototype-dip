import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <div className="navbar-clive">
            <Navbar />
            </div>
            
            <div className="flex-container">
                {children}
            </div>
        </div>
    );
}

export default Layout;