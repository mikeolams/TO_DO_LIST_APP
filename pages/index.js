
import Layout from '../components/MyLayout.js'
import App from '../components/app.js'
import Link from 'next/link'
import List from '../components/list';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Todo List</h1>
    <ul>
      <PostLink title="Construction in progress.js" />
      <PostLink title="Project on awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </ul>
    <section>
      <App/>

    </section>
  </Layout>
)