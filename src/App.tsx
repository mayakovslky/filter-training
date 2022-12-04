import React from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";
import {Button, Button2} from "./components/Button";

function App() {

    // const students = [
    //     {id: 1, name: "James", age: 8},
    //     {id: 2, name: "Robert", age: 18},
    //     {id: 3, name: "John", age: 28},
    //     {id: 4, name: "Michael", age: 38},
    //     {id: 5, name: "William", age: 48},
    //     {id: 6, name: "David", age: 58},
    //     {id: 7, name: "Richard", age: 68},
    //     {id: 8, name: "Joseph", age: 78},
    //     {id: 9, name: "Thomas", age: 88},
    //     {id: 10, name: "Charles", age: 98},
    //     {id: 11, name: "Christopher", age: 100},
    // ]

    // const topCars = [
    //     {manufacturer: "BMW", model: 'm5cs'},
    //     {manufacturer: "Mercedes", model: 'e63s'},
    //     {manufacturer: "Audi", model: 'rs6'}
    // ]

    // const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement, MouseEvent>) => {
    //     console.log('im vasya')
    // }
    //
    // const mySecondSubscriber = () => {
    //     console.log('im ivan')
    // }

    // const onClickHandler = (name: string) => {
    //         console.log(name)
    // }

    // const foo1 = () => {
    //     console.log(100200)
    // }
    // const foo2 = (n: number) => {
    //     console.log(n);
    // }

    const Button1Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)

    }

    const Button3Foo = () => {
        console.log('im stupid button')

    }

    const Button4Foo = (d: string) => {
        console.log(d)
    }

    return (
        <div>
            {/*<NewComponent students={students} topCars={topCars} />*/}

            {/*<Button name={'MyYoutubeChannel-1'} callBack={() => Button1Foo('im vasya')}/>*/}
            {/*<Button name={'MyYoutubeChannel-2'} callBack={() => Button2Foo('im vanya')}/>*/}
            {/*<Button name={'stupidBUTTON'} callBack={Button3Foo}/>*/}

            {/*<Button2 name={'DELETE'} callBack={() => Button4Foo('delete')}/>*/}

            {/*<button onClick={(event) => onClickHandler('vasya')}>MyYoutubeChannel-1</button>*/}
            {/*<button onClick={(event) => onClickHandler('vanya')}>MyYoutubeChannel-2</button>*/}

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={(event) =>foo2(100200)}>2</button>*/}


        </div>
    );
}

export default App;
