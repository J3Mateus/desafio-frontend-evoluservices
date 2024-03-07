/* eslint-disable react-hooks/exhaustive-deps */
import ResourcesUseCase from "@interfaces/usecases/ResourcesUseCase";
import { PropsWithChildren, useCallback, useState } from "react";
import { ResourcesCTX } from ".";
import Pagination from "@models/pagination";
import Character from "@models/Character";

interface Props {
	usecase: ResourcesUseCase;
}

function ResourcesProvider({ usecase, children }: PropsWithChildren<Props>) {
	const [character, setCharacter] = useState<Pagination<Character>>();
	const fetch = useCallback(async () => {
		return usecase
			.fetchCharacter()
			.then(setCharacter)
			.catch((err) => {
                console.error(err)
			});
	}, []);

    const getCharacterByName = useCallback(
		async (queryParams?: Record<string, unknown>) => {
			return usecase
				.getCharacterByName(queryParams)
				.then(setCharacter)
				.catch((err) => {
                    console.error(err)
				});
		},
		[]
	);

	return (
		<ResourcesCTX.Provider
			value={{
				fetch,
                character,
				getCharacterByName,
			}}
		>
			{children}
		</ResourcesCTX.Provider>
	);
}

export default ResourcesProvider;
