import PropTypes from 'prop-types'
import Offer from './Offer'

function Listing({items}) {
  const offers=items.map(item => {
    if (item.state!=="removed") {
      return <Offer key={item.listing_id} items={item}/>
    }
  })

  return (
    <div className="item-list">
      {offers}
    </div>
  )
}

Listing.defaultProps = {
  items: []
}

Listing.propTypes = {
  items: PropTypes.array.isRequired
}

export default Listing
