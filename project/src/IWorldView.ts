import WorldModel from "./WorldModel";

interface IWorldView {
    display(worldModel: WorldModel): void;
}

export default IWorldView;
