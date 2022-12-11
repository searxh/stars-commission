import React from "react";
import ProductSelect from "./ProductSelect";
import { calculatePrice, pageChangeCheck } from "../../lib/utilities";
import { GlobalContext } from "../../states";
import { PagesDot } from "../PagesDot";

const CustomizePage = () => {
    const { global_state, dispatch } = React.useContext(GlobalContext);
    const { formInfo, currentPage } = global_state;
    const [price, setPrice] = React.useState<{
        value: number;
        discountPercent: number;
    }>({ value: 0, discountPercent: 0 });
    const handleOnNavigate = (isForward: boolean) => {
        const check = pageChangeCheck(isForward, currentPage);
        dispatch({
            type: "set",
            field: "currentPage",
            payload: check ? check : currentPage,
        });
    };
    React.useEffect(() => {
        setPrice(calculatePrice(formInfo));
    }, [formInfo]);
    return (
        <div className="text-5xl text-black m-auto font-bold w-[80%]">
            <div className="py-2 drop-shadow-sm">Customize</div>
            {Object.keys(formInfo).map((formInfoKey: string) => {
                return (
                    <div className="text-3xl p-5 w-[70%] mx-auto border-black border-2 rounded-3xl my-5 shadow-md">
                        <ProductSelect currentProduct={formInfoKey} />
                    </div>
                );
            })}
            <div className="relative drop-shadow-sm">
                {price.discountPercent !== 0 && (
                    <div className="absolute -bottom-8 left-0 right-0 text-2xl px-5 py-1 rounded-full w-fit m-auto text-green-600">
                        Save {Math.round(price.discountPercent)}%!
                    </div>
                )}
                <div className="">${Math.round(price.value)}</div>
            </div>
            <button
                onClick={() => handleOnNavigate(false)}
                className="text-red-300 text-3xl mr-48"
            >
                Back
            </button>
            <button className="text-red-300 text-3xl">Submit</button>
            <div className="my-10">
                <PagesDot currentPage={currentPage} totalPages={3} />
            </div>
        </div>
    );
};

export default CustomizePage;
