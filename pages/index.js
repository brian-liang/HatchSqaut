import Link from 'next/link';

export default function Index() {
    return (
      <div>
        <h1>Hatch Sqat App</h1>
        <Link href="/about">
          <a title="About Page">About Page</a>
        </Link>
        <Link href="/backSqt">
          <a>Back Squat</a>
        </Link>
        <p>Hello Next.js</p>
      </div>
    );
  }