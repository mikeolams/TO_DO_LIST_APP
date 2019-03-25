// const PostLink = props => (
//   <li>
//     <Link href={`/post?title=${props.title}`}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// )

// export default () => (
//   <div>
//     <h3>My Todo List</h3>
//     <ul>
//       <PostLink title="Construction in progress.js" />
//       <PostLink title="Project on awesome" />
//       <PostLink title="Deploy apps with Zeit" />
//     </ul>
//   </div>



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

// export default Service

// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
// if(this.state.term){console.log(result)}

// import Layout from '../components/MyLayout.js'
// console.log(props.shows),
import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'


const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

  export default PostLink