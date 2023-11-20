import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../redux";


const EditUserName = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    //Redux
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch()

    //L'object de l'utilisateur 
    const objectUser = user[0]

    const backToProfile = () => {
        const headerProfile = document.querySelector('#header-profile')
        headerProfile.style.display = "block"

        const headerEditUserNameProfile = document.querySelector('#editUserName')
        headerEditUserNameProfile.style.display = "none"
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payloadUser = `${firstName}/${lastName}`

        //Modification du prénom et du nom de l'utilisateur
        dispatch(editUser(payloadUser))

        backToProfile()
    }

    return (

        user && (<div id="editUserName" style={{display: "none"}}>
            <h1>Welcome back</h1>
            <form id="formEdit"> 
                <div id="formEdit__champ">
                    <input type="text" placeholder={objectUser.firstname} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder={objectUser.lastname} value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div id="formEdit__button">
                    <button className="" type='button' onClick={handleSubmit} >Save</button>
                    <button className="" type='button' onClick={backToProfile}>Cancel</button>
                </div>
            </form>
        </div>)
    )
}

export default EditUserName 