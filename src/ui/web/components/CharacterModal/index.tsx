/* eslint-disable @typescript-eslint/no-unused-vars */
import Character from "@models/Character";
import { formatDate } from "@utils/date";
import { Modal, List  } from "antd";
import {
	ForwardedRef,
	forwardRef,
	useCallback,
	useImperativeHandle,
	useState,
} from "react";


export interface CharacterModalHandlers {
	open(character: Character): void
}

interface Props {
	detailsOnClick : Character
}

function CharacterModal(
	{ detailsOnClick }: Props,
	ref: ForwardedRef<CharacterModalHandlers>
) {
	const [character,setCharacter] = useState<Character>()
	const [isOpen, setIsOpen] = useState<boolean>();
	const open = useCallback((character: Character) => {
		setCharacter(character)
		setIsOpen(true);
	}, []);

	useImperativeHandle(ref, () => ({ open }));

	return (
		<Modal
			width={700}
			title={"Detalhes do personagem"}
			closable={true}
			footer={null}
			open={isOpen}
			onCancel={() => setIsOpen(false)}
		>
			<List itemLayout="horizontal">
				<List.Item>
					<List.Item.Meta
						title='Nome'
						description={character?.name}
					/>
				</List.Item>

				<List.Item>
					<List.Item.Meta
						title='Sexo'
						description={character?.gender}
					/>
				</List.Item>

				<List.Item>
					<List.Item.Meta
						title='Origem'
						description={character?.origin.name}
					/>
				</List.Item>

				<List.Item>
					<List.Item.Meta
						title='Episódios'
						description={character?.episode}
					/>
				</List.Item>

				<List.Item>
					<List.Item.Meta
						title='Status'
						description={character?.status}
					/>
				</List.Item>

				<List.Item>
					<List.Item.Meta
						title='Espécie'
						description={character?.species}
					/>
				</List.Item>

				<List.Item>
					<List.Item.Meta
						title='Tipo'
						description={character?.type}
					/>
				</List.Item>

				<List.Item>
					<List.Item.Meta
						title='Localização'
						description={character?.origin.name}
					/>
				</List.Item>

				<List.Item>
					<List.Item.Meta
						title='URL'
						description={character?.url}
					/>
				</List.Item>

				<List.Item>
					<List.Item.Meta
						title='Criado em'
						description={formatDate(character?.created)}
					/>
				</List.Item>
			</List>
		</Modal>
	);
}

export default forwardRef(CharacterModal);
