import { Dispatch } from "react";

export interface OrderObj {
    id: string;
    created_at: string;
    updated_at: string;
    orderInfo: Array<OrderType>;
    status: string;
    comment: string;
}
export interface StatusObjType extends StringToAnyType {
    pending: Array<OrderObj>;
    active: Array<OrderObj>;
    declined: Array<OrderObj>;
}
export interface OrderType {
    modelLimit: string;
    number: string;
    orderType: string;
    additional: string;
    resolution: string;
}
export interface StringToAnyType {
    [key: string]: any;
}
export interface ProductSelectType extends StringToAnyType {
    resolution: string;
    modelLimit: string;
    number: string;
}
export interface FormInfoType {
    [key: string]: ProductSelectType;
}
export interface PriceInfoType {
    [key: string]: { [key: string]: any };
}
interface GlobalStateKeys {
    [key: string]: any;
}
export interface GlobalStateType extends GlobalStateKeys {
    formInfo: FormInfoType;
    projInfo: Array<string>;
    currentPage: number;
    notifier: boolean;
    userInfo: any;
}

export interface ActionType {
    type: string;
    field?: string | Array<string>;
    payload: any;
}

export interface GlobalContextType {
    global_state: GlobalStateType;
    dispatch: Dispatch<ActionType>;
}
