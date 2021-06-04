import {useEffect, useState} from 'react';

export const useTimeAgo = (publish_date) => {
    const [time, setTime] = useState(0);

    useEffect(() => {
        const publicationDate = new Date(publish_date)
        const milisecondsDatePublish = Date.parse(publicationDate);

        const currentMiliseconds = Date.now();
    
        const dif = currentMiliseconds - milisecondsDatePublish;
        setTime(dif * 1 / 86400000)
        
    }, [publish_date])
    
    return time
}
