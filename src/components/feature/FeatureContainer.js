import React from 'react'

const tolower = (e)=>{
    e.toLowerCase();
}
const FeatureContainer = ({title,icon,chance}) => {
    return (
        // <div class={`feature_container ${tolower(title)}`}>
        //     <div class="icon">{icon}</div>
        //     <div class="title">{title}</div>
        // </div>

        <div class={`feature_container ${title} ${chance==title&&'selected'}`}>
            <div class="icon">{icon}</div>
            <div class="title">{title}</div>
        </div>
    )
}

export default FeatureContainer