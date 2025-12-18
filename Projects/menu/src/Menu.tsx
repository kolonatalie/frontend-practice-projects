import React, { useRef } from 'react';
import { MenuItem } from './data';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface MenuProps {
  items: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ items }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (items.length === 0) return;

    gsap.fromTo(
      '.menu-item',
      {
        opacity: 0,
        y: 100,
        scale: 0.8
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(2)',
        overwrite: 'auto'
      }
    );
  }, { dependencies: [items], scope: containerRef });

  return (
    <div className='section-center' ref={containerRef}>
      {items.map((menuItem) => {
        const { id, title, img, desc, price } = menuItem;
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
