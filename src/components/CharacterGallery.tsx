import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";
import {useState} from "react";
import axios from "axios";

type CharacterGalleryProps = {
    characters: Character[];
    nextPageFunction: () => void
    previousPageFunction: () => void
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {

    const cards = props.characters.map((character) => <CharacterCard key={character.id} character={character}/>);

    return (
        <div>
        <div className="character-gallery">
            {cards}
        </div>
            <button onClick={props.previousPageFunction}> Previous Page</button>
            <button onClick={props.nextPageFunction}> Next Page</button>
        </div>
    );
}
