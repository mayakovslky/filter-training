import React from "react";

type ButtonType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonType ) => {

    const onClickHandler = () => {
       props.callBack()
    }

    return (
        <>
            <button onClick={() => onClickHandler()}>{props.name}</button>
        </>
    )
}

type ButtonType2 = {
    name: string
    callBack: () => void
}

////////

export const Button2 = (props: ButtonType2) => {

    const onClickHandler2 = () => {
        props.callBack()
    }

    return (
        <>
            <button onClick={() => onClickHandler2()}>{props.name}</button>
        </>
    )
}