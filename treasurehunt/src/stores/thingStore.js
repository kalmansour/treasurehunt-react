import { makeAutoObservable } from "mobx";
import instance from "./instance";

class ThingStore {
  things = [];
  treasures = [];
  constructor() {
    makeAutoObservable(this);
  }

  fetchRandom = async () => {
    try {
      const response = await instance.get("/things/random");
      this.things = response.data;
    } catch (error) {
      console.log("ThingStore -> fetchThings", error);
    }
  };

  fetchTreasure = async () => {
    try {
      const response = await instance.get("/things/treasure");
      this.treasures = response.data;
    } catch (error) {
      console.log("ThingStore -> fetchTreasure", error);
    }
  };
}

const thingStore = new ThingStore();
thingStore.fetchRandom();
thingStore.fetchTreasure();

export default thingStore;
