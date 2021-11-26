import profolioImage from '../images/profolio.jpg';
import SubHeroComponent from '../components/SubHeroComponent';
import ServicesComponent from '../components/ServicesComponent';
import BannerComponent from '../components/BannerComponent';
import TestimonialsComponent from '../components/Testimonials';
import HeroComponent from '../components/HeroComponent';
import designIcon from '../images/design_icon.jpg';
import printIcon from '../images/print_icon.png';
import packageIcon from '../images/packaging_icon.jpg';
import bannerBackgroundImage from '../images/banner_picture1.jpg'
import KariAsselin from '../images/people1.png'
import FadiEid from '../images/people2.png'
import ChristyMurphy from '../images/people3.png'
import JonathanBurke from '../images/people4.png'
import StephenFriedheim from '../images/people5.png'

const About = (props) => {
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
        <section className="subHero">
            <SubHeroComponent 
                title={'About Covet Design.'}
                content={'Specializing in logo design and product packaging, Covet approaches every project with enthusiasm and a healthy dose of imagination. We strive for original concepts and we don’t mind working extra hard to get there. Versatility means we offer the same quality of graphic design across industries without it all looking the same. We genuinely listen and do the research to make sure your design fits you and only you.'}
                backgroundColor={'#999999'}
                profolioImage={profolioImage}
                profolioName={'Britt Low'}
                profolioOccupation={'FOUNDER & GRAPHIC DESIGNER'}
            >
                <p>GRAPHIC DESIGNER IN VANCOUVER, BC</p>
                <h5>Britt Low has been operating as a graphic designer in Vancouver, BC for over 10 years.</h5>
                <p>“My favourite part of any assignment in elementary school was always the title page. I might have been the only one in junior high science class who took them seriously (probably too seriously). By high school I was art directing the year book and learning photoshop. Yet it wasn’t until university that I realized I could make a career out of my most favourite thing to do. My passion for design has only grown since then: observing, honing, learning, collecting, analyzing, hunched-over, eyes squinting, tweaking, re-tweaking. It’s still my most favourite thing to do.”</p>
                <p>Britt has an undergraduate degree in Communication and Publishing from Simon Fraser University as well as a certificate in Graphic Design from Emily Carr and BCIT. </p>
            </SubHeroComponent>
        </section>
        
        <section className="services">
            <ServicesComponent data={ServicesData}/>
        </section>

        <section className="banner">
            <BannerComponent
                backgroundImage={bannerBackgroundImage} 
                content={'Branding is connecting good strategy with good creativity'}
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
                    Clients
                </h1>
                <p style={{fontSize:'0.8em', width:'260px'}}>PROUD TO WORK HARD FOR COMPANIES LIKE THESE</p>
            </div>
            </HeroComponent>
        </section>

        <section className="testimonials">
            <TestimonialsComponent data={TestimonialsData}/>
        </section>
        </>
     );
}
 
export default About;