import React from 'react';
import HeroComponent from '../components/HeroComponent2';
import GalleryComponent from '../components/GalleryComponent1'
import ServicesComponent from '../components/ServicesComponent';
import BannerComponent from '../components/BannerComponent';
import TestimonialsComponent from '../components/Testimonials';
import heroBackgroundImage from '../images/hero_image.png';
import bannerBackgroundImage from '../images/tobias-tullius-PXXtq6bp6cs-unsplash.jpg'
import KariAsselin from '../images/people1.png'
import FadiEid from '../images/people2.png'
import ChristyMurphy from '../images/people3.png'
import JonathanBurke from '../images/people4.png'
import StephenFriedheim from '../images/people5.png'
import galleryPicture1 from '../images/prydumano-design-zuqzdyXVSHM-unsplash.jpg'
import galleryPicture2 from '../images/prydumano-design-0D5YT7cdrXs-unsplash.jpg'
import galleryPicture3 from '../images/oriento-gy_DN08336U-unsplash.jpg'
import galleryPicture4 from '../images/iStock-89269881.jpg'
import galleryPicture5 from '../images/prydumano-design-xrv5I6at_vA-unsplash.jpg'
import RegisterComponent from '../components/RegisterComponent';

const Home = (props) => {

  const ServicesData = [
    {
      title:'Quality',
      description:'Focused on the quality of objects. Time and people rather than quantity.',
    },
    {
      title:'Minimalism',
      description:'Simplified living with only the things that you absolutely need. Things you absolutely want to do and people you absolutely love',
    },
    {
      title:'Organized',
      description:'The objects, times and people that you have all have reasons and designated places for them',
    }
  ]

  const GalleryImgUrls = [
    {src:galleryPicture1,gridItem:'first', title:'title',brand:'brand',alt:'1'},
    {src:galleryPicture2,gridItem:'second', title:'title',brand:'brand',alt:'2'},
    {src:galleryPicture3,gridItem:'third', title:'title',brand:'brand',alt:'3'},
    {src:galleryPicture4,gridItem:'forth', title:'title',brand:'brand',alt:'4'},
    {src:galleryPicture5,gridItem:'fifth', title:'title',brand:'brand',alt:'5'},
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
        />
    </section>
    
    <section className="services">
        <ServicesComponent data={ServicesData} title={<p className='titleMUJI'>What is <span>MUJI</span> Spirit</p>}/>
    </section>

    <section className="banner">
        <BannerComponent
          backgroundImage={bannerBackgroundImage} 
          content={''}
        />
    </section>

    <section className="Gallery">
      <GalleryComponent imgUrls={GalleryImgUrls} content={'What do you really WANT for life?'}/>
    </section>

    <section className="Register">
      <RegisterComponent />
    </section>

    <section className="testimonials">
      <TestimonialsComponent data={TestimonialsData}/>
    </section>
  </>
  );
}
 
export default Home;