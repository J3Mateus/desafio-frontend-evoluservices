import { DTO } from "@typing/http/DTO";
import { Model } from "./model";

class Info extends Model {
    private _count: number;
    private _pages: number;
    private _next: string | null;
    private _prev: string | null;

    constructor() {
        super();
        this._count = 0;
        this._pages = 0;
        this._next = null;
        this._prev = null;
    }

    static fromJSON(json: DTO): Info {
        const obj = new Info();
        obj._count= Number(json["count"]);
        obj._pages = Number(json["pages"]);
        obj._next = String(json["next"]);
        obj._prev = String(json["prev"]);
        return obj;
    }

    toJSON(): DTO {
        const json = {} as DTO;
        json["count"] = this._count;
        json["pages"] = this._pages;
        json["next"] = this._next;
        json["prev"] = this._prev;
        return json;
    }
}

export default Info