import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getRegisterAction } from '../actions/accountActions';
import style from '../css_modules/main.module.css';
import mainPage from '../Images/Background.png';

const Player = ({ changeTheUser }) => {

    // const [id, setId] = useState();
    const [name, setName] = useState();
    const [birthDate, setBirthDate] = useState();
    const dispatch = useDispatch();

    // const handleChangeId = (e) => {
    //     setId(e.target.value);
    // }
    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeBirthDate = (e) => {
        setBirthDate(e.target.value);
    }

    const signUpClick = () => {
        if (!name || !birthDate) {
            alert("Enter the data in all field");
        } else if (name || birthDate) {
            dispatch(getRegisterAction(name, birthDate));
            changeTheUser('enterTheUser');
        }
    }

    return (
        <div className={style.signUp}>
            <img className={style.mainPicture} src={mainPage} alt="mainPage" />
        <div className={style.signUpBlockPuzzle}>
                <div className={style.flexBlock1}>
                    <div>Player</div>
                </div>
                  <div className={style.flexBlockCommon1}>
                        {/* <div><input onChange={handleChangeId} type="number" placeholder='Id' className={style.inputEmail} value={id||""} /></div> */}
                        <div><input onChange={handleChangeName} type="text" placeholder='Name' className={style.inputEmail} value={name || ""} /></div>
                        <div><input onChange={handleChangeBirthDate} type="date" placeholder='Birth' className={style.inputEmail} value={birthDate || ""} /></div>
                        <button onClick={signUpClick} className={style.btnSignUp}><div className={style.textSignUp}>Submit</div></button>
                    </div>
              
            </div>
        </div>
    )
}

export default Player