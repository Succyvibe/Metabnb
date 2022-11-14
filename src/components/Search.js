const Search = () => {
  return (
    <div>
      <div className="flex md:w-[618.71px] bg-[rgba(247, 247, 247, 0.1)] border border-1 border-[#A3A3A3] rounded-xl pl-6 mt-10">
        <input
          type="text"
          placeholder="Search loaction"
          className="w-[60%] md:w-[390px] border-none outline-none "
        />
        <button className="w-[40%] md:w-[230px] h-[40px] md:h-[54px] connectBtn rounded-r-lg text-white baseline hover:bg-purple-400">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
