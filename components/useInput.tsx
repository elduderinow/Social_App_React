import {useState} from "react";



export function useInput(initialValue:any) {
    const [value, setValue] = useState(initialValue);
    return [
        {
            value,
            onChange:(e:any)=>setValue(e.target.value)
        },
        () => setValue(initialValue)
    ]
}