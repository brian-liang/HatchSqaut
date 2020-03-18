import Layout from '../components/MyLayout';
import Link from 'next/link';
import SquatInput from '../components/SquatInput';

const PostLink = props => (
    <li>
      <Link href="/p/[id]" as={`/p/${props.id}`}>
        <a>{props.id}</a>
      </Link>
    </li>
  );

export default function(){
    return(
        <div>
            <Layout>
                <h1>Front Squat Program</h1>

                {/* <SquatInput label='Max Front Squat'/> */}
                <ul>
                    <PostLink id="back-squat-w1"/>
                    <PostLink id="back-squat-w2"/>
                    <PostLink id="back-squat-w3"/>
                </ul>
            </Layout>
        </div>
    )
}