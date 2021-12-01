import React,{useState} from 'react';
import HeroComponent1 from '../components/HeroComponent1';
import GalleryComponent from '../components/GalleryComponent1'
import Modal from '../components/Modal';
import galleryPicture1 from '../images/prydumano-design-zuqzdyXVSHM-unsplash.jpg'
import galleryPicture2 from '../images/prydumano-design-0D5YT7cdrXs-unsplash.jpg'
import galleryPicture3 from '../images/oriento-gy_DN08336U-unsplash.jpg'
import galleryPicture4 from '../images/iStock-89269881.jpg'
import galleryPicture5 from '../images/prydumano-design-xrv5I6at_vA-unsplash.jpg'

const Portfolio = () => {
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
        <section className='marginTopMobileVersion'>
            <HeroComponent1 />
        </section>
        <section className="Gallery noMarginTop">
        <GalleryComponent imgUrls={GalleryImgUrls} content={'What do you really WANT for life?'} setSelectedImg={setSelectedImg}/>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
        </section>
        </>
      );
}
 
export default Portfolio;