import React from "react";
import { portfolio } from "../../lib/portfolio";
import { ListItemTypes, ProjectArrItemTypes } from "../../types";

interface StandardCardPropsType {
    listItem: ListItemTypes;
    callback: Function;
}

const ItemWindow = ({ listItem, callback }: StandardCardPropsType) => {
    const { arr, desc, name, src, isProject } = listItem;
    const getSrc = (content: number) => {
        const dir = "/images/portfolio/";
        const type = ".webp";
        const id =
            portfolio[2].length -
            portfolio[2].findIndex((projItem: any) => projItem.name === name);
        return dir + "c" + id + "_" + content + type;
    };
    return (
        <div
            onClick={() => (!arr ? callback() : null)}
            className={`fixed flex flex-col w-screen h-screen top-0 bottom-0 left-0 right-0 
            bg-opacity-60 bg-neutral-100 select-none backdrop-blur-xl ${
                src?.length !== 0
                    ? "scale-100 opacity-100 z-50"
                    : "scale-0 -z-10 opacity-0"
            } transform-gpu duration-300 rounded-xl`}
        >
            <button
                onClick={() => {
                    callback();
                }}
                className="absolute text-xl m-2 top-0 right-0 w-12 h-12 z-50 hover:scale-110 transform-gpu duration-500"
            >
                X
            </button>
            <div
                className={`${
                    isProject ? "overflow-y-scroll" : "overflow-hidden"
                } flex flex-col relative m-auto h-full w-full `}
            >
                {name ? (
                    <div className="w-full text-2xl lg:text-3xl p-2 px-12 font-bold m-auto drop-shadow-sm">
                        {name}
                    </div>
                ) : (
                    <div className="m-auto" />
                )}
                {!arr ? (
                    <img
                        className="m-auto object-contain rounded-xl
                        max-w-[90%] max-h-[75%] drop-shadow-lg"
                        src={src}
                        draggable={false}
                        alt=""
                    />
                ) : null}
                {desc ? (
                    <div className="w-full text-sm lg:text-lg p-6 m-auto">
                        {desc}
                    </div>
                ) : (
                    <div className="m-auto" />
                )}
                {arr?.map((arrItem: ProjectArrItemTypes, index: number) => {
                    const { content, className } = arrItem;
                    if (typeof content === "number") {
                        return (
                            <img
                                key={index}
                                className={`${className} max-w-[90%] max-h-[75%] object-contain rounded-xl drop-shadow-lg m-auto my-5`}
                                src={getSrc(content)}
                                draggable={false}
                                alt=""
                            />
                        );
                    } else if (content.includes("https://")) {
                        return (
                            <a
                                key={index}
                                href={content}
                                className={`${className} text-blue-500 text-lg px-12 py-3 break-words`}
                            >
                                {content}
                            </a>
                        );
                    } else {
                        return (
                            <div
                                key={index}
                                className={`${className} text-left text-lg px-12 py-3`}
                            >
                                {content}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default ItemWindow;
