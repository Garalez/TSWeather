import { createAsyncThunk } from "@reduxjs/toolkit";
import { IWeather } from "./weatherSlice";

export const weatherRequestAsync = createAsyncThunk<IWeather, string>(
  'weather/fetch',
  async (city) => {
    const response: Response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c4d8288b726fbb7d12ec4505fa265ac9&lang=ru&units=metric`
    );
    if (response.ok && response.status >= 200 && response.status < 300) {
      return response.json();
    } else {
      throw new Error(response.statusText);
    }
  }
)