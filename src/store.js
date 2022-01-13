import { configureStore } from "@reduxjs/toolkit"

import mainReducer from "./components/main/slice"

export default configureStore({
  reducer: {
    main: mainReducer,
  },
})