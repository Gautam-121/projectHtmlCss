import "./formInput.css"

const FormInput = (props)=>{

    return(
        <div className="input">
/            <label htmlFor={props.id}>{props.name}</label>
            <input name={props.name} value={props.value} id={props.id}  placeholder={props.placeHolder} onChange={e=>{props.setPersonDetail(e.target.value)}}/>
        </div>
    )
}

export default FormInput