import Header from "./components/Header";

import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import pollo1 from "./assets/pollo/pollo1.jpg";
import pollo2 from "./assets/pollo/pollo2.jpg";
import pollo3 from "./assets/pollo/pollo3.jpg";

import despensa from "./assets/despensa.jpg";
import limpieza from "./assets/limpieza.jpg";
import perro from "./assets/perro.jpg";
import cervezas from "./assets/cervezas.jpg";

import carniceria from "./assets/favoritos/carniceria.jpg";
import galletas from "./assets/favoritos/galletas.jpg";
import verduras from "./assets/favoritos/verduras.jpg";

import cerveza1 from "./assets/cervezas/1.jpg";
import cerveza2 from "./assets/cervezas/2.jpg";
import cerveza3 from "./assets/cervezas/3.jpg";
import cerveza4 from "./assets/cervezas/4.jpg";
import cerveza5 from "./assets/cervezas/5.jpg";
import cerveza6 from "./assets/cervezas/6.jpg";
import cerveza7 from "./assets/cervezas/7.jpg";
import cerveza8 from "./assets/cervezas/8.jpg";
import cerveza9 from "./assets/cervezas/9.jpg";
import cerveza10 from "./assets/cervezas/10.jpg";

import limpieza1 from "./assets/limpieza/1.jpg";
import limpieza2 from "./assets/limpieza/2.jpg";
import limpieza3 from "./assets/limpieza/3.jpg";
import limpieza4 from "./assets/limpieza/4.jpg";
import limpieza5 from "./assets/limpieza/5.jpg";
import limpieza6 from "./assets/limpieza/6.jpg";
import limpieza7 from "./assets/limpieza/7.jpg";
import limpieza8 from "./assets/limpieza/8.jpg";
import limpieza9 from "./assets/limpieza/9.jpg";
import limpieza10 from "./assets/limpieza/10.jpg";

import semana1 from "./assets/semana/powerade-3.jpg";
import semana2 from "./assets/semana/1.jpg";
import semana3 from "./assets/semana/redbull-2.jpg";
import semana4 from "./assets/semana/oreo-4.jpg";
import semana5 from "./assets/semana/leche-5.jpg";
import semana6 from "./assets/semana/papas-fritas-10.jpg";
import semana7 from "./assets/semana/papas-pre-9.jpg";
import semana8 from "./assets/semana/burger-8.jpg";
import semana9 from "./assets/semana/manzanas-7.jpg";
import semana10 from "./assets/semana/papas-6.jpg";

import snacks1 from "./assets/snacks/1.jpg";
import snacks2 from "./assets/snacks/2.jpg";
import snacks3 from "./assets/snacks/3.jpg";
import snacks4 from "./assets/snacks/4.jpg";
import snacks5 from "./assets/snacks/5.jpg";
import snacks6 from "./assets/snacks/6.jpg";
import snacks7 from "./assets/snacks/7.jpg";
import snacks8 from "./assets/snacks/8.jpg";
import snacks9 from "./assets/snacks/9.jpg";
import snacks10 from "./assets/snacks/10.jpg";

import banner1 from "./assets/banner1.jpg";
import banner2 from "./assets/banner2.jpg";
import banner3 from "./assets/banner3.jpg";

import "remixicon/fonts/remixicon.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Swiper
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          modules={[Navigation, Pagination, Autoplay]}
          className="h-[45vh] max-h-64 z-0"
        >
          <SwiperSlide>
            <img src={banner1} className="w-full h-full object-cover" />
            <div className=" text-yellow-300 text-xl absolute top-0 left-0 font-medium w-full h-full bg-black bg-opacity-30 flex items-center">
              <div className="-translate-y-1/2 pl-4 sm:pl-12">
                <div className="flex items-end">
                  <span className="self-center">Hasta</span>
                  <span className="text-8xl">37</span>
                  <div className="flex flex-col font-bold">
                    <span className="text-6xl">%</span>
                    <span className="text-xl">dcto.</span>
                  </div>
                </div>
                <span className="text-2xl">Todo carniceria</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide >
            <img src={banner2} className="w-full h-full object-cover" />
            <div className=" text-yellow-300 text-xl absolute top-0 left-0 font-medium w-full h-full bg-black bg-opacity-30 flex items-center">
              <div className="-translate-y-1/2 pl-4 sm:pl-12">
                <div className="flex items-end">
                  <span className="self-center">Hasta</span>
                  <span className="text-8xl">41</span>
                  <div className="flex flex-col font-bold">
                    <span className="text-6xl">%</span>
                    <span className="text-xl">dcto.</span>
                  </div>
                </div>
                <span className="text-2xl">Todo despensa</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={banner3} className="w-full h-full object-cover" />
            <div className=" text-yellow-300 text-xl absolute top-0 left-0 font-medium w-full h-full bg-black bg-opacity-30 flex items-center">
              <div className="-translate-y-1/2 pl-4 sm:pl-12">
                <div className="flex items-end">
                  <span className="self-center">Hasta</span>
                  <span className="text-8xl">29</span>
                  <div className="flex flex-col font-bold">
                    <span className="text-6xl">%</span>
                    <span className="text-xl">dcto.</span>
                  </div>
                </div>
                <span className="text-2xl">Todo productos de limpieza</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className=" mt-16">
          <h3 className="font-bold text-xl sm:text-2xl text-center">
            SuperWeek Mega Pollo
          </h3>
          <div className="mt-6 flex items-center justify-center flex-wrap gap-4">
            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={pollo1}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Filetillos Mega Pollo</h4>
                <span className="text-sm font-medium">Desde $4.490 Kg</span>
              </a>
            </div>

            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className="h-40 w-60 overflow-hidden">
                  <img
                    src={pollo2}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Pechugas Mega Pollo</h4>
                <span className="text-sm font-medium">Desde $4.290</span>
              </a>
            </div>

            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={pollo3}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Tuto Mega Pollo</h4>
                <span className="text-sm font-medium">Desde $2.990</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between container mx-auto px-4">
            <h3 className=" text-xl sm:text-2xl font-bold">
              Lo mejor de la semana
            </h3>
            <a
              href="#"
              className=" font-medium text-[--primary-color] underline  text-base sm:text-lg"
            >
              Ver más
            </a>
          </div>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              440: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
              },
            }}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation, Pagination]}
            className=" custom relative mt-8 container mx-auto "
          >
            <SwiperSlide className="px-9">
              <div className="relative z-0">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={semana1} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$1.290</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Powerade
                  </a>
                  <a href="#">Bebida Isotónica Power 1.1L.</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.8
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={semana2} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$1.790</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Monster
                  </a>
                  <a href="#">Bebida Energética Monster 473 ml</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={semana3} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$1.690</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Red Bull
                  </a>
                  <a href="#">Bebida Energética Red Bull 250 ml</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.5
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={semana4} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$819</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Oreo
                  </a>
                  <a href="#">Galletas dulces original 108 g</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={semana5} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$1.319</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Lacto
                  </a>
                  <a href="#">Leche entera 1L</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.8
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={semana6} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.400</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Lays
                  </a>
                  <a href="#">Papas fritas corte liso 350 g</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.9
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={semana7} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$4.990</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Minuto Rojo
                  </a>
                  <a href="#">Papas pre fritas 1 kg</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={semana8} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$5.590</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    burger
                  </a>
                  <a href="#">Hamburguesa de vacuno</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={semana9} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.090</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Frutas y Verduras
                  </a>
                  <a href="#">Manzanas 1 kg</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.4
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={semana10}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.390</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Frutas y Verduras
                  </a>
                  <a href="#">Papa Premium granel 1 kg</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.5
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-16 container mx-auto px-4">
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={despensa}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Despensa</h4>
              </a>
            </div>

            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={perro}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Alimentos Chow Dog</h4>
              </a>
            </div>

            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={limpieza}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Limpieza</h4>
              </a>
            </div>

            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={cervezas}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Cervezas</h4>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between container mx-auto px-4">
            <h3 className=" text-xl sm:text-2xl font-bold">Especial Snacks</h3>
            <a
              href="#"
              className=" font-medium text-[--primary-color] underline  text-base sm:text-lg"
            >
              Ver más
            </a>
          </div>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              440: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
              },
            }}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="custom relative z-0 mt-8 container mx-auto "
          >
            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={snacks1} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$819</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Oreo
                  </a>
                  <a href="#">Galletas dulces original 108 g</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={snacks2} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$1.150</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    M&M's
                  </a>
                  <a href="#">Chocolate con maní 49g</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.8
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={snacks3} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">1.979</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Oreo
                  </a>
                  <a href="#">Galletas Dulces Original Pack 6 un. 36g c/u</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.7
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={snacks4} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.299</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Trencito
                  </a>
                  <a href="#">Chocolate de Leche Trencito 150g</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.9
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={snacks5} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$3.749</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Evercrisp
                  </a>
                  <a href="#">Tostitos 380g</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.4
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={snacks6} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.400</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Lays
                  </a>
                  <a href="#">Papas fritas corte listo 350g</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.9
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={snacks7} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.590</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Magda
                  </a>
                  <a href="#">Magdalena sabor chip chocolate</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={snacks8} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$5.990</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Helado
                  </a>
                  <a href="#">Helado Super Premium chocolate</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.5
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img src={snacks9} className="object-cover aspect-square" />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$1.890</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Donas
                  </a>
                  <a href="#">Donuts chocolate 5 un.</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={snacks10}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.590</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Costa
                  </a>
                  <a href="#">Galletas Chocochips 35g</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.1
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-16 container mx-auto px-4">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-10">
            Encuentra tus favoritos
          </h3>
          <div className="flex gap-4 flex-wrap justify-center">
            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={carniceria}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Carnicería</h4>
              </a>
            </div>

            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={verduras}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Frutas y verduras</h4>
              </a>
            </div>

            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={galletas}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Galletas</h4>
              </a>
            </div>

            <div className="flex flex-col gap-1 text-center">
              <a href="#">
                <div className=" h-40 w-60 overflow-hidden">
                  <img
                    src={despensa}
                    className="w-full object-cover h-full hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-medium text-lg">Despensa</h4>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between container mx-auto px-4">
            <h3 className=" text-xl sm:text-2xl font-bold">Limpieza</h3>
            <a
              href="#"
              className=" font-medium text-[--primary-color] underline  text-base sm:text-lg"
            >
              Ver más
            </a>
          </div>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              440: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
              },
            }}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="custom z-0 relative mt-8 container mx-auto "
          >
            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza1}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.119</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Cif
                  </a>
                  <a href="#">Limpiadores Bioactive Recarga 450 ml</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza2}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$3.179</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Cif
                  </a>
                  <a href="#">Limpiador Antigrasa Biodegradable 500ml</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.5
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza3}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.359</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Home Care
                  </a>
                  <a href="#">Guantes Multiuso Home Care</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.2
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza4}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$3.799</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Virutex
                  </a>
                  <a href="#">Escobilla Virutex</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.8
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza5}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$29.290</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Cif
                  </a>
                  <a href="#">Pack limpieza</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.9
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza6}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$14.990</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Pack
                  </a>
                  <a href="#">Pack Limpeza medium</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.5
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza7}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$1.090</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Home Care
                  </a>
                  <a href="#">Esponja Lisa x 4 Home Care</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza8}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$1.990</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Family Care
                  </a>
                  <a href="#">Alcohol Gel Family Care 250ml</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.6
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza9}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$3.199</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Elite
                  </a>
                  <a href="#">Jabón Líquido Humectante 700ml</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.8
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={limpieza10}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$3.099</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Protex
                  </a>
                  <a href="#">Jabón Barra Limpieza Profunda 90g</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.5
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between container mx-auto px-4">
            <h3 className=" text-xl sm:text-2xl font-bold">Especial Agosto</h3>
            <a
              href="#"
              className=" font-medium text-[--primary-color] underline  text-base sm:text-lg"
            >
              Ver más
            </a>
          </div>
          <Swiper
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              440: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
              },
            }}
            spaceBetween={0}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="custom z-0 relative mt-8 container mx-auto "
          >
            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza1}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$2.590</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Bacardi
                  </a>
                  <a href="#">Ron Bacardi botella 750cc</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.8
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza2}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$9.290</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Bacardi
                  </a>
                  <a href="#">Ron Bacardi Dorado 750cc</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.9
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza3}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$13.990</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Licor
                  </a>
                  <a href="#">Pisco Sour 1L</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza4}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$5.850</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Ron
                  </a>
                  <a href="#">Ron Añejo Reserva Especial 1L</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza5}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$9.690</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Ron
                  </a>
                  <a href="#">Ron Añejado 7 años 700cc</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.7
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza6}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$17.290</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Jose Cuervo
                  </a>
                  <a href="#">Tequila Clásico Jose Cuervo 750ml</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.8
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza7}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$25.990</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Jack Daniel's
                  </a>
                  <a href="#">Whisky Tennessee Honey 750cc</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  5.0
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza8}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$16.990</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Jameson
                  </a>
                  <a href="#">Whisky Jameson Irlandés 750cc</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.8
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza9}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$4.790</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    Heineken
                  </a>
                  <a href="#">Pack 6 un. Cerveza Heineken 330cc</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.9
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="px-9">
              <div className="relative">
                <div className="max-w-[136px] mx-auto">
                  <a href="#">
                    <img
                      src={cerveza10}
                      className="object-cover aspect-square"
                    />
                  </a>
                  <i className="ri-indent-decrease text-xl absolute top-0 right-0  cursor-pointer"></i>
                </div>

                <div className="mb-4 mt-4">
                  <h4 className="text-lg font-medium">$28.290</h4>
                  <span className="bg-neutral-100 px-2 text-sm rounded-lg">
                    1 un
                  </span>
                </div>

                <div className="flex flex-col items-start min-h-[70px]">
                  <a href="#" className=" text-neutral-500 text-sm">
                    The Glenlivet
                  </a>
                  <a href="#">Whisky Glenlivet 750cc</a>
                </div>

                <a
                  href="#"
                  className=" block text-center bg-[--primary-color] w-full rounded-lg py-1 text-white hover:bg-[--primary-color-hover] transition-all duration-300 "
                >
                  Agregar
                </a>

                <div className="flex items-center gap-4 mt-3">
                  <i className="ri-star-fill text-yellow-500"></i>
                  4.5
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </main>

      <div className="mt-20 flex flex-wrap flex-col lg:flex-row lg:items-center justify-center">
        <div className="lg:border-r lg:flex-grow  border-neutral-200 lg:text-center lg:max-w-[250px] xl:max-w-[281px] border-b-2 lg:border-b-0 hover:opacity-50 transition-opacity duration-300">
          <a
            href="#"
            className="flex flex-row gap-4 lg:gap-0 lg:flex-col items-center px-4 sm:px-11 py-4"
          >
            <i className="ri-question-mark text-4xl font-bold mb-2 lg:mb-4 text-[--primary-color]"></i>
            <div>
              <h3 className="mb-1 font-medium">Centro de Ayuda</h3>
              <h4>Si tienes alguna duda ingresa aquí</h4>
            </div>
          </a>
        </div>

        <div className="lg:border-r lg:flex-grow border-neutral-200 lg:text-center lg:max-w-[250px] xl:max-w-[281px] border-b-2 lg:border-b-0 hover:opacity-50 transition-opacity duration-300">
          <a
            href="#"
            className="flex flex-row gap-4 lg:gap-0 lg:flex-col items-center px-4 sm:px-11 py-4"
          >
            <i className="ri-box-3-fill text-[--primary-color] text-4xl font-bold mb-4"></i>
            <div>
              <h3 className="mb-1 font-medium">Seguimiento de Compras</h3>
              <h4>Seguimiento de tu despacho en línea</h4>
            </div>
          </a>
        </div>

        <div className="lg:border-r lg:flex-grow border-neutral-200 lg:text-center lg:max-w-[250px] xl:max-w-[281px] border-b-2 lg:border-b-0 hover:opacity-50 transition-opacity duration-300">
          <a
            href="#"
            className="flex flex-row gap-4 lg:gap-0 lg:flex-col items-center px-4 sm:px-11 py-4"
          >
            <i className="ri-archive-fill text-[--primary-color] text-4xl font-bold mb-4"></i>
            <div>
              <h3 className="mb-1 font-medium">Problemas con tu pedido</h3>
              <h4>Resuelve dudas</h4>
            </div>
          </a>
        </div>

        <div className="lg:border-r lg:flex-grow border-neutral-200 lg:text-center lg:max-w-[250px] xl:max-w-[281px] border-b-2 lg:border-b-0 hover:opacity-50 transition-opacity duration-300">
          <a
            href="#"
            className="flex flex-row gap-4 lg:gap-0 lg:flex-col items-center px-4 sm:px-11 py-4"
          >
            <i className="ri-store-3-fill text-4xl text-[--primary-color] mb-4"></i>
            <div>
              <h3 className="mb-1 font-medium">Nuestros Locales</h3>
              <h4>Encuentra tu local más cercano</h4>
            </div>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
