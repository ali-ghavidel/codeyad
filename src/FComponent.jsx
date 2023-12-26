import { forwardRef , useState } from "react";


var counter = 0;

const FComponent = (props, ref) => {
    const [name, setName] = useState("");
    // const myInput = useRef();
    const handleChangeName = () => {
        setName(ref.current.value)
    }
    const handleHideName = () => {
        ref.current.value = "";
    }
    // useEffect(()=>{
    //     myInput.current.focus();
    // },[])
    return (
        <div className="form-fa-group text-center mt-4 p-3">
            <h4 className='text-center text-dark'>
                حدث کلمه
            </h4>
            <input ref={ref} type='text' className='form-control' autoComplete='off' />
            <button className='btn btn-warning my-3' onClick={handleChangeName}>
                ثبت
            </button>
            <button className='btn btn-secondary my-3' onClick={handleHideName}>
                مخفی
            </button>
            <br />
            <span>{counter++}</span>
        </div>
    );
}
export default forwardRef(FComponent);