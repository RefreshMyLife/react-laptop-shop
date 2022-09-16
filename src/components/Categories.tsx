import React from 'react';

type CategoriesProps = {
  value: number;
  onClickCategory: (index: number) => void;
};

export const Categories: React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
  const categories = ['Все', 'Офисный', 'Игровой', 'Универсальный', 'Смартбук', 'Ультрабук'];
  return (
    <div className="categories">
      <ul>
        {categories.map((category, i) => (
          <li key={i} onClick={() => onClickCategory(i)} className={value === i ? 'active' : ''}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};
