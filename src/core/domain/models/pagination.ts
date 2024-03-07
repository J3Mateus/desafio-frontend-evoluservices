import { DTO } from "@typing/http";
import { Model } from "./model";
import Info from "./info"

class Pagination<T extends Model> {
    private _info: Info;
	private _results: T[];

	constructor() {
        this._info = new Info()
		this._results = [];
	}

	static fromJSON<T extends Model>(
		json: DTO,
		itemFactory: (json: DTO) => T
	): Pagination<T> {
		const obj = new Pagination<T>();
        obj._info = Info.fromJSON(json["info"] as DTO)
		obj._results = (json["results"] as DTO[]).map(itemFactory);
		return obj;
	}

	get info() {
		return this._info;
	}

	get results() {
		return this._results;
	}
}

export default Pagination;
