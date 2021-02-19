import React, { useEffect, useState } from 'react'
import FeatureContainer from './FeatureContainer'

const ManIcons = ({type}) => {
    const [i,seti] = useState(0);
    var featureTxtArr = ['cards', 'payments', 'loan', 'support', 'rewards', 'savings', 'investments', 'forex', 'analytics']

    useEffect(()=>{
        setTimeout(()=>{
            seti(i=>(i+1)%9);
        },1800)
    },[i]);

    
    return (
        <td class={type=='regular'?"vc_regularbank_man_td":"vc_onebanc_man_td"}>
            <div class={type=='regular'?"vc_regularbank_man ":"vc_onebank_man"}>
                <img class="pic_man" src={type=="regular"?"/img/regular_bank.png":"/img/onebanc_man.png"} onLoad="onManImgLoad(this)" />
                {[{icon:'a',title:'analytics'},{icon:'f',title:'forex'}, {icon:'i',title:'investments'}, {icon:'s',title:'savings'}, {icon:'r',title:'rewards'}, {icon:'c',title:'cards'}, {icon:'p',title:'payments'}, {icon:'l',title:'loan'}, {icon:'t',title:'support'}].map((e)=>{
                    return <FeatureContainer icon={e.icon} chance={featureTxtArr[i]} selected title={e.title} />
                })}
                <div class="bank_title">{type=="regular"?'#RegularBank':'#OneBanc'}</div>
            </div>
        </td>
    )
}

export default ManIcons