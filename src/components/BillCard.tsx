'use client'
import { Check, CircleDollarSign } from 'lucide-react'
import { UpdateBillModal } from './UpdateBillModal'
import { DeleteBill } from './DeleteBill'
import { useState } from 'react'

const BillCard = () => {
  const [isPaid, setIsPaid] = useState(false)

  const handlePayment = () => {
    setIsPaid(!isPaid)
  }

  return (
    <div className="flex h-44 flex-col justify-between rounded-lg bg-grey p-4">
      <div>
        <div className="flex w-full items-center">
          <h1 className="flex w-full items-center gap-2 text-2xl font-semibold text-snow">
            Conta de luz
            {isPaid ? (
              <Check
                className="ml-3 size-8 cursor-pointer rounded-full bg-lava p-1 font-bold text-snow"
                onClick={handlePayment}
              />
            ) : (
              <CircleDollarSign
                className="ml-3 size-8 cursor-pointer transition-all hover:text-lava"
                onClick={handlePayment}
              />
            )}
          </h1>
          <div className="flex gap-4">
            <UpdateBillModal />
            <DeleteBill />
          </div>
        </div>

        <span className="font-medium text-snow">Recorrente</span>
      </div>

      <div className="flex w-full justify-between">
        <span className="text-xl font-medium text-snow">Valor:</span>
        <p
          className={`text-xl font-medium text-snow ${isPaid ? 'line-through' : ''}`}
        >
          R$ 200,00
        </p>
      </div>
    </div>
  )
}

export default BillCard
