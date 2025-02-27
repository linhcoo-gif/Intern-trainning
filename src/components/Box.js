function Box({ img, video, nameMember, decription, content, avatarMember, headLine }) {
  return (<div className="grid grid-cols-2 items-center gap-[5em] bg-violet-200 rounded-2xl p-10">
    <div className="relative">
      <img src={img} alt="border" />
      <iframe
        className="absolute top-[2em] left-[2em] w-[28em] h-[15em]"
        src={video}
        title="Chị Điệp Mẹ Nhật Nam Đánh Giá Phòng Luyện Thi Ảo FLYER.VN"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen></iframe>
    </div>
    <div className="flex flex-col gap-10 text-indigo-900">
      <div className="flex">
        <div className="rounded-[50%] w-[150px]" >
          <img src={avatarMember} alt="#" />
        </div>
        <div className="font-bold text-[18px]">
          <div>{nameMember}</div>
          <div>{decription}</div>
        </div>
      </div>
      <div className="font-bold text-[24px] w-[400px]">{content}</div>
    </div>
  </div>);
}

export default Box;