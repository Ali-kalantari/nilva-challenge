import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  banners: [],
  status: null,
};

export const fetchPosts = createAsyncThunk("banners/fetchPosts", async () => {
  // return await fetch("https://picsum.photos/v2/list?page=2&limit=100").then(
  //   (res) => res.json()
  // );
  const req = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
  const data = await req.json();
  const a =data;
  const newdata =  a.map((item) => {
    return {...item ,click : 0};
  });
    return newdata
});

const BannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {
    bannerUpdated(state, action) {
      const { id } = action.payload
      const existingPost = state.banners.find((item) => item.id === id)
      if (existingPost) {
        existingPost.click++
      }
    },
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchPosts.fulfilled]: (state, action) => {
      // Add any fetched posts to the array
      state.status = "succeeded";
      state.banners = state.banners.concat(action.payload);
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});
export const { bannerUpdated } = BannerSlice.actions

export const selectAllPosts = (state) => state.banners.banners;

export default BannerSlice.reducer;
