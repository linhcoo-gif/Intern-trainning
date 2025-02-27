import navbar from "../assets/navbar.png";
import Button from "./Button";
import Btn from '../assets/btn.png';
function Navbar() {
  const link = [
    { id: 1, path: "/d", title: "Bí Kíp Luyện Thi", list: [] },
    { id: 2, path: "/a", title: "Vì sao nên chọn", list: [] },
    { id: 3, path: "/b", title: "Luyện IElTS" },
    { id: 4, path: "/c", title: "Flyer School" },
  ]

  return (
    <div className="md:w-3/4 fixed z-[99999] flex items-center gap-10 top-0 left-[15%]">
      <div className="relative">
        <img src={navbar} alt="#" />
        <div className="absolute flex gap-10 top-3 left-10">
          {link.map((item) => (
            <div key={item.id}>
              <a href={item.path} className="text-white text-[22px] hover:text-gray-900">{item.title}</a>
            </div>
          ))}
        </div>
        <div className="absolute w-[10rem] flex right-[15rem] top-3 ">
          <Button backgroundImg={Btn} text={"ớ ớ"} />
        </div>
      </div>
    </div>);
}

export default Navbar;