import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function Princing() {
  return (
    <MainLayout>
        <h1 className={'title'}>
        Princing
        </h1>
        <h2 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h2>
        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/pricing.jsx</code>
        </p>
    </MainLayout>
  )
}
