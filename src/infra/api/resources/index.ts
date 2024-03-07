import ResourcesAdapter from "@interfaces/adapters/ResourcesAdapter";
import BaseAPI from "..";
import Pagination from "@models/pagination";
import { DTO } from "@typing/http";
import Character from "@models/Character";

class ResourcesAPI extends BaseAPI implements ResourcesAdapter {
	async fetchCharacter(): Promise<Pagination<Character>> {
		const response = await this.client.get<DTO>("/character");
		return Pagination.fromJSON<Character>(
			response.data,
			Character.fromJSON
		);
	}

	async getCharacterByName(queryParams?: Record<string, unknown>): Promise<Pagination<Character>>  { {
		const response = await this.client.get<DTO>(
			"character",
			{ params: {...queryParams } }
		);
		return Pagination.fromJSON<Character>(
			response.data,
			Character.fromJSON
		);
	}

}
}

export default ResourcesAPI;
