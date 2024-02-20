'use client'
import React from 'react'
import { AddingBillModal } from './AddingBillModal'

const BillMenuAction = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-start text-xl text-snow xs:text-2xl md:text-3xl ">
          Contas - 2024
        </h1>
        <div className="flex items-center justify-start gap-2">
          <span className="text-md font-semibold text-snow xs:text-xl">
            Mês:
          </span>
          <p className="text-md font-semibold text-snow xs:text-xl">Janeiro</p>
        </div>
      </div>
      <AddingBillModal />
    </div>
  )
}

export default BillMenuAction
