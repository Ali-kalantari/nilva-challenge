import { configureStore } from '@reduxjs/toolkit'

import BannersReducer from './banners/BannerSlice'

export default configureStore({
  reducer: {
    banners: BannersReducer,
  },
})
