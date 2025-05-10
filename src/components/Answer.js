function Answer({ data }) {
  return (
    <div className="bg-bg-form w-[504px] h-[400px] flex flex-col p-2 rounded-xl text-indigo-900">
      <div className="font-bold text-[20px]">
        Trọn bộ thi chứng chỉ tiếng anh
      </div>
      <div>
        {data.map((el) => (
          <div key={el.id}>
            <div className="font-bold text-[20px]">{el.title}</div>
            <div className="grid grid-cols-2 gap-2 text-[18px]">
              {el.list.map((el, index) => (<div key={index}>{el}</div>))}
            </div>
          </div>
        ))}
      </div>
    </div >);
}

export default Answer;