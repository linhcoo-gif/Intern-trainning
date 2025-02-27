import Answer from "./Answer";

function RegisterForm({ title, hotline, data }) {
  return (
    <div className="flex flex-col gap-3 items-center ">
      <div className="font-semibold text-[2rem] text-white">{title}</div>
      <p className="text-white text-[18px]">{hotline}</p>
      <div className="flex items-center gap-[8em]">
        <Answer data={data} />
        <div className="bg-white p-5 rounded-xl border border-gray">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col w-[522px] max-h-[478px] gap-5 p-[5px] overflow-y-auto">
            <div className="font-bold text-gray-500">Bạn là: *</div>
            <label htmlFor="parrent" className="flex gap-2 items-center">
              <input className="peer hidden" id="parrent" type="radio" name="choose" />
              <div className="peer-checked:outline outline-sky-500 p-2 flex gap-2 justify-center rounded-md text-gray-600">
                <span className="bg-gray-500 w-6 h-6 text-center rounded-md text-white font-bold">
                  A
                </span>
                <span >
                  Phu Huynh
                </span>
              </div>
            </label>
            <label htmlFor="childrent" className="flex gap-2 items-center">
              <input className="peer hidden" id="childrent" type="radio" name="choose" />
              <div className="peer-checked:outline outline-sky-500 p-2 flex gap-2 justify-center rounded-md text-gray-600">
                <span className="bg-gray-500 w-6 h-6 text-center rounded-md text-white font-bold">
                  B
                </span>
                <span >
                  Hoc Sinh
                </span>
              </div>
            </label>
            <label htmlFor="teacher" className="flex gap-2 items-center">
              <input className="peer hidden" id="teacher" type="radio" name="choose" />
              <div className="peer-checked:outline outline-sky-500 p-2 flex gap-2 justify-center rounded-md text-gray-600">
                <span className="bg-gray-500 w-6 h-6 text-center rounded-md text-white font-bold">
                  C
                </span>
                <span >
                  Giao Vien
                </span>
              </div>
            </label>
            <div className="font-bold text-gray-500 text-lg">Tên Của Bạn:*</div>
            <input className="h-[50px] rounded-xl border border-gray p-2 outline-sky-500 " type="text" placeholder="Your Name" />
            <div className="font-bold text-gray-500 text-lg">Số Điện Thoại Của Bạn:*</div>
            <input className="h-[50px] rounded-xl border border-gray p-2 outline-sky-500" type="text" placeholder="Your Phone Number" />
            <div className="font-bold text-gray-500 text-lg">Năm Sinh Của Bé:*</div>
            <input className="h-[50px] rounded-xl border border-gray p-2 outline-sky-500" type="text" placeholder="Your Birthday" />
            <div>
              <button className="bg-black text-white p-2 rounded-lg w-[150px] font-bold" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
}

export default RegisterForm;