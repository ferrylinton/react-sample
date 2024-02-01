import { useEffect, useState } from 'react';
import { scrollSpy } from 'react-scroll';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Header from './components/Header';
import Profile from './components/Profile';
import Skill from './components/Skill';


export default function App() {

  const [currentTo, setCurrentTo] = useState('home');

  useEffect(() => {

    scrollSpy.update();

  }, []);

  const handleSetActive = (to: string) => {
    setCurrentTo(to);
  };

  return (
    <>
      <Header currentTo={currentTo} onSetActive={handleSetActive}/>
      <div id="profile" className='element'>
        <Profile/>
      </div>
      <div id="skill" className='element'>
        <Skill/>
      </div>
      <div id="blog" className='element'>
        <Blog/>
      </div>
      <div id="contact" className='element'>
        <Contact />
      </div>
    </>
  )
}
