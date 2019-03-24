//   const result =(props)=>( console.log(props.item))
//     // if(this.state.term){console.log(result)}
//       // console.log(result)

//       result.getInitialProps = async function() {
//   const res = await fetch('../server')
//   const data = await res.json()

//   // console.log(`Show data fetched. Count: ${data.length}`)
//   console.log(`Show data fetched. Count: ${data}`)

//   return {
//     shows: data
//   }
// }
// import Layout from '../components/MyLayout.js'
// import Link from 'next/link'
// import fetch from 'isomorphic-unfetch'
// if(this.state.term){console.log(result)}

// import Layout from '../components/MyLayout.js'
// console.log(props.shows),
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Service = (props) => (
  <div>
    <h1>Batman TV Shows</h1>
    <ul>
      {props.shows.map(({show}) => (
        <li key={show.id}>
          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
)

Service.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Service