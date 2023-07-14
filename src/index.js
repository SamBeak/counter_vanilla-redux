import './scss/style.scss';

// 순수 Vanilla JS로 구현한 숫자 증감 기능 => 매번 업데이트를 인지시켜줘야하는 번거로움이 있었네.
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let cnt = 0;

const updateText = () => {
    number.innerText = cnt;
};

const handleAdd = () => {
    cnt = cnt + 1;
    updateText();
};

const handleMinus = () => {
    cnt = cnt - 1;
    updateText();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);