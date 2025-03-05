import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import { useRef } from 'react';
function Main() {
  const myref = useRef({});
  const handleScroll = () => {
    myref.current.scrollIntoView({ behavior: 'smooth', block: "center" });
  }
  const handleScrollContent = (id) => {
    if (myref.current[id]) {
      myref.current[id].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  return (
    <div>
      <Navbar handleClick={handleScrollContent} />
      <Contact />
      <Header handleClick={handleScroll} />
      <Content refProp={myref} />
      <Footer />
    </div>
  );
}

export default Main;