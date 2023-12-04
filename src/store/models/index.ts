import { Models } from '@rematch/core';
import { countStore } from './count';

export interface RootModel extends Models<RootModel> {
    countStore: typeof countStore;
}

export const models: RootModel = { countStore };
