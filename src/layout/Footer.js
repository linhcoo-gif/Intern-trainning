import bgFooter from '../assets/bg_footer.png'
import logo from '../assets/Logo.png'
import aws from '../assets/aws.png'
import google from '../assets/google.png'
import education_alliance_finland from '../assets/education_alliance_finland.png'
import appStore from '../assets/appstore.png'
import googlePlay from '../assets/googleplay.png'
function Footer() {
  return (
    <div className='flex justify-center items-center' style={{ backgroundImage: `url('${bgFooter}')`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <div className='w-[1200px] flex flex-col'>
        <div className='w-[100px]'>
          <img src={logo} alt='flyer_logo' />
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div className='text-white'>
            <div>
              <h3 className='font-bold text-lg'>ÔNG TY CỔ PHẦN CÔNG NGHỆ FLYER</h3>
              <p>Mã số thuế: 0109322012 Cấp ngày 26/08/2020 tại Sở KH&DT TP. Hà Nội</p>
              <p>ĐỊA CHỈ: Số 9 Duy Tân, Dịch Vọng Hậu, Cầu Giấy, Hà Nội</p>
              <p>HCM: Số 14 Đường Hưng Gia 3, Phú Mỹ Hưng, Phường Tân Phong, Quận 7</p>
              <p>Hotline 1: 0965376466</p>
              <p>Hotline 2: 0965476066</p>
              <p>Email: admin@flyer.us</p>
            </div>
            <div className='flex gap-5 w-[130px]'>
              <img className='object-contain' src={education_alliance_finland} alt="#" />
              <img className='object-contain' src={aws} alt="#" />
              <img className='object-contain' src={google} alt="#" />
            </div>
          </div>

          <div className='flex flex-col gap-5'>
            <div className='grid grid-cols-3  text-white'>
              <div className='flex flex-col'>
                <h3 className='font-bold text-lg'>VỀ CHÚNG TÔI</h3>
                <a href='https://flyer.vn/doi-ngu-xay-dung-flyer/'>Giới thiệu</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Nhà đầu tư</a>
                <a href='https://flyer.vn/hop-tac-voi-flyer/doi-tac/?utm_source=ldpflyervn&utm_medium=footer'>Đối tác</a>
              </div>
              <div className='flex flex-col'>
                <h3 className='font-bold text-lg'>SẢN PHẨM</h3>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Dùng thử miễn phí</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Hướng dẫn sử dụng</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Các tính năng học</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>FLYER cho B2B</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Cộng đồng phụ huỳnh</a>
              </div>
              <div className='flex flex-col'>
                <h3 className='font-bold text-lg'>ĐIỀU KHOẢN</h3>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Dùng thử miễn phí</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Hướng dẫn sử dụng</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Các tính năng học</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>FLYER cho B2B</a>
              </div>
            </div>
            <div className='grid grid-cols-2 text-white'>
              <div className='flex flex-col'>
                <h3 className='font-bold text-lg'>TÀI LIỆU GIÁO VIÊN</h3>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Tài liệu giảng dạy</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Webinas</a>
                <a href='https://flyer.vn/flyer-duoc-quy-evergreen-dau-tu/?utm_source=ldpflyervn&utm_medium=footer'>Cộng đồng phụ huynh</a>
              </div>
              <div className='flex flex-col gap-10 items-center'>
                <h3 className='font-bold text-lg'>Tải app FLYER tại đây</h3>
                <div className='flex gap-3'>
                  <div>
                    <a href='https://play.google.com/store/apps/details?id=com.flyer.exam' target='blank'>
                      <img src={googlePlay} alt='googlePlay' />
                    </a>
                  </div>
                  <div>
                    <a href='https://apps.apple.com/us/app/flyer-virtual-english-tests/id1671502218' target='blank'>
                      <img src={appStore} alt='appStore' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div >);
}

export default Footer;