import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from './ui/dialog'

import { PencilIcon } from 'lucide-react'

export const UpdateBillModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <PencilIcon className="cursor-pointer text-gray-500  transition-all hover:text-lava" />
      </DialogTrigger>
      <DialogContent className="rounded-md border-none bg-grey sm:max-w-[450px]">
        <div className="flex flex-col gap-2 p-4">
          <DialogHeader>
            <DialogTitle className="text-3xl font-normal text-snow">
              Atualizar conta
            </DialogTitle>
          </DialogHeader>
          <form className="flex flex-col gap-4 py-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-xl text-snow">
                Nome da conta
              </label>
              <input
                type="text"
                id="name"
                className="rounded-md bg-snow p-1.5 outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-xl text-snow">
                Valor
              </label>
              <input
                type="text"
                id="name"
                className="rounded-md bg-snow p-1.5 outline-none"
              />
            </div>

            <DialogFooter>
              <div className="mt-4 flex w-full flex-col items-center justify-center gap-4">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-lava p-2 text-2xl text-snow transition-all hover:bg-lava/80"
                >
                  Confirmar
                </button>
              </div>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
