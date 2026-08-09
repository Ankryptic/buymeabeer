import { createContext, useContext } from "react"

const RadioContext = createContext()

export const Radio = ({ children, ...props }) => {
    const { value, onChange } = useContext(RadioContext)

    return (
        <label className={`w-10 h-10 rounded-full flex items-center justify-center hover:border-[#181921] border-2
            ${value === props.value ? "bg-[#181921] border-[#181921]" :
                "bg-[#3b354f] border-gray-500"
            }
        `}>
            <input
            type="radio"
            className="hidden" 
            onChange={onChange} 
            checked={value === props.value}
            value={props.value}
            {...props}
            />
            {children}
        </label>
    )
}

export const RadioGroup = ({ value, onChange, children }) => {
    return <RadioContext.Provider value={{ value, onChange }}>
        {children}
    </RadioContext.Provider>
}