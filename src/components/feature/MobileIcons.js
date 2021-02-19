import React, { useEffect, useState } from 'react'
import FeatureContainer from './FeatureContainer'

const MobileIcons = () => {
    const [i,seti] = useState(0);
    var featureTxtArr = ['cards', 'payments', 'loan', 'support', 'rewards', 'savings', 'investments', 'forex', 'analytics']

    useEffect(()=>{
        setTimeout(()=>{
            // console.log(i);
            seti(i=>(i+1)%9);
        },1800)
    });

    return (
        <div class="mob_man_section mob_show">
                <div class="vc_onebank_man_mob_container">
                    <img src="/img/onebanc_man_mob.png" class="vc_onebank_man_mob" onload="onManImgLoad(this)" />
                    {[{icon:'a',title:'analytics'},{icon:'f',title:'forex'}, {icon:'i',title:'investments'}, {icon:'s',title:'savings'}, {icon:'r',title:'rewards'}, {icon:'c',title:'cards'}, {icon:'p',title:'payments'}, {icon:'l',title:'loan'}, {icon:'t',title:'support'}].map((e)=>{
                    return <FeatureContainer icon={e.icon} chance={featureTxtArr[i]} selected title={e.title} />
                })}
                    
                </div>
            </div>
    )
}

export default MobileIcons