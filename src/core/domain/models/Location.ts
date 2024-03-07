import { DTO } from "@typing/http";
import { Model } from "./model";

class Location extends Model {
    private _name: string;
    private _url: string;

    constructor() {
        super();
        this._name = this._url = "";
    }

    static fromJSON(json: DTO): Location {
        const obj = new Location();
        obj._name = String(json["name"]);
        obj._url = String(json["url"]);
        return obj;
    }

    get name(): string {
        return this._name;
    }

    get url(): string {
        return this._url;
    }

    toJSON(): DTO {
        const json = {} as DTO;
        json["name"] = this._name;
        json["url"] = this._url;
        return json;
    }
}

export default Location;
