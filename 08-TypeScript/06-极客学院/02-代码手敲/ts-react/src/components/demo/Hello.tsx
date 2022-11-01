/**
 * @Author liming
 * @Date 2022/11/1 15:22
 **/

import React from 'react';

interface Greeting {
    name: string
}

const Hello = (props: Greeting) => <h1>Hello,{props.name}</h1>

export default Hello