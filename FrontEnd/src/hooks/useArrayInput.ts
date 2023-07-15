import React, {useState} from "react";

const useArrayInput = (initialValue: string[]): [string[], (e: React.ChangeEvent<HTMLInputElement>, index: number) => void, (newValue: string[]) => void] => {
    const [value, setValue] = useState(initialValue);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        let newArr = [...value]; // copying the old array
        newArr[index] = e.target.value;
        setValue(newArr);
    };
    return [value, onChange ,setValue];
}

export default useArrayInput
