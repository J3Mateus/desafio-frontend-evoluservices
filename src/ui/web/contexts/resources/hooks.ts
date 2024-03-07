import { useContextSelector } from "use-context-selector";
import { ResourcesCTX } from ".";

export function useFetchCharacter() {
	return useContextSelector(ResourcesCTX, (ctx) => ctx.fetch);
}
export function useGetCharacterByName() {
	return useContextSelector(ResourcesCTX, (ctx) => ctx.getCharacterByName);
}

export function useCharacter() {
	return useContextSelector(ResourcesCTX, (ctx) => ctx.character);
}