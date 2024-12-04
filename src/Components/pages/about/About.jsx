import React from 'react';
import './About.css'


const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1 className="about-title">Rreth Meje</h1>
        <p className="about-description">
          Jemi nje Fast-Food, i cili si specialitet e kemi picen e cila piqet ne furre te drurit
          për ti dhënë një shije më speciale, por gjithashtu përgatisim edhe Hamburger si njëri
          nga Fast-Food-et më të shitura në botë. Kemi disa sosë të cilat i përdorim për ti dhënë
          një shije më kremoze dhe pikante për ata që i preferojnë. 
          Ndihuni të lirë të porositni tek ne në qytetin Suharekë. 
          Ne bëjmë Free Delivery dhe nëse jeni më larg, ju ftojmë të na vizitoni në lokalin tonë,
          do të ndiheni më të lumtur kur të dilni se sa kur keni hyrë.
        </p>
        <button className="about-button">
          Mëso më shumë
        </button>
      </div>
    </div>
  );
};

export default About;
