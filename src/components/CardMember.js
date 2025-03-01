import avatar from "../assets/parrent_avatar.png"
const dataMember = [{
  id: 1,
  avatar: avatar,
  description: 'Phụ huynh bé Nguyễn Minh Đăng - 12 tuổi',
  content: 'Mình thấy app hay,con học vừa vui vừa hiệu quả. Các thử thách bám sát level, phù hợp với từng độ tuổi.',
}, {
  id: 2,
  avatar: avatar,
  description: 'Phụ huynh bé Nguyễn Minh Đăng - 12 tuổi',
  content: 'Mình thấy app hay,con học vừa vui vừa hiệu quả. Các thử thách bám sát level, phù hợp với từng độ tuổi.',
}, {
  id: 3,
  avatar: avatar,
  description: 'Phụ huynh bé Nguyễn Minh Đăng - 12 tuổi',
  content: 'Mình thấy app hay,con học vừa vui vừa hiệu quả. Các thử thách bám sát level, phù hợp với từng độ tuổi.',
}, {
  id: 4,
  avatar: avatar,
  description: 'Phụ huynh bé Nguyễn Minh Đăng - 12 tuổi',
  content: 'Mình thấy app hay,con học vừa vui vừa hiệu quả. Các thử thách bám sát level, phù hợp với từng độ tuổi.',
}
]

function CardMember() {
  return (
    <div className="flex justify-center gap-20 mt-[60px]">
      {dataMember.map((item) => (
        <div className="bg-white w-[300px] flex flex-col items-center relative rounded-xl" key={item.id}>
          <div className="absolute top-[-60px]">
            <img className="rounded-[50%] object-scale-down w-[120px]" src={item.avatar} alt={item.headline} />
          </div>
          <div className="mt-[5rem] p-5 flex flex-col gap-5">
            <div className="font-bold text-center text-[18] " style={{ color: "rgb(0, 0, 0)" }}>{item.description}</div>
            <div className="text-center text-[15px]" style={{ color: "rgb(5, 31, 77)" }}>{item.content}</div>
          </div>
        </div>
      ))}
    </div>);
}

export default CardMember;