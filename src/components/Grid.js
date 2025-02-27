function Grid({ data, title }) {
  return (
    <div className=" flex flex-col gap-10 items-center">
      <div className="text-white text-[2rem] font-semibold text-center">
        <h1 className="w-[690px] break-words">{title}</h1>
      </div>
      <div className="grid grid-cols-6 gap-5 max-w-[1200px]">
        {data.map((el) => (
          <div key={el.id} >
            <img src={el.logo} alt="#" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;