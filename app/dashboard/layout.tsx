import SideNav from '../ui/dashboard/sidenav'
import Header from '../ui/dashboard/header'

const layuout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <SideNav />
        <main className="h-[90vh] flex-grow rounded-[20px] bg-[#2C2C2C] p-6 md:mr-6 md:overflow-y-auto md:p-12">
          {children}
        </main>
      </div>
    </>
  )
}

export default layuout
