import "./style.css";

const CharCard = ({ characterList }) => {
  const characters = characterList.map((value) => (
    <div
      className="card"
      key={value.id}
      style={
        value.status === "Alive"
          ? { background: "#38ef7d" }
          : { background: "#EF3B36" }
      }
    >
      <h3 className="card__title">{value.name}</h3>
      <img src={value.image} alt="" className="card__image" />
    </div>
  ));

  return <div className="container" >{characters}</div>;
};

export default CharCard;
