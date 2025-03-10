import {Character} from "../types/RickAndMortyCharacter.ts";
import "./CharacterCard.css";
import {useNavigate, useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard.tsx";

type CharacterDetailsProps = {
    characters: Character[];
}

export default function CharacterDetails(props: Readonly<CharacterDetailsProps>) {

    const params = useParams();
    const id: string | undefined = params.id;
    if(id == undefined)
    {
        return <p>Not found</p>;
    }

    const character: Character | undefined = props.characters.find(element => element.id.toString() === id);

    if (character == undefined)
    {
        return <p>Not found</p>;
    }
    return (
        <div className="character-card" >
            <CharacterCard character={character} comment=""/>
        </div>
    );
}
