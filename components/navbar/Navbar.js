import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Navbar list</h1>
            </div>
            <p>Ref: M123456</p>
            <Link href="/access-dashboard">
                <a className="nbs-btn-primary--navbar">Access mortgage dashboard</a>
            </Link>
        </nav>
    );
}

export default Navbar;