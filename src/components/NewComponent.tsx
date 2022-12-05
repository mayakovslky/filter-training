import React from "react";
import {CurrentMoneyType, FilterType} from "../App";


type StudentsType = {
    id: number
    name: string
    age: number
}

type TopCarsType = {
    manufacturer: string
    model: string
}

type NewComponentType = {
    // students: Array<StudentsType>
    students: StudentsType[]
    topCars: TopCarsType[]
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <>
            <ul>
                {props.students.map((o) => {
                    return (
                        <li key={o.id}>
                            <span>{o.name} - </span>
                            <span>age: {o.age}</span>
                        </li>
                    )
                })}
                <br/>
                {props.topCars.map((c, index) => {
                    return (
                        <th key={index}>
                            <tr>{c.manufacturer}</tr>
                            <tr>{c.model}</tr>
                        </th>
                    )
                })}
            </ul>
        </>
    )
}


//////////////////////////////////////////////////////////////////

type PropsType = {
    currentMoney: CurrentMoneyType[]
    onClickHandler: (filter: FilterType) => void
}

export const Component = (props: PropsType) => {

    const {currentMoney, onClickHandler} = props

    return (
        <>
            <ul>
                {currentMoney.map((o, index) => {
                    return (
                        <li key={index}>
                            <span> {o.banknots}</span>
                            <span> {o.nominal}</span>
                            <span> {o.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: '35px'}}>
                <button onClick={(event) => onClickHandler('all')}>all</button>
                <button onClick={(event) => onClickHandler('ruble')}>ruble</button>
                <button onClick={(event) => onClickHandler('Dollars')}>dollar</button>
            </div>
        </>
    )
}