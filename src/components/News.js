import news from '../assets/news.jpg'
import newBottom from '../assets/bottom-news.png'
function News() {
  return (<div className="grid grid-cols-2 gap-10">
    <div className='flex flex-col gap-[69px]'>
      <a href='https://cafebiz.vn/thac-si-giao-duc-my-chia-se-bi-quyet-on-lay-bang-cambridge-tai-nha-cho-con-20220610170420917.chn' target='blank'>
        <div className="flex flex-col rounded-xl bg-news-bg w-[594px] justify-center gap-10">
          <img className='m-6 mt-10' src={news} alt="#" />
          <img className='rounded-xl' src={newBottom} alt='#' />
        </div>
      </a>
      <div className=' bg-news-bg rounded-xl p-8'>
        <a className='text-white  text-[16px]' href='https://ttvn.toquoc.vn/flyer-ra-tinh-nang-thach-dau-moi-thu-hut-gan-50000-hoc-sinh-tham-gia-trai-nghiem-20220930101324012.htm ' target='blank'>
          <span className='font-bold'>Báo Tổ Quốc</span>
          <br />
          <span className='text-sky-500 font-bold'>FLYER Thách đấu thu hút gần 50.000 học sinh tham gia trải nghiệm</span>
          <br />
          <p className=' mt-[20px]'>
            Thi đua, so tài, thách đấu,... luôn là hoạt động khiến trẻ sẽ hào hứng. Vậy nên, Flyer đã ra mắt tính năng "Thách đấu" - sân chơi tiếng Anh hấp dẫn, bổ ích cho học sinh tiểu học.
          </p>
          <span className='float-right underline text-sky-500'>Bấm để xem thêm</span>
        </a>
      </div>
    </div>
    <div className='flex flex-col gap-10 '>
      <div className=' bg-news-bg rounded-xl p-8'>
        <a className='text-white text-[16px]' href='https://vnexpress.net/phuong-phap-luyen-thi-tieng-anh-lay-bang-cambridge-cho-tre-tieu-hoc-4301730.html' target='blank'>
          <span className='font-bold '>Báo điện tử dân Trí</span>
          <br />
          <span className='font-bold text-sky-500 '>Phòng luyện thi ảo FLYER có gì đặc biệt?</span>
          <br />
          <p className='mt-[20px]'>
            (Dân trí) - "Nghỉ hè rồi, cho bé Bơ học ở nhà hay đi học thêm tiếng Anh để không bị quên kiến thức nhỉ?" - mẹ Bơ nhăn trán nghĩ, ngay khi vừa nhận được thông báo nghỉ hè của cô chủ nhiệm.
          </p>
          <span className='float-right underline text-sky-500'>Bấm để xem thêm</span>
        </a>
      </div>
      <div className=' bg-news-bg rounded-xl p-8'>
        <a className='text-white text-[16px]' href='https://dantri.com.vn/giao-duc/phong-luyen-thi-ao-flyer-co-gi-dac-biet-20210701070047669.htm' target='blank'>
          <span className='font-bold '>vnexpress.net</span>
          <br />
          <span className='font-bold text-sky-500 '>Phương pháp luyện thi tiếng Anh Cambridge cho trẻ tiểu học</span>
          <br />
          <p className='mt-[20px]'>
            Phòng luyện thi ảo Flyer với nhiều nội dung, thiết kế sinh động, bảng điểm đánh giá để học sinh tiểu học ôn tập lấy bằng Cambridge, TOEFL Primary.
          </p>
          <span className='float-right underline text-sky-500'>Bấm để xem thêm</span>
        </a>
      </div>
      <div className=' bg-news-bg rounded-xl p-8'>
        <a className='text-white text-[16px]' href='https://vtv.vn/goc-doanh-nghiep/giam-ap-luc-luyen-thi-cambridge-cung-phong-luyen-thi-ao-flyer-20210701091540162.htm' target='blank'>
          <span className='font-bold '>VTV Tin Tức</span>
          <br />
          <span className='font-bold text-sky-500 '>Giảm áp lực luyện thi Cambridge cùng phòng luyện thi ảo FLYER</span>
          <br />
          <p className='mt-[20px]'>
            Luyện thi chứng chỉ tiếng Anh quốc tế không áp lực mà vẫn hiệu quả để tự tin bước vào trường điểm? Hàng trăm giờ ôn luyện sẽ trở nên nhẹ nhàng hơn.
          </p>
          <span className='float-right underline text-sky-500'>Bấm để xem thêm</span>
        </a>
      </div>
    </div>
  </div>);
}

export default News;