import { CircleDollarSign, CheckCircle } from 'lucide-react'

type BillCardProps = {
  isPaid: boolean
}

const BillCard = ({ isPaid }: Partial<BillCardProps>) => {
  return (
    <div className="flex h-44 flex-col justify-between rounded-lg bg-grey p-4">
      <div>
        <h1 className="flex w-full items-center justify-between text-2xl font-semibold text-snow">
          Conta de luz
          {isPaid ? (
            <CheckCircle className="size-8 text-lava" />
          ) : (
            <CircleDollarSign className="size-8" />
          )}
        </h1>
        <span className="font-medium text-snow">Recorrente</span>
      </div>

      <div className="flex w-full justify-between">
        <span className="text-xl font-medium text-snow">Valor:</span>
        <p className="text-xl font-medium text-snow">R$ 200,00</p>
      </div>
    </div>
  )
}

export default BillCard
