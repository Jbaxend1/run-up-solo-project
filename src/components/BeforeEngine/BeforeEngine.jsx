import { useHistory } from 'react-router-dom';

function BeforeEngine () {

    const history = useHistory();

    return (
        <>
            <h2>Before Engine</h2>
            <button onClick={() => {history.push('/home')}}>Back</button>
            <ul>
                {
                    
                }
            </ul>
        </>
    )
}

export default BeforeEngine;