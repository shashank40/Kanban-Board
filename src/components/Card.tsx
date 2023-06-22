import Pill from './Pill'

import '../stylesheet/card.css'

function Card({}): JSX.Element{

    return (<>
        <div className="Card">
            <div className='Card-Pill'>
                <Pill text={"Important"}/>
                <Pill text={"Important"}/>
            </div>
            <div></div>
            <p>
                This is a card
            </p>
        </div>
    
    </>)

}

export default Card