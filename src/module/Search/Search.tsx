import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { weatherRequestAsync } from '../../store/weatherAction';
import style from './Search.module.scss';
import { ReactComponent as SearchIcon } from './search.svg';

type Props = {};

export const Search = (props: Props) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');

  const handlerSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(weatherRequestAsync(search));
  };

  const handleChange = (e: React.ChangeEvent<EventTarget>) => {
    if (e.target instanceof HTMLInputElement) {
      setSearch(e.target.value);
    }
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input type='search'
      className={style.search}
      onChange={handleChange} 
      value={search} 
      />
      <button className={style.btn} type='submit'>
        <SearchIcon />
      </button>
    </form>
  );
};
