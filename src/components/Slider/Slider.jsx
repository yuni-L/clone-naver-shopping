import React, { useEffect } from 'react';

import './Slider.scss'

const sliderBanner = [
  { mainTitle: '메인 테스트1', subTitle: '서브 테스트1', src: 'https://shop-phinf.pstatic.net/20220311_148/1646976642659Rc2K2_JPEG/09.%2BC3ABC2AAC2A8C3ABC2B0C294C3ACC29DC2BCC3ADC299C288_610.jpg' },
  { mainTitle: '메인 테스트2', subTitle: '서브 테스트2', src: 'https://shop-phinf.pstatic.net/20220228_150/1646025203337UBNMS_PNG/moC3ACC287C2BCC3ADC295C291C3ADC299C288C3ABC2B0C2B0C3AB.png' },
  { mainTitle: '메인 테스트3', subTitle: '서브 테스트3', src: 'https://shop-phinf.pstatic.net/20220225_223/1645776637662LqXAL_PNG/02.MOC3ADC299C288C3ABC2B0C2B0C3ABC284C288_610x610%2B28300kb29%2B.png' },
  { mainTitle: '메인 테스트4', subTitle: '서브 테스트4', src: 'https://shop-phinf.pstatic.net/20220311_4/1646983201034rcoSi_JPEG/5B610x6105DC3ABC2AAC2A8C3ABC2B0C294C3ACC29DC2BCC3ADC299.jpg' },
  { mainTitle: '메인 테스트5', subTitle: '서브 테스트5', src: 'https://shop-phinf.pstatic.net/20220314_263/1647219550446rbYGK_JPEG/08.22_0315_C3ACC29DC2B4C3ABC2A7C288C3ADC28AC2B8C3ABC2AAC2.jpg' },
  { mainTitle: '메인 테스트6', subTitle: '서브 테스트6', src: 'https://shop-phinf.pstatic.net/20220314_209/1647224383091s6Iox_JPEG/09.%2BC3ABC2AAC2A8C3ABC2B0C294C3ACC29DC2BCC3ADC299C288_610.jpg' },
]

const Slider = () => {

  /**
   * todo window 사이즈에 중심 맞추기
   */
  useEffect(() => {
    const sliderCardDiv = document.querySelector('.slider-cards');
    let count = 0;
    const intervalId = setInterval(() => {
      if (count > 5) {
        count = 0;
        sliderCardDiv.style.transform = `translate3d(-160px, 0px, 0px)`
      }
      count++;
      sliderCardDiv.style.transform = `translate3d(${-160 + (-320 * count)}px, 0px, 0px)`
    }, 1500);
    return (() => {
      clearInterval(intervalId);
    });
  }, []);

  const sliderCard = () => {
    const cardStyle = (src, index) => {
      return {
        left: 320 * index + 'px',
        backgroundImage: 'url(' + src + ')',
        backgroundSize: 'cover'
      }
    }
    return (
      <div className="slider-cards">
      {
        [...sliderBanner, ...sliderBanner].map((slider, index) => (
          <div key={index} className="card" style={cardStyle(slider.src, index)}>
            <div className="card-main">{slider.mainTitle}</div>
            <div className="card-sub">{slider.subTitle}</div>
          </div>
        ))
      }
      </div>
    )
  }

  return (
    <div className="slider">
      {sliderCard()}
    </div>
  )
}

export default Slider;