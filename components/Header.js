import Link from 'next/link'

const linkStyle = {
  marginRight: 10,
  backgroundColor: 'yellow'
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>To do List</a>
        </Link>
    </div>
)

export default Header
