import React from "react";
import musicImg from "../img/music_note.png";
import { useState } from "react";
import search from "../img/search_icon.png";
import searchBar from "../img/Search bar.png";
import { events } from "../data";
// import { sports } from "../data1";

function TabLists() {
  const [searchval, setSearchVal] = useState("");

  const [searchresults, setSearchResults] = useState(events);

  const filterEvents = (e) => {
    setSearchVal(e.target.value);
    if (searchval === "") {
      console.log("empty");
      setSearchResults(events);
    }
    let filteredData = searchresults.filter((event) =>
      event.title.toLowerCase().includes(searchval.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  const clearSearchBar = () => {
    setSearchVal("");
    setSearchResults(events);
  };
  return (
    <div className="m-5 font-manrope">
      <p className="font-manrope mt-16 text-[24px] font-medium">
        Discover events near you
      </p>
      <div className=" mt-5 flex justify-between">
        <div className="flex bg-[#F5F5F5] rounded-2xl w-90">
          <img
            src={search}
            alt="search"
            className=" h-8 mt-4 mb-4 ml-4 pl-2 "
          />
          <input
            type="text"
            placeholder="Search all events"
            className="  rounded-2xl border-none text-[20px] font-medium bg-[#F5F5F5]"
            value={searchval}
            onChange={filterEvents}
          />
        </div>
        <div className=" mt- ">
          <img
            src={searchBar}
            alt="search"
            onClick={clearSearchBar}
            className=" mr-3"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-9">
        <div className=" w-[164px] h-[84px] bg-[#FBBF0A] rounded-2xl p-4">
          <img src={musicImg} alt="musicImg" className=" block" />
          <button>Music</button>
        </div>
        <div className=" w-[164px] h-[84px] bg-[#EEEEEE] rounded-2xl p-4">
          <img src={musicImg} alt="musicImg" className=" block" />
          <button> Tech</button>
        </div>
        <div className=" w-[164px] h-[84px] bg-[#B0E298] rounded-2xl p-4">
          <img src={musicImg} alt="musicImg" className=" block" />
          <button> Arts & Culture</button>
        </div>
        <div className=" w-[164px] h-[84px] bg-[#FFC971] rounded-2xl p-4">
          <img src={musicImg} alt="musicImg" className=" block" />
          <button>Business</button>
        </div>
      </div>

      <div className=" mt-12 text-[24px] h-[32px]">
        <h1 className=" font-extrabold">Upcoming Events</h1>
      </div>
      <div className=" mt-14">
        {searchresults.map((event) => {
          return (
            <div key={event.id} className=" flex gap-6 mx-auto my-8 w-85vw">
              <div className=" flex flex-col gap-4">
                <div className=" flex justify-between">
                  {" "}
                  <p>{event.date}</p>
                  <p className=" bg-gradient-to-b from-[#E5C6C6] via-[#FDBABA] to-[#E5C6C6] text-red-600 font-bold">
                    {event.cost}
                  </p>
                </div>
                <div className=" mb-1">
                  <p className=" font-extrabold mb-0 text-[25px] text-lg mr-3">
                    {event.title}
                  </p>
                  <p>{event.covener}</p>
                  <p>{event.location}</p>
                </div>
              </div>
              <div>
                <img
                  className="ml-4 mr-9"
                  src={require("../img/" + event.img + ".png")}
                  alt={event.title}
                />
              </div>
              </div>
              );
        })}
      </div>
      
      {/* <div className=" mt-12 text-[24px] h-[32px]">
        <h1 className=" font-extrabold">Sport Events</h1>
      </div>
      <div className=" mt-14">
        {searchresults.map((sports) => {
          return (
            <div key={sports.id} className=" flex gap-6 mx-auto my-8 w-85vw">
              <div className=" flex flex-col gap-4">
                <div className=" flex justify-between">
                  {" "}
                  <p>{sports.date}</p>
                  <p className=" bg-gradient-to-b from-[#E5C6C6] via-[#FDBABA] to-[#E5C6C6] text-red-600 font-bold">
                    {sports.cost}
                  </p>
                </div>
                <div className=" mb-1">
                  <p className=" font-extrabold mb-0 text-[25px] text-lg mr-3">
                    {sports.title}
                  </p>
                  <p>{sports.covener}</p>
                  <p>{sports.location}</p>
                </div>
              </div>
              <div>
                <img
                  className="ml-4 mr-9"
                  src={require("../img/" + sports.img + ".png")}
                  alt={sports.title}
                />
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}

export default TabLists;
