import React from 'react'

const Card = props => {

  return (
    <div className="Card">
      <img src={`https://cdn.sandals.com/sandals/v12/images/media-gallery/${props.mediaURL}${props.imageName}.${props.extension}`} />
    </div>
  )
}

export default Card