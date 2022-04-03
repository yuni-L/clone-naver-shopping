import react from 'react'
import "./RecentGoods.scss";

const recentShowGoods = [];  // 최근 본 상품 없음.

const RecentGoods = () => {

  /**
   * 최근 본 상품 없을 때.
   */
  const emptyGoods = () => {
    return (
      <span className="recent-goods-none">
        최근 본 상품이 없습니다!
      </span>
    )
  }

  /**
   * 최근 본 상품 있을 때,
   */
  const fullGoods = () => {
    return (
      <div>상품 있을 때, 유닛 예시</div>
    )
  }

  return (
    <div className="recent">
      <div className="recent-title">
        <span>FAVORITE</span>
        최근 본 상품
      </div>
      <div className="recent-goods">
        { recentShowGoods.length ? fullGoods() : emptyGoods() }
      </div>
    </div>
  )
}

export default RecentGoods;