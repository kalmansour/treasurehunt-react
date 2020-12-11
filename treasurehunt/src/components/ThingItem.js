import ThingItemStyled from "../styles";

const ThingItem = ({ thing }) => {
  return (
    <ThingItemStyled>
      <h2>{thing.name}</h2>
    </ThingItemStyled>
  );
};

export default ThingItem;
