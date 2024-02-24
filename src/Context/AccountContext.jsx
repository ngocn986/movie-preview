import { useState } from 'react';
import { createContext, useEffect } from 'react';
import MovieService from '../Services/MovieServices';
export const AccountContext = createContext({});

export const AccountProvider = ({ children }) => {
  const service = new MovieService()
    const accountId = localStorage.getItem('account_id')
  const [watchListData, setWatchListData] = useState([])
    useEffect(() => {
      service.listWatchList(accountId).then(data => {
        setWatchListData(data.results)
      })
    }, [accountId])

    const contextValue ={
      watchListData:watchListData
    }
  return <AccountContext.Provider value={contextValue}>{children}</AccountContext.Provider>;
};
