import { Base } from "./Base.model";
import { Branch } from "./Branch.model";

export interface Customer extends Base {
    branches: Branch[];
}