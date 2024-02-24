import { Tooltip } from 'antd';

export default function Similar({ similarData }) {
  return (
    <div>
      <p className="font-Roboto text-2xl py-4">Similar</p>
      <div className="w-[80rem] overflow-x-auto relative ">
        <div className="inline-flex gap-4">
          {similarData?.map((data) => {
            return (
              <div
                key={data.id}
                className="carousel-item ml-5 text-center w-64 h-96 snap-start my-4 shadow-md transform transition-transform duration-500"
              >
                <div className="cursor-pointer h-full w-full aspect-square block bg-origin-padding rounded-xl overflow-hidden">
                  <img
                    src={
                      `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}` ||
                      ''
                    }
                    alt={data.title}
                    className="aspect-square h-3/4 w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent top-48">
                    <div className="absolute bottom-0 top-28 left-0 px-7 text-left font-Roboto">
                      <Tooltip title={data.title}>
                        <p className="text-lg text-[#da3b1e] overflow-hidden overflow-ellipsis line-clamp-1 break-words h-[30px]">
                          {data.title}
                        </p>
                      </Tooltip>
                      <p className="text-gray-700">{data.release_date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
