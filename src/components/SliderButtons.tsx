import { useSwiper } from "swiper/react";

interface Props {
  className: string;
  btnPrev: string;
  btnNext: string;
}
export default function SliderButtons({ className, btnPrev, btnNext }: Props) {
  const swiper = useSwiper();
  return (
    <article className={className}>
      <button onClick={() => swiper.slidePrev()}>{btnPrev}</button>
      <button onClick={() => swiper.slideNext()}>{btnNext}</button>
    </article>
  );
}
