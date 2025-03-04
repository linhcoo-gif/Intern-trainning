import navbar from "../assets/navbar.png";
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
        <div className="absolute right-[2rem] top-3 w-[120px]">
          <select
            className="w-full px-3 py-2 border rounded-lg bg-white text-gray-700 font-bold shadow-sm focus:outline-none"
            onChange={(e) => handleChangeLanguage(e.target.value)}
            defaultValue="en"
          >
            <option value="en">Eng</option>
            <option value="vi">VN</option>
          </select>
        </div>
      </div>
    </div>);
}

export default Navbar;