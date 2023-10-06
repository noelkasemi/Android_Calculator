export default function Button(props) {
    return <button onClick={props.onClick} className={`${props.style} bg-[#262729]  rounded-full  font-semibold hover:bg-[#424447] transition-transform hover:scale-110`}>{props.name}</button>
}