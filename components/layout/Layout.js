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
                {/* How to conditionally check for multiple values stackoverflow.com/questions/63030124/using-or-operator-in-react-js-conditional-rendering */}
                {/* Hides cookie banner on the hub and error page */}
                { !['/dashboard', '/error'].includes(asPath) && <Welcomebanner />}
            </div>    
            <div className="flex-main-container">
                {children}
            </div>
            <div className="flex-banner-container">
                {/* Hides cookie banner on the error page */}
                {asPath !== '/error' && <Cookiebanner />}
            </div>
        </div>
    );
}

export default Layout;