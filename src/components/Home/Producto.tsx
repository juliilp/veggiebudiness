import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { productos } from "../../data/productos";
import CardProductos from "../CardProductos";
import { sliderSettings } from "../../data/sliderSettings";
import "swiper/css/pagination";
import SliderButtons from "../sliderButtons";

export default function Recetas() {
  const swiper = useSwiper();

  console.log(swiper);

  return (
    <section className="my-24">
      <h2 className="text-3xl md:text-5xl text-center font-lobsterTwo mb-12">
        Algunos de nuestros manjares
      </h2>
      <article className="flex justify-center items-center  ">
        <Swiper {...sliderSettings} className="mySwiper w-full relative ">
          <SliderButtons
            className="flex items-center justify-between absolute top-1/2 left-0 w-full px-6 z-10"
            btnNext="next"
            btnPrev="prev"
          />
          {productos.map((r, key) => {
            return (
              <SwiperSlide key={key}>
                <article className="flex justify-center items-center">
                  <CardProductos
                    imagen={r.imagen}
                    nombre={r.nombre}
                    subnombre={r.subnombre}
                  />
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <button onClick={() => swiper.slideNext()}>Next</button> */}
      </article>
    </section>
  );
}
