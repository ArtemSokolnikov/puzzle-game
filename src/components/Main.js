import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMainAction } from '../actions/accountActions';
import style from '../css_modules/main.module.css';
import mainPage from '../Images/Background.png';


const Main = () => {
    const missItems = useSelector(state => state.main.missingItems);
    const puzzleLength = useSelector(state => state.puzzle.numOfItems);
    console.log(missItems);
    console.log(puzzleLength);
    const [puzzleId, setPuzzleId] = useState("");
    const [userName, setUserName] = useState("");
    const [items, setItems] = useState("");
    const [state, setState] = useState("");
    const dispatch = useDispatch();

    const data = items.split(",").map(function (item) {
        return parseInt(item);
    });

    const array = items.split(",");

    const handleChangePuzzle = (e) => {
        setPuzzleId(e.target.value);
    }
    const handleChangeUser = (e) => {
        setUserName(e.target.value);
    }
    const handleChangeItems = (e) => {
        setItems(e.target.value);
    }

    const mainClick = () => {
        if (!userName || !items) {
            alert("Enter the data in all fields");
        } else if (data.length === 1 && items.length !== 1) {
            alert("Enter correct data in field items");
        }
        if (array.length <puzzleLength) {
            setState('error');
        } else {
            setState('good');
        }
        dispatch(getMainAction(puzzleId, userName, array));

    }

    switch (state) {
        case 'error':
            return (
                <div className={style.signUp}>
                    <img className={style.mainPicture} src={mainPage} alt="mainPage" />
                    <div className={style.signUpBlock}>
                        <div className={style.flexBlock1}>
                            <div>Main screen</div>
                        </div>
                        <div className={style.flexBlockCommon3Main}>
                            <div className={style.flexBlockCommon1Main}>
                                <div><input onChange={handleChangePuzzle} type="number" placeholder='Puzzle' className={style.inputEmail} value={puzzleId || ''} /></div>
                                <div><input onChange={handleChangeUser} type="text" placeholder='Player' className={style.inputEmail} value={userName || ''} /></div>
                                <div><input onChange={handleChangeItems} type="text" placeholder='Items' className={style.inputEmail} value={items || ''} /></div>
                                <button onClick={mainClick} className={style.btnSignUp}><div className={style.textSignUp}>Submit</div></button>
                                <div className={style.textMissingItems}>Missing elements:  </div>
                                <div className={style.missingElements}>
                                    <div id="missing" className={style.missingItems}>{missItems}</div>
                                    <div className={style.btnError}> <div className={style.textBtnError}>X</div> </div>
                                </div>
                            </div>
                            <div className={style.flexBlockCommon2}>
                            </div>
                        </div>
                    </div>
                </div>
            )

        case 'good':
            return (
                <div className={style.signUp}>
                    <img className={style.mainPicture} src={mainPage} alt="mainPage" />
                    <div className={style.signUpBlock}>
                        <div className={style.flexBlock1}>
                            <div>Main screen</div>
                        </div>
                        <div className={style.flexBlockCommon3Main}>
                            <div className={style.flexBlockCommon1Main}>
                                <div><input onChange={handleChangePuzzle} type="number" placeholder='Puzzle' className={style.inputEmail} value={puzzleId || ''} /></div>
                                <div><input onChange={handleChangeUser} type="text" placeholder='Player' className={style.inputEmail} value={userName || ''} /></div>
                                <div><input onChange={handleChangeItems} type="text" placeholder='Items' className={style.inputEmail} value={items || ''} /></div>
                                <button onClick={mainClick} className={style.btnSignUp}><div className={style.textSignUp}>Submit</div></button>
                                <div className={style.textMissingItems}>Missing elements:  </div>
                                <div className={style.missingElements}>
                                    <div className={style.missingItems}>{missItems}</div>
                                    <div className={style.btnOK}> <div className={style.textBtnOK}>OK</div> </div>
                                </div>

                            </div>
                            <div className={style.flexBlockCommon2}>
                            </div>
                        </div>
                    </div>
                </div>
            )

        default:
            return (
                <div className={style.signUp}>
                    <img className={style.mainPicture} src={mainPage} alt="mainPage" />
                    <div className={style.signUpBlock}>
                        <div className={style.flexBlock1}>
                            <div>Main screen</div>
                        </div>
                        <div className={style.flexBlockCommon3Main}>
                            <div className={style.flexBlockCommon1Main}>
                                <div><input onChange={handleChangePuzzle} type="number" placeholder='Puzzle' className={style.inputEmail} value={puzzleId || ''} /></div>
                                <div><input onChange={handleChangeUser} type="text" placeholder='Player' className={style.inputEmail} value={userName || ''} /></div>
                                <div><input onChange={handleChangeItems} type="text" placeholder='Items' className={style.inputEmail} value={items || ''} /></div>
                                <button onClick={mainClick} className={style.btnSignUp}><div className={style.textSignUp}>Submit</div></button>
                                <div className={style.textMissingItems}>Missing elements:  </div>
                                <div className={style.missingElements}>
                                    <div className={style.missingItems}>{missItems}</div>
                                </div>
                            </div>
                            <div className={style.flexBlockCommon2}>
                            </div>
                        </div>
                    </div>
                </div>
            )
    }
}

export default Main