import { ComponentPropsWithoutRef } from "react";

type InputProps = {
    label: string,
    id: string
} & ComponentPropsWithoutRef<'input'>;

const Input = ({label, id, ...props}: InputProps) => {
    return (
        <div className="control">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
        </div>
    )

};

export default Input;