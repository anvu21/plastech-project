import React, { useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { motion, Variants } from 'framer-motion';

//Images/fonts/icons
import waste_audit_pic1 from '../images/Waste_Audit_Pic1.jpg';
import waste_audit_pic2 from '../images/Waste_Audit_Pic2.jpg';

//Components
import YoutubeEmbed from '../components/YoutubeEmbed/YoutubeEmbed';

//Styling
import "./Home.css"

function Home() {
  const SecondSectRef = useRef(null);
  const ThirdSectRef = useRef(null);

  const scrollToNextSect = (nextSect, e) => {
    e.preventDefault();
    window.scrollTo({
      top: nextSect.current.offsetTop,
      behavior: "smooth",
    });
    console.log(`Scrolled to ${nextSect.current.id}`);
  }

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log('Scrolled to top')
  }


  return (
    <AnimatedPage>
      <section id='title-sect'>
        <div>Plastech Campus</div>

        <a href='/' onClick={(e) => scrollToNextSect(SecondSectRef, e)}>
          <div className='scroll-button down' style={{top: "230px"}}></div>
        </a>
      </section>

      <section id='purpose-sect' ref={SecondSectRef}>
        <h1>Purpose</h1>
        <p>
          PlasTech Campus is all about decreasing the recycling contamination rate on campus. 
          Recycling contamination is when food, liquid and nonrecyclables end up in the recycling 
          stream and cause the entire bag to be disposed of in the trash stream. The contamination 
          rate on campus currently sits at 66%, which is more than DOUBLE the national average (25%). 
          Our mission is to further Lehigh University's 2030 sustainability goals by increasing awareness 
          about contamination on campus and educating students on how to avoid it so that we can move 
          towards a more sustainable campus in which the majority of our recycling actually ends up at 
          the recycling center.
        </p>
        <div className='img-div'>
          <div className='img-wrap'>
            <img src={waste_audit_pic1} alt='#'></img>
            <p className='img-desc'>
              Our team performing a Waste Audit in 
              Brodhead house over the past summer
            </p>
          </div>
          <div className='img-wrap'>
            <img src={waste_audit_pic2} alt="#"></img>
            <p className='img-desc'>
              Our team performing a Waste Audit in 
              Brodhead house over the past summer
            </p>
          </div>
        </div>
        <a href='/' onClick={(e) => scrollToNextSect(ThirdSectRef, e)}>
          <div className='scroll-button down'></div>
        </a>
      </section>

      <section id='showcase-sect' ref={ThirdSectRef}>
        <h1>What We've Done</h1>
        <p>
          Throughout the summer of 2022 and into the Fall Semester, 
          we are focusing on testing out various methods of education 
          and incentivized gamification to understand which method is 
          most effective in influencing students' recycling behavior. 
          These methods have been backed by... but we want to understand 
          the nature of our campus and what would work best for it. 
        </p>
        <div className='video-div'>
          <YoutubeEmbed embedId="Ch80Bape1MY" />
          <div className='under-dev'>Under development...</div>
        </div>

        <a href='/' onClick={scrollToTop}>
          <div className='scroll-button top'></div>
        </a>
      </section>
    </AnimatedPage>
  );
};

//Exports
export default Home;