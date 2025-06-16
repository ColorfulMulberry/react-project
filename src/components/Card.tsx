interface CardProps {
  title: string;
  image: string;
  text: string;
}

function Card({ title, image, text }: CardProps) {
  return (
    <>
      <div className="card w-25 ms-5">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
