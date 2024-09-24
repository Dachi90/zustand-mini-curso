import { StateCreator } from 'zustand';

export interface PersonSlice {
	firstName: string;
	lastName: string;

	setFirstNanme: (firstName: string) => void;
	setLastNanme: (lastName: string) => void;
}

export const createPersonSlice: StateCreator<PersonSlice> = (set) => ({
	firstName: '',
	lastName: '',

	setFirstNanme: (firstName: string) => set({ firstName }),
	setLastNanme: (lastName: string) => set({ lastName }),
});
