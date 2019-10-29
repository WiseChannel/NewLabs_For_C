
    //#1Lub

    function getValueLabOne() {
        let input = document.querySelector('#OneLabInp').value; // 1. Получаем значение из инпута
        let sum = input.split('', 3);                                   // 2. Разбиваем значение на строки в массив
        let arr = [                                                     // 3. Переопределяем тип String в Number
            parseInt(sum[0],),
            parseInt(sum[1],),
            parseInt(sum[2],),
        ];

        let NaNError = arr[0] + arr[1] + arr[2];                        // 4. Сумируем

        console.log(typeof NaNError, NaNError);                         // Проверка

        console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = `, NaNError);  // Проверка

        let spanT = document.querySelector('#spanTextValue');   // Получаем доступ к спану
        spanT.innerHTML = `<div class="test"> ${arr[0]} + ${arr[1]} + ${arr[2]} = ${NaNError} </div>`; // Добавляем в спан result

        // Проверка

        if (input.length > 3) {
            console.error('Value > 3');
            spanT.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення бiльше <u>3</u>!</div> `
        } else if (input.length < 3) {
            console.error('Value > 3');
            spanT.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення менше <u>3</u>!</div> `
        } else if (isNaN(NaNError)) {
            console.error('Число == Nan');
            spanT.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення дорівнює типу <u>NaN</u>!</div> `
        }

    }

    //#2Lub

    function getValueLabTwo() {
        let input = document.querySelector("#inputTwoLab").value;      // 1. Получаем значение из инпута
        let sum = input.split('', 4);                                          // 2. Разбиваем значение на строки в массив
        let arr = [                                                            // 3. Переопределяем тип String в Number
            parseInt(sum[0],),
            parseInt(sum[1],),
            parseInt(sum[2],),
            parseInt(sum[3],),
        ];

        let NaNError = arr[0] + arr[1] + arr[2];                                // 4. Сумируем

        const maxValue = Math.max(...arr);                                      // 5. Получаем максимальное значение из массива чисел
        let span = document.querySelector('#spanLabTwo');              // Доступ к спану
        span.innerHTML = `Max{ ${arr[0]},${arr[1]},${arr[2]},${arr[3]} = ${maxValue} }`;    // Выводит значения

        // Проверки

        if(input.length < 4) {
            console.error('Value < 4');
            span.innerHTML = `<div class="test"><span id="error">Помилка</span>: <u>значення менше 4</u>!</div>`
        } else if (input.length > 4) {
            console.error('Value > 4');
            span.innerHTML = `<div class="test"><span id="error">Помилка</span>: <u>значення бiльше 4</u>!</div>`
        } else if (isNaN(NaNError)) {
            console.error('Число == Nan');
            span.innerHTML = `<div  class="test"><span id="error">Помилка</span>: значення дорівнює типу <u>NaN</u>!</div> `
        }

        console.log(arr, maxValue,span)
    }

    //#Lub3

    function getValueThereLab() {

        let inputValue = document.querySelector('#inputThereLab').value; // Доступн
        let numValueBit = null; // Состояние

        //numVer

        let valueInteger = {          // значение выделяемое в памяти под переменную в с++
            int: 2,
            char: 1,
            bool: 1,
            float: 8,
            double: 8
        };

        const test = inputValue * valueInteger.int;

        const int = 4;            //32 под разрядный проц выделяют 4 байта, под 16 2
        const char = 1;           // выделают дин.количество памяти, обычно это 1 байт
        const bool = 1;
        const float = 4;
        const double = 8;         // x2 от float

        //specifierVer

        const short = null;
        const long = null;
        const signed = null;
        const unsigned = null;

        //add signed

        const signedLongInt = 4;      // 4байт

        //add unsigned



        //Filter

        if (inputValue === 3) {

        }


        console.log(inputValue)
        console.log(Math.round(test))
    }

    //#Lab4

    function maxMinValue() {
        const inputx1 = document.querySelector('#inputFourLabx1').value;
        const inputx2 = document.querySelector('#inputFourLabx2').value;
        const inputx3 = document.querySelector('#inputFourLabx3').value;       // Доступ
        const inputx4 = document.querySelector('#inputFourLabx4').value;
        const span = document.querySelector('#spanLabFour');

        let maxValue =  Math.max(inputx1, inputx2, inputx3, inputx4);       // Получаем значеие максимального и минимального (ниже) числа
        let minValue = Math.min(inputx1, inputx2, inputx3, inputx4);

        // Проверки

        if (inputx1 === maxValue) {
            span.innerHTML = `x1 = ${inputx1} max `;
        } else if (inputx1 === minValue) {
            span.innerHTML = `x1 = ${inputx1} min `;
        } else {
            span.innerHTML = `x1 = ${inputx1}`;
        }

        if (inputx2 === maxValue) {
            let maxInptx2 = inputx2
            span.innerHTML = `x2 = ${inputx2} max<br>`;
        } else if (inputx1 === minValue) {
            span.innerHTML = `x2 = ${inputx2} min<br>`;
        } else {
            span.innerHTML = `x2 = ${inputx2}<br>`;
        }

        if (inputx3 === maxValue) {
            span.innerHTML = `x3 = ${inputx3} max<br>`;
        } else if (inputx1 === minValue) {
            span.innerHTML = `x3 = ${inputx3} min<br>`;
        } else {
            span.innerHTML = `x3 = ${inputx3}<br>`;
        }

        if (inputx4 === maxValue) {
            span.innerHTML = `x4 = ${inputx4} max<br>`;
        } else if (inputx1 === minValue) {
            span.innerHTML = `x4 = ${inputx4} min<br>`;
        } else {
            span.innerHTML = `x4 = ${inputx4}<br>`;
        }



        // if (inputx2 === maxValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx2} max`
        // } else if (inputx2 === minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx2} min`
        // } else if (inputx2 > minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx2}`
        // }
        //
        // if (inputx3 === maxValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx3} max`
        // } else if (inputx3 === minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx3} min`
        // } else if (inputx3 > minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx3}`
        // }
        //
        // if (inputx4 === maxValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx4} max`
        // } else if (inputx4 === minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx4} min`
        // } else if (inputx4 > minValue) {
        //     span.innerHTML = ` <br>x1 = ${inputx4}`
        // }


        // if (true) {
        //     span.innerHTML = ` <br>x1 = ${inputx1} <br> x2 = ${inputx2} <br> x3 = ${inputx3} <br> x4 = ${inputx4}`;
        // }


        console.log(maxValue)


    }

