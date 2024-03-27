import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "@/lib/store";

export const selectOptions = createSelector(
    [(state: RootState) => state.options],
    (options) => options,
    {
      devModeChecks: {identityFunctionCheck: 'never'}
    }
)
