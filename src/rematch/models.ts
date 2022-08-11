import { Models } from '@rematch/core'
import { dolphins } from './dolphins'
import { navigateBar } from './navigateBar'
import { AppState } from './AppState'
import questions from './questions'

export interface RootModel extends Models<RootModel> {
	dolphins: typeof dolphins
	navigateBar: typeof navigateBar
	AppState: typeof AppState
	questions: typeof questions
}

export const models: RootModel = { dolphins, navigateBar, questions, AppState }