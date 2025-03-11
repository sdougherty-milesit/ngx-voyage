import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

type State = {
  showHiddenFiles: boolean;
  showOpenFile: boolean;
};

const initialState: State = {
  showHiddenFiles: false,
  showOpenFile: true,
};

export const Store = signalStore(
  { providedIn: "root" },
  withState(initialState),
  withMethods((store) => ({
    toggleHiddenFiles: () =>
      patchState(store, (state) => ({
        ...state,
        showHiddenFiles: !state.showHiddenFiles,
      })),

    setShowOpenFile: (showOpenFile: boolean) =>
      patchState(store, (state) => ({ ...state, showOpenFile })),
  }))
);
