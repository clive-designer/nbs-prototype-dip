import Navbar from "../navbar/Navbar";
import Welcomebanner from "../welcomebanner/Welcomebanner";
import Cookiebanner from "../cookiebanner/Cookiebanner";

import { useRouter } from "next/router";

import styles from './Layout.module.scss';



const Layout = ({ children }) => {
    // How to only show a component on a route/path/page
    // https://stackoverflow.com/questions/67663919/how-to-hide-header-only-at-one-page-in-nextjs-app
    const { asPath } = useRouter();
    
    return (
        <div>
            <div className="flex-nav-container">
                <Navbar />
            </div>
            <div className="flex-banner-container">
                {asPath !== '/dashboard' && <Welcomebanner />}
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