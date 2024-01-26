import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { productos } from "../../data/productos";
import { Navigation } from "swiper/modules";
import CardProductos from "../CardProductos";
import { sliderSettings } from "../../data/sliderSettings";
import "swiper/css/pagination"; // Asegúrate de importar los estilos necesarios

export default function Recetas() {
  return (
    <section className="my-24">
      <h2 className="text-3xl md:text-5xl text-center font-lobsterTwo mb-12">
        Algunos de nuestros manjares
      </h2>
      <article className="flex justify-center items-center">
        <Swiper
          {...sliderSettings}
          modules={[Navigation]}
          navigation
          className="mySwiper w-full"
        >
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
      </article>
    </section>
  );
}
