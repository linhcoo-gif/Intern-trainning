export const Screen = ({ video, title, img }) => {
  return (
    <div className='flex'>
      <div className='relative flex flex-col gap-5'>
        <img src={img} alt='#' />
        <iframe
          id="youtube-video"
          className="w-[530px] h-[280px] top-[2em] left-[2em] aspect-auto absolute"
          src={video}
          title="flyer_video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
        <div className='bg-white rounded-lg p-2 text-center text-[25px] font-bold leading-[1.6]'>{title}</div>
      </div>
    </div>
  )
}