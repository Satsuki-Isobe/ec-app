import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../reducks/users/operations";

const Login = () => {
    const selector = useSelector(state => state)
    const dispatch = useDispatch()
    console.log(selector.users)

    return(
            <div>
                <h2>ログイン</h2>
                <button onClick={() => {dispatch(signIn())}}>
                        ログインする
                </button>
            </div>
    )
}
export default Login