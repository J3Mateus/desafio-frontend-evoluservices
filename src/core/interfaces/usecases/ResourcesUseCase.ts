import Character from "@models/Character";
import Pagination from "@models/pagination";

abstract class ResourcesUseCase {
	abstract fetchCharacter(): Promise<Pagination<Character>>;
	abstract getCharacterByName(queryParams?: Record<string, unknown>): Promise<Pagination<Character>>;
}

export default ResourcesUseCase;
