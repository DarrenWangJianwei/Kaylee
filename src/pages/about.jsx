import profolioImage from '../images/hutomo-abrianto-X5BWooeO4Cw-unsplash.jpg';
import SubHeroComponent from '../components/SubHeroComponent';
import ServicesComponent from '../components/ServicesComponent';
import BannerComponent from '../components/BannerComponent';
import TestimonialsComponent from '../components/Testimonials';
import HeroComponent from '../components/HeroComponent';
import bannerBackgroundImage from '../images/tobias-tullius-PXXtq6bp6cs-unsplash.jpg'
import KariAsselin from '../images/people1.png'
import FadiEid from '../images/people2.png'
import ChristyMurphy from '../images/people3.png'
import JonathanBurke from '../images/people4.png'
import StephenFriedheim from '../images/people5.png'

const About = (props) => {
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
            <ServicesComponent data={ServicesData} title={<p className='titleMUJI'>What is <span>MUJI</span> Spirit</p>}/>
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