import React from 'react';
import HeroComponent from './components/HeroComponent';
import SubHeroComponent from './components/SubHeroComponent';
import PortfolioComponent from './components/PortfolioComponent';
import GalleryComponent from './components/GalleryComponent'
import ServicesComponent from './components/ServicesComponent';
import BannerComponent from './components/BannerComponent';
import TestimonialsComponent from './components/Testimonials';
import heroBackgroundImage from './images/hero_image.png';
import profolioImage from './images/profolio.jpg';
import designIcon from './images/design_icon.jpg';
import printIcon from './images/print_icon.png';
import packageIcon from './images/packaging_icon.jpg';
import bannerBackgroundImage from './images/banner_picture1.jpg'
import KariAsselin from './images/people1.png'
import FadiEid from './images/people2.png'
import ChristyMurphy from './images/people3.png'
import JonathanBurke from './images/people4.png'
import StephenFriedheim from './images/people5.png'


const Home = (props) =>{

  const ServicesData = [
    {
      imagePath:designIcon,
      iconAlt:`design`,
      title:'BRAND + LOGO DESIGN',
      description:'Whether you’re looking for a refresh or a brand new visual strategy, we have the experience and creativity to take your identity up a notch (or ten). We offer a variety of logo design packages plus optional brand standards and style guidelines.',
      subDescription1:'LOGO DESIGN / VISUAL ASSETS',
      subDescription2:'BUSINESS NAMING / STYLE GUIDES',
      button:'VIEW CASE STUDIES'
    },
    {
      imagePath:printIcon,
      iconAlt:`print`,
      title:'PRINT DESIGN',
      description:'In the midst of the digital age, sometimes there’s nothing better than feeling paper between your fingertips. Brochures, book cover design, reports, pitch decks, menus, advertisements, invitations, apparel-you name it, we can design it.',
      subDescription1:'BROCHURES / MENUS / ADVERTISEMENTS',
      subDescription2:'BOOK COVER DESIGN / REPORTS',
      button:'VIEW PRINT0 WORK'
    },
    {
      imagePath:packageIcon,
      iconAlt:`packaging`,
      title:'PAKAGING DESIGN',
      description:'All design must balance communication and aesthetics but packaging design requires another level of thought and care. Your product has to communicate a lot without a lot of room to work with. Fortunately, we love a good challenge.',
      subDescription1:'FOOD + BEVERAGE PACKAGING DESIGN',
      subDescription2:'COSMETICS PACKAGING DESIGN',
      button:'VIEW PAKAGING WOR'
    }
  ]

  const PortfolioImages = [
    {path:'images/house1.jpg'},
    {path:'images/house2.jpg'},
    {path:'images/house3.jpg'},
    {path:'images/house4.jpg'},
    {path:'images/house5.jpg'},
  ]

  const GalleryImgUrls = [
    {src:'https://source.unsplash.com/PC_lbSSxCZE/800x600',title:'title',brand:'brand',alt:'1'},
    {src:'https://source.unsplash.com/lVmR1YaBGG4/800x600',title:'title',brand:'brand',alt:'2'},
    {src:'https://source.unsplash.com/5KvPQc1Uklk/800x600',title:'title',brand:'brand',alt:'3'},
    {src:'https://source.unsplash.com/GtYFwFrFbMA/800x600',title:'title',brand:'brand',alt:'4'},
    {src:'https://source.unsplash.com/Igct8iZucFI/800x600',title:'title',brand:'brand',alt:'5'},
    {src:'https://source.unsplash.com/M01DfkOqz7I/800x600',title:'title',brand:'brand',alt:'6'},
    {src:'https://source.unsplash.com/MoI_cHNcSK8/800x600',title:'title',brand:'brand',alt:'7'},
    {src:'https://source.unsplash.com/M0WbGFRTXqU/800x600',title:'title',brand:'brand',alt:'8'},
    {src:'https://source.unsplash.com/s48nn4NtlZ4/800x600',title:'title',brand:'brand',alt:'9'},
    {src:'https://source.unsplash.com/E4944K_4SvI/800x600',title:'title',brand:'brand',alt:'10'},
    {src:'https://source.unsplash.com/F5Dxy9i8bxc/800x600',title:'title',brand:'brand',alt:'11'},
    {src:'https://source.unsplash.com/iPum7Ket2jo/800x600',title:'title',brand:'brand',alt:'12'},   
  ];

  const TestimonialsData = [
    {
        name:'Kari Asselin',
        occupation:'Founder, Om Organics',
        photoUrl:KariAsselin,
        content:'Britt is a true professional with whom we entrusted our legacy brand to modernize and sharpen. We were so pleased with the concepts presented for the Derma Meats rebrand that our problem became choosing a favourite (a good problem to have). Since the launch we’ve had nothing but positive reactions to our new look. It’s refreshing to work with someone who not only executes, but actually listens and communicates throughout the process. Through Covet Design we had a true partner to bring our company into a new age.'
    },
    {
        name:'FADI EID',
        occupation:'Owner/Operator, Jamjar, Jamjar Canteen, Cabrito Tapas',
        photoUrl:FadiEid,
        content:"Working with Britt has been very refreshing, she listens to our needs, digs for details and offers solutions that meet our budget. She delivers projects in a timely fashion and is an absolute pleasure to work with. The quality of work that we receive is simply outstanding and she's been able to translate two new concepts and a retail offering line to perfection. We used Covet Desig"
    },    
    {
        name:'CHRISTY MURPHY',
        occupation:'Vice President Communications, Cactus Club Cafe',
        photoUrl:ChristyMurphy,
        content:'Britt continually impressed me with her passion and her unique take on the Cactus brand. The graphic design needs of this company are incredibly diverse, and Britt was able to meet every one of our requirements, on target and on time. She holds an acute understanding of our brand, which is reflected in all of her print design. I would not hesitate to endorse Covet Design to any company, large or small.'
    },
    {
        name:'STEPHEN FRIEDHEIM',
        occupation:'President, Derma Meat Co.',
        photoUrl:StephenFriedheim,
        content:'Britt is a true professional with whom we entrusted our legacy brand to modernize and sharpen. We were so pleased with the concepts presented for the Derma Meats rebrand that our problem became choosing a favourite (a good problem to have). Since the launch we’ve had nothing but positive reactions to our new look. It’s refreshing to work with someone who not only executes, but actually listens and communicates throughout the process. Through Covet Design we had a true partner to bring our company into a new age.'
    },
    {
        name:'JONATHAN BURKE',
        occupation:'General Manager, Trimpac Sysco Fine Meats',
        photoUrl:JonathanBurke,
        content:'Our company went through a full rebranding project with Covet Design and I would highly recommend them. The end result was a clearly defined rebrand that was 100% in alignment with our values and vision. We have received overwhelming positive feedback from our associates and customers. Thank you for your tenacity and hard work – choosing to work with Britt was the right decision.'
    }
  ]

  
  return (
    <>
    <section className="hero">
        <HeroComponent
          windowScrollY={props.windowScrollY}
          backgroundColor={'#e7e7e9'}
          backgroundImage={heroBackgroundImage}
          reducerVar={0}
          containerHeight={100}
        >
          <div>
            <h1 className='title' style={{fontSize:'calc(2em + 2vw)', margin:'0',lineHeight:'1.2em'}}> 
              We make<br/>
              irresistible<br/>
              brands.
            </h1>
          </div>
          <br/>
          <button type="button" className='primaryButton'>VIEW CASE STUDIES</button>
          <br/>
          <button className='buttonWithImage'><img src="images/iconmonstr-arrow-down-circle-thin-64.png" alt="arrow down circle 64px"/></button> 
        </HeroComponent>
    </section>
    
    <section className="subHero">
        <SubHeroComponent 
          title={'Good design is good business.'}
          content={'We want people to want you. That’s the ultimate goal of graphic design. People base their buying decisions more on visual cues than on features, benefits or even price. Therein lies the power of a strong visual identity. We ensure your visuals are compelling, whether it’s a logo design, packaging design or any graphic design under the sun. Brands that speak to you are the brands you buy.'}
          backgroundColor={'#bc7b5f'}
          profolioImage={profolioImage}
          profolioName={'Britt Low'}
          profolioOccupation={'FOUNDER & GRAPHIC DESIGNER'}
        >
          <p>OVER 10 YEARS OF EXPERIENCE</p>
          <h5>Covet is a boutique graphic design operation in beautiful Vancouver, BC.</h5>
          <p>What does it mean to be a boutique operation? It means low overhead and better value passed on to our clients; we expand or contract to suit each project’s needs. It means you get to actually talk to your graphic designer one-on-one. It means you get a personal level of service. </p>
          <p>The best part of the job is watching our designs improve the way our clients do business.</p>
          <button className='primaryButton'>CONTACT</button>
        </SubHeroComponent>
    </section>
    
    <section className="services">
        <ServicesComponent data={ServicesData}/>
    </section>

    <section className="banner">
        <BannerComponent
          backgroundImage={bannerBackgroundImage} 
          content={'“Design is where art and science break even”'}
        />
    </section>

    <section className="Portfolio">
        <PortfolioComponent images={PortfolioImages}/>
    </section>

    <section className="gallery-container">
        <GalleryComponent imgUrls={GalleryImgUrls}/>
    </section>

    <section className="testimonials">
        <TestimonialsComponent data={TestimonialsData}/>
    </section>

  </>
  );
}

export default Home;
