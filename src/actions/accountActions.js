export const PUT_USER = 'PUT_USER';
export const PUT_PUZZLE = 'PUT_PUZZLE';
export const PUT_MAIN = 'PUT_MAIN';
const base_url = 'http://localhost:8080/api';


export const putMainAction = (mainProfile) => {
  return {
    type: PUT_MAIN,
    payload: mainProfile
  }
}

export const putPuzzleAction = (puzzleProfile) => {
  return {
    type: PUT_PUZZLE,
    payload: puzzleProfile
  }
}

export const putUserAction = (userProfile) => {
  return {
    type: PUT_USER,
    payload: userProfile
  }
}


export const getMainAction = (puzzleId, userName, items) => {
  console.log(puzzleId, userName, items);
  return (dispatch) => {
    const user = {
      "playerId": userName,
      "itemsFound": items
    };
    fetch(`${base_url}/puzzle/${puzzleId}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => ({
        id: data.id,
        name: data.name,
        // missingItems: data.missingItems.reduce((acc, item) => acc + "," + item)
        missingItems: data.missingItems.join(',') 
       
      }))
      .then(mainProfile => {
        dispatch(putMainAction(mainProfile));
        console.log(mainProfile);
      })
      
      .catch(err => console.log(err.message));
  }
}

export const getPuzzleAction = (length) => {
  console.log(length);
  return (dispatch) => {
    
    fetch(`${base_url}/puzzle?numOfItems=${length}`, {
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => ({
        id: data.id,
        numOfItems: data.numOfItems
      }))
      .then(puzzleProfile => {
        dispatch(putPuzzleAction(puzzleProfile));
        console.log(puzzleProfile);
      })
      .catch(err => console.log(err.message));
  }
}

export const getRegisterAction = (name, birth) => {
  console.log(name, birth);
  return (dispatch) => {
    const user = {
      "name": name,
      "birthDate": birth
    };
    fetch(`${base_url}/player`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify(user)
    })
      .then(response => response.json())
      .then(data => ({
        id: data.id,
        name: data.name,
        birthDate: data.birthDate
      }))
      .then(userProfile => {
        dispatch(putUserAction(userProfile));
        console.log(userProfile);
      })
      .catch(err => console.log(err.message));
  }
}








