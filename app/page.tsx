import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="bg-gradient-to-r from-[#f562e4] from-0% via-[#8c63ec] via-35% to-[#3763f2] to-100% bg-clip-text text-center text-5xl font-[800] text-transparent ">
        My Wallet
      </h1>
      <div className="my-10 flex w-[500px] flex-col rounded-2xl bg-neutral-800 p-10">
        <h2 className="mb-5 text-center text-2xl font-medium">Bienvenido</h2>
        <form className="flex flex-col gap-3" action="">
          <div>
            <label className="mb-1 block text-sm text-gray-900 dark:text-white">
              Usuario
            </label>
            <input
              type="text"
              id="first_name"
              className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 p-2.5 text-sm text-white placeholder:text-neutral-400"
              placeholder="Usuario"
              required
            />
          </div>
          <div>
            <label className="mb-1 block text-sm  text-gray-900 dark:text-white">
              Contraseña
            </label>
            <input
              type="password"
              id="first_name"
              className="block w-full rounded-lg border border-neutral-600 bg-neutral-700 p-2.5 text-sm text-white placeholder:text-neutral-400"
              placeholder="Contraseña"
              required
            />
          </div>
          <button
            type="button"
            className="mt-5 w-full rounded-lg bg-gradient-to-r from-[#f562e4] from-0% via-[#8c63ec] via-35% to-[#3763f2] px-5 py-2.5 text-base font-medium text-white"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-5">
          <p className="text-center text-xs">¿ Aún no tienes cuenta ?</p>
          <p className="text-center text-xs">Registrate</p>
        </div>
      </div>
    </main>
  )
}
