import Card from './Card';

import { BsGripHorizontal } from 'react-icons/bs';
import '../stylesheet/board-section.css'

function BoardSection(): JSX.Element {

    return (
        <>
        <div className='BoardSection'>
            <div className="BoardSectionHead"> 
                <span className='BoardSectionHeader'> Todo </span>
                <BsGripHorizontal style={{color: "black",}} className="DeleteButton"/>
            </div>
            <div>
                <button className="AddCardButton"> + Add Card</button>
            </div>
            <div className="BoardSectionBody">
                <Card/>
            </div>
        </div>
        </>
    )
}

export default BoardSection