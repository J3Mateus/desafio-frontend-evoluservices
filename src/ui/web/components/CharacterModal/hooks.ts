import { useRef } from "react";
import { CharacterModalHandlers } from ".";

export function useCharacterModal() {
	return useRef({} as CharacterModalHandlers);
}
