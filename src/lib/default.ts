import { GlobalStateType, PriceInfoType, StringToAnyType } from "../types";

export const all_routes: StringToAnyType = {
    "": "Contacts",
    portfolio: "Portfolio",
    commissions: "Commissions",
    orders: "Your Orders",
    about: "About",
};

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
    additional: [
        {
            title: "None",
            text: "No additional files",
        },
        {
            title: "Extra files",
            text: "Photoshop and Blender files",
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

export const initialStatusObj = { pending: [], active: [], declined: [] };

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
    notifier: false,
    currentPage: 0,
    orders: 0,
};

export const priceInfo: PriceInfoType = {
    Thumbnail: {
        resolution: [69, 75, 79],
        modelLimit: [10, 15],
        additional: [0, 30],
    },
    Icon: {
        resolution: [49, 55, 59],
        modelLimit: [10, 15],
        additional: [0, 30],
    },
    "Ad Banner": {
        resolution: [49, 55, 59],
        modelLimit: [10, 15],
        additional: [0, 30],
    },
    "Ad Skyscraper": {
        resolution: [49, 55, 59],
        modelLimit: [10, 15],
        additional: [0, 30],
    },
    discount: {
        startAt: 2,
        multiplyValue: 0.955,
    },
};

export const cancelOrderMessage = {
    title: "Confirmation",
    content:
        "Are you sure you wish to cancel the order? It will be lost forever.",
};

export const signUpMessage = {
    title: "Sign in with Discord",
    content:
        "Signing in through Discord is required to help prevent impersonation. Your Discord token can only be used to confirm your identity – I can only see your username, your 4 digits, and profile picture.",
};

export const authLink = process.env.REACT_APP_AUTH as string;

export const statusArr = ["active", "pending", "declined"];

export const adminRate = 10000;

export const userRate = 30000;
