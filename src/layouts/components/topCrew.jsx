import { useEffect, useState } from "react";
import { fetchCrew, fetchMovieImg } from "../../utils/api/axios";

export default function TopCrew() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    getCasts();
  }, []);
  async function getCasts() {
    try {
      const response = await fetchCrew();
      console.log(response.data.results);
      setPeople(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-normal">
        <h4>Top Cast</h4>
      </div>
      {
        <div className="flex flex-row justify-between h-[500px] gap-4 w-fit">
          {people?.slice(0, 5).map((person, index) => (
            <div
              key={index}
              className={`flex flex-col h-80 w-60 justify-between items-start relative ${
                index % 2 === 0 ? "mt-8" : ""
              }`}
            >
             <div className="z-10 flex flex-row items-center justify-start px-3">
             <p className="index z-10">{index + 1}</p>
              <h6 className="z-10">{person?.name}</h6>
             </div>
              <img
                className="w-48 h-64 object-cover object-center mb-[-50px] z-10 flex self-center"
                src={fetchMovieImg(person.profile_path)}
                alt={`Profile of ${person.name}`}
              />
              <div className="absolute w-full h-full flex flex-col">
                <img
                  className="w-full h-full object-cover object-center"
                  src={fetchMovieImg(person.profile_path)}
                />
                <div className="absolute w-full h-full backdrop-blur-lg bg-black/85 opacity-90">

                </div>
              </div>
            </div>
          ))}
        </div>
      }
    </div>
  );
}
