import NavLinks from './navl-inks'
import { linksNav, linksConf } from '../../mock/menuData'

const sideNav = () => {
  return (
    <nav className="flex w-full flex-col justify-between px-2 py-4 md:w-64 md:px-4">
      <NavLinks links={linksNav} />
      <NavLinks links={linksConf} />
    </nav>
  )
}

export default sideNav
