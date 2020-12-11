import thingStore from "../stores/thingStore";
import ThingListWrapper from "../styles";
import ThingItem from "./ThingItem";
import { observer } from "mobx-react";

const ThingList = () => {
  const thingList = thingStore.things.map((thing) => (
    <ThingItem thing={thing} key={thing.name} />
  ));
  return <ThingListWrapper>{thingList}</ThingListWrapper>;
};

export default observer(ThingList);
