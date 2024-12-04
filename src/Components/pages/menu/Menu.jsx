import React from 'react';
import backgroundImage from '../../../assets/4464061.jpg';
import './Menu.css';
import pizzaImage from '../../../assets/shayan-ramesht-exSEmuA7R7k-unsplash.jpg';
import burgerImage from '../../../assets/Fast-Food.jpg';
import drinkImage from '../../../assets/tobi-4DJ6m_1V71o-unsplash.jpg';
import sandwichImage from '../../../assets/Somun.jpeg';

const Menu = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const categories = [
    {
      name: 'Pizza',
      image: pizzaImage,
      description: 'Provoni shijen e përsosur të pizzave tona të freskëta.',
      link: '/pizza-category',
    },
    {
      name: 'Fast-Food',
      image: burgerImage,
      description: 'Hamburger, patate të skuqura dhe më shumë për të shuar urinë tuaj.',
      link: '/burger-category',
    },
    {
      name: 'Pije',
      image: drinkImage,
      description: 'Freskohuni me pijet tona të shijshme.',
      link: '/drink-category',
    },
    {
      name: 'Somun',
      image: sandwichImage,
      description: 'Samunet tanë janë perfektë për një vakt të shpejtë dhe të shijshëm.',
      link: '/sandwich-category',
    },
  ];

  return (
    <div className="menu-container" style={backgroundStyle}>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img
              src={category.image}
              alt={category.name}
              className="category-image"
            />
            <div className="category-title-container">
              <h3 className="category-title">{category.name}</h3>
              <p className="category-description">{category.description}</p>
            </div>
            <div className="category-footer">
              <a href={category.link} className="category-link">
                Shiko Më Shumë
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
