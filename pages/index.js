import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import useSWR from 'swr';
import { render } from 'react-dom';


export default function() {
  return(
    <div>
    <Layout>
    <h1>HATCH SQUAT PROGRAM</h1>
    </Layout>
    </div>
  );
}