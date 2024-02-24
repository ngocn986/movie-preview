import React, { useContext, useMemo, useRef, useState } from 'react';
import { MovieListContext } from '../Context/MovieListContext';
import debounce from 'lodash/debounce';
import { Select, Spin } from 'antd';
import MovieService from '../Services/MovieServices';
function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);
      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return;
        }
        setOptions(newOptions);
        setFetching(false);
      });
    };
    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  );
}

export default function SearchKeyword() {
  const service = new MovieService();
  const { valueKeywords, setValueKeywords } = useContext(MovieListContext);

  async function fetchUserList(inputValue) {
    return await service.searchKeywords(inputValue).then((data) =>
      data.results.map((keyword) => ({
        label: keyword.name,
        value: keyword.id,
      }))
    );
  }
  return (
    <>
      <DebounceSelect
        mode="multiple"
        value={valueKeywords}
        placeholder="Select users"
        fetchOptions={fetchUserList}
        onChange={(newValue) => {
          setValueKeywords(newValue);
        }}
        style={{
          width: '100%',
        }}
      />
    </>
  );
}
