'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'nav1', // добавляем id ''
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: '' // делаем ошибку (пустой тег) 'span'
    }
];

// data.forEach((blockObj, i) => {
//     const block = document.createElement(blockObj.tag);

//     if (!blockObj.id) {
//         throw new Error(`В данных под номером ${i + 1} нет id`);
//     }

//     block.setAttribute('id', blockObj.id);
//     block.textContent = `tag = ${blockObj.tag}, id = ${blockObj.id}`;
//     document.body.append(block);
// });


try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);

        if (!blockObj.id) {
            throw new SyntaxError(`В данных под номером ${i + 1} нет id`);
        }

        block.setAttribute('id', blockObj.id);
        block.textContent = `tag = ${blockObj.tag}, id = ${blockObj.id}`;
        document.body.append(block);
    });
} catch (err) {
    // console.log('\n', err.name, '\n', err.message, '\n', err.stack);
    if (err.name === 'SyntaxError') {
        console.error('\n', err.name, '\n', err.message, '\n', err.stack);
    } else {
        throw err;
    }
} finally {
    console.log('It is all. Final!');
}

console.log('Still work');
// const err = new Error('Пример ошибки');
// const err = new SyntaxError('Пример ошибки');
// console.log('\n', err.name, '\n', err.message, '\n', err.stack);
