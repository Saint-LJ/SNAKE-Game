import WorldModel from "./WorldModel";

/**
 * @note
 * Display function is responsible
 * for showing the `WorldModel`
 */
interface IWorldView {
    display(worldModel: WorldModel): void;
}

export default IWorldView;
