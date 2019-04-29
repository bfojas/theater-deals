import React from 'react';

function showList (props) {
    console.log('hit list', props)
    const mappedList = props.list && props.list.map(val=>{
        console.log('val',val)
        return (
            <div key={val.name}>
                {val.name}
            </div>
        )
    })
    console.log('prop list',mappedList)
    return (
        <div>
        <div>This is the list</div>
        {mappedList}
        </div>
    )

}

export default showList