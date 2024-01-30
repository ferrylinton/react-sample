import { useEffect, useState } from 'react';
import { Element, scrollSpy, animateScroll } from 'react-scroll';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';
import Profile from './components/Profile';
import Skill from './components/Skill';


export default function App() {

  const [isSticky, setIsSticky] = useState(false);

  const [currentTo, setCurrentTo] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY >= 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {

    // Updating scrollSpy when the component mounts.
    scrollSpy.update();

  }, []);

  const handleSetActive = (to: string) => {
    setCurrentTo(to);
    //animateScroll.scrollMore(-10);
  };

  return (
    <>
      <Header isSticky={isSticky} currentTo={currentTo} onSetActive={handleSetActive}/>
      <Element name="home" className='element'>
        <Profile/>
      </Element>
      <Element name="skill" className='element'>
        <Skill/>
      </Element>
      <Element name="blog" className='element'>
        <Blog/>
      </Element>
      <Element name="contact" className='element'>
        <Contact />
      </Element>
    </>
  )
}
