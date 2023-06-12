import BoardSection from "./BoardSection"

import '../stylesheet/Board.css' 

export default function Board():JSX.Element {

    return (
        <>
            <div className="Board">
                <BoardSection />
                <BoardSection /> 
                <BoardSection />  
            </div>
        </>
    )
}