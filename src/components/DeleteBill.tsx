'use client'
import { Trash } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

export const DeleteBill = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Trash className="cursor-pointer text-gray-500 transition-all hover:text-red-600" />
      </DialogTrigger>
      <DialogContent className=" border-none shadow shadow-lava">
        <DialogHeader>
          <DialogTitle className="flex w-full items-center justify-center text-2xl font-normal text-snow">
            Deseja excluir essa conta?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter>
          <form className="mt-4 flex w-full items-center justify-center gap-4">
            <button className="text-md w-52 rounded-lg border border-lava bg-transparent p-2 text-lava">
              Não
            </button>
            <button
              type="submit"
              className="text-md w-52 rounded-lg bg-lava p-2 text-snow transition-all hover:bg-lava/80"
            >
              Sim
            </button>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
