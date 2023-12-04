import { createModel } from '@rematch/core';
import { cloneDeep } from 'lodash';

import type { RootModel } from '.';

const status = {
    count: 0,
    info: '',
};

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const countStore = createModel<RootModel>()({
    // initial state
    state: cloneDeep(status),
    // handle state changes with pure functions
    reducers: {
        setCount(state, pl: number) {
            return {
                ...state,
                count: pl,
            };
        },
        setInfo(state, pl: string) {
            return {
                ...state,
                info: pl,
            };
        },
    },
    effects(dispatch) {
        return {
            async setNewObj() {
                const randInt = getRandomInt(1, 1000);
                const res = await Promise.resolve({
                    count: randInt,
                    info: `随机数为: ${randInt}`,
                });

                dispatch.countStore.setCount(res.count);
                dispatch.countStore.setInfo(res.info);
            },
        };
    },
});
