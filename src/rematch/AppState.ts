import { createModel } from '@rematch/core'
import type { RootModel } from './models'

export interface AppStateType {
  isInit: boolean;
  isMobile: boolean;
  scroll: number;
}

export const AppState = createModel<RootModel>()({
  state: {
    isInit: false,
    isMobile: false,
    scroll: 0,
  } as AppStateType,
  reducers: {
    appReady: (state: AppStateType) => ({ ...state, isInit: true }),
    setIsMobile: (state: AppStateType, isMobile: boolean) => ({ ...state, isMobile }),
    setScroll: (state: AppStateType, scroll: number) => ({ ...state, scroll })
  },
  effects: (dispatch) => ({

  }),
})