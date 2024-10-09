// import { useEffect, useState } from "react";
// import "./Parallax.css";
// import RealEstateCarousel from "./VideoCarosel";
// import NavBar from "./NavBar";
// import Footer from "./footer";
// import AboutUs from "./AboutUs";
// import FloatingCallButton from './FloatingButton'
// import WhyUs from './WhyUs';
// import StreamingText from './StreamingText';


// const Parallax = () => {
//   const [scrollPosition, setScrollPosition] = useState(0);

//   // Update scroll position on window scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollPosition(window.pageYOffset);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const text =
//     "Welcome to the ChatGPT-style text streaming effect! Enjoy your experience.";
//     const listings = [
        // {
        //   videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        //   location: 'Sendhamangalam road, Vellaiyampatti, Madurai',
        //   price: '₹70,000 per cent. Total land area 4 acres',
        //   locationUrl: 'https://maps.google.com/maps?q=10.087376594543457%2C78.13214111328125&z=17&hl=en'

        // },
        // {
        //     videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        //     location: 'Sendhamangalam road, Vellaiyampatti, Madurai',
        //     price: '₹45,000 per cent. Total land area 2 acres',
        //     locationUrl:'https://maps.google.com/maps?q=10.090469360351562%2C78.1412124633789&z=17&hl=en',
        //   },
        //   {
        //     videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        //     location: 'Vadipatti, Madurai',
        //     price: '₹80,000 per cent. Total land area 1.5 acres',
        //     locationUrl: 'https://maps.google.com/maps/search/Vadipatti/@10.085930824279785,78.13401794433594,17z?hl=en'
        //   }
//       ];
      

//   return (
//     <div>
//       <div className="parallax-container">
//         <div className="parallax bg1">
//           <NavBar />
//           <div
//             className="parallax1 bg2"
//             style={{ backgroundPositionX: `${scrollPosition * -0.5}px` }}
//           >
//       <div className="homepage-text-align">
//       <div className="homepage-text">
//         <h1 className="animate-fade-left">Real Estates</h1>
//         <div className="flex justify-center items-center stream-text">
//           <StreamingText content={text} speed={50} />
//         </div>
//       </div>
//     </div>
//           </div>
//         </div>

//         <div className="about-us">
//             <div>
//     <h1>About Us</h1>
//             </div>
//             <div>
//             <AboutUs/>
//             </div>
            
//         </div>

//         <div className="videoCarosel py-16 sm:py-24 lg:py-32">
//           <h1>Our Projects</h1>
//           <RealEstateCarousel listings={listings} />
//         </div>

//         <div className="whyUs" style={{backgroundColor: '#f5f5f5'}}>
//             <WhyUs />
//         </div>
        
//       </div>
//       <div className="text-black footer" >
//           <div>
//             <Footer />
//           </div>
//         </div>
//     <div><FloatingCallButton phoneNumber="+1 (234) 567-8900" />
//     </div>
//     </div>
    
//   );
// };

// export default Parallax;



import { useRef, useEffect, useState } from 'react';
import './Parallax.css';
import RealEstateCarousel from './VideoCarosel';
import NavBar from './NavBar';
import Footer from './footer';
import AboutUs from './AboutUs';
import FloatingCallButton from './FloatingButton';
import WhyUs from './WhyUs';
import StreamingText from './StreamingText';

const Parallax = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Refs for sections
  const homeRef = useRef(null);
  const aboutUsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);


  const sections = [
    { name: 'Home', ref: homeRef, current: true },
    { name: 'Projects', ref: projectsRef, current: false },
    { name: 'About Us', ref: aboutUsRef, current: false },
    { name: 'Contact', ref: contactRef, current: false },
  ];

  // Update scroll position on window scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const text = 'Welcome to the ChatGPT-style text streaming effect! Enjoy your experience.';
  const listings = [
    {
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      location: 'Sendhamangalam road, Vellaiyampatti, Madurai',
      price: '₹70,000 per cent. Total land area 4 acres',
      locationUrl: 'https://maps.google.com/maps?q=10.087376594543457%2C78.13214111328125&z=17&hl=en'

    },
    {
        videoUrl: 'https://www.youtube.com/watch?v=LeHrjwo2aMo',
        location: 'Sendhamangalam road, Vellaiyampatti, Madurai',
        price: '₹45,000 per cent. Total land area 2 acres',
        locationUrl:'https://maps.google.com/maps?q=10.090469360351562%2C78.1412124633789&z=17&hl=en',
      },
      {
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        location: 'Vadipatti, Madurai',
        price: '₹80,000 per cent. Total land area 1.5 acres',
        locationUrl: 'https://maps.google.com/maps/search/Vadipatti/@10.085930824279785,78.13401794433594,17z?hl=en'
      }
  ];

  return (
    <div>
      <div className="parallax-container">
        <div className="parallax bg1">
          {/* Pass section refs to NavBar */}
          <NavBar sections={sections} />
          <div className="parallax1 bg2" style={{ backgroundPositionX: `${scrollPosition * -0.5}px` }}>
            <div className="homepage-text-align">
              <div className="homepage-text">
                <h1 className="animate-fade-left">Real Estates</h1>
                <div className="flex justify-center items-center stream-text">
                  <StreamingText content={text} speed={50} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Define each section with a ref */}
        <div id="about-us" ref={aboutUsRef} className="about-us">
          <h1>About Us</h1>
          <AboutUs />
        </div>

        <div id="projects" ref={projectsRef} className="videoCarosel py-16 sm:py-24 lg:py-32">
          <h1>Our Projects</h1>
          <RealEstateCarousel listings={listings} />
        </div>


        <div className="whyUs" style={{ backgroundColor: '#f5f5f5' }}>
          <WhyUs />
        </div>

        <div id="contact" className="footer text-black">
          <Footer />
        </div>

        <FloatingCallButton phoneNumber="+1 (234) 567-8900" />

      </div>
    </div>
  );
};

export default Parallax;
