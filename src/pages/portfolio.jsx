import React from 'react';
import HeroComponent1 from '../components/HeroComponent1';
import GalleryComponent from '../components/GalleryComponent';

const Portfolio = () => {
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
    
    return (
        <>
        <section>
            <HeroComponent1 />
        </section>

        <section className="gallery-container">
            <GalleryComponent imgUrls={GalleryImgUrls}/>
        </section>
        </>
      );
}
 
export default Portfolio;