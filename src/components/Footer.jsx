import React, { useRef } from 'react'


const Footer = () => {
  const menu1 = useRef(null)
  const menu2 = useRef(null)

  const show = (e)=> {
    const id = e.currentTarget.id
    
    if (id === "1") {
      menu1.current.classList.toggle("max-h-[0]")
    } else {
      menu2.current.classList.toggle("max-h-[0]")
    }
  }
  return (
    <div>
      <div className='lg:mt-8 lg:px-4'>
        <div className='lg:hidden py-4 px-4 sm:px-11 bg-neutral-200 flex items-center justify-between'>
          <span className='mr-8 font-medium'>Conoce nuestras ofertas y novedades</span>
          <a href="#" className='py-2 px-6 text-white bg-[--primary-color] rounded-md'>Suscríbete</a>
        </div>

        <div className='hidden lg:flex bg-neutral-200 px-20 py-8 gap-8 max-w-[1124px]  mx-auto rounded-lg relative -mb-16'>
          <span className='font-medium'>Suscríbete a nuestras ofertas y novedades</span>
          <div className='flex-grow'>
            <div className='flex gap-6 w-full'>
              <input type="text" className='outline-none flex-grow px-2 py-1 border border-neutral-500 rounded-md' placeholder='Mail' />
              <input type="text" className='outline-none max-w-[110px] border-neutral-500 rounded-md px-2 py-1 border' placeholder='Rut' />
              <a href="#" className='block py-1 rounded-md px-6 text-white bg-[--primary-color]'>Enviar</a>
            </div>

            <div className='flex items-center gap-6 mt-4'>
              <input type="checkbox" className='w-8 h-8' />
              <span className='max-w-[360px]'>
                Acepto los
                <a href="#" className='text-[--primary-color] underline font-medium'> Términos y condiciones </a>
                y la
                <a href="#" className='text-[--primary-color] underline font-medium'> Política de privacidad y de tratamiento de datos personles</a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-neutral-700 px-4'>
        <div className=' container mx-auto text-white px-4 pt-4 flex flex-col md:grid md:grid-cols-3 md:gap-8 md:pb-20 md:pt-28'>
          <div className='md:col-span-2 md:grid md:grid-cols-2'>
            <div className='overflow-hidden'>
              <div id='1'onClick={show} className='flex items-center justify-between border-b-2 border-[--primary-color] md:border-none py-4'>
                <h3 className='font-medium text-xl'>Centro de Ayuda</h3>
                <i className="ri-add-line text-2xl md:hidden"></i>
              </div>
              <ul ref={menu1} className='max-h-[0] md:max-h-[unset] text-sm mt-4 flex flex-col gap-4 text-neutral-400'>
                <li><a href="#">Problemas con tu pedido</a></li>
                <li><a href="#">Información de pago</a></li>
                <li><a href="#">Cómo modificar mis datos</a></li>
                <li><a href="#">Modos de entrega y cobertura</a></li>
                <li><a href="#">locales MarketPlus</a></li>
                <li><a href="#">Cómo comprar en marketplus.com</a></li>
                <li><a href="#">Servicio al cliente</a></li>
              </ul>
            </div>

            <div className='overflow-hidden md:border-r-2 md:border-neutral-600'>
              <div id='2' onClick={show} className='flex items-center justify-between border-b-2 border-[--primary-color] md:border-none py-4'>
                <h3 className='font-medium text-xl'>MarketPlus</h3>
                <i className="ri-add-line text-2xl md:hidden"></i>
              </div>
              <ul ref={menu2} className='max-h-[0] md:max-h-[unset] text-sm mt-4 flex flex-col gap-4 text-neutral-400'>
                <li><a href="#">Compromisos MarketPlus</a></li>
                <li><a href="#">Mundos MarketPlus</a></li>
                <li><a href="#">Locales MarketPlus</a></li>
                <li><a href="#">Productos MarketPlus</a></li>
                <li><a href="#">Proveedores</a></li>
                <li><a href="#">Espacio Mypes</a></li>
                <li><a href="#">Concursos</a></li>
                <li><a href="#">Plan por el futuro</a></li>
                <li><a href="#">Acuerdos legales</a></li>
              </ul>
            </div>
          </div>

          <div className='col-span-1'>
            <div>
              <h3 className='font-medium text-xl my-4'>Síguenos</h3>
              <ul className='flex items-center gap-4 text-neutral-400'>
                <a href="#"><i className="ri-facebook-fill text-2xl"></i></a>
                <a href="#"><i className="ri-instagram-line text-2xl"></i></a>
                <a href="#"><i className="ri-twitter-x-fill text-2xl"></i></a>
                <a href="#"><i className="ri-youtube-fill text-2xl"></i></a>
              </ul>
            </div>

            <div className='mb-4'>
              <h3 className='font-medium text-xl my-4'>Medios de pago</h3>
              <ul className='flex items-center gap-4 text-neutral-400'>
                <a href="#"><i className="ri-mastercard-line text-2xl"></i></a>
                <a href="#"><i className="ri-paypal-line text-2xl"></i></a>
                <a href="#"><i className="ri-visa-fill text-2xl"></i></a>
              </ul>
            </div>
          </div>
        </div>

        <div className='px-4 bg-neutral-700 text-white'>
          <div className='py-4 border-t-2 border-neutral-600 text-center font-medium text-sm'>
            <span>Copyright © 2023 - MarketPlus</span>
            <div>
              <a href="#" className='underline mr-2'>Términos y Condiciones </a>
              |
              <a href="#" className='underline ml-2'> Seguridad y Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer