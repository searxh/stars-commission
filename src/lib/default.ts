import { GlobalStateType, PriceInfoType } from "../types";

export const selectChoices: any = {
    resolution: [
        {
            title: "HD",
            text: "Full HD Resolution",
        },
        {
            title: "4k",
            text: "Ultra HD Resolution",
        },
        {
            title: "5k",
            text: "Ultra HD Resolution",
        },
    ],
    modelLimit: [
        {
            title: "Limited",
            text: "3 Models Limit",
        },
        {
            title: "Unlimited",
            text: "No Model Limit",
        },
    ],
    number: ["1", "2", "3"],
};

export const productChoices = [
    {
        title: "Thumbnail",
        color: "bg-purple-500",
        textColor: "text-purple-500",
    },
    {
        title: "Icon",
        color: "bg-blue-500",
        textColor: "text-blue-500",
    },
    {
        title: "Ad Banner",
        color: "bg-amber-500",
        textColor: "text-amber-500",
    },
    {
        title: "Ad Skyscraper",
        color: "bg-red-500",
        textColor: "text-red-500",
    },
];

export const initialProductInfo = {
    resolution: selectChoices.resolution[0].title,
    modelLimit: selectChoices.modelLimit[0].title,
    number: selectChoices.number[0],
};

export const initialFormInfo = {};
export const initialState: GlobalStateType = {
    formInfo: initialFormInfo,
    projInfo: [],
    userInfo: {},
    currentPage: 0,
};

export const priceInfo: PriceInfoType = {
    Thumbnail: {
        resolution: [69, 75, 79],
        modelLimit: [10, 15],
    },
    Icon: {
        resolution: [49, 55, 59],
        modelLimit: [10, 15],
    },
    "Ad Banner": {
        resolution: [49, 55, 59],
        modelLimit: [10, 15],
    },
    "Ad Skyscraper": {
        resolution: [49, 55, 59],
        modelLimit: [10, 15],
    },
    discount: {
        startAt: 2,
        multiplyValue: 0.955,
    },
};
