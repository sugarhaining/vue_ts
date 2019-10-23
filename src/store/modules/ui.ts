import * as types from '../action-type';

const initState: UI.State = {
    activeTabbarIndex: 1,
};

const getters = {
    [types.ACTIVE_TABBAR_INDEX](state: UI.State): number {
        return state.activeTabbarIndex;
    },
};

const mutations = {
    [types.ACTIVE_TABBAR_INDEX](state: UI.State, payload: UI.UpdateActiveTabbarIndexPayload) {
        state.activeTabbarIndex = payload.index;
    },
};

export default {
    state: initState,
    getters,
    mutations,
};
