import Link from 'next/link'
import MaxWidthWrapper from './MaxWidthWrapper'

const Navbar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 bg-inherit pb-2">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="top-0 flex h-20 w-full items-center justify-between">
            <h1 className="text-2xl font-semibold text-snow">EasyBill</h1>
            <Link
              href={'/main-page'}
              className='xl:w-56" flex items-center justify-center gap-4 rounded bg-lava p-2 font-semibold text-slate-50 transition-all hover:bg-lava/80 xl:h-12'
            >
              Entrar com o Google
            </Link>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}

export default Navbar
