import React, {useState, useCallback} from 'react'
import {useDispatch} from 'react-redux'

import { TextInput, PrimaryButton } from '../components/UIkit'
import { signIn } from '../reducks/users/operations'
// import { getUsername } from '../reducks/users/selectors'

const SignIn = () => {
    const dispatch = useDispatch()

    const [username, setUsername] = useState(''),
          [email, setEmail] = useState(''),
          [password, setPassword] = useState(''),
          [confirmPassword, setConfirmPassword] = useState('')

    const inputEmail = useCallback((e) => {
        setEmail(e.target.value)
    }, [setEmail])

    const inputPassword = useCallback((e) => {
        setPassword(e.target.value)
    }, [setPassword])

    return (
        <div className='c-section-container'>
            <h2 className='u-text__headline u-text-center'>サインイン</h2>
            <div className='module-spacer--medium' />
            <TextInput 
                fullWidth={true}
                label={'メールアドレス'}
                mutiline={false}
                required={true}
                rows={1}
                value={email}
                type={'email'}
                onChange={inputEmail}
            />
            <TextInput 
                fullWidth={true}
                label={'パスワード'}
                mutiline={false}
                required={true}
                rows={1}
                value={password}
                type={'password'}
                onChange={inputPassword}
            />
            <div className='module-spacer--medium' />
            <div className='center'>
                <PrimaryButton 
                    label={'サインイン'}
                    onClick={() => dispatch(signIn(email, password))}
                />
            </div>
        </div>
    )
}

export default SignIn