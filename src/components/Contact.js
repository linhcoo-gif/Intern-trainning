import Phone from '../assets/phone.png';
import FB from '../assets/facebook.png'
import Zalo from '../assets/zalo.png'
function Contact() {
  return (<div className="flex flex-col tetx-white fixed bottom-5 right-[180px] text-white gap-2">
    <a href="tel:0965376466">
      <div className='w-[50px]'>
        <img src={Phone} alt='' />
      </div>
    </a>
    <a href="https://www.messenger.com/t/flyertestingplatform">
      <div className='w-[50px]'>
        <img src={FB} alt='' />
      </div>
    </a>
    <a href="https://zalo.me/3616309300783386823">
      <div className='w-[50px]'>
        <img src={Zalo} alt='' />
      </div>
    </a>
  </div>);
}

export default Contact;