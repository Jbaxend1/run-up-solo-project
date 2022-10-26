import { useHistory } from 'react-router-dom';

function Complete () {

    const history = useHistory();
    return (
        <>
            <h2>Pre-Flight Checklist Complete!</h2>
            <h4>Happy Flying!</h4>
            <button onClick={() => { history.push('/takeoff') }}>Back</button>
        </>
    )
}

export default Complete;