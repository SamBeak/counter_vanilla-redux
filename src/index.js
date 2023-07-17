import './scss/style.scss';
import { legacy_createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 순수 Vanilla JS로 구현한 숫자 증감 기능 => 매번 업데이트를 인지시켜줘야하는 번거로움이 있었네.

// let cnt = 0;

// const updateText = () => {
//     number.innerText = cnt;
// };

// const handleAdd = () => {
//     cnt = cnt + 1;
//     updateText();
// };

// const handleMinus = () => {
//     cnt = cnt - 1;
//     updateText();
// };

// add.addEventListener('click', handleAdd);
// minus.addEventListener('click', handleMinus);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// redux를 활용한 count 기능 구현

const ADD_CNT = "ADD";
const MINUS_CNT = "MINUS";

// 1. reducer를 만들어준다.
const countModifier = (cnt = 0, action) => {
    switch (action.type) {
        case ADD_CNT:
            return cnt + 1;
        case MINUS_CNT:
            return cnt - 1;
        default:
            return cnt;
    }
    // if(action.type === ADD_CNT) {
    //     return cnt + 1;
    // }
    // else if(action.type === MINUS_CNT) {
    //     return cnt - 1;
    // }
    // else {
    //     return cnt;
    // }
};
// 2. store를 만들어준다.
// 3. store에 reducer를 넣어준다.
const countStore = legacy_createStore(countModifier);

// store에 변화를 일으키는 방법은 dispatch를 통해서만 가능하다.
add.addEventListener('click', () => countStore.dispatch({type: ADD_CNT}));
minus.addEventListener('click', () => countStore.dispatch({type: MINUS_CNT}));

// 4. store에 변화가 있을 때마다 실행할 함수를 만들어준다.
const onChange = () => {
    number.innerText = countStore.getState(); // getState()는 store에 있는 state를 가져온다.
};
// 5. store에 변화가 있을 때마다 실행할 함수를 store에 등록해준다.
countStore.subscribe(onChange); // subscribe()는 store에 변화가 있을 때마다 실행할 함수를 등록한다.

console.log(countStore.getState());