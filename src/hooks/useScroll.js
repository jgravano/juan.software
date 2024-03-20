import { useEffect } from 'react';

const useScroll = (ref) => {
  useEffect(() => {
    const slider = document.querySelector('.row');
    let isDown = false;
    let startX;
    let scrollLeft;
    const handleWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      slider.scrollLeft += e.deltaY + e.deltaX;
    };
  
    slider.addEventListener('wheel', handleWheel);

    const handleMouseDown = (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
    };

    const handleMouseUp = () => {
      isDown = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);
      slider.removeEventListener('wheel', handleWheel);
    };
  }, [ref]);

  function scrollLeft() {
    const row = document.querySelector('.row');
    row.scrollBy({ left: -300, behavior: 'smooth' });
  }
  
  function scrollRight() {
    const row = document.querySelector('.row');
    row.scrollBy({ left: 300, behavior: 'smooth' });
  }

  return { scrollLeft, scrollRight };
};

export default useScroll;
