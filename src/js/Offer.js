import PropTypes from 'prop-types'
import {textReduction, getCurrencyCode, layerCodeClass} from './utilities'

function Offer({items}) {
  const {MainImage: {url_570xN: img_url}, url, title, currency_code, price, quantity} = {...items}

  return (
    <div className="item">
      <div className="item-image">
        <a href={url}>
          <img src={img_url} alt={title}/>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{textReduction(title, 50)}</p>
        <p className="item-price">{getCurrencyCode(currency_code) + String(price)}</p>
        <p className={layerCodeClass(quantity)}>{String(quantity) + " left"}</p>
      </div>
    </div>
  )
}

Offer.defaultProps = {
  url: "#",
  img_url: "#",
  title: "None",
  price: 0,
  quantity: "GBP"
}

Offer.propTypes = {
  url: PropTypes.string.isRequired,
  img_url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.string.isRequired
}

export default Offer
