const Search = () => {
  return (
    <div>
      <div className="flex w-[618.71px] bg-[rgba(247, 247, 247, 0.1)] border border-1 border-[#A3A3A3] rounded-[8px 0px 0px 8px]">
        <input
          type="text"
          placeholder="Search loaction"
          className="w-[390px] border-none outline-none "
        />
        <button className="w-[230px] h-[54px] bg-gradient-to-r from-pink-500 to-pink-500 rounded-[10px] baseline hover:bg-purple-400">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
