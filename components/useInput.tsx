import {useState} from "react";



// function return type [any, ()=>void]
// or
// return as const to make array readonly
export function useInput(initialValue:any): [any, ()=>void] {
    const [value, setValue] = useState(initialValue);
    return [
        {
            value,
            onChange:(e:any)=>setValue(e.target.value)
        },
        () => setValue(initialValue)
    ] // as const
}
