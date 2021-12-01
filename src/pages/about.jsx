import profolioImage from '../images/hutomo-abrianto-X5BWooeO4Cw-unsplash.jpg';
import SubHeroComponent from '../components/SubHeroComponent';
import ServicesComponent from '../components/ServicesComponent';
import BannerComponent from '../components/BannerComponent';
import TestimonialsComponent from '../components/Testimonials';
import HeroComponent from '../components/HeroComponent';
import bannerBackgroundImage from '../images/tobias-tullius-PXXtq6bp6cs-unsplash.jpg'
import testimonialsData from '../pageData/TestimonialsData.json';
import servicesData from '../pageData/servicesData.json';

const About = (props) => {
    
    return (
        <> 
        <section className="subHero">
            <SubHeroComponent 
                title={'About MUJI TOWNHOME.'}
                content={"A home built on Muji philosophy is about minimalism in design and quality in living. Similarly to their ideation journey, we will always first ask, “What's best from the user's point of view?” After the complexity of the thought process, what remains are the clean and streamline designs of the final products."}
                backgroundColor={'#292c25'}
                profolioImage={profolioImage}
                profolioName={'MUJI Style'}
            >
                <p>TOWNHOUSE DEVELOPMENT IN VANCOUVER, BC</p>
                <h5>MUJI townhouse has been operating in Vancouver, BC for over 10 years</h5>
                <p>Having a clean and white pristine kitchen for the Muji home is anything but ordinary. When done right, they become visually tidy and open up the existing spaces.</p>
                <p>Bean bags are one of the most comfortable items you can have in a Muji home. Jazz up your living room with them and you can move your ‘sofa’ anywhere. </p>
                <p>Being minimalistic and sleek looking, tracklights are a great way to light up the activity areas.</p>
            </SubHeroComponent>
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

        <section className="hero">
            <HeroComponent
                windowScrollY={props.windowScrollY}
                backgroundColor={'#e7e7e9'}
                reducerVar={520}
                containerHeight={60}
            >
            <div>
                <h1 className='title' style={{fontSize:'calc(2em + 2vw)', margin:'0',lineHeight:'1.2em'}}> 
                    Partner
                </h1>
                <p style={{fontSize:'0.8em', width:'260px'}}>Our Friends</p>
            </div>
            </HeroComponent>
        </section>

        <section className="testimonials">
            <TestimonialsComponent data={testimonialsData}/>
        </section>
        </>
     );
}
 
export default About;