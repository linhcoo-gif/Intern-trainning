import Background from "../assets/background-header.png";
import Btn from "../assets/btn.png";
import Border from '../assets/frame-border.png';
import Logo from '../assets/Logo.png';
import Button from "../components/Button";
function Header() {
  const handleClick = () => {
    console.log(`Clicked`);
  }

  return (
    <div className="flex justify-center h-[1000px]" style={{ backgroundImage: `url(${Background})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
      <div className="flex justify-center items-center flex-col">
        <div className="Logo mt-[5em] w-[334.636px] flex flex justify-center items-center flex-col">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="title text-center font-bold text-white text-[56.69px] max-w-[1200px]">
          <p>Learn & Master Mathematics Through Engaging Adventures</p>
        </div>

        <div className=" header-content gap-[5em] w-full flex justify-center items-center relative">
          <div className="btn w-[400px] flex flex-col gap-[25px]">
            <Button backgroundImg={Btn} text="For Parents & Students" handleOnclick={handleClick} />
            <Button backgroundImg={Btn} text="For Teachers & Schools" />
            <div className="font-bold text-[19.32px] text-center text-white  ">
              Already have an account?<a className="font-bold text-login-btn underline underline-offset" href="aaa" target="blank">Log in</a>
            </div>
          </div>

          <div>
            <div className="relative ">
              <img src={Border} alt="Border" />
            </div>
            <iframe
              id="youtube-video"
              className="w-[660px] h-[350px] absolute top-[40px] right-[35px] aspect-auto"
              src="https://www.youtube.com/embed/RKWYAtA6EG0"
              title="flyer_video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;