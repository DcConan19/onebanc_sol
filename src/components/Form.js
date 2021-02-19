import React, { useEffect, useState } from 'react'

const Form = () => {
    const [data,setData] = useState(null);
    const [err,setErr] = useState(false)
    const handleChange = (e)=>{
        setErr(false);
        setData(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!(/.+@.+\.[A-Za-z]+$/.test(data))){
            setErr(true);
        }
    }

    useEffect(()=>{
        console.log(data);
    },[data])

    return (
        <div id="flipper_container" class="flipper">
            <div class="invite_container">
                <div id="invite_submit_form">
                    Get an early invitation for our Beta release.
                    <br />

                    <div class="group_input">
                        <input value={data} onChange={handleChange} type="text" id="inp_eml" placeholder="Enter Email Address" maxlength="64" />
                        <div onClick={handleSubmit} class="btn" id="btn_sub">
                            <div class="loader">
                                <div class="dot c1">&nbsp;</div>
                                <div class="dot d2 c2">&nbsp;</div>
                                <div class="dot d3 c3">&nbsp;</div>
                            </div>
                            <img class="arrow" src=" data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPjxnPjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwOC44NzUsMjQ4LjQ1OGwtMTYwLTE2MGMtMy4wNjMtMy4wNDItNy42MTUtMy45NjktMTEuNjI1LTIuMzEzYy0zLjk5LDEuNjQ2LTYuNTgzLDUuNTQyLTYuNTgzLDkuODU0djIxLjMzMyAgICBjMCwyLjgzMywxLjEyNSw1LjU0MiwzLjEyNSw3LjU0MmwxMDkuNzkyLDEwOS43OTJIMTAuNjY3QzQuNzcxLDIzNC42NjcsMCwyMzkuNDM3LDAsMjQ1LjMzM3YyMS4zMzMgICAgYzAsNS44OTYsNC43NzEsMTAuNjY3LDEwLjY2NywxMC42NjdoNDMyLjkxN0wzMzMuNzkyLDM4Ny4xMjVjLTIsMi0zLjEyNSw0LjcwOC0zLjEyNSw3LjU0MlY0MTZjMCw0LjMxMywyLjU5NCw4LjIwOCw2LjU4Myw5Ljg1NCAgICBjMS4zMjMsMC41NTIsMi43MDgsMC44MTMsNC4wODMsMC44MTNjMi43NzEsMCw1LjUtMS4wODMsNy41NDItMy4xMjVsMTYwLTE2MEM1MTMuMDQyLDI1OS4zNzUsNTEzLjA0MiwyNTIuNjI1LDUwOC44NzUsMjQ4LjQ1OHoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPjwvZz4gPC9zdmc+Cg=="
                            />

                            <g>
                                <path d="M508.875,248.458l-160-160c-3.063-3.042-7.615-3.969-11.625-2.313c-3.99,1.646-6.583,5.542-6.583,9.854v21.333    c0,2.833,1.125,5.542,3.125,7.542l109.792,109.792H10.667C4.771,234.667,0,239.437,0,245.333v21.333    c0,5.896,4.771,10.667,10.667,10.667h432.917L333.792,387.125c-2,2-3.125,4.708-3.125,7.542V416c0,4.313,2.594,8.208,6.583,9.854    c1.323,0.552,2.708,0.813,4.083,0.813c2.771,0,5.5-1.083,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z"
                                    data-original="#000000" class="active-path" data-old_color="#000000" fill="#FFFFFF" />
                            </g>
                            
                        </div>
                        <div class={`${err&&'show'}`} id="email_errbox">Invalid</div>
                    </div>
                    <div id="email_err">Invalid Email !!!</div>
                </div>
                <div id="invite_submit_response">Thanks for sharing your email,<br />we will get back to you soon!</div>               
            </div>
        </div>
    )
}

export default Form