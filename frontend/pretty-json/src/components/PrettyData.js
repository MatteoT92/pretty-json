import React, { useState } from 'react'

function PrettyData(props) {

    const [data, setData] = useState(props.data);
    const [id, setId] = useState(props.id);

    return (
        <div className="pretty-data">
            <h3>#{id + 1}</h3>
            <code>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </code>
        </div>
        )

}

export default PrettyData;