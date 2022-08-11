import { createModel } from '@rematch/core'
import type { RootModel } from './models'

export interface NavigateBarStateType {
	isShow: boolean;
	data: NavigateBarDataType
}

export interface NavigateBarDataType {
	contacts: ContactType[]
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
			contacts: [
				{ name: '电子邮箱', value: '534868976@qq.com' },
				{ name: '微信', value: 'MasterAlex233', hoverImageSrc: 'https://pics6.baidu.com/feed/4034970a304e251f9cd275c1f2127c1d7f3e5304.jpeg' },
				{ name: 'GitHub', value: 'ASombre', link: 'https://github.com/ASombra' },
			]
		},
	} as NavigateBarStateType,
	reducers: {
		setIsShow: (state, isShow: boolean) => ({ ...state, isShow }),
		setNavigateBarData: (state, data: NavigateBarDataType) => ({ ...state, data })
	},
	effects: (dispatch) => ({

	}),
})