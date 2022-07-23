import React from 'react';

//Components
import AnimatedPage from '../components/AnimatedPage';
import DisplayMembers from '../components/PlasTech-Members/Members';

//Images/fonts/icons
import {ReactComponent as EmailIcon} from '../icons/email.svg';

//Styling
import './Contact.css';
import './Home.css';
  
export default function Contact() {
  return (
    <AnimatedPage>
      <section id='about-sect'>
        <h1>About Us</h1>
        <p>
          We are also working closely and continuously with the Office of Sustainability 
          to ensure every Lehigh student is equipped with the knowledge and resources they 
          need to make sustainable choices in their everyday lives. Our initiatives are 
          two pronged: education & gamification. Our education campaign consists of a short 
          video that outlines what is and is not acceptable to recycle, along with some new 
          signage that also clearly makes that distinction. The gamification aspect consists 
          of a competition between dorms to incorporate a component of friendly rivalry that 
          has been proven to greatly affect student behavior.
        </p>
      </section>

      <section id="contacts-sect">
        <div className='contacts-list'>
          <span className='contacts-list-title'>Contacts</span>
          <ul>
            <li>
              <span>Office of Sustainability</span>
              <span>516 Brodhead Avenue, Bethlehem, PA</span>
              <span>
                <a href="mailto:insal@lehigh.edu" className='email-link'>insal@lehigh.edu</a>
                <EmailIcon></EmailIcon>
              </span>
            </li>
            
            <li>
              <span>Residence Life</span>
              <span>Kieth Blankenship: <a href='mailto:kpb218@lehigh.edu' className='email-link'>kpb218@lehigh.edu</a>
                <EmailIcon></EmailIcon>
              </span>
              <span>Monica Carson: <a href='mailto:moc218@lehigh.edu' className='email-link'>moc218@lehigh.edu</a>
                <EmailIcon></EmailIcon>    
              </span>
            </li>
          </ul>
        </div>
      </section>

      <section id="members-sect">
        <h1>Who We Are</h1>
        <p>
          Members of this project come 
          and go as the semesters and 
          summers pass, here are the 
          students currently working on 
          PlasTech Campus 
        </p>
      </section>
      <DisplayMembers />
    </AnimatedPage>
  );
};