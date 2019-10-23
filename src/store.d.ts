declare namespace UI {
    export type activeTabbarIndexType = number;

    export interface State {
        activeTabbarIndex: activeTabbarIndexType;
    }
    export interface UpdateActiveTabbarIndexPayload {
        index: activeTabbarIndexType;
    } 
}
