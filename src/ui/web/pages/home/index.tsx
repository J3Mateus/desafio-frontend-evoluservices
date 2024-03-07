/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */

import { useFetchCharacter, useCharacter, useGetCharacterByName } from "@web/contexts/resources/hooks";
import { useEffect } from "react";
import { Card, Row, Col, Button, Input } from 'antd';
import type { SearchProps } from 'antd/es/input/Search';
import './Home.css';
import { useCharacterModal } from "@web/components/CharacterModal/hooks";
import CharacterModal from "@web/components/CharacterModal";

const Home = () => {
    const { Meta } = Card;
    const { Search } = Input;
    const fetch = useFetchCharacter();
    const data = useCharacter();
    const characterModalRef = useCharacterModal();
    const featchByName = useGetCharacterByName()
    const onSearch: SearchProps['onSearch'] = (value, _e, info) => featchByName({"name":value});

    useEffect(() => {
        fetch();
    }, []);

    return (
        <div className="card-container">
            <div className="container-input">
                <Search
                placeholder="Buscar por nome.."
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                />
            </div>
            {data?.results && data.results.length > 0 && (

                    <Row gutter={16} style={{justifyContent:"center"}}>
                        {data.results.map((value, _) => (
                            <>
                                <Col span={1} key={value.id}>
                                    <CharacterModal ref={characterModalRef} detailsOnClick={value} />
                                    <Card
                                        style={{ width: 279, margin: 16 }}
                                        hoverable
                                        cover={<img alt={`image-for-${value.name}`} src={value.image} />}
                                        actions={[
                                            <Button onClick={()=>{characterModalRef.current.open(value)}} type="link">Detalhes</Button>
                                        ]}
                                    >
                                        <Meta title={value.name} description={value.species} />
                                    </Card>
                                </Col>
                            </>
                        ))}
                    </Row>
            )}
        </div>
    );
}

export default Home;
