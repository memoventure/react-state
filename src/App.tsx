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

    const [currentPage, setPage] =  useState<number>(1);

    function nextPage() {
        if (currentPage >= 42) {
            setPage(42);
        }
        else {
            setPage(currentPage + 1);
        }

    }

    function previousPage() {
        if (currentPage <= 1) {
            setPage(1);
        }
        else {
            setPage(currentPage - 1);
        }

    }
    console.log("CUrrent Page " + currentPage.toString())

    useEffect(() => {
        loadCharacters();
    }, [currentPage]);

    //define function which updates the character list
    const addCharacter = (characterToAdd: Character) => {
        axios.post("https://rickandmortyapi.com/api/character", characterToAdd)
        setCharacters([...characters, characterToAdd])
    }

    const loadCharacters = () => {
        console.log("Loading characters from API");

        axios.get("https://rickandmortyapi.com/api/character" + "?page=" + currentPage.toString())
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
                <Route path="/characters" element={<CharacterGallery characters={characters} nextPageFunction={nextPage} previousPageFunction={previousPage}/>}/>
                <Route path="/characters/add" element={<AddCharacter addCharacter={addCharacter}/>} />
                <Route path="/characters/:id" element={<CharacterDetails characters={characters}/>}/>
            </Routes>
        </>
    );
}
