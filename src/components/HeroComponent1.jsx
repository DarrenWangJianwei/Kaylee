import React from 'react';
import hero from '../css/Hero1.module.css'

const HeroComponent1 = () => {
    return (
        <div className={hero.container}>
          <div className={hero.content}>
            <h1 className={hero.title}>Brand + Logo Design</h1>
            <p className={hero.subTitle}>CASE STUDIES</p>
            <p className={hero.description}>Branding is the combination of good strategy and good creativity. You should understand and define your brand before design can be applied. Logo design is an important facet but it isn’t your brand. We ask questions to help you understand your brand so we can create the best possible logo design. We think beyond the logo design to the visual assets surrounding it (colours, fonts, graphics, photography). These are all important features of your visual identity. </p>
          </div>
        </div>
      );
}
 
export default HeroComponent1;