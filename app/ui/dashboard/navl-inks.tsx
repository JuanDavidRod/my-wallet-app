'use client'

const links = [
  {
    id: 1,
    page: '/dashboard',
    name: 'Home',
    icon: '',
  },
  {
    id: 2,
    page: '/dashboard/movimientos',
    name: 'Movimientos',
    icon: '',
  },
  {
    id: 3,
    page: '/dashboard/cuentas',
    name: 'Cuentas',
    icon: '',
  },
  {
    id: 4,
    page: '/dashboard/herramientas',
    name: 'Herramientas',
    icon: '',
  },
]

const navLinks = () => {
  return (
    <ul>
      {links.map((link) => {
        const LinkIcon = link.icon

        return (
          <li key={link.id}>
            <a
              href={link.page}
              className="mb-3 flex h-9 grow items-center justify-center rounded-md bg-gradient-to-r from-[#f562e4] from-0% via-[#8c63ec] via-35% to-[#3763f2] to-100% p-3 text-lg font-semibold hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
            >
              {LinkIcon}
              <p className="hidden md:block">{link.name}</p>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

export default navLinks
