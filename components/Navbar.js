import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>Navbar list</h1>
            </div>
            <Link href="/access-dashboard">
                <a>Access your mortgage dashboard</a>
            </Link>
        </nav>
    );
}

export default Navbar;