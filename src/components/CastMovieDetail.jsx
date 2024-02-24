export default function CastMovieDetail({ cast }) {
  return (
    <div className="w-[80rem] overflow-x-auto relative ">
      <div className="inline-flex gap-4">
        {cast?.slice(0, 10).map((cast) => (
          <div key={cast.id} className="w-[140px] h-[255px] my-4 shadow-xl">
            <div>
              <img
                srcSet={`https://media.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path} 1x, https://media.themoviedb.org/t/p/w276_and_h350_face${cast.profile_path} 2x`}
                alt="no picture"
                className="w-full h-[130px] rounded-full shadow-lg object-fill"
              />
              <p className="px-2 pt-3 font-Roboto">{cast.name}</p>
              <p className="px-2">{cast.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
