import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Index() {
    return (
      <div>
        <Layout>
          <p>Hello Next.js</p>
          <ul>
            <PostLink id="hello-nextjs"/>
            <PostLink id="learn-nextjs"/>
            <PostLink id="deploy-nextjs"/>
          </ul>
        </Layout>
      </div>
    );
  }