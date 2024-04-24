import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

import search from "../../images/svg/search.svg";

const InputSearch = ({ height, width, bottom }) => {
  const { searchInput, setSearchInput } = useContext(GlobalContext);

  return (
    <div className="relative w-full z-0">
      <input
        className={`text-lg text-slate-200 font-regularc rounded-full ${height} ${width} pl-12 bg-primar border-1 border-border`}
        type="text"
        placeholder="Pesquisar"
        value={searchInput}
        onChange={(text) => setSearchInput(text.target.value)}
      />
      <div className={`absolute left-3 ${bottom} 2xl:left-4`}>
        <img src={search} alt="lupa de pesquisa" />
      </div>
    </div>
  );
};

export default InputSearch;
