import { combineReducers } from '@reduxjs/toolkit';
import createAsyncSlice from '../helper/createAsyncSlice';

const photos = createAsyncSlice({
  name: 'photos',
  initialState: {
    list: [],
    page: 1,
  },
  reducers: {
    addPhotos(state, action) {
      state.list.push(...action.payload);
      state.page++;
    },
  },
  fetchConfig: (page = 1) => ({
    url: `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=3&_user=0`,
    options: {
      method: 'GET',
      cache: 'no-store',
    },
  }),
});
const { addPhotos } = photos.actions;

export const fetchPhotos = photos.asyncAction;

export const getPhotos =
  (page = 1) =>
  async (dispatch, getState) => {
    try {
      const { payload } = await dispatch(fetchPhotos(page));
      dispatch(addPhotos(payload));
    } catch (error) {}
  };

const reducer = combineReducers({
  photos: photos.reducer,
});

export default reducer;
