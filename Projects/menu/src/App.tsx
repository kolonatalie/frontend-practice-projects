import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items, { MenuItem } from './data';

const allCategories: string[] = ['all', ...new Set(items.map((item)=> item.category))];

function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);
  const [categories] = useState<string[]>(allCategories);

  const filterItems = (category: string) => {
    if(category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <menu>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </menu>
  );
}

export default App;