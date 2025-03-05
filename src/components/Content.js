import { useTranslation } from 'react-i18next';
import Btn from '../assets/btn.png';
import certified from '../assets/certified.png';
import frameBorder from '../assets/frame-border.png';
import LogoImage from '../assets/lo_trinh_image.png';
import avatarMember from "../assets/member_avatar.png";
import avatarMember2 from "../assets/menberAvata_2.png";
import Box from '../components/Box';
import Card from '../components/Card';
import CardMember from '../components/CardMember';
import Introduction from '../components/Introduction';
import RegisterForm from '../components/RegisterForm';
import { Screen } from '../components/Screen';
import ShowImage from '../components/ShowImage';
import Slides from '../components/Slider';
import { cardData, dataAnswers, dataScreen, dataSlides, introductionData } from '../data/mockData';
import News from './News';

function Content(props) {
  const gif = "https://w.ladicdn.com/629734dc474010008138d6f5/czhdmwvvv520240823054449.gif"

  const { t } = useTranslation();

  const handleBtnClick = (id) => {
    console.log("show id", id);
  }

  return (
    <div className="flex flex-col justify-center items-center bg-bg-rgb">
      <div className='max-w-[1200px] flex flex-col gap-[50px] mt-10 mb-10'>
        <div ref={props.refProp}>
          <Introduction
            title={t("CONTENT.INTRUDUCE_TITLE")}
            textBtn={"Click me"}
            content={t("CONTENT.INTRUDUCE_CONTENT")}
            img={frameBorder}
            revert={true}
            gif={gif}
          />
        </div>
        <Card data={cardData} />
        <div className='flex flex-col gap-10'>
          <div className='text-center text-white text-[40px] font-bold '>
            {t("CONTENT.SLIDES_TITLE")}
          </div>
          <Slides data={dataSlides} />
        </div>
        <ShowImage
          revert={true}
          img={certified}
          title={t("CONTENT.SHOWIMAGE_TITLE")}
          textContent={t("CONTENT.SHOWIMAGE_TEXT")}
        />
        <ShowImage
          title={t("CONTENT.SHOWIMAGE_TITLE_STATISTICAL")}
          img={LogoImage}
          textContent={t("CONTENT.SHOWIMAGE_TEXT_STATISTICAL")}
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
          title={t("CONTENT.REGISTER_FORM_TITLE")}
          hotline={t("CONTENT.REGISTER_FORM_HOTLINE")} />
        <div className='text-center text-white font-bold text-[3rem]'>{t("CONTENT.BOX_TITLE")}</div>
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