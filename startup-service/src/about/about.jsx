import React from 'react';
import './about.css';

export function About() {
  return (
    <div className="about-page">
      <main>
        <div id="picture" className="picture-box"><img width="840px" src="byu_university.jpg" alt="random" /></div>

        <p className="flex lyrics">
          Rise all loyal Cougars and hurl your challenge to the foe.
          You will fight, day or night, rain or snow.
          Loyal, strong, and true
          Wear the white and blue.
          While we sing, get set to spring.
          Come on Cougars it's up to you. Oh!
        </p>
        
        <p className="flex lyrics">
          Rise and shout, the Cougars are out
          along the trail to fame and glory.
          Rise and shout, our cheers will ring out
          As you unfold your victr'y story.
        </p>
        
        <p className="flex lyrics">
          On you go to vanquish the foe for Alma Mater's sons and daughters.
          As we join in song, in praise of you, our faith is strong.
          We'll raise our colors high in the blue
          And cheer our Cougars of BYU.
        </p>
    
        <hr />

        <p className="text-center">
          The lyrics to the BYU fight song are used with permission from the BYU Music Office.
        </p>

        <p className="text-center">
          This site is in no way affiliated with Brigham Young University. It is a fan site created for educational purposes.
        </p>
      </main>
    </div>
  );
}