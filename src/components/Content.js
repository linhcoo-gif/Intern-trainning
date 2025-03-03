import Btn from '../assets/btn.png';
import certified from '../assets/certified.png';
import frameBorder from '../assets/frame-border.png';
import LogoImage from '../assets/lo_trinh_image.png';
import avatarMember from "../assets/member_avatar.png";
import avatarMember2 from "../assets/menberAvata_2.png";
import Box from '../components/Box';
import Card from '../components/Card';
import CardMember from '../components/CardMember';
import Grid from '../components/Grid';
import Introduction from '../components/Introduction';
import RegisterForm from '../components/RegisterForm';
import ShowImage from '../components/ShowImage';
import Slides from '../components/Slider';
import { Screen } from '../components/Screen';
import { dataAnswers, dataScreen, dataSlides, introductionData, LogoData } from '../data/mockData';
import News from './News';
import { useTranslation } from "react-i18next";

function Content() {
  const gif = "https://w.ladicdn.com/629734dc474010008138d6f5/czhdmwvvv520240823054449.gif"
  const titleLogoComponent = "600,000++ HỌC SINH, THẦY CÔ VÀ TRƯỜNG QUỐC TẾ TIN DÙNG FLYER"
  const textContent = "EAF đánh giá chương trình học của FLYER đáp ứng tốt các tiêu chuẩn chất lượng quốc tế khắt khe theo 3 tiêu chí : Mục tiêu học tập, Phương pháp sư phạm & Tính tương tác của sản phẩm, với sự tham gia của những chuyên gia hàng đầu trong lĩnh vực giáo dục tại Phần Lan."
  // const content = "Mathscrit is an interactive platform designed to enhance Maths learning by combining academic principles, technology, graphics, and gamification. It inspires students to progress through engaging challenges and exercises, ultimately helping them master mathematical skills at their own pace."

  const { t } = useTranslation();

  const handleBtnClick = (id) => {
    console.log("show id", id);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-bg-rgb">
      <div className='max-w-[1200px] flex flex-col gap-[50px] mt-10 mb-10'>
        <Introduction
          title={t("CONTENT.INTRUDUCE_TITLE")}
          textBtn={"Click me"}
          content={t("CONTENT.INTRUDUCE_CONTENT")}
          img={frameBorder}
          revert={true}
          gif={gif}
        />
        <Card />
        <Grid
          title={titleLogoComponent}
          data={LogoData} />
        <div className='flex flex-col gap-10'>
          <div className='text-center text-white text-[40px] font-bold '>
            Mathscrit Hall of Legends
          </div>
          <Slides data={dataSlides} />
        </div>
        <ShowImage
          revert={true}
          img={certified}
          textContent={textContent}
          title="ĐẠT CHUẨN CHẤT LƯỢNG GIÁO DỤC QUỐC TẾ CỦA PHẦN LAN"
        />
        <ShowImage
          title={"A Research-Backed Learning Pathway"}
          img={LogoImage}
          textContent={"The structured learning journey in Mathscrit is designed based on international mathematics frameworks and trusted educational curricula. It aligns with global math standards, ensuring students receive a high-quality and effective learning experience."}
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
            content={el.content}
            list={el.list}
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
        <CardMember />
        <div className='flex gap-5'>
          {dataScreen.map((item) => (
            <Screen
              key={item.id}
              img={frameBorder}
              video={item.video}
              title={item.title}
            />
          ))}
        </div>
        <News />
      </div>
    </div>
  );
}

export default Content;