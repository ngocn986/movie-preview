import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { LoginContext } from '../Context/LoginContext';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { useNavigate } from 'react-router-dom';
const ACCOUNT_ID = '18123401';
export default function FieldLogin() {
  const [showPassword, setShowPassword] = useState(false);
  const [validateRender, setValidateRender] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUsername, setPassword, username, password, setAccountId } =
    useContext(LoginContext);
  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleDemoAccount = () => {
    setUsername('nguyenvanngoc11082000@gmail.com');
    setPassword('Ngocn986');
  };

  const valiDateField = (username, password) => {
    if (username === '' && password === '') {
      return (
        <p className="font-Roboto text-red-700 py-0.5">
          Require Username and Password!
        </p>
      );
    } else if (username && !password) {
      return (
        <p className="font-Roboto text-red-700 py-0.5">Require password!</p>
      );
    } else if (!username && password) {
      return (
        <p className="font-Roboto text-red-700 py-0.5">Require username!</p>
      );
    } else if (
      username !== 'nguyenvanngoc11082000@gmail.com' &&
      password !== 'Ngocn986'
    ) {
      return (
        <p className="font-Roboto text-red-700 py-0.5">
          Wrong username or password!
        </p>
      );
    } else {
      navigate('/');
    }
  };

  const handleLogin = (username, password) => {
    setLoading(true);
    setTimeout(() => {
      localStorage.setItem('account_id', ACCOUNT_ID);
      setLoading(false);
      setValidateRender(valiDateField(username, password));
    }, 2000);
  };
  return (
    <>
      <div className="xl:mt-12 sm:mt-10">
        <p className="font-Roboto text-3xl text-white">Welcome back,</p>
        <p className="text-gray-400 text-sm">Sign in to your account</p>
        <div className="pt-10">
          <TextField
            sx={{ width: '40ch' }}
            value={username}
            color="error"
            id="outlined-basic"
            fullWidth={true}
            size="small"
            label="Username"
            variant="outlined"
            onChange={handleUsername}
          />
        </div>
        <div className="pt-5">
          <FormControl sx={{ width: '40ch' }} size="small" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              value={password}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              onChange={handlePassword}
            />
          </FormControl>
        </div>
        {validateRender}
        <div className="flex justify-between">
          <p
            onClick={handleDemoAccount}
            className="font-Roboto text-gray-400 text-sm py-2 hover:underline cursor-pointer"
          >
            Demo account?
          </p>
          <p className="font-Roboto text-gray-400 text-sm py-2 hover:underline cursor-pointer">
            Forgot password?
          </p>
        </div>
        <button
          onClick={() => handleLogin(username, password)}
          className="w-[38ch] rounded-lg shadow-2xl hover:scale-105 bg-[#ef233c] p-3 font-Roboto text-white"
        >
          {loading ? (
            <Spin
              indicator={
                <LoadingOutlined
                  style={{
                    fontSize: 24,
                  }}
                  spin
                />
              }
            />
          ) : (
            <span>Sign in</span>
          )}
        </button>
        <div className="font-Roboto text-center pt-4 w-[38ch]">
          <p className="text-white">
            Don't have an account?{' '}
            <span className="text-[#ef233c] hover:underline cursor-pointer">
              Sign up
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
