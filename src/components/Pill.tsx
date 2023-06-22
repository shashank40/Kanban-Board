import '../stylesheet/pill.css'

type PillProps = {
    text: String
}

function Pill({text}: PillProps): JSX.Element{
    return (<>

    <div className="pill">
        <text>{text?text.substring(0,Math.min(12,text.length)):"important"}</text>
    </div>
    
    </>)
}

export default Pill