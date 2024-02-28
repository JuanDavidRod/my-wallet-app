import React from 'react'

const accountCard = () => {
  return (
    <div className="bg-primary flex h-48 w-[450px] flex-col justify-between rounded-xl p-3 text-xl">
      <div>
        <h3>Cuenta de ahorros</h3>
        <p className="text-2xl">0000 0000 0000 0000</p>
      </div>

      <div className="flex justify-between text-zinc-400">
        <div>
          <p className="text-xs">Juan David Rodriguez</p>
          <p className="text-xs">master card</p>
        </div>
      </div>
    </div>
  )
}

export default accountCard
