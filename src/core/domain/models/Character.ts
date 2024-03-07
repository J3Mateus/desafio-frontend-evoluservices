import { DTO } from "@typing/http";
import { Model } from "./model";
import Origin from "./Origin";
import Location from "./Location"

class Character extends Model {
	private _id: number;
	private _name: string;
	private _status: string;
    private _species: string;
	private _type: string;
	private _gender: string;
	private _origin: Origin;
	private _location: Location;
	private _image: string;
    private _episode: string[];
	private _url: string;
	private _created: string;

	constructor() {
		super();
		this._id = 0;
		this._name = "";
		this._status = "";
        this._species = "";
		this._type = "";
		this._gender = "";
		this._origin = new Origin();
		this._location = new Location();
        this._image = "";
		this._episode = [];
		this._url = "";
        this._created = "";
	}

    static fromJSON(json: DTO): Character {
        const obj = new Character();
        obj._id = Number(json["id"]);
        obj._name = String(json["name"]);
        obj._status = String(json["status"]);
        obj._species = String(json["species"]);
        obj._type = String(json["type"]);
        obj._gender = String(json["gender"]);
        obj._origin = Origin.fromJSON(json["origin"] as DTO);
        obj._location = Location.fromJSON(json["location"] as DTO);
        obj._image = String(json["image"]);
        obj._episode = json["episode"] ? (json["episode"] as string[]).map(episode => String(episode)) : [];
        obj._url = String(json["url"]);
        obj._created = String(json["created"]);
        return obj;
    }

    toJSON(): DTO {
        const json = {} as DTO;
        if (this._id !== undefined) json["id"] = this._id;
        json["name"] = this._name;
        json["status"] = this._status;
        json["species"] = this._species;
        json["type"] = this._type;
        json["gender"] = this._gender;
        json["origin"] = this._origin.toJSON();
        json["location"] = this._location.toJSON();
        json["image"] = this._image;
        json["episode"] = this._episode;
        json["url"] = this._url;
        json["created"] = this._created;
        return json;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get status(): string {
        return this._status;
    }

    get species(): string {
        return this._species;
    }

    get type(): string {
        return this._type;
    }

    get gender(): string {
        return this._gender;
    }

    get origin(): Origin {
        return this._origin;
    }

    get location(): Location {
        return this._location;
    }

    get image(): string {
        return this._image;
    }

    get episode(): string[] {
        return this._episode;
    }

    get url(): string {
        return this._url;
    }

    get created(): string {
        return this._created;
    }
}

export default Character;
