import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useState} from "react";
import {characters} from "./AllCharacters.ts";
import {Route, Routes} from 'react-router-dom';
import Welcome from "./components/Welcome.tsx";
import Header from "./components/Header.tsx";
import CharacterDetails from "./components/CharacterDetails.tsx";
import AddCharacter from "./components/AddCharacter.tsx";
import {Character} from "./types/RickAndMortyCharacter.ts";
import {allCharacters} from "./AllCharacters.ts";

export default function App() {

    // define all changeable states
    const [characters, setCharacters] =  useState<Character[]>(allCharacters);

    //define function which updates the character list
    const addCharacter = (characterToAdd: Character) => {
        setCharacters([...characters, characterToAdd])
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/home/welcome" element={<Welcome/>}/>
                <Route path="/characters" element={<CharacterGallery characters={characters}/>}/>
                <Route path="/characters/add" element={<AddCharacter addCharacter={addCharacter}/>} />
                <Route path="/characters/:id" element={<CharacterDetails characters={characters}/>}/>
            </Routes>
        </>
    );
}
