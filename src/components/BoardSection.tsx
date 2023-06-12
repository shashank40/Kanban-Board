import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fasolif,  } from '@fortawesome/fontawesome-free-solid'

import '../stylesheet/board-section.css'

function BoardSection(): JSX.Element {

    return (
        <>
            <div className="BoardSection"> 
            <span className='BoardSectionHeader'> Todo </span>
            {/* <FontAwesomeIcon icon="fa-solid fa-file-plus" style={{color: "#02e351",}} /> */}
            </div>
        </>
    )
}

export default BoardSection