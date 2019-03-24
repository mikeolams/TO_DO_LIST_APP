// <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//   <a>{props.title}</a>
// </Link>


import Layout from '../components/MyLayout.js'
import App from '../components/app.js'
import Link from 'next/link'
import List from '../components/list'
import fetch from 'isomorphic-unfetch'

const Service = (props) => (
   <Layout>
    <h1>Default Todo List from the server endpoint</h1>
    <ul>
      {props.shows.map((show) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <div>
    <section>
      <App/>
    </section>
    </div>
  </Layout>
)

Service.getInitialProps = async function() {
  const res = await fetch('http://localhost:3000/api/course')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Service




// import Service from '../components/service';

// const Service = (props) => (
//   <div>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(({show}) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </div>
// )

// Service.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
//   const data = await res.json()

//   console.log(`Show data fetched. Count: ${data.length}`)

//   return {
//     shows: data
//   }
// }

// const PostLink = props => (
//   <Service/>
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

// export default () => (
//   <Layout>
//     <h1>My Todo List</h1>
//     <ul>
//       <PostLink title="Construction in progress.js" />
//       <PostLink title="Project on awesome" />
//       <PostLink title="Deploy apps with Zeit" />
//     </ul>
    // <section>
    //   <App/>
    // </section>
//   </Layout>
// )   https://api.tvmaze.com/search/shows?q=batman