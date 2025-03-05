import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import { useRef } from 'react';
function Main() {
  const myref = useRef(null);
  const handleScroll = () => {
    myref.current.scrollIntoView({ behavior: 'smooth' });
  }
  const handleScrollToContent = (id) => {
    console.log('id: ', id);
    console.log(123);
  }

  return (
    <div>
      <Navbar handleClick={handleScrollToContent} />
      <Contact />
      <Header handleClick={handleScroll} />
      <Content refProp={myref} />
      <Footer />
    </div>
  );
}

export default Main;