import { useSwiper } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
interface Props {
  className: string;
}
export default function SliderButtons({ className }: Props) {
  const swiper = useSwiper();
  return (
    <article className={className}>
      <button
        className="bg-[#645f5f] p-5 rounded-full "
        onClick={() => swiper.slidePrev()}
      >
        <MdNavigateBefore color="white" size={35} />
      </button>
      <button
        className="bg-[#645f5f] p-5 rounded-full "
        onClick={() => swiper.slideNext()}
      >
        <MdNavigateNext color="white" size={35} />
      </button>
    </article>
  );
}
