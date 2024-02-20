import BillCard from '@/components/BillCard'
import BillMenuAction from '@/components/BillMenuAction'
import Footer from '../../components/Footer'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
export default function Main() {
  return (
    <MaxWidthWrapper className="min-h-screen pt-32">
      <BillMenuAction />
      <div className="grid w-full grid-cols-1 gap-8 py-28 pt-14  xs:grid-cols-2 md:grid-cols-2  xmd:grid-cols-3  xl:grid-cols-3">
        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
        <BillCard />
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
