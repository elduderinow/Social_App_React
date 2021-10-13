import {useState} from "react";


export function useInput(initialValue:any) {
    const [value, setValue] = useState(initialValue);
    return [
        {
            value
        },
        () => setValue(initialValue)
    ] as const //make it imutable bc an array has mutable = the value is unknown
}

