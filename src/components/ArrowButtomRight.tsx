import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const ArrowButtomRight: React.FC = () => {
  const handlerArrow = () => {
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 500; // Duración del desplazamiento en milisegundos
    let startTime: number;

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      window.scrollTo(
        0,
        easeInOutCubic(progress, startPosition, distance, duration)
      );

      if (progress < duration) {
        requestAnimationFrame(animation);
      }
    };

    const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t + b;
      t -= 2;
      return (c / 2) * (t * t * t + 2) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <article>
      <IoIosArrowUp
        size={70}
        className="bg-[#655E5F] p-3 rounded-full fixed right-6 bottom-12 z-20 cursor-pointer"
        color="white"
        onClick={handlerArrow}
      />
    </article>
  );
};

export default ArrowButtomRight;
