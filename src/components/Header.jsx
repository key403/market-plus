import React, { useRef } from 'react'

const Header = () => {
  const overlay = useRef(null)
  const entrega = useRef(null)
  const logIn = useRef(null)
  const register = useRef(null)
  const menu = useRef(null)
  const ofertasMenu = useRef(null)
  const cartMenu = useRef(null)

  const cerrarTodo = ()=> {
    if (!entrega.current.classList.contains("opacity-0")) {
      toggleEntrada()
    }
    if (!logIn.current.classList.contains("opacity-0")) {
      toggleSinup()
    }
    if (!register.current.classList.contains("opacity-0")) {
      toggleRegister()
    }
    if (!menu.current.classList.contains("-translate-x-full")) {
      toggleMenu()
    }
    if(!ofertasMenu.current.classList.contains("opacity-0")){
      toggleOfertasMenu()
    }
    if(!cartMenu.current.classList.contains("translate-x-full")){
      toggleCartMenu()
    }
  }
  const showEntrega = ()=> {
    cerrarTodo()
    toggleEntrada()
  }
  const showSignup = ()=> {
    cerrarTodo()
    toggleSinup()
  }
  const showRegister = ()=> {
    cerrarTodo()
    toggleRegister()
  }
  const showMenu = ()=> {
    cerrarTodo()
    toggleMenu()
    // a()
  }
  const showOfertasMenu = ()=> {
    cerrarTodo()
    toggleOfertasMenu()
  }
  const showCartMenu = ()=> {
    cerrarTodo()
    toggleCartMenu()
  }
  const toggleSinup = ()=> {
    document.body.classList.toggle("overflow-hidden")

    overlay.current.classList.toggle("opacity-0")
    overlay.current.classList.toggle("pointer-events-none")

    logIn.current.classList.toggle("opacity-0")
    logIn.current.classList.toggle("pointer-events-none")
    logIn.current.classList.toggle("translate-y-1/2")
  }
  const toggleEntrada = ()=> {
    document.body.classList.toggle("overflow-hidden")

    overlay.current.classList.toggle("opacity-0")
    overlay.current.classList.toggle("pointer-events-none")
      
    entrega.current.classList.toggle("opacity-0")
    entrega.current.classList.toggle("pointer-events-none")
    entrega.current.classList.toggle("translate-y-1/2")
  }
  const toggleRegister = ()=> {
    document.body.classList.toggle("overflow-hidden")

    overlay.current.classList.toggle("opacity-0")
    overlay.current.classList.toggle("pointer-events-none")

    register.current.classList.toggle("opacity-0")
    register.current.classList.toggle("pointer-events-none")
    register.current.classList.toggle("translate-y-1/2")
  }
  const toggleMenu = ()=> {
    document.body.classList.toggle("overflow-hidden")

    overlay.current.classList.toggle("opacity-0")
    overlay.current.classList.toggle("pointer-events-none")

    menu.current.classList.toggle("-translate-x-full")
  }
  const toggleOfertasMenu = ()=> {
    document.body.classList.toggle("overflow-hidden")

    overlay.current.classList.toggle("opacity-0")
    overlay.current.classList.toggle("pointer-events-none")

    ofertasMenu.current.classList.toggle("opacity-0")
    ofertasMenu.current.classList.toggle("pointer-events-none")
    if (ofertasMenu.current.classList.contains("top-0")) {
      ofertasMenu.current.classList.replace("top-0", "top-full")
    } else {
      ofertasMenu.current.classList.replace("top-full", "top-0")
    }
  }
  const toggleCartMenu = ()=> {
    document.body.classList.toggle("overflow-hidden")

    overlay.current.classList.toggle("opacity-0")
    overlay.current.classList.toggle("pointer-events-none")

    cartMenu.current.classList.toggle("translate-x-full")
  }
  const handleHover = (e)=> {
    const menuList = document.querySelectorAll(".menu")
    const index = e.currentTarget.id
    menuList.forEach((e,i)=> {
      const elIndex = `index-` + i
      e.classList.add("hidden")
      if (index === elIndex ) {
        e.classList.remove("hidden")
      }
    })
  }

  const a = ()=> {
    root.style.setProperty("--primary-color", "red")
  }

  return (
    <header>
      {/* top part */}
      <div className='container mx-auto px-4 py-3 flex justify-between items-center gap-8 mb-2'>
        <div className='flex items-center gap-4'>
          <i className="ri-menu-line text-2xl self-end hidden"></i>
          <h1 className='text-4xl text-[--primary-color] font-medium'>
            <a href="#" className='font font-bold'>MarketPlus</a>
          </h1>
        </div>
        
        <button className='hidden lg:flex items-center gap-2' onClick={showEntrega}>
          <i className="ri-map-pin-line text-xl text-[--primary-color]"></i>
          <div className='flex flex-col items-start'>
            <span className='text-xs'>Elige tu</span>
            <span className='font-medium text-sm'>Modo de entrega</span>
          </div>
          <i className="ri-arrow-down-s-line text-xl"></i>
        </button>
        
        <form onSubmit={(e)=> e.preventDefault()} className='flex-grow'>
          <div className='hidden md:flex rounded-lg overflow-hidden lg:ms-8'>
            <input className='outline-none py-1 px-2 flex-grow bg-neutral-100 border border-neutral-200 font-medium' type="text" placeholder='¿Qué estás buscando?'/>
            <button className='bg-[--primary-color] px-5'><i className="ri-search-line text-xl font-semibold  text-white"></i></button>
          </div>
        </form>
        
        <button onClick={showSignup} className='hidden lg:flex items-center gap-2'>
          <i className="ri-user-line self-start text-xl text-[--primary-color]"></i>
          <div className='flex flex-col items-start'>
            <span className='text-xs'>Hola, inicia sesión</span>
            <span className='text-sm font-medium'>Ingresa/Regístrate</span>
          </div>
          <i className="ri-arrow-down-s-line text-xl"></i>
        </button>
        
        <div>
          <i onClick={showCartMenu} className="ri-shopping-cart-2-line text-2xl cursor-pointer"></i>
          <div ref={cartMenu} className='fixed z-50 right-0 top-0 h-screen w-full md:w-[600px] flex items-center justify-center bg-white rounded-sm translate-x-full transition-all duration-300'>
            <div className='flex flex-col gap-6 items-center'>
              <h4 className='font-medium'>Tu carro está vacío</h4>
              <span>Navega por las ofertas y cetegorías</span>
              <button className='py-2 px-10 font-medium bg-[--primary-color] text-white rounded-md'>
                Inténtalo aquí
              </button>
              <i onClick={cerrarTodo} className="ri-close-line cursor-pointer text-4xl absolute top-4 right-4"></i>
            </div>
          </div>
        </div>

        <div ref={overlay} onClick={cerrarTodo} className='opacity-0 pointer-events-none fixed bg-[rgba(0,0,0,0.3)] top-0 left-0 w-full h-screen z-20'></div>
        
        <div ref={entrega} className='fixed z-50 left-1/2 bottom-1/2 -translate-x-1/2 p-4 min-w-[100%] h-screen bg-white rounded-lg opacity-0 pointer-events-none transition-all duration-300 flex flex-col md:min-w-[550px] md:h-auto md:p-6'>
          <div className='flex items-center justify-between border-b pb-3'>
            <h3 className='text-xl font-bold'>Selecciona un modo de entrega</h3>
            <i onClick={cerrarTodo} className="ri-close-line text-3xl cursor-pointer"></i>
          </div>
          <span className='pt-4 pb-1 border-b-2 block border-[--primary-color] text-center'>Despacho</span>
          
          <div className='flex-grow md:flex-grow-0 min-h-[220px] flex flex-col justify-center items-center border-b'>
            <span>
              Aún no tienes direcciones guardadas,<br />
              <span>
                <a className='text-[--primary-color] font-medium underline' href='#'>crea una dirección </a> o
                <a onClick={showSignup} className='text-[--primary-color] font-medium underline' href='#'> ingresa a tu cuenta</a>
              </span>
            </span>
          </div>

          <div className='pt-4 flex justify-end font-medium gap-4'>
            <button onClick={cerrarTodo} className='text-[--primary-color] border border-[--primary-color] py-1 px-4 rounded-md hover:text-white hover:bg-[--primary-color] transition-all duration-300 flex-grow md:flex-grow-0'>Cancelar</button>
            <button className='bg-neutral-400 text-white border border-neutral-400 py-1 px-4 rounded-md flex-grow md:flex-grow-0'>Confirmar</button>
          </div>
        </div>

        <div ref={logIn} className='fixed z-50 left-1/2 bottom-1/2 -translate-x-1/2 p-4 min-w-[100%] h-screen bg-white rounded-lg opacity-0 pointer-events-none transition-all duration-300 flex flex-col md:min-w-[550px] md:h-auto md:p-6'>
          <div className='flex items-center justify-between border-b pb-3'>
            <h3 className='text-xl font-bold'>Ingresa tu cuenta</h3>
            <i onClick={cerrarTodo} className="ri-close-line text-3xl cursor-pointer"></i>
          </div>
          
          <div className='mt-8 flex flex-col flex-grow gap-4 text-sm'>
            <div className='flex flex-col gap-2'>
              <label className='font-medium text-neutral-600' htmlFor="maillogin">Mail</label>
              <input className='py-1 px-2 border outline-none rounded-md' type="text" id='maillogin' />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='font-medium text-neutral-600' htmlFor="clave">Clave</label>
              <input className='py-1 px-2 outline-none border  rounded-md' id='clave' type="password" />
            </div>
          </div>

          <div className='pt-4 flex justify-end font-medium gap-4'>
            <button onClick={showRegister} className='text-[--primary-color] border border-[--primary-color] py-1 px-4 rounded-md hover:text-white hover:bg-[--primary-color] transition-all duration-300 flex-grow md:flex-grow-0'>Regístrate</button>
            <button className='bg-neutral-400 text-white border border-neutral-400 py-1 px-4 rounded-md flex-grow md:flex-grow-0'>Ingresa</button>
          </div>
        </div>
        
        <div ref={register} className='fixed z-50 left-1/2 bottom-1/2 -translate-x-1/2 p-4 min-w-[100%] h-screen bg-white rounded-lg opacity-0 pointer-events-none transition-all duration-300 flex flex-col md:min-w-[550px] md:h-auto md:p-6 '>
          <div className='flex items-center justify-between border-b pb-3'>
            <h3 className='text-xl font-bold'>Crear tu cuenta</h3>
            <i onClick={cerrarTodo} className="ri-close-line text-3xl cursor-pointer"></i>
          </div>
          
          <div className='mt-8 flex flex-col flex-grow gap-4 text-sm'>
            <div className='flex flex-col gap-2'>
              <label className='font-medium text-neutral-600' htmlFor="nombre">Nombre</label>
              <input className='py-1 px-2 border outline-none rounded-md' type="text" id='nombre' required />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='font-medium text-neutral-600' htmlFor="apellido">Apellido</label>
              <input className='py-1 px-2 outline-none border  rounded-md' id='apellido' type="password" />
            </div>

            <div className='flex flex-col gap-2'>
              <label className='font-medium text-neutral-600' htmlFor="mail">Mail</label>
              <input className='py-1 px-2 outline-none border  rounded-md' id='mail' type="mail" />
            </div>

            <div className='flex flex-col gap-4'>
              <label className='flex items-center gap-4' htmlFor="check1">
                <input className='min-w-[1.5rem] min-h-[1.5rem]' type="checkbox" id='check1' />
                <span>Acepto recibir información de ofertas y promociones de Jumbo.cl</span>
              </label>

              <label className='flex items-center gap-4' htmlFor="check2">
                <input className='min-w-[1.5rem] min-h-[1.5rem]' type="checkbox" id='check2' />
                <span>Acepto los 
                  <a href='#' className='text-[--primary-color] underline'> Términos y condiciones</a> y la 
                  <a href='#' className='text-[--primary-color] underline'> Política de privacidad y de tratamiento de datos personales</a> 
                </span>
              </label>
            </div>
              
          </div>

          <div className='pt-4 flex justify-end font-medium gap-4'>
            <button onClick={showSignup} className='text-[--primary-color] border border-[--primary-color] py-1 px-4 rounded-md hover:text-white hover:bg-[--primary-color] transition-all duration-300 flex-grow md:flex-grow-0'>Volver</button>
            <button onClick={cerrarTodo} className='bg-neutral-400 text-white border border-neutral-400 py-1 px-4 rounded-md flex-grow md:flex-grow-0'>Siguiente</button>
          </div>
        </div>
      </div>

      {/* bottom  */}
      <div className='container mx-auto px-4'>
        <form className='flex rounded-lg overflow-hidden md:hidden' onSubmit={e=> e.preventDefault()}>
          <input className='outline-none flex-grow py-1 px-2 font-medium bg-neutral-100 border border-neutral-200' type="text" placeholder='¿Qué estás buscando?' />
          <button className='bg-[--primary-color] px-5'><i className="ri-search-line text-xl font-semibold  text-white"></i></button>
        </form>
      </div>

      <div className=' bg-[--third-color]'>
        <div className='lg:hidden mt-3 container mx-auto px-4 py-2 flex items-center justify-between'>
          <button onClick={showEntrega} className='text-[--primary-color] font-medium flex gap-2 items-center'>
            <i className="ri-map-pin-fill text-xl self-start"></i>
            <span className=' font-bold'>
              Elige tu Modo de entrega
            </span>
          </button>
          <i className="ri-arrow-right-s-line text-xl"></i>
        </div>

        <div className='hidden container mx-auto px-4 lg:flex items-center py-2 justify-between'>
          <div className='flex items-center gap-4 text-lg font-medium'>
            <button className='text-white px-4 py-2 bg-[--primary-color] rounded-lg flex items-center gap-2' onClick={showMenu}>
              <i className="ri-function-line text-xl"></i>
              Todas las categorías
              <i className="ri-arrow-down-s-line text-xl"></i>
            </button>
            
            <button onClick={showOfertasMenu} className='bg-amber-200 rounded-lg flex items-center gap-2 '>
              <div className='relative z-20 py-2 px-4 '>
                <i className="ri-centos-line"></i>
                Ofertas
                <i className="ri-arrow-down-s-line text-xl"></i>
                <ul ref={ofertasMenu} className='absolute z-50 top-0 left-1/2 -translate-x-1/2 w-full text-sm bg-white rounded-md mt-1 opacity-0 pointer-events-none transition-all duration-300'>
                  <li className='p-4 cursor-default'>
                    <a className='hover:underline' href="#">Market Prime</a>
                  </li>
                  <li className='p-4 cursor-default'>
                    <a className='hover:underline' href="#">Market Ofertas</a>
                  </li>
                  <li className='p-4 cursor-default'>
                    <a className='hover:underline' href="#">Tarjeta Plus</a>
                  </li>
                  <li className='p-4 cursor-default'>
                    <a className='hover:underline' href="#">Puntos Plus</a>
                  </li>
                  <li className='p-4 cursor-default'>
                    <a className='hover:underline' href="#">MarketPay</a>
                  </li>
                </ul>
              </div>
            </button>
          </div>

          <div className='flex items-center gap-6 font-medium'>
            <a href="#">MarketPlus Premium</a>
            <a href="#">MarketPlus Prime</a>
            <a href="#">MarketPlus Ofertas</a>
          </div>

          {/* MENU */}
          <div ref={menu} className='fixed flex z-50 -translate-x-full left-0 top-[132px] h-[calc(100vh-132px)] bg-white transition-all duration-300'>
            <ul className='w-[280px] pt-2'>
              <li className='font-medium' id='index-0' onMouseEnter={handleHover}>
                <a href="#" className='flex items-center p-4 justify-between hover:bg-[--third-color]'>
                  <div>
                    <i className='ri-store-line me-2'></i>
                    Supermercado
                  </div>
                  <i className='ri-arrow-right-s-line'></i>
                </a>
              </li>

              <li className='font-medium' id='index-1' onMouseEnter={handleHover}>
                <a href="#" className='flex items-center p-4 justify-between hover:bg-[--third-color]'>
                  <div>
                    <i className='ri-ink-bottle-line me-2'></i>
                    Lácteos
                  </div>
                  <i className='ri-arrow-right-s-line'></i>
                </a>
              </li>

              <li className='font-medium' id='index-2' onMouseEnter={handleHover}>
                <a href="#" className='flex items-center p-4 justify-between hover:bg-[--third-color]'>
                  <div>
                    <i className='ri-douban-line me-2'></i>
                    Despensa
                  </div>
                  <i className='ri-arrow-right-s-line'></i>
                </a>
              </li>

              <li className='font-medium' id='index-3' onMouseEnter={handleHover}>
                <a href="#" className='flex items-center p-4 justify-between hover:bg-[--third-color]'>
                  <div>
                    <i className='ri-apple-line me-2'></i>
                    Frutas y Verduras
                  </div>
                  <i className='ri-arrow-right-s-line'></i>
                </a>
              </li>

              <li className='font-medium' id='index-4' onMouseEnter={handleHover}>
                <a href="#" className='flex items-center p-4 justify-between hover:bg-[--third-color]'>
                  <div>
                    <i className='ri-brush-2-line me-2'></i>
                    Limpieza
                  </div>
                  <i className='ri-arrow-right-s-line'></i>
                </a>
              </li>

              <li className='font-medium' id='index-5' onMouseEnter={handleHover}>
                <a href="#" className='flex items-center p-4 justify-between hover:bg-[--third-color]'>
                  <div>
                    <i className='ri-evernote-line me-2'></i>
                    Carnicería
                  </div>
                  <i className='ri-arrow-right-s-line'></i>
                </a>
              </li>

              <li className='font-medium' id='index-6' onMouseEnter={handleHover}>
                <a href="#" className='flex items-center p-4 justify-between hover:bg-[--third-color]'>
                  <div>
                    <i className='ri-github-line me-2'></i>
                    Mascotas
                  </div>
                  <i className='ri-arrow-right-s-line'></i>
                </a>
              </li>
            </ul>

            <div className='menu w-[690px] bg-neutral-100 ps-6 pt-5 pb-8 overflow-y-scroll'>
              <div className='flex gap-2 text-2xl'>
                <i className="ri-store-line ri-xl text-[--primary-color]"></i>
                <span className='font-semibold pb-1 text-xl border-b-[3px] border-[--primary-color]'>Supermercado</span>
              </div>

              <ul className='grid grid-cols-3 mt-4 gap-8'>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Exclusivo en Jumbo</a>
                  </h4>
                  <a href="#">Cuisine & Co</a>
                  <a href="#">MarketPlus Artesanal</a>
                  <a href="#">Mundo Bio</a>
                  <a href="#">Home Care</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Bebé</a>
                  </h4>
                  <a href="#">Pañales y Toallas Húmedas</a>
                  <a href="#">Colados, Picados y Otros</a>
                  <a href="#">Leche y Suplementos Infantiles</a>
                  <a href="#">Perfumería Infantil</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Congelados</a>
                  </h4>
                  <a href="#">Helados Y Postres</a>
                  <a href="#">Verduras Congeladas</a>
                  <a href="#">Frutas Congeladas</a>
                  <a href="#">Hamburguesas</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Desayuno y Dulces</a>
                  </h4>
                  <a href="#">Café y Cafeteras</a>
                  <a href="#">Té, Mate Hierbas</a>
                  <a href="#">Chocolates y Dulces</a>
                  <a href="#">Galletas y Colaciones</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Belleza y Cuidado Personal</a>
                  </h4>
                  <a href="#">Cuidado Capilar</a>
                  <a href="#">Cuidado Bucal</a>
                  <a href="#">Cuidado mujer</a>
                  <a href="#">Higiene Personal</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Vinos, Cervezas y Licores</a>
                  </h4>
                  <a href="#">Vinos y Espumantes</a>
                  <a href="#">Cervezas</a>
                  <a href="#">Pack de Cervezas</a>
                  <a href="#">Destilados</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Quesos y Fiambres</a>
                  </h4>
                  <a href="#">Quesería</a>
                  <a href="#">Fiambrería</a>
                  <a href="#">Salchichas y Parrilleros</a>
                  <a href="#">Fábrica MarketPlus Artesanal</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Panadería y Pastelería</a>
                  </h4>
                  <a href="#">Panadería granel</a>
                  <a href="#">Panadería envasada</a>
                  <a href="#">Pastelería</a>
                  <a href="#">Masas y Tortillas</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Pescadería</a>
                  </h4>
                  <a href="#">Camarones</a>
                  <a href="#">Pescados</a>
                  <a href="#">Ahumados y Carpaccios</a>
                  <a href="#">Mariscos</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className='menu hidden w-[690px] bg-neutral-100 ps-6 pt-5 pb-8 overflow-y-scroll'>
              <div className='flex gap-2 text-2xl'>
                <i className="ri-ink-bottle-line ri-xl text-[--primary-color]"></i>
                <span className='font-semibold pb-1 text-xl border-b-[3px] border-[--primary-color]'>Lácteos</span>
              </div>

              <ul className='grid grid-cols-3 mt-4 gap-8'>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Leches</a>
                  </h4>
                  <a href="#">Leche Líquida</a>
                  <a href="#">Leche en Polvo</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Yoghurt</a>
                  </h4>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Cremas</a>
                  </h4>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Huevos</a>
                  </h4>
                  <a href="#">Huevos de Gallina Libre</a>
                  <a href="#">Huevos de Gallina</a>
                  <a href="#">Huevos de Codorniz</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Leches Cultivadas y Bebidas Lácteas</a>
                  </h4>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Mantequillas y Margarinas</a>
                  </h4>
                  <a href="#">Mantequillas</a>
                  <a href="#">Margarinas</a>
                  <a href="#">Mantecas</a>
                  <a href="#">Levadura Feesca</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Postres</a>
                  </h4>
                  <a href="#">Postres Lácteos</a>
                  <a href="#">Postres Especiales</a>
                  <a href="#">Postres Frutales</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Probióticos y Defensas</a>
                  </h4>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className='menu hidden w-[690px] bg-neutral-100 ps-6 pt-5 pb-8 overflow-y-scroll'>
              <div className='flex gap-2 text-2xl'>
                <i className="ri-douban-line ri-xl text-[--primary-color]"></i>
                <span className='font-semibold pb-1 text-xl border-b-[3px] border-[--primary-color]'>Despensa</span>
              </div>

              <ul className='grid grid-cols-3 mt-4 gap-8'>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Fideos, Pastas y salsas</a>
                  </h4>
                  <a href="#">Pastas y Fideos</a>
                  <a href="#">Lasañas y Rellenos</a>
                  <a href="#">Salsas para Pastas</a>
                  <a href="#">Integrales, Sin Gluten y Otros</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Arroz, Legumbres y Semillas</a>
                  </h4>
                  <a href="#">Arroz</a>
                  <a href="#">Arroz Preparado y Especial</a>
                  <a href="#">Porotos y Lentejas</a>
                  <a href="#">Garbanzos y Arvejas</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Aceites, Sal y Condimentos</a>
                  </h4>
                  <a href="#">Aceites</a>
                  <a href="#">Aceites de Oliva</a>
                  <a href="#">Sal</a>
                  <a href="#">Condimentos</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Conservas</a>
                  </h4>
                  <a href="#">Pescados en Conserva</a>
                  <a href="#">Mariscos en Conserva</a>
                  <a href="#">Frutas en Conserva</a>
                  <a href="#">Verduras en Conserva</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Cóctel y Snacks</a>
                  </h4>
                  <a href="#">Papas Fritas</a>
                  <a href="#">Ramitas, Suflés y Otros Snacks</a>
                  <a href="#">Tortillas</a>
                  <a href="#">Snacks VEgetales</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Aderezos y Salsas</a>
                  </h4>
                  <a href="#">Mayonesa</a>
                  <a href="#">Ketchup y Barbecue</a>
                  <a href="#">Mostazas y Aderezos</a>
                  <a href="#">Ají y Salsas Picantes</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Instantáneos y Sopas</a>
                  </h4>
                  <a href="#">Pu´re Instanáneo</a>
                  <a href="#">Sopas y Cremas</a>
                  <a href="#">Comidas Instantáneas</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Harinas y Polvos</a>
                  </h4>
                  <a href="#">Harina Blanca</a>
                  <a href="#">Harina Integral y Otras</a>
                  <a href="#">Harina de Maíz, Sémola y Polenta</a>
                  <a href="#">Polvo, Levadura y Almidón</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Repostería</a>
                  </h4>
                  <a href="#">Cremas</a>
                  <a href="#">Leches Condensadas y Evaporadas</a>
                  <a href="#">Coberturas</a>
                  <a href="#">Decoración</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className='menu hidden w-[690px] bg-neutral-100 ps-6 pt-5 pb-8 overflow-y-scroll'>
              <div className='flex gap-2 text-2xl'>
                <i className="ri-apple-line ri-xl text-[--primary-color]"></i>
                <span className='font-semibold pb-1 text-xl border-b-[3px] border-[--primary-color]'>Frutas y Verduras</span>
              </div>

              <ul className='grid grid-cols-3 mt-4 gap-8'>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Frutas</a>
                  </h4>
                  <a href="#">Frutas</a>
                  <a href="#">Frutas Orgánicas</a>
                  <a href="#">Frutas Picadas</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Verduras</a>
                  </h4>
                  <a href="#">Verduras</a>
                  <a href="#">Verduras Orgánicas</a>
                  <a href="#">Ensaladas</a>
                  <a href="#">Hierbas y Especias</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Frutos Secos y Semillas</a>
                  </h4>
                  <a href="#">Frutos Secos</a>
                  <a href="#">Frutas Deshidratadas</a>
                  <a href="#">Semillas y Granos</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className='menu hidden w-[690px] bg-neutral-100 ps-6 pt-5 pb-8 overflow-y-scroll'>
              <div className='flex gap-2 text-2xl'>
                <i className="ri-brush-2-line ri-xl text-[--primary-color]"></i>
                <span className='font-semibold pb-1 text-xl border-b-[3px] border-[--primary-color]'>Limpieza</span>
              </div>

              <ul className='grid grid-cols-3 mt-4 gap-8'>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Papeles Hogar</a>
                  </h4>
                  <a href="#">Papel Higiénico</a>
                  <a href="#">Pañuelos</a>
                  <a href="#">Servilletas</a>
                  <a href="#">Toallas de Papel</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Limpieza de Ropa</a>
                  </h4>
                  <a href="#">Detergente Líquido</a>
                  <a href="#">Detergente en Polvo</a>
                  <a href="#">Suavizantes</a>
                  <a href="#">Tratamiento de Ropa</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Baño y Cocina</a>
                  </h4>
                  <a href="#">Lavalozas</a>
                  <a href="#">Lavavajillas</a>
                  <a href="#">Limpiadores Baño y Cocina</a>
                  <a href="#">Limpiavidrios</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Accesorios de Limpieza</a>
                  </h4>
                  <a href="#">Cloros</a>
                  <a href="#">Desinfectantes</a>
                  <a href="#">Desodorantes Ambientales</a>
                  <a href="#">Insecticidas</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Aerosoles y Desinfectantes</a>
                  </h4>
                  <a href="#">Cloros</a>
                  <a href="#">Desinfectantes</a>
                  <a href="#">Desodorantes Ambientales</a>
                  <a href="#">Insecticidas</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Pisos y Muebles</a>
                  </h4>
                  <a href="#">Ceras</a>
                  <a href="#">Limpiadores Piso</a>
                  <a href="#">Lustramuebles y Limpiadores de metales</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
              </ul>
            </div>
            
            <div className='menu hidden w-[690px] bg-neutral-100 ps-6 pt-5 pb-8 overflow-y-scroll'>
              <div className='flex gap-2 text-2xl'>
                <i className="ri-evernote-line ri-xl text-[--primary-color]"></i>
                <span className='font-semibold pb-1 text-xl border-b-[3px] border-[--primary-color]'>Carnicería</span>
              </div>

              <ul className='grid grid-cols-3 mt-4 gap-8'>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Vacuno</a>
                  </h4>
                  <a href="#">Carnes Americana</a>
                  <a href="#">Carnes Premium</a>
                  <a href="#">Carnes para Parrilla</a>
                  <a href="#">Carnes para Horno</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Cerdo</a>
                  </h4>
                  <a href="#">Costillar y Costillitas</a>
                  <a href="#">Chuletas y Filetes</a>
                  <a href="#">Pulpa y Lomo de Cerdo</a>
                  <a href="#">Malaya y Otros Cortes</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Cordero</a>
                  </h4>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Pavo</a>
                  </h4>
                  <a href="#">Filetes y Pechugas</a>
                  <a href="#">Pavo Entero</a>
                  <a href="#">Trutos y Bistec de Pavo</a>
                  <a href="#">Carne Molida y Albondigas de Pavo</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Pollo</a>
                  </h4>
                  <a href="#">Trutos y Pechugas a Granel</a>
                  <a href="#">Filetes y Pechuga de Pollo</a>
                  <a href="#">Alitas y Trutros de Pollo</a>
                  <a href="#">Pollo Entero</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div className='menu item-7 hidden w-[690px] bg-neutral-100 ps-6 pt-5 pb-8 overflow-y-scroll'>
              <div className='flex gap-2 text-2xl'>
                <i className="ri-github-line ri-xl text-[--primary-color]"></i>
                <span className='font-semibold pb-1 text-xl border-b-[3px] border-[--primary-color]'>Mascotas</span>
              </div>

              <ul className='grid grid-cols-3 mt-4 gap-8'>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Perros</a>
                  </h4>
                  <a href="#">Alimentos Cachorros</a>
                  <a href="#">Alimentos Adultos</a>
                  <a href="#">Alimentos Senior</a>
                  <a href="#">Alimentos Húmedos Perros</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Gatos</a>
                  </h4>
                  <a href="#">Alimentos Gatitos</a>
                  <a href="#">Alimentos Gatos</a>
                  <a href="#">Alimentos Húmedos Gatos</a>
                  <a href="#">Snacks y Salsas Gatos</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
                <li className='flex flex-col items-start gap-1 text-sm'>
                  <h4 className='font-semibold'>
                    <a href="#">Otras Mascotas</a>
                  </h4>
                  <a href="#">Alimentos Otras Mascotas</a>
                  <a href="#">Accesorios e Higiene Otras Mascotas</a>
                  <a href="#" className='flex items-center text-[--primary-color]'>
                    <span className='underline'>
                      Mostrar Todo
                    </span>
                    <i className="ri-arrow-right-s-line ms-2"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header