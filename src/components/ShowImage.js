function ShowImage({ title, revert, img, textContent }) {
  return (
    <div className="flex flex-col gap-5 items-center">
      {!revert ? <div className="flex flex-col gap-5 justify-center items-center">
        <div className="text-white text-[2rem] font-semibold text-center">
          <h2 className="w-[690px] break-words">{title}</h2>
        </div>
        <div className="text-white text-2xl text-center">
          <p className="w-[1100px]">{textContent}</p>
        </div>
        <div className="max-w-[1200px]">
          <img src={img} alt="#" />
        </div>
      </div> : <div>
        <div className="max-w-[1200px] grid grid-cols-2 items-center text-white text-center">
          <div>
            <img src={img} alt="#" />
          </div>
          <div className="flex flex-col gap-10">
            <h2 className="font-semibold text-[2rem]">{title}</h2>
            <p className="text-xl">{textContent}</p>
          </div>
        </div>
      </div>}

    </div>);
}

export default ShowImage;