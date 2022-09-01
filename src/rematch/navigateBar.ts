import { createModel } from '@rematch/core'
import type { RootModel } from './models'

export interface NavigateBarStateType {
	isShow: boolean;
	data: NavigateBarDataType
}

export interface NavigateBarDataType {
	contacts: ContactType[],
	header: string,
}

export interface ContactType {
	name: string,
	value: string,
	hoverImageSrc?: string,
	link?: string,
}

export const navigateBar = createModel<RootModel>()({
	state: {
		isShow: false,
		data: {
			contacts: [],
			header: '',
		},
	} as NavigateBarStateType,
	reducers: {
		setIsShow: (state, isShow: boolean) => ({ ...state, isShow }),
		setNavigateBarData: (state, data: NavigateBarDataType) => ({ ...state, data })
	},
	effects: (dispatch) => ({

	}),
})