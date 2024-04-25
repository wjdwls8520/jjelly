import Link from "next/link";

export default function Header() {
    return (
        <header id="header">
            <div className="pageName">
                <Link href={{ pathname: '/' }}>
                    <img src='/back_arrow.png' /> 
                </Link>
                {/* <span>HOME</span> */}
            </div>
            <h1 className="logo">
                <Link href={{ pathname: '/' }}>
                    <img src='/logo.png' /> 
                </Link>
            </h1>
            <div className="util">
                <Link href={{ pathname: '/profile' }}>
                    <div className="profile">
                        <img src='/profile.png' /> 
                    </div>
                </Link>
            </div>
        </header>
    );
};