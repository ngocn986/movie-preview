import React from 'react';
import { LoginProvider } from '../Context/LoginContext';
import AvatarHeader from './AvatarHeader';
import LoginBtnHeader from './LoginBtnHeader';
export default function ProfileHeader() {
  return (
    <div className="flex-grow-[1] flex items-center gap-5">
      <LoginProvider>
        <LoginBtnHeader></LoginBtnHeader>
        <AvatarHeader></AvatarHeader>
      </LoginProvider>
    </div>
  );
}
