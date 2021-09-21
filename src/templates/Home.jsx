import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { push } from 'connected-react-router'
// import { useHistory } from 'react-router-dom'

import {getUserId, getUsername} from '../reducks/users/selectors'

const Home = () => {
    // const history = useHistory()
    // const handleLink = path => history.push(path)
    const selector = useSelector(state => state)
    const uid = getUserId(selector)
    const username = getUsername(selector)
    const dispatch = useDispatch()

    return(
        <div>
            <h2>ホーム</h2>
            <p>{uid}</p>
            <p>{username}</p>
            {/* <button onClick={() => handleLink('/login')}>ログイン画面へ</button> */}
            <button onClick={() => dispatch(push('/login'))}>ログイン画面へ</button>
        </div>
    )
}
export default Home