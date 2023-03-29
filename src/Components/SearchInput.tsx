import React, { useRef, useState } from 'react';
import './styles.scss';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  type?: string;
  placeholder: string;
}

const SearchInput: React.FC<Props> = ({
  type,
  placeholder,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="search_input">
      <input
        ref={inputRef}
        type={type || 'text'}
        defaultValue=""
        required
        // onChange={(e) => }
        placeholder={placeholder}
        className="input__box"
      />

      <button
        type="submit"
        className="bg-primary flex items-center justify-center"
      >
        {/* <searchicon */}
        <SearchIcon sx={{ color: 'white' }} />
      </button>
    </div>
  );
};

export default SearchInput;
