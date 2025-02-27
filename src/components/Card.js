import { cardData } from '../data/mockData';

function Card() {

  return (
    <div className="flex justify-center">
      <div className="flex gap-7">
        {cardData.map((item) => (
          <div key={item.id} className="bg-card-bg border-[5px] flex flex-col items-center gap-5 px-5 py-3 rounded-lg border-purple-700">
            <div className="flex items-center text-white">
              <div className="font-bold text-[3rem] text-center ">{item.headLine}</div>
              <div className="font-bold text-lg w-[160px] p-2">{item.title}</div>
            </div>
            <div className="rounded-lg p-5 bg-white w-[20rem] h-[15rem]">
              {item.textList.map((value, index) => (
                <div key={index}>{value}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;