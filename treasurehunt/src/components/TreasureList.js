import thingStore from "../stores/thingStore";
import ThingListWrapper from "../styles";
import ThingItem from "./ThingItem";
import { observer } from "mobx-react";

const TreasureList = () => {
  const treasureList = thingStore.treasures.map((treasure) => (
    <ThingItem thing={treasure} key={treasure.id} />
  ));
  return <ThingListWrapper>{treasureList}</ThingListWrapper>;
};

export default observer(TreasureList);
