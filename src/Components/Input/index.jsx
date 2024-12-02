

const Input = ({type, value, onChange, onBlur}) => {

    const handleChange = (e) => {      
        onChange(e.target.value)
    }

    return <input onBlur={onBlur} type={type} value={value} onChange={handleChange}/>
}

export default Input;