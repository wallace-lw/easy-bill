import React from 'react'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-50 w-full bg-background text-snow ">
      <MaxWidthWrapper className="py-8">
        <div className="flex justify-between">
          <span className="text-2xl">Total a pagar:</span>
          <p className="text-3xl font-semibold">R$ 1200,00</p>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
