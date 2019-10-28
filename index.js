
    //#1Lub

    function getValueLabOne() {
        let input = document.querySelector('#OneLabInp').value;
        let sum = input.split('', 3);
        let arr = [
            parseInt(sum[0],),
            parseInt(sum[1],),
            parseInt(sum[2],),
        ];

        let NaNError = arr[0] + arr[1] + arr[2];

        console.log(typeof NaNError, NaNError)

        console.log(`${arr[0]} + ${arr[1]} + ${arr[2]} = `, NaNError);

        let spanT = document.querySelector('#spanTextValue');

        spanT.innerHTML = `<div class="test"> ${arr[0]} + ${arr[1]} + ${arr[2]} = ${NaNError} </div>`;

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
        let input = document.querySelector("#inputTwoLab").value;
        let sum = input.split('', 4);
        let arr = [
            parseInt(sum[0],),
            parseInt(sum[1],),
            parseInt(sum[2],),
            parseInt(sum[3],),
        ];

        let NaNError = arr[0] + arr[1] + arr[2];

        const maxValue = Math.max(...arr);
        let span = document.querySelector('#spanLabTwo');
        span.innerHTML = `Max{ ${arr[0]},${arr[1]},${arr[2]},${arr[3]} = ${maxValue} }`;
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

        let inputValue = document.querySelector('#inputThereLab').value;
        let numValueBit = null;

        //numVer


        // 1 2
        // 2 4
        // 3 8
        // 4 16
        // 5 32
        // 6 64
        // 7 12;
        // 8 256
        // 9 512
        // 10 1024
        // 11 2048


        /*
        Ключевые слова (модификаторы) signed и unsigned указывают, как интерпретируется нулевой бит
        объявляемой переменной, т.е., если указано ключевое слово unsigned, то нулевой бит
        интерпретируется как часть числа, в противном случае нулевой бит интерпретируется как знаковый.
        https://myrobot.ru/stepbystep/pr_variables.php
         */

        // let valueInteger = {
        //     int: 2.5,
        //     char: 1,
        //     bool: 1,
        //     float: 8,
        //     double: 8
        // };

      //  const test = inputValue * valueInteger.int;


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

        /*
        C++ Code

       #include <iostream>
       #include <cmath>

       using namespace std;

        int main() {
            int bytesNumber = 0;
            cout << "Enter bytes" << endl;
            cin >> bytesNumber;
            cout << pow(2,bytesNumber);
            int nameUnSugned = 0;
            int nameSigned = 0;

            for(int i = 0; i < bytesNumber; ++i) {
                nameUnSugned += pow(2,i);
                nameSigned += i < bytesNumber - 1 ? std::pow(2,i) : 0;
            }
            cout << endl << "Unsigned" << 0 << nameSigned;
            cout << endl << "Unsigned" << nameSigned + 1 << nameSigned;
        }
         */

        console.log(inputValue)
        console.log(Math.round(test))
    }

    //#Lab4

    function maxMinValue() {
        const inputx1 = document.querySelector('#inputFourLabx1').value;
        const inputx2 = document.querySelector('#inputFourLabx2').value;
        const inputx3 = document.querySelector('#inputFourLabx3').value;
        const inputx4 = document.querySelector('#inputFourLabx4').value;
        const span = document.querySelector('#spanLabFour');
        const spanMin = document.querySelector('#spanLabFourMin');
        const all = document.querySelector('#all');

        let maxValue =  Math.max(inputx1, inputx2, inputx3, inputx4);
        let minValue = Math.min(inputx1, inputx2, inputx3, inputx4);

        const innerMax = () => {
            if (inputx1 || inputx2 || inputx3 || inputx4 === maxValue) {
                span.innerHTML = `max = ${maxValue}`;
            }
        };

        const innerMin = () => {
            if (inputx1 || inputx2 || inputx3 || inputx4 === minValue) {
                spanMin.innerHTML = `min = ${minValue}`;
            }
        };

        all.innerText = `x1 = ${inputx1} 
                          x2 = ${inputx2} 
                          x3 = ${inputx3}  
                          x4 = ${inputx4} 
                                         `;

        // if (inputx2 === maxValue) {
        //     let maxInptx2 = inputx2
        //     span.innerHTML = `x2 = ${inputx2} max<br>`;
        // } else if (inputx1 === minValue) {
        //     span.innerHTML = `x2 = ${inputx2} min<br>`;
        // } else {
        //     span.innerHTML = `x2 = ${inputx2}<br>`;
        // }
        //
        // if (inputx3 === maxValue) {
        //     span.innerHTML = `x3 = ${inputx3} max<br>`;
        // } else if (inputx1 === minValue) {
        //     span.innerHTML = `x3 = ${inputx3} min<br>`;
        // } else {
        //     span.innerHTML = `x3 = ${inputx3}<br>`;
        // }
        //
        // if (inputx4 === maxValue) {
        //     span.innerHTML = `x4 = ${inputx4} max<br>`;
        // } else if (inputx1 === minValue) {
        //     span.innerHTML = `x4 = ${inputx4} min<br>`;
        // } else {
        //     span.innerHTML = `x4 = ${inputx4}<br>`;
        // }

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
        innerMax()
        innerMin()

        console.log(maxValue)

    }


    //#Lab5

    function LabFive() {
        const input = document.querySelector("#inputFiveLab").value;
        const input2 = document.querySelector('spanLabFive2');

        const result2 = () => {
            if (input % 2 === 0) {
                console.log('true : 2');
                // input2.innerHTML = '2: yes';
            } else {
                console.log('false : 2')
            }
        };

        const result3 = () => {
            if (input % 3 === 0) {
                return console.log('true : 3')
            } else {
                console.log('false : 3')
            }
        };

        const result5 = () => {
            if (input % 5 === 0) {
                return console.log('true : 5')
            } else {
                console.log('false : 5')
            }
        };

        const result11 = () => {
            if (input % 11 === 0) {
                return console.log('true : 11')
            } else {
                console.log('false : 11')
            }
        };


        result2();
        result3();
        result5();
        result11();

        // console.log(typeof result2.bind())

        if (typeof result2 && typeof result3 && typeof result5 && typeof result11 === true) {
            console.log('Combo')
        } else {
            console.log('Almost prime [fixed]')
        }

    }

