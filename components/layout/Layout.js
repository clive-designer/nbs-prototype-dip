import Navbar from "../navbar/Navbar";
import Welcomebanner from "../welcomebanner/Welcomebanner";
import Cookiebanner from "../cookiebanner/Cookiebanner";

import styles from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div>
            <div className="flex-nav-container">
                <Navbar />
            </div>
            <div className="flex-banner-container">
                <Welcomebanner />
            </div>    
            <div className="flex-main-container">
                {children}
            </div>
            <div className="flex-banner-container">
                <Cookiebanner />
            </div>
        </div>
    );
}

export default Layout;