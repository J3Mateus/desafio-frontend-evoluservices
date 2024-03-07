import ResourcesAdapter from "@interfaces/adapters/ResourcesAdapter";
import ResourcesUseCase from "@interfaces/usecases/ResourcesUseCase";
import Character from "@models/Character";
import Pagination from "@models/pagination";

class ResourcesService implements ResourcesUseCase {
	constructor(protected readonly adapter: ResourcesAdapter) {}
	async fetchCharacter(): Promise<Pagination<Character>> {
		return await this.adapter.fetchCharacter();
	}

	async getCharacterByName(queryParams?: Record<string, unknown>): Promise<Pagination<Character>>  {
		return this.adapter.getCharacterByName(queryParams);
	}
}

export default ResourcesService;
