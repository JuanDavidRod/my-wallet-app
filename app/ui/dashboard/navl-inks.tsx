'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
interface Props {
  links: MenuLink[]
}

const navLinks = ({ links }: Props) => {
  const pathname = usePathname()

  return (
    <ul>
      {links.map((link) => {
        const LinkIcon = link.icon

        return (
          <li key={link.id}>
            <Link
              href={link.page}
              className={clsx(
                'mb-5 flex h-9 grow items-center justify-center rounded-lg from-[#f562e4] from-0% via-[#8c63ec] via-35% to-[#3763f2] to-100% p-3 text-xl font-light hover:bg-gradient-to-r md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-gradient-to-r from-[#f562e4] from-0% via-[#8c63ec] via-35% to-[#3763f2] to-100%':
                    pathname === link.page,
                },
              )}
            >
              {LinkIcon}
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default navLinks
