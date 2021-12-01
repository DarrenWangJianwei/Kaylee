import React from 'react';
import HeroComponent1 from '../components/HeroComponent1';
import GalleryComponent from '../components/GalleryComponent1'
import galleryPicture1 from '../images/prydumano-design-zuqzdyXVSHM-unsplash.jpg'
import galleryPicture2 from '../images/prydumano-design-0D5YT7cdrXs-unsplash.jpg'
import galleryPicture3 from '../images/oriento-gy_DN08336U-unsplash.jpg'
import galleryPicture4 from '../images/iStock-89269881.jpg'
import galleryPicture5 from '../images/prydumano-design-xrv5I6at_vA-unsplash.jpg'

const Portfolio = () => {
    const GalleryImgUrls = [
        {src:galleryPicture1,gridItem:'first', title:'title',brand:'brand',alt:'1'},
        {src:galleryPicture2,gridItem:'second', title:'title',brand:'brand',alt:'2'},
        {src:galleryPicture3,gridItem:'third', title:'title',brand:'brand',alt:'3'},
        {src:galleryPicture4,gridItem:'forth', title:'title',brand:'brand',alt:'4'},
        {src:galleryPicture5,gridItem:'fifth', title:'title',brand:'brand',alt:'5'},
      ];
    return (
        <>
        <section className='marginTopMobileVersion'>
            <HeroComponent1 />
        </section>
        <section className="Gallery noMarginTop">
            <GalleryComponent imgUrls={GalleryImgUrls} content={'What do you really WANT for life?'}/>
        </section>
        </>
      );
}
 
export default Portfolio;