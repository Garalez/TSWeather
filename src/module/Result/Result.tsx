import { useAppSelector } from '../../hooks';
import style from './Result.module.scss'

export const Result = () => {
  const {weather, isLoading, error} = useAppSelector((state) => state.weather);
  return (
    <div className={style.result}>
      {isLoading ? (
        <p>Загрузка...</p>
      ) : weather.name ? (
        <>
        <p>{weather.main.temp}&#8451;</p>
        <p>{weather.name}</p>
        </>
      ) : error === 'Not Found' ? (
        <p>Город не найден</p>
      ) : (
        <p>Введите город</p>
      )}
    </div>
  )
};
