import '../App.css'
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <h3>Navigation</h3>
            <ul>
                <li><Link to="/Home/Welcome">Start</Link></li>
                <li><Link to="/characters">Characters</Link></li>
                <li><Link to="/characters/add">Add</Link></li>
            </ul>
        </nav>
    );
}
