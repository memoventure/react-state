import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "../types/RickAndMortyCharacter.ts";
import {useNavigate} from "react-router-dom";

type AddCharacterProps = {
    addCharacter: (characterToAdd: Character) => void
}

export default function AddCharacter(props: AddCharacterProps) {

    const navigate = useNavigate();

    const [newCharacter, setNewCharacter] = useState<Character>({id: "", name:"", species:""})

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewCharacter({...newCharacter, [event.target.name]: event.target.value})
    }
    const onSaveClick = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        props.addCharacter(newCharacter)
        console.log("Ich navigiere zu /characters/:id")
        navigate("/characters/" + newCharacter.id) // woher weiß er hier welche ID????
        //navigate("/characters");
    }
    return ( // muss der name hier = dem attribute im json array sein?? JA
        <form onSubmit={onSaveClick}>
            <input name={"id"} required={true} placeholder={"ID"} value={newCharacter?.id} onChange={onChange}/>
            <input name={"name"} required={true} placeholder={"Name"} value={newCharacter?.name} onChange={onChange}/>
            <input name={"species"} required={true} placeholder={"Species"} value={newCharacter?.species} onChange={onChange}/>
            <button type={"submit"}> Save character</button>
        </form>
    )
} //