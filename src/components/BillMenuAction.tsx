import { PlusCircle } from 'lucide-react'
import React from 'react'

const BillMenuAction = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-snow">Contas</h1>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xl font-semibold text-snow">Mês:</span>
          <p className="text-xl font-semibold text-snow">Janeiro</p>
        </div>
      </div>
      <button className="flex items-center justify-center gap-4 rounded bg-lava p-2 font-semibold text-snow transition-all hover:bg-lava/80 xl:h-12 xl:w-56">
        <PlusCircle /> Adicionar conta
      </button>
    </div>
  )
}

export default BillMenuAction
