import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <div className="flex-container">
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;