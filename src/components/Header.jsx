import { Fragment } from 'react';
import { ComponentSVG } from '../assets/ComponentSVG';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Importa Link de React Router
import { useAuth } from '../contexts/AuthContext';
//La navegacion superior segun corresponda
const navigation = [
  { name: 'INICIO', href: '/', current: true }, 
  { name: 'CITAS', href: '/citas', current: false }, 
  { name: 'SERVICIOS', href: '/servicios', current: false }, 
  { name: 'PROMOCIONES', href: '/promociones', current: false }, 
  { name: 'REFACCIONES', href: '/refacciones', current: false }, 
  { name: 'CONOCENOS', href: '/nosotros', current: false }, 
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Header() {

  const location = useLocation();

  const {state,signOut} = useAuth();

  const navigate = useNavigate();

  return (
    <Disclosure as="nav" className="bg-backgroundNormal">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 w-auto"
                    src='/Logo.png'
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-8">
                    {navigation.map((item) => (
                      <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        location.pathname === item.href ? 'shadow-md shadow-slate-400 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-2 py-2 text-md font-medium'
                      )}
                    >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                { //Si existe nuestro usuario aparecera el perfil de lo contrario se solicitara Iniciar Sesion
                  state.userToken ? (
                    <Menu as="div" className="relative ml-3">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className='hidden md:inline text-white font-sans px-4'>Hola! <strong>{state.nameUser}</strong></span>
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <ComponentSVG.Usuario/>
                    </MenuButton>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Mi Perfil
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'drop-shadow-xl' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Configuracion
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <button
                            onClick={()=>{signOut().then(navigate('/'))}}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Cerrar Sesion
                          </button>
                        )}
                      </MenuItem>
                    </MenuItems>
                  </Transition>
                </Menu>
                  ) : (
                    <p className='font-bold font-sans text-white ' 
                      onClick={()=> navigate('/login')}
                    >Iniciar sesion <ComponentSVG.Login/> </p>
                  )
                }
                
              </div>
            </div>
          </div>
            {/* Panel de Mobile */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  as="a"
                  href={item.href}
                  className={classNames(
                    location.pathname === item.href ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
