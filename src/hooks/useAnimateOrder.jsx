import { useState } from 'react';

export default function useAnimateOrder() {
  const [menuActive, setMenuActive] = useState(false);

  function translate(menuClass) {
    const isActive = menuActive;
    const menu = document.querySelector(`.${menuClass}`);
    const px = menu.getBoundingClientRect().height - 30;
    if (isActive) {
      menu.style.transform = `translateY(0px)`;
      setMenuActive(false);
    } else {
      menu.style.transform = `translateY(-${px}px)`;
      setMenuActive(true);
    }
  }

  function rotateIcon(iconClass) {
    const isActive = menuActive;
    const icon = document.querySelector(`.${iconClass}`);
    if (isActive) {
      icon.style.transform = `rotate(0deg)`;
      setMenuActive(false);
    } else {
      icon.style.transform = `rotate(180deg)`;
      setMenuActive(true);
    }
  }
  return {translate, rotateIcon}
}