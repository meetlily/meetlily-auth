import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>This is the homepage</p>
      <Link href='/protected'>Protected</Link>
    </div>
  )
}