import React from 'react';
function Nav(props){
    const pages = ['Home','About','Services','Contact']
return(
    <ul>
        <li className={props.className}>{pages[0]}</li>
        <li className={props.className}>{pages[1]}</li>
        <li className={props.className}>{pages[2]}</li>
        <li className={props.className}>{pages[3]}</li>
    </ul>
)
}

export default Nav;