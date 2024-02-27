import SideNav from '../ui/dashboard/sidenav'

const layuout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <header className="mx-5 mt-6 flex">
        <h1 className="bg-gradient-to-r from-[#f562e4] from-0% via-[#8c63ec] via-35% to-[#3763f2] to-100% bg-clip-text text-center text-4xl font-bold text-transparent md:w-56">
          My Wallet
        </h1>
      </header>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <SideNav />
        <main className="h-[90vh] flex-grow rounded-[20px] bg-[#2C2C2C] p-6 md:overflow-y-auto md:p-12">
          {children}
        </main>
      </div>
    </>
  )
}

export default layuout
