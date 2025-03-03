import navbar from "../assets/navbar.png";
import Btn from '../assets/btn.png';
import Button from "./Button";
import i18n from "../i18n";
function Navbar() {
  const link = [
    { id: 1, path: "/d", title: "Bí Kíp Luyện Thi", list: [] },
    { id: 2, path: "/a", title: "Vì sao nên chọn", list: [] },
    { id: 3, path: "/b", title: "Luyện IElTS" },
    { id: 4, path: "/c", title: "Flyer School" },
  ]

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="w-full fixed z-[99999] flex justify-center gap-10 top-0">
      <div className="relative flex items-center">
        <img src={navbar} alt="#" />
        <div className="absolute flex gap-10 top-3 left-10">
          {link.map((item) => (
            <div key={item.id}>
              <a href={item.path} className="text-white text-[22px] hover:text-sky-500">{item.title}</a>
            </div>
          ))}
        </div>
        <div className="absolute w-[100px] flex right-[15rem] top-3 ">
          <Button handleOnclick={() => handleChangeLanguage("en")} backgroundImg={Btn} text={"ENG"} />
        </div>
        <div className="absolute w-[100px] flex right-[7.5rem] top-3 ">
          <Button handleOnclick={() => handleChangeLanguage("vi")} backgroundImg={Btn} text={"VI"} />
        </div>
      </div>
    </div>);
}

export default Navbar;