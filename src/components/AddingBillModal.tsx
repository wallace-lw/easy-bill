import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from './ui/select'
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
  DialogTitle,
  DialogContent,
} from './ui/dialog'

import { PlusCircle } from 'lucide-react'

export const AddingBillModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-md flex items-center justify-center gap-4 rounded bg-lava p-2 font-semibold text-snow transition-all hover:bg-lava/80 xl:h-12 xl:w-56">
          <PlusCircle /> Adicionar conta
        </button>
      </DialogTrigger>
      <DialogContent className="rounded-md border-none bg-grey sm:max-w-[450px]">
        <div className="flex flex-col gap-2 p-4">
          <DialogHeader>
            <DialogTitle className="text-3xl font-normal text-snow">
              Adicionar conta
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
                Tipo de conta
              </label>
              <Select>
                <SelectTrigger className="rounded-md bg-snow p-1.5 outline-none">
                  <SelectValue placeholder="Selecione:" />
                </SelectTrigger>
                <SelectContent className="bg-snow">
                  <SelectGroup>
                    <SelectLabel className="text-sm font-medium text-black">
                      Tipo
                    </SelectLabel>
                    <SelectItem
                      value="recorrente"
                      className="text-md cursor-pointer text-black transition-all hover:bg-black/10"
                    >
                      Recorrente
                    </SelectItem>
                    <SelectItem
                      value="eventual"
                      className="text-md cursor-pointer text-black transition-all hover:bg-black/10"
                    >
                      Eventual
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 text-xl text-snow">
                Valor <small>(Se o valor não for fixo deixe em branco)</small>
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
