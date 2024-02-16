import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "../../styles/ButtonsSwiperRecetas.css";
import { recetas } from "../../data/recetas";
import CardRecetas from "../CardRecetas";
import SliderButtons from "../sliderButtons";
import { sliderSettings } from "../../data/sliderSettings";
export default function Recetas() {
  return (
    <section className="my-24">
      <h2 className="text-3xl md:text-5xl font-lobsterTwo text-center">
        ¿Te sentis inspirado para cocinar?
      </h2>
      <div className="flex justify-center items-center gap-4 flex-col my-8 ">
        <div className="max-w-[350px] h-1 bg-black w-full" />
        <div className="max-w-[350px] h-1 bg-black w-full" />
      </div>
      <p className="text-xl max-w-[700px] text-center mx-auto mb-12">
        Nuestros chef desplegaron su imaginación para crear recetas sencillas y
        muy deliciosas para que cocines en ese momento especial.
      </p>
      <article className="flex justify-center items-center">
        <Swiper className="mySwiper" {...sliderSettings}>
          <SliderButtons className="flex items-center justify-between absolute top-1/2 left-0 w-full px-6 z-10" />
          {recetas.map((r, key) => {
            return (
              <SwiperSlide key={key}>
                <article className="flex items-center justify-center">
                  <CardRecetas nombre={r.nombre} imagen={r.imagen} id={r.id} />
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </article>
    </section>
  );
}
