import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../assets/Logo'
import { NavLink, Link } from 'react-router-dom'


export default function Navbar({ data }) {
  return (
    <Disclosure as="nav" className="bg-primary z-50 fixed h-16 top-0 left-0 w-full">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to='/'>
                    <Logo
                      className="block h-8 w-auto lg:hidden"
                      alt="String Shaper"
                      color='#fff'
                    />
                    <Logo
                      className="hidden h-8 w-auto lg:block"
                      alt="String Shaper"
                      color='#fff'
                    />

                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">

                    {data.map(navItem => (
                      <NavLink key={navItem.name} to={navItem.path}
                        className={({ isActive }) => isActive ? 'border-b-4 block border-secondary text-white px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:border-b-4 border-secondary/50 px-3 py-2 text-sm font-medium'
                        }
                      >
                        {navItem.name}
                      </NavLink>
                    ))}
                  </div>

                </div>

              </div>
              <div className="-mr-2 flex sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden bg-primary">
            {({ close }) => (
              <div className="space-y-1 px-2 pb-3 pt-2  z-[50]">
                {
                  data.map(navItem => (
                    <NavLink
                      to={navItem.path}
                      key={navItem.name}
                      className={({ isActive }) => isActive ? 'border-l-4 border-secondary bg-secondary/20 text-white block rounded-md px-3 py-2 text-base font-medium' : 'text-gray-300 block rounded-md px-3 py-2 text-base font-medium'
                      }
                      onClick={() => close()}
                    >
                      {navItem.name}
                    </NavLink>
                  ))
                }
              </div>
            )}
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}
