import Layout from '../components/MyLayout';
import Link from 'next/link';
import SquatInput from '../components/SquatInput';
import SquatList from '../components/SquatList';

//Currently working though this tutorial https://www.youtube.com/watch?v=6RhOzQciVwI&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI

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
                <h1>Back Squat Program</h1>

                <SquatInput/>

                <SquatList />
                {/* <ul>
                    <PostLink id="back-squat-w1"/>
                    <PostLink id="back-squat-w2"/>
                    <PostLink id="back-squat-w3"/>
                </ul> */}
            </Layout>
        </div>
    )
}