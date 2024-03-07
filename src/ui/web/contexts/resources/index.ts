import { createContext } from "use-context-selector";
import Character from "@models/Character"
import Pagination from "@models/pagination";

interface Props {
	fetch(): Promise<void>;
    character?: Pagination<Character>;
    getCharacterByName(queryParams?: Record<string, unknown>): Promise<void>;
}

export const ResourcesCTX = createContext({} as Props);
