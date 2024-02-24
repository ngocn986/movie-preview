import React, { useCallback, useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../Context/LoginContext';

export default function LoginBtnHeader() {
  const accountId = localStorage.getItem('account_id');
  const { setAccountId } = useContext(LoginContext)
  const [check, setCheck] = useState(false)
  const handleLogout = useCallback(() => {
    localStorage.removeItem('account_id');
    setAccountId('')
    setCheck(false)
  }, [setCheck]);

  useEffect(() => {
    if(accountId) {
      setAccountId(accountId)
      setCheck(true)
    }
  }, [accountId]);
  return (
    <>
      {!check ? (
        <NavLink to={'login'}>
          <button className=" border border-[#da3b1e] px-5 py-2 bg-[#da3b1e] hover:scale-105 text-white rounded-full font-Roboto">
            Login
          </button>
        </NavLink>
      ) : (
        <button
          onClick={handleLogout}
          className=" border border-[#da3b1e] px-5 py-2 bg-[#da3b1e] hover:scale-105 text-white rounded-full font-Roboto"
        >
          Log out
        </button>
      )}
    </>
  );
}
