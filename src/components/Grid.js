function Grid({ topRow, bottomRow }) {
  return (
    <div className="p-5 flex flex-col justify-center gap-5 w-[1200px]">
      {/* Hàng trên */}
      <div className="grid grid-cols-5 pl-[5em]">
        {topRow.map((item) => (
          <div key={item.id} className="w-[150px] h-[150px] bg-black flex justify-center items-center rounded-lg p-3">
            <img src={item.logo} alt={`Logo ${item.id}`} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>
      {/* Hàng dưới */}
      <div className="grid grid-cols-7 gap-10 pl-[10em] pr-[10em]">
        {bottomRow.map((item) => (
          <div key={item.id} className="w-[100px] h-[100px] bg-black flex justify-center items-center rounded-lg p-3">
            <img src={item.logo} alt={`Logo ${item.id}`} className="max-w-full max-h-full object-contain" />
          </div>
        ))}
      </div>



    </div>
  );
}

export default Grid;