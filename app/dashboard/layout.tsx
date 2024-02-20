import SideNav from "../ui/dashboard/sidenav"

const layuout = ({children}: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow bg-[#2C2C2C] border-r-1 p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  )
}

export default layuout