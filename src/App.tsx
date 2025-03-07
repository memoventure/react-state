import './App.css'
import CharacterGallery from "./components/CharacterGallery.tsx";
import {useState} from "react";
import {characters} from "./Characters.ts";
import {Route, Routes} from 'react-router-dom';
import Welcome from "./components/Welcome.tsx";
import Header from "./components/Header.tsx";

export default function App() {
    const [searchText, setSearchText] = useState("");

    const filteredCharacters = characters
        .filter((character) => character.name.toLowerCase().includes(searchText.toLowerCase()));

    return (
        <>
            <Header/>
            <Routes>
                <Route path="/home/welcome" element={<Welcome/>}/>
                <Route path="/characters" element={<CharacterGallery characters={characters}/>}/>
            </Routes>
        </>
    );
}
