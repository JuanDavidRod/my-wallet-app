'use client';

const links = [
  {
      id: 1,
      page: '/',
      name: 'Home',
      icon: ''
  },
  {
      id: 2,
      page: 'movimientos',
      name: 'Movimientos',
      icon: ''
  },
  {
      id: 3,
      page: 'cuentas',
      name: 'Cuentas',
      icon: ''
  },
  {
      id: 4,
      page: 'herramientas',
      name: 'Herramientas',
      icon: ''
  },
]

const navLinks = () => {
  return (
    <ul>
      {links.map((link) => {
        const LinkIcon = link.icon

        return (
          <li key={link.id} >
            <a
              href={link.page}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
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