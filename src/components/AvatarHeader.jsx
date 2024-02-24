import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../Context/LoginContext';
export default function AvatarHeader() {
  const { accountId } = useContext(LoginContext);
  return <>{accountId ? <Avatar>N</Avatar> : null}</>;
}
