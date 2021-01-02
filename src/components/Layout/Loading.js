import React from 'react'
import Typography from '@material-ui/core/Typography';
import loading from '../../Assets/loading.svg';

const Loading = () => {
    return (
        <div style={{position: 'fixed', top: '45%', left: '45%'}}>
            <img src={loading} alt='loading' />
            <Typography>
                Loading... Please Wait!
            </Typography>
        </div>
    )
}

export default Loading
