import HomePage from '@/components/pages/home'
import Link from 'next/link'

export default function Home() {
  return (
    <HomePage>
      <Link href='/protected'>Protected</Link>
    </HomePage>
  )
}