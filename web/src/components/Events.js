import React from 'react';
import FASTERWHITESVG from './FASTERWHITESVG'
import FasterConFlyer21 from './FasterConFlyer21.js'
import FasterConBanner from "./FASTERCON-21-Schedule-F.png";

const Events = ({ url }) => {
  return (
    <div style={{backgroundColor:'rgb(255,255,255)',maxwidth:"500px"}}>
      <div className  ="flex justify-center py-4">
        <FasterConFlyer21/>
      </div>
    
      <div className="container text-center mx-auto">
        <button className="bg-FasterGreen hover:bg-blue-700 text-white font-montserrat font-medium py-100 px-10  border-blue-700 rounded p-2 ">
          <a href="https://bit.ly/FASTERCON21R" className="button">REGISTER</a>
        </button>
      </div>
    
      <p className="container text-black text-center text-sm py-2 mx-auto">
        <div className="px-3 mb-2 text-left">Dear FASTER Community,</div>
        We invite you to attend our 5th Annual Filipinx Americans in STEAM - Science Technology Engineering Arts and Mathematics Conference (FASTERCON21) as we celebrate this year’s Filipinx American HXStory Month (FAHM).** Please join us for this special occasion of a jam-packed set of 7 virtual events, with over 20+ speakers, 4 skills-based professional development workshops for professionals and undergraduate students over the month of October. We invite you participate in workshops for professional development to sharpen your skills, learn more about new technologies where Filipinx Americans are innovation, and also to convene in community building so that we can continue to create safe spaces to connect, collaborate, and cultivate our growth in these times.We recognize that during our second year of the global pandemic of COVID19, our Filipinx American recognizes the loss since March of last year. Injustice is not new to the Filipinx American community. In light of what our communities and allies have experienced, from the Black Lives Matter, those fighting with us against anti-Asian hate crimes, and and the death of aspiring Filipino American game designer, [Angelo Quinto](https://bit.ly/RememberAngeloQuinto), last December. This year, we open our conference jointly with our community partners, Asian Leaders Alliance (ALA), and LEAD Filipino in hopes of moving our conversation forward (from talk to action) and building solidarity with our fellow Asian American brothers and sisters, those in other communities of color, and with each other to re-ignite FASTER PROS, our coalition of Employee Resource Groups (ERGs) we have partnered with over the years to re-engage with our communities to fight back, to collectively heal, to organize, and take action. We want to recognize the strength, beauty, in our minds, bodies, voices, and souls by celebrating Filipinx American joy, continuing to recognize the work of Filipinx American contributions to our industry as we have always done since the founding of our organization, building our legacy for future generations, continuing to arm ourselves with the tools needed to continue thriving in the industry, and keeping our communities safe through COVID19.
      </p>

      <p className="container mx-auto uppercase tracking-loose text-black text-center text-sm py-2">
        <strong>The tl;dr - The 5W’s & H - (Who/What/Where/When) and How</strong>
      </p>

      <p className="container mx-auto uppercase tracking-loose text-black text-center text-sm py-2">
        <strong>Who:</strong> Filipinx American Leaders in STEAM ranging from arts, design, data science, engineering, biotechnology, healthtech and safety. Community Partners including allies Asian Leaders Alliance and LEAD Filipino, we will be re-igniting our coalition of FASTER ERGS - FASTER PROS.
      </p>

      <p className="container mx-auto uppercase tracking-loose text-black text-center text-sm py-2">
        <strong>What/Where/When:</strong> Our conference is completely virtual due to COVID19 and we do not anticipate any changes in light of the global pandemic.
      </p>

      <p className="container mx-auto uppercase tracking-loose text-black text-center text-sm py-2">
        <strong>MAIN CONFERENCE:</strong> Friday, October 8-Sunday, October 10th.
      </p>
      
      <div className="flex justify-center p-2 pb-3 mx-auto">
        <img id="FasterConBanner" className="mx-auto" src={FasterConBanner} style={{height: "500px" }} />
      </div>
    </div>
  );  
};

Events.displayName = 'Events';
export default Events;