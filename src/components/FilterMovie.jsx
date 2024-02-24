import React, { useContext, useState } from 'react';
import { Collapse, Tag, Radio, Space } from 'antd';
import SearchKeyword from './SearchKeyword';
import { MovieListContext } from '../Context/MovieListContext';
const { CheckableTag } = Tag;
export default function FilterMovie() {
  const { setValueRadio, valueRadio, genresData, setSelectedTags, selectedTags } =
    useContext(MovieListContext);

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
      setSelectedTags(nextSelectedTags);
    };

  const onChange = (e) => {
    setValueRadio(e.target.value);
  };
  const items = [
    {
      key: '1',
      label: 'Filter',
      children: (
        <div className="">
          <div className="border-b pb-4">
            <p className="text-xl font-Roboto py-1">Show me</p>
            <Radio.Group onChange={onChange} value={valueRadio}>
              <Space direction="vertical">
                <Radio
                  value="now_playing"
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  Now Playing
                </Radio>
                <Radio
                  value="popular"
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  Popular Movie
                </Radio>
                <Radio
                  value="upcoming"
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  Upcoming
                </Radio>
                <Radio
                  value="top_rated"
                  className="text-lg md:text-xl lg:text-2xl"
                >
                  Top Rated
                </Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="border-b pb-4">
            <p className="text-xl font-Roboto py-2">Genres</p>
            <Space size={[0, 8]} wrap>
              {genresData.map((genre) => (
                <CheckableTag
                  key={genre.id}
                  checked={selectedTags.includes(genre.id)}
                  onChange={(checked) => handleChange(genre.id, checked)}
                >
                  {genre.name}
                </CheckableTag>
              ))}
            </Space>
          </div>
          <div className="py-2">
            <p className="text-xl font-Roboto py-2">Keyword</p>
            <SearchKeyword></SearchKeyword>
          </div>
        </div>
      ),
    },
  ];

  return (
    <>
      <Collapse
        style={{ width: '400px' }}
        items={items}
        defaultActiveKey={['1']}
      />
    </>
  );
}
