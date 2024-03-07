import Character from "@models/Character";
import Pagination from "@models/pagination";

abstract class ResourcesAdapter {
	abstract fetchCharacter(): Promise<Pagination<Character>>;
	abstract getCharacterByName(queryParams?: Record<string, unknown>): Promise<Pagination<Character>>;
}

export default ResourcesAdapter;
