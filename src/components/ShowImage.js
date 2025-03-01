function ShowImage({ title, revert, img, textContent }) {
  return (
    <div className="flex flex-col gap-5 items-center">
      {!revert ? <div className="flex flex-col gap-5 justify-center items-center">
        <div className="text-white text-[2rem] font-semibold text-center">
          <div className="w-[690px] break-words">{title}</div>
        </div>
        <div className="text-white text-2xl text-center">
          <p className="w-[1100px]">{textContent}</p>
        </div>
        <div>
          <img src={img} alt="#" />
        </div>
      </div> : <div>
        <div className="grid grid-cols-2 gap-10 items-center text-white text-center">
          <div>
            <img src={img} alt="#" />
          </div>
          <div className="flex flex-col gap-10">
            <div className="font-semibold text-[2rem]">{title}</div>
            <p className="text-xl">{textContent}</p>
          </div>
        </div>
      </div>}

    </div>);
}

export default ShowImage;