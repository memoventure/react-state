import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useEffect, useState} from "react";
import {characters} from "./AllCharacters.ts";
import {Route, Routes} from 'react-router-dom';
import Welcome from "./components/Welcome.tsx";
import Header from "./components/Header.tsx";
import CharacterDetails from "./components/CharacterDetails.tsx";
import AddCharacter from "./components/AddCharacter.tsx";
import {Character} from "./types/RickAndMortyCharacter.ts";
import {allCharacters} from "./AllCharacters.ts";
import axios from "axios";

export default function App() {

    // define all changeable states
    const [characters, setCharacters] =  useState<Character[]>([]);

    useEffect(() => {
        loadCharacters();
    }, []);

    //define function which updates the character list
    const addCharacter = (characterToAdd: Character) => {
        axios.post("https://rickandmortyapi.com/api/character", characterToAdd)
        setCharacters([...characters, characterToAdd])
    }

    const loadCharacters = () => {
        console.log("Loading characters from API");

        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                setCharacters(response.data.results)
            })
            .catch((errorResponse) => {
                console.log("Get request failed")
            })
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
