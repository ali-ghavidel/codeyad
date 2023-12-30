import { useContext, useState } from "react";
import { UsersContext } from "../context/MainContext";


const NewUserQuick = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const usersCuntext = useContext(UsersContext);

    const handleSetName = (event) => {
        setName(event.target.value);
    }
    const handleSetUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleSetEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleSubmitForm = (event) => {
        event.preventDefault();
        if(name.length > 0 && username.length > 0 && email.length > 0){
            usersCuntext.setUsers([...usersCuntext.users, {
                id: usersCuntext.users.length + 1,
                name: name,
                username: username,
                email: email
            }]);
            setName("");
            setUsername("");
            setEmail("");
        }else{
            alert("pleas enter value")
        }
        
        
    }

    return(
                    <tr>
                        <td>{usersCuntext.users.length + 1}</td>
                        <td><input type="text" value={name} onChange={handleSetName} /></td>
                        <td><input type="text" value={username} onChange={handleSetUsername} /></td>
                        <td><input type="text" value={email} onChange={handleSetEmail} /></td>
                        <td>
                            <button className="btn btn-success" onClick={handleSubmitForm}>
                                <i className="fas fa-save text-light"></i>
                            </button>
                        </td>
                    </tr> 
            
    )
}

export default NewUserQuick;