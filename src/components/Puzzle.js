import React, { useContext, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPuzzleAction } from '../actions/accountActions';
import style from '../css_modules/main.module.css';
import mainPage from '../Images/Background.png';
import { UserContext } from '../utils/context';


const Puzzle = () => {
    const [length, setName] = useState();
    const dispatch = useDispatch();
    const { changeTheGame } = useContext(UserContext);

    const handleChangeLength = (e) => {
        setName(e.target.value);
    }

    const addPuzzle = () => {
        if (!length) {
            alert("Enter the data in field length ");
        }
        else if (length) {
            dispatch(getPuzzleAction(length));
            changeTheGame('enterTheGame');
        }
    }

    return (
        <div className={style.signUp}>
            <img className={style.mainPicture} src={mainPage} alt="mainPage" />
            <div className={style.signUpBlockPuzzle}>
                <div className={style.flexBlock1}>
                    <div>Puzzle</div>
                </div>
                <div className={style.flexBlockCommon1}>
                    {/* <div><input onChange={handleChangeId} type="text" placeholder='Id' className={style.inputEmail} value={id||""} /></div> */}
                    <div><input onChange={handleChangeLength} type="number" placeholder='Length' className={style.inputEmail} value={length || ""} /></div>
                    <button onClick={addPuzzle} className={style.btnSignUp}><div className={style.textSignUp}>Submit</div></button>
                </div>
                <div className={style.flexBlockCommon2}>
                </div>
            </div>
        </div>
    )
}

export default Puzzle