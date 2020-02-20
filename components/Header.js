import Link from 'next/link';

const linkStyle = {
    marginRight: 15
};

const Header = () => (
    <div>
        <h1>Hatch Squat App</h1>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/backSqt">
          <a style={linkStyle}>Back Squat</a>
        </Link>
        <Link href="/">
          <a style={linkStyle}>Front Squat</a>
        </Link>
    </div>
);

export default Header;