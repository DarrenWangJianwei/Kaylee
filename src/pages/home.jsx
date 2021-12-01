import React,{useState} from 'react';
import HeroComponent from '../components/HeroComponent2';
import GalleryComponent from '../components/GalleryComponent1'
import Modal from '../components/Modal';
import ServicesComponent from '../components/ServicesComponent';
import BannerComponent from '../components/BannerComponent';
import TestimonialsComponent from '../components/Testimonials';
import RegisterComponent from '../components/RegisterComponent';
import heroBackgroundImage from '../images/hero_image.png';
import bannerBackgroundImage from '../images/tobias-tullius-PXXtq6bp6cs-unsplash.jpg'
import galleryPicture1 from '../images/prydumano-design-zuqzdyXVSHM-unsplash.jpg'
import galleryPicture2 from '../images/prydumano-design-0D5YT7cdrXs-unsplash.jpg'
import galleryPicture3 from '../images/oriento-gy_DN08336U-unsplash.jpg'
import galleryPicture4 from '../images/iStock-89269881.jpg'
import galleryPicture5 from '../images/prydumano-design-xrv5I6at_vA-unsplash.jpg'
import testimonialData from '../pageData/TestimonialsData.json';
import servicesData from '../pageData/servicesData.json';

const Home = (props) => {
  const [selectedImg,setSelectedImg] = useState(null);

  const GalleryImgUrls = [
    {src:galleryPicture1,gridItem:'first', title:'Bedroom',brand:'Simple and Clear',alt:'Bedroom'},
    {src:galleryPicture2,gridItem:'second', title:'Bookcase',brand:'Bright',alt:'Bookcase'},
    {src:galleryPicture3,gridItem:'third', title:'Tea Table',brand:'Elegant',alt:'Tea Table'},
    {src:galleryPicture4,gridItem:'forth', title:'Bathroom',brand:'Natty',alt:'Bathroom'},
    {src:galleryPicture5,gridItem:'fifth', title:'Bathroom',brand:'Tidy',alt:'Bathroom'},
  ];

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
        <ServicesComponent data={servicesData} title={<p className='titleMUJI'>What is <span>MUJI</span> Spirit</p>}/>
    </section>

    <section className="banner">
        <BannerComponent
          backgroundImage={bannerBackgroundImage} 
          content={''}
        />
    </section>

    <section className="Gallery">
      <GalleryComponent imgUrls={GalleryImgUrls} content={'What do you really WANT for life?'} setSelectedImg={setSelectedImg}/>
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </section>

    <section className="Register">
      <RegisterComponent />
    </section>

    <section className="testimonials">
      <TestimonialsComponent data={testimonialData}/>
    </section>
  </>
  );
}
 
export default Home;