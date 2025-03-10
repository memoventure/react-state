import "./CharacterCard.css";
import {ChangeEvent, useState} from "react";

type CommentProps = {
    comment: string
}

export default function Comment(props: Readonly<CommentProps>) {


    const [newComment, setNewComment] = useState<string>("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewComment(event.target.value)
    }

    return (
        <div>
            <form>
                <input name={"comment"} required={true} placeholder={"Leave a comment"} value={newComment} onChange={onChange}/>
            </form>
        </div>
    );
}
