import navbar from "../assets/navbar.png";
import i18n from "../i18n";
function Navbar({ handleClick }) {
  const link = [
    { id: 1, path: "/d", title: "Vì sao nên chọn", list: ["Điểm Ưu Việt", "Phương Pháp", "Tính Năng Mới", "Đánh Giá Thực Tế"] },
    { id: 2, path: "/a", title: "Bí Kíp Luyện Thi", list: [] },
    { id: 3, path: "/b", title: "Luyện Cambridge" },
  ]

  const handleChangeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="w-full fixed z-[99999] flex justify-center gap-10 top-0">
      <div className="relative flex items-center">
        <img src={navbar} alt="#" />
        <div className="absolute flex justify-center gap-10 top-3 left-10">
          {link.map((item) => (
            <div key={item.id}>
              <div onClick={() => handleClick(item.id)} href={item.path} className="text-white text-[22px] cursor-pointer hover:text-sky-500">{item.title}</div>
            </div>
          ))}
        </div>
        <div className="absolute right-[2.5em] top-[10px] w-[100px] ">
          <select
            className="px-4 py-2 border text-white rounded-lg bg-fuchsia-400 font-bold shadow-sm focus:outline-none"
            onChange={(e) => handleChangeLanguage(e.target.value)}
            defaultValue="vi"
          >
            <option value="en">
              Eng
            </option>
            <option value="vi">VN</option>
          </select>
        </div>
      </div>
    </div>);
}

export default Navbar;