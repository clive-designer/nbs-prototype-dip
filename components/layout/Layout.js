import Navbar from "../navbar/Navbar";

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div>
            <div className="flex-nav-container">
                <Navbar />
            </div>
            
            <div className="flex-main-container">
                {children}
            </div>
        </div>
    );
}

export default Layout;