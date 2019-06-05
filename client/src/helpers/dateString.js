import React from 'react';
import TimeAgo from 'react-timeago';

const dateString = (date) => {
    return (
        <TimeAgo date={date} />
    )
}

export default dateString;
