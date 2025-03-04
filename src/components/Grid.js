function Grid({ data }) {
  return (
    <div >
      <div className="grid grid-cols-6 gap-5">
        {data.map((el) => (
          <div key={el.id} className="w-[180px] h-[180px] flex justify-center bg-white rounded-xl p-4" >
            <img src={el.logo} alt="#" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Grid;