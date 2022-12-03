import React from "react";

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