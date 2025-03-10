import {Character} from "../types/RickAndMortyCharacter.ts";
import "./CharacterCard.css";
import {useNavigate} from "react-router-dom";
import {ChangeEvent, useState} from "react";
import CharacterGallery from "./CharacterGallery.tsx";

type CharacterCardProps = {
    character: Character;
    comment: string
}

export default function CharacterCard(props: Readonly<CharacterCardProps>) {

    const navigate = useNavigate();

    const [newComment, setNewComment] = useState<string>("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value)
    }

    function myFunction()
    {
        navigate("/characters/" + props.character.id);
    }

    return (
        <div className="character-card" onClick={myFunction}>
            <img src={props.character.image} alt={props.character.name}/>
            <div className="character-card-info">
                <h3>{props.character.name}</h3>
                <p>Species: {props.character.species}</p>
                <p>Status: {props.character.status}</p>
            </div>
        </div>
    );
}
