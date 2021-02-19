import React from 'react'
import Typical from 'react-typical'
import Form from './Form'
// import Typewriter from "typewriter-effect";

const Main = () => {
    return (
        <div class="main">
            <div class="big spacer"></div>
            <div class="title">
                RE:<br /> THINK
                <br />
                <br />
                <div class="writer_container">
                    {/* <span id="feature_txt"> */} 
                    <Typical
                        steps={['CARDS',1000, 'PAYMENTS',1500,  'LOAN',1000,  'SUPPORT',1000,  'REWARDS',1000,  'SAVINGS',1000,  'INVESTMENTS',1000,  'FOREX',1000,  'ANALYTICS',1000]}
                        loop={Infinity}
                        wrapper="span"
                    />
                   {/* </span> */}
            </div>
            </div>
            <div class="spacer"></div>
            <div class="description">
                We are a Neo Bank<span class="mob_show">,</span> <span class="mob_hide">and are here to re-imagine and re-invent Banking. We are</span> cool and simply awesome!
            </div>

            <div class="big spacer"></div>

            <Form />

            <div class="big spacer"></div>
        </div>
    )
}

export default Main
