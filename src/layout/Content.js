import frameBorder from '../assets/frame-border.png';
import LogoImage from '../assets/lo_trinh_image.png';
import Card from '../components/Card';
import Grid from '../components/Grid';
import Introduction from '../components/Introduction';
import ShowImage from '../components/ShowImage';
import Slides from '../components/Slider';
import certified from '../assets/certified.png'
import Btn from '../assets/btn.png'
import { dataAnswers, dataSlides, introductionData, LogoData } from '../data/mockData';
import RegisterForm from '../components/RegisterForm';
import Box from '../components/Box';
import avatarMember from "../assets/member_avatar.png"
import avatarMember2 from "../assets/menberAvata_2.png"


function Content() {
  const title = "FLYER LÀ GÌ? 3 GIÁ TRỊ FLYER MANG LẠI CHO CON?"
  const text = "Nền tảng học & ôn luyện chứng chỉ tiếng Anh đa tương tác, kết hợp giữa các yếu tố học thuật, công nghệ, đồ hoạ và trò chơi hoá (gamification), giúp học sinh tìm thấy cảm hứng rèn luyện để tiến bộ qua từng bài tập và chinh phục các chứng chỉ quốc tế."
  const gif = "https://w.ladicdn.com/629734dc474010008138d6f5/czhdmwvvv520240823054449.gif"
  const titleLogoComponent = "600,000++ HỌC SINH, THẦY CÔ VÀ TRƯỜNG QUỐC TẾ TIN DÙNG FLYER"
  const textContent = "EAF đánh giá chương trình học của FLYER đáp ứng tốt các tiêu chuẩn chất lượng quốc tế khắt khe theo 3 tiêu chí : Mục tiêu học tập, Phương pháp sư phạm & Tính tương tác của sản phẩm, với sự tham gia của những chuyên gia hàng đầu trong lĩnh vực giáo dục tại Phần Lan."


  const handleBtnClick = (id) => {
    console.log("show id", id);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-bg-rgb">
      <div className='max-w-[1200px] flex flex-col gap-20'>
        <Introduction
          title={title}
          textBtn={"Click me"}
          text={text}
          img={frameBorder}
          revert={true}
          gif={gif}
        />
        <Card />
        <Grid
          title={titleLogoComponent}
          data={LogoData} />
        <Slides data={dataSlides} />
        <ShowImage
          revert={true}
          img={certified}
          textContent={textContent}
          title="ĐẠT CHUẨN CHẤT LƯỢNG GIÁO DỤC QUỐC TẾ CỦA PHẦN LAN"
        />
        <ShowImage
          title={"LỘ TRÌNH CHUẨN ĐƯỢC NGHIÊN CỨU BỞI CAMBRIDGE & TOEFL"}
          img={LogoImage}
          textContent={"Lộ trình học tiêu chuẩn của FLYER được thiết kế dựa trên Khung tham chiếu Ngôn ngữ chung châu Âu (CEFR) và các giáo trình uy tín của Cambridge, TOEFL và Bộ Giáo dục Việt Nam."}
        />
        {introductionData.map((el) => (
          <Introduction
            key={el.id}
            backgroundImg={Btn}
            id={el.id}
            revert={el.revert}
            img={el.image}
            video={el.video}
            subTitle={el.title}
            text={el.content}
            btn={el.btn}
            textBtn={el.textBtn}
            gif={el.gif}
            handleClick={() => handleBtnClick(el.id)}
          />
        ))}
        <RegisterForm
          data={dataAnswers}
          title={"ĐĂNG KÝ NHẬN ƯU ĐÃI SIÊU TIẾT KIỆM TỪ FLYER"}
          hotline={"Cần hỗ trợ gấp, vui lòng liên hệ hotline Zalo 0965376466"} />
        <div className='text-center text-white font-bold text-[3rem]'>PHẢN HỒI CỦA PHỤ HUYNH, THẦY CÔ</div>
        <Box
          img={frameBorder}
          avatarMember={avatarMember}
          video={"https://www.youtube.com/embed/qsQqN9oeTpc"}
          nameMember={"CHỊ PHAN HỒ ĐIỆP"}
          decription={"Mẹ thần đồng Đỗ Nhật Nam"}
          content={"Đây quả thực là một bí quyết giúp các con lấy chứng chỉ Cambridge, TOEFL Primary dễ dàng."}
        />
        <Box
          img={frameBorder}
          avatarMember={avatarMember2}
          video={"https://www.youtube.com/embed/h03qjjn3gH4"}
          nameMember={"CHỊ HỒNG ĐINH"}
          decription={"Thạc sĩ giáo dục tại Mỹ"}
          content={"Học và ôn luyện không còn là việc nhàm chán, căng thẳng, thiếu động lực. Học sinh hứng thú học & luyện thi tiếng Anh hơn cả."}
        />
      </div>
    </div>
  );
}

export default Content;