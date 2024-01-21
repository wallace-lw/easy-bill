import BillCard from '@/components/BillCard'
import BillMenuAction from '@/components/BillMenuAction'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import Footer from '../../components/Footer'

export default function Main() {
  return (
    <MaxWidthWrapper className="min-h-screen pt-32">
      <BillMenuAction />
      <div className="xs:grid-cols-2 xmd:grid-cols-3 grid w-full grid-cols-1 grid-cols-1 gap-8  py-28 pt-14  md:grid-cols-2  xl:grid-cols-3">
        <BillCard isPaid />
        <BillCard isPaid />
        <BillCard isPaid />
        <BillCard isPaid />
        <BillCard isPaid />
        <BillCard isPaid />
        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
      </div>
      <Footer />
    </MaxWidthWrapper>
  )
}
