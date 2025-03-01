import Button from "./Button";

function Introduction({ title, subTitle, text, img, video, revert, gif, btn, handleClick, backgroundImg }) {

  return (
    <div className=" flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <div className="font-bold text-white text-center text-[40px]">{title}</div>
        {revert ?
          <div>
            <div className="grid grid-cols-2 justify-center items-center gap-[50px]">
              <div className=" flex gap-5 flex-col justify-center">
                <div className="text-white text-[30px] font-bold text-center">{subTitle}</div>
                <div>
                  <p className="text-white break-words text-[23.6px]">{text}</p>
                </div>
                {btn && (
                  <div className="flex justify-center">
                    <div className='w-[20rem]'>
                      <Button
                        handleOnclick={handleClick}
                        backgroundImg={backgroundImg}
                        text="Thử Speaking AI" />
                    </div>
                  </div>
                )}
              </div>
              <div className="relative">
                <img src={img} alt="ContextualImage" />
                {gif ? <img className="absolute top-6 left-8 w-[32em] h-[18em]"
                  src={gif}
                  alt="Gif" /> : <iframe
                    id="youtube-video"
                    className="w-[530px] h-[280px] absolute top-[1.8em] left-[1.5em] aspect-auto"
                    src={video}
                    title="flyer_video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  ></iframe>}
              </div>
            </div>
          </div> :
          <div>
            <div className="grid grid-cols-2 justify-center items-center gap-[50px]">
              <div className="relative">
                <img src={img} alt="ContextualImage" />
                {gif ? <img className="absolute top-6 left-8 w-[32em] h-[18em]"
                  src={gif}
                  alt="Gif" /> : <iframe
                    id="youtube-video"
                    className="w-[530px] h-[280px] absolute top-[1.8em] left-[1.5em] aspect-auto"
                    src={video}
                    title="flyer_video"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  ></iframe>}
              </div>
              <div className=" flex gap-5 flex-col justify-center">
                <div className="text-white text-[30px] font-bold text-center">{subTitle}</div>
                <div>
                  <p className="text-white break-words text-[23.6px]">{text}</p>
                </div>
                {btn && (
                  <div className="flex justify-center ">
                    <div className='w-[20rem]'>
                      <Button
                        handleOnclick={handleClick}
                        backgroundImg={backgroundImg}
                        text="Thử Speaking AI" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>}
      </div>
    </div>);
}

export default Introduction;