'use client'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'

interface State {
	isOpenCallbackModal: boolean
	isOpenCalcModal: boolean
	isOpenDesignerModal: boolean
	isOpenFinishQuestions: boolean
	isOpenFindCostModal: boolean
	isOpenFreeConsultationModal: boolean
	isOpenNewYearModal: boolean
	isOpenPromotionsQuiz: boolean
	callbackModalTitle: string
}

const initialState: State = {
	isOpenCallbackModal: false,
	isOpenCalcModal: false,
	isOpenDesignerModal: false,
	isOpenFinishQuestions: false,
	isOpenFindCostModal: false,
	isOpenFreeConsultationModal: false,
	isOpenNewYearModal: false,
	isOpenPromotionsQuiz: false,
	callbackModalTitle: '',
}

export const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		setOpenCallbackModal: {
			reducer: (
				state,
				action: PayloadAction<{ isOpen: boolean; title?: string }>
			) => {
				state.isOpenCallbackModal = action.payload.isOpen
				state.callbackModalTitle = action.payload.title || ''
			},
			prepare: (isOpen: boolean, title?: string) => ({
				payload: { isOpen, title },
			}),
		},
		setOpenCalcModal: (state, action: PayloadAction<boolean>) => {
			state.isOpenCalcModal = action.payload
		},
		setOpenDesignerModal: (state, action: PayloadAction<boolean>) => {
			state.isOpenDesignerModal = action.payload
		},

		setOpenFinishQuestions: (state, action: PayloadAction<boolean>) => {
			state.isOpenFinishQuestions = action.payload
		},

		setOpenFindCostModal: (state, action: PayloadAction<boolean>) => {
			state.isOpenFindCostModal = action.payload
		},

		setOpenFreeConsultationModal: (state, action: PayloadAction<boolean>) => {
			state.isOpenFreeConsultationModal = action.payload
		},

		setOpenNewYearModal: (state, action: PayloadAction<boolean>) => {
			state.isOpenNewYearModal = action.payload
		},

		setOpenPromotionsQuiz: (state, action: PayloadAction<boolean>) => {
			state.isOpenPromotionsQuiz = action.payload
		},
	},
})

export default mainSlice.reducer

export const {
	setOpenCallbackModal,
	setOpenCalcModal,
	setOpenDesignerModal,
	setOpenFinishQuestions,
	setOpenFindCostModal,
	setOpenFreeConsultationModal,
	setOpenNewYearModal,
	setOpenPromotionsQuiz,
} = mainSlice.actions

export const main = (state: RootState) => state.main
