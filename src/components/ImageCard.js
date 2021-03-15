const ImageCard = (props) => {
  // The card contains
  // a picture the link is passed as parameter(argument)
  // and imgNumber and can be used as id for picsum
  return (
    <div className="card">
      <img src={props.imgURL + ''} alt="Picsum Ig" />
      <div className="container">
        <h5>Image {props.imgNumber}</h5>
      </div>
    </div>
  );
}

export default ImageCard;