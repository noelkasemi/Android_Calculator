export default function Back(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" onClick={props.onClick} className={`w-12 h-12 p-2 hover:bg-[#424447] transition-transform hover:scale-110 cursor-pointer rounded-full mt-4 ml-2`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>

    )
}