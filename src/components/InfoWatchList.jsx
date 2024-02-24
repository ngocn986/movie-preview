import React, { useContext, useEffect } from 'react';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { LoginContext } from '../Context/LoginContext';
export default function InfoWatchList() {
  const accountId = localStorage.getItem('account_id');
  const { accountData, setAccountId } = useContext(LoginContext);

  useEffect(() => {
    if(accountId) {
      setAccountId(accountId)
    }
  }, [accountId]);

  return (
    <>
      <div className="relative text-white w-full h-[300px] bg-gradient-to-r from-blue-900 to-blue-500">
        <div className="absolute top-16 left-48 flex gap-10">
          <div>
            <Avatar size={150} icon={<UserOutlined />} />
          </div>
          <div className="font-Roboto text-4xl">
            <p>
              {accountData?.username}
              <span> ({accountData?.iso_3166_1})</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
