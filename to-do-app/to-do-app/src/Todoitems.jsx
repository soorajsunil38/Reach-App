import tickk from "./assets/tickk.png"
import nottick1 from "./assets/nottick1.png"
import delete_icon from "./assets/delete_icon.png"

const Todoitems = ({text, id, isComplete, deleteTodo, toggle}) => {
    return(
        <div className="flex items-center my-3 gap-2">
            <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
                <img src={isComplete ? tickk :  nottick1} alt="" className="w-9"/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500
                ${isComplete ? "line-through" : ""}`}>{text}</p>
            </div>
            <img onClick={() => {deleteTodo(id)}} src={delete_icon} alt="" className="w-6 cursor-pointer"/>
        </div>
    )
}

export default Todoitems