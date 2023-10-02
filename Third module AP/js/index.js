(() => {

    function toggleButton(data) {

        let btn = document.querySelectorAll('.toggle-circle'); //С помощью data атрибутов переключаются переключатели (тогглы)
        let toggle = document.querySelectorAll('.toggle'); //html курица, а его коллекция яйцо мем Вадим привет
        let arr = [...toggle]; //массив, создаётся с помощью спред-оператора, спред-оператор раскладывает соответствующий объект внутри нового объекта. С его помощью можно получить только копию, он не может изменять существующие объекты. Массив потом прогоняется по циклу.

        btn.forEach((e) => { //кружочки внутри переключателей
            e.addEventListener('click', (t) => { //обработчик события по клику, в нём создаю ещё одну функцию t
                if(t.currentTarget.parentElement.dataset.place == data) {
                    for(let item of arr) { //запускается цикл по созданному массиву, и если дата атрибут и элемент массива = дата, и выдаст true, то через toggle добавляется active и это позволяет переключать тогглы.
                        if(item.dataset.place == data) {
                            item.classList.toggle('_active'); //
                        }
                    }
                }
            })
        })

    }
    toggleButton('off');
    toggleButton('off2');
    toggleButton('off3');
    toggleButton('off4');

    function radioButtons() {

        let buttons = document.querySelectorAll('.js-radio');
        let labels = document.querySelectorAll('.js-label');

        buttons.forEach((e) => {
            e.addEventListener('click', (t) => {
                labels.forEach((y) => { // добавляю ещё одну функцию именно для объектов на карте.
                    if (y.classList.contains('_active')) {
                        y.classList.remove('_active')
                    }
                    if(t.target.value == 'r1') { // условие для проверки какой филиал под какой веткой работает
                        if(y.dataset.num == 'r2') y.classList.add('_active');;
                    }
                    if(t.target.value == 'r2') {
                        if(y.dataset.num == 'r3') y.classList.add('_active');;
                    }
                    if(t.target.value == 'r3') {
                        if(y.dataset.num == 'r4') y.classList.add('_active');;
                    }
                    if(t.target.value == 'r4') {
                        if(y.dataset.num == 'r1') y.classList.add('_active');;
                    }
                })
            })
        })

    } radioButtons();

    function spinner() {

        let spinners = document.querySelectorAll('.spinner');
        let arr = [...spinners];

        spinners.forEach((e) => {
            e.addEventListener('click', (t) => {

                t.target.style.transform = 'rotate(45deg)'; //при клике на спиннер (на макете кругляшок) он поворачивается на 45 градусов
                arr.splice(arr.indexOf(t.target), 1); //при клике на один спиннер, он удаляется из массива

                for (let item of arr) {
                    let random = Math.floor(Math.random() * 361); //генерация рандомного числа
                    item.style.transform = `rotate(${random}deg)`; //рандомно крутятся
                }

                arr = [...spinners]; //заново заполняю массив спиннерами

            })
        })

    } spinner()

    function candles() {

        let range = document.querySelectorAll('.range');
        let arr = [...range];

        range.forEach((e) => {
            e.addEventListener('input', (t) => {

                let ind = arr.indexOf(t.target); //создаю переменную с индексом уже передвинутой свечки

                if (t.target.value > 149) {
                    t.target.style.setProperty('--color2', '#0F61FF'); //обращаюсь к переменной с цветом и цвет меняется
                    t.target.style.setProperty('--color', '#0F61FF');
                    t.target.style.backgroundColor = '#0F61FF';
                    console.log(arr[ind + 1])
                    let next = arr[ind + 1];
                    next.value = 0;
                    next.style.backgroundColor = '#FF5C00';
                    next.style.setProperty('--color2', '#FF5C00');
                    next.style.setProperty('--color', '#FF5C00');
                } else if(t.target.value < 2) {
                    t.target.style.setProperty('--color2', '#FF5C00');
                    t.target.style.setProperty('--color', '#FF5C00');
                    t.target.style.backgroundColor = '#FF5C00';
                    let next = arr[ind + 1];
                    next.value = 150;
                    next.style.backgroundColor = '#0F61FF';
                    next.style.setProperty('--color2', '#0F61FF');
                    next.style.setProperty('--color', '#0F61FF');
                }

            })
        })

    } candles();

    function buttonPress() {

        let btn = document.querySelector('.button');
        let btnText = document.querySelector('.button-text');
        let modal = document.querySelector('.modal-bg');

        btn.addEventListener('click', () => {

            btn.classList.toggle('_active');
            btnText.classList.toggle('_active');
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';

        })

    } buttonPress();

    function modal() {

        let btnCancel = document.querySelector('.btn-cancel');
        let btnAgree = document.querySelector('.btn-agree');
        let modal = document.querySelector('.modal-bg');
        let btn = document.querySelector('.button');
        let btnText = document.querySelector('.button-text');

        btnCancel.addEventListener('click', (e) => {

            e.preventDefault();

            window.close()


        });

        btnAgree.addEventListener('click', (e) => {

            e.preventDefault();

            window.close()

        })

    } modal();

    function tooltip() {

        const wrap = document.querySelector(".fourth-module__bottom");

        const range = wrap.querySelector(".diagramm-range"); //ползунок
        const bubble = wrap.querySelector(".bubble"); //окошко для числа

        range.addEventListener("input", () => { //добавляю обработчик события на ввод
            setBubble(range, bubble); //вызываю при вводе
        });
        setBubble(range, bubble); //тут вызов при загрзуке

    function setBubble(range, bubble) {
        const val = range.value;
        const min = range.min ? range.min : 1; //тернарный оператор, проверяю мин значение, оставляю мин
        const max = range.max ? range.max : 200;
        const newVal = Number(((val - min) * 100) / (max - min)); //нахожу процент
        bubble.innerHTML = val; //значение окошка будет равно значению range.value

        bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`; //расчёт процента для передвижения в левую сторону, если будет отр, то в правую, если пол, то в левую.
    }

    } tooltip();

    function diagrammCall() {

        let el8 = document.querySelectorAll('.el-8');
        let el7 = document.querySelectorAll('.el-7');
        let el6 = document.querySelectorAll('.el-6');
        let el5 = document.querySelectorAll('.el-5');
        let el2 = document.querySelectorAll('.el-2');
        let el3 = document.querySelectorAll('.el-3');
        let el9 = document.querySelectorAll('.el-9');
        let el1 = document.querySelectorAll('.el-1');
        let el4 = document.querySelectorAll('.el-4');
        let el10 = document.querySelectorAll('.el-10');
        let el11 = document.querySelectorAll('.el-11');
        let el12 = document.querySelectorAll('.el-12');
        let el13 = document.querySelectorAll('.el-13');
        let el14 = document.querySelectorAll('.el-14');
        let el15 = document.querySelectorAll('.el-15');
        let el16 = document.querySelectorAll('.el-16');

        diagramm(el8, 0); //первый аргумент переменная, хранящая в себе элементы с классом el8, а второй аргумент - индекс первого закрашенного элемента, начиная отсчёт сверху
        diagramm(el7, 6);
        diagramm(el6, 9);
        diagramm(el5, 10);
        diagramm(el2, 2);
        diagramm(el3, 10);
        diagramm(el9, 10);
        diagramm(el1, 9);
        diagramm(el4, 6);
        diagramm(el10, 9);
        diagramm(el11, 9);
        diagramm(el12, 13);
        diagramm(el13, 7);
        diagramm(el14, 6);
        diagramm(el15, 5);
        diagramm(el16, 2);


        function diagramm(element, ind) {

            let range = document.querySelector('.diagramm-range');
            let elements = document.querySelectorAll('.el');
            let arr = [...element];
            let a = ind;
            let val = 100;

            range.addEventListener('input', () => { //добавляю обработчик события по вводу

                let random = Math.floor(Math.random() * 50) + 150;//нахожу рандомное число в промежутке макс и мин чисел с округлением

                if(range.value == random) {
                    range.disabled = true;
                    elements.forEach((e) => {
                        e.classList.add('_active');
                        e.classList.add('blue');
                    })
                }

                if(range.value > val) {

                    el = arr[a];
                    el.style.backgroundColor = '#0066FF';
                    if(a == 0) {
                        return;
                    }
                    a = a - 1;
                    val = range.value; //добавляю новое значение, теперь среднее значение равно значению, на котором я остановила ползунок

                } else {

                    el = arr[a];

                        if(el.classList.contains('blue')) {
                            el.classList.remove('blue');
                            el.style.backgroundColor = '#D9D9D9';
                            if(a == 18) {
                                return;
                            }
                            a = a + 1;
                            val = range.value;
                        } else {
                            el.style.backgroundColor = '#D9D9D9';
                            if(a == 18) {
                                return;
                            }
                            a = a + 1;
                            val = range.value;
                        }

                }

            })

        }

    } diagrammCall();

    function switches() {

        let switches = document.querySelectorAll('.switch');
        let bar = document.querySelectorAll('.switch-bar');

        switches.forEach((e) => {
            e.addEventListener('click', (t) => {
                bar.forEach((e) => { //цикл для прогресс баров

                    let wid = 50;
                    let wid2 = 50;

                    if(e.dataset.target !== t.target.dataset.target) {
                        while(wid2 > Math.floor(Math.random() * 50)) {
                            e.style.width = `${wid2 -= 1}%`;
                        }
                    }

                    if(e.dataset.target === t.target.dataset.target) {
                        while(wid < 100) {
                            e.style.width = `${wid += 1}%`;
                        }
                    }

                })
            })
        })

    } switches();

    function circleSpin() {

        let module = document.querySelector('.fifth-module__top');
        let circle = document.querySelectorAll('.circle');
        let complete = true;

        module.addEventListener('mouseover', () => { //добавила обработчик события при наведении
            circle.forEach((e) => {
                e.style.transform = `rotate(${Math.floor(Math.random() * 300) + 60}deg)`;//через рандом крутятся диаграммы
            })
        });

        module.addEventListener('mouseleave', () => { //обработчик события когда убрала курсор

            if(complete) {
                setTimeout(() => {
                    document.querySelector('.red-bg').style.display = 'block'; //блокировка дисплея
                }, 4000); //сигналка быстро придёт
                complete = false;

                setTimeout(() => {
                  window.close()
                }, 8000)

            }

        })

    } circleSpin();

    function date() {

        let date = new Date();
        let hour = date.getHours();
        let min = date.getMinutes();
        let month = date.getMonth();
        let day = date.getDate();

        let monthBlock = document.querySelector('.date-month');
        let dayBlock = document.querySelector('.date-date');
        let hourBlock = document.querySelector('.date-hour')
        let minBlock = document.querySelector('.date-min');

        let seconds = 0;

        month < 10 ? monthBlock.textContent = `0${month}` : monthBlock.textContent = month; //чтоб красиво месяц выводился с 0, а не просто цифра, если месяц меньше 10. А если больше 10, то выводим нынешнюю дату.
        day < 10 ? dayBlock.textContent = `0${day}` : dayBlock.textContent = day;
        hour < 10 ? hourBlock.textContent = `0${hour}` : hourBlock.textContent = hour;
        min < 10 ? minBlock.textContent = `0${min}` : minBlock.textContent = min;

        let int = setInterval(secondsCount, 1000)

        function secondsCount() {
            seconds++;
            if(seconds === 60) {
                clearInterval(int);
                min += 1;
                min < 10 ? minBlock.textContent = `0${min}` : minBlock.textContent = min;
                seconds = 0;
                int = setInterval(secondsCount, 1000)
                if(minBlock.textContent == '60') {
                    hour += 1;
                    hour < 10 ? hourBlock.textContent = `0${hour}` : hourBlock.textContent = hour;
                    min = 0;
                    min < 10 ? minBlock.textContent = `0${min}` : minBlock.textContent = min;
                }
                if(hourBlock.textContent == '24') {
                    hour = 0;
                    hour < 10 ? hourBlock.textContent = `0${hour}` : hourBlock.textContent = hour;
                }
            }
        }

    } date();

    function calendar() {

        let dates = document.querySelectorAll('.number');
        let arr = [...dates];
        let arr2 = []; //добавляю пустой массив для проверки значений

        dates.forEach((e) => {
            e.addEventListener('click', (t) => {

                t.target.classList.toggle('_active');
                arr2.push(t.target);
                if(arr2.length == 2) {
                    console.log(arr2)
                    if(arr2[0] == arr2[1]) {
                        arr2.splice(0);
                        return;
                    }
                    arr2[0].classList.remove('_active');
                    arr2.splice(0, 1)
                }

            })
        })

    } calendar();

    function svgDraw() {

        let svg = document.querySelectorAll('.svg');
        let svgCont = document.querySelector('.third-module__right');
        let svg1 = document.querySelector('.first-svg');
        let svg2 = document.querySelector('.sec-svg');
        let len1 = 723;
        let len2 = 871;
        let active = false;

        svgCont.addEventListener('mouseover', () => {
            active = true;
            while(len1 > 0) {
                len1--;
                svg1.style.strokeDashoffset = `${len1}`; //эффект при котором свг рисуется плавно (отступ между частями свг)
            }
            while(len2 > 0) {
                len2--;
                svg2.style.strokeDashoffset = `${len2}`;
            }
        })

        svgCont.addEventListener('mouseleave', () => {
            active = false;
            while(len1 < 722) {
                len1++;
                svg1.style.strokeDashoffset = `${len1}`;
            }
            while(len2 < 871) {
                len2++;
                svg2.style.strokeDashoffset = `${len2}`;
            }
        })

    } svgDraw();

    function thirdModuleSwitches() {

        let toggle = document.querySelectorAll('.item-circle');
        let circles = document.querySelectorAll('.circle-spin');
        let spin = false;
        let arr = [];

        toggle.forEach((e) => {
            e.addEventListener('click', (t) => {

                t.target.parentElement.classList.toggle('_active');
                arr.push(t.target);

                if(arr.length == 2) {
                    if(arr[0] == arr[1]) {
                        arr.splice(0)
                        return;
                    }
                    arr[0].parentElement.classList.remove('_active');
                    arr.splice(0, 1);
                }

                circles.forEach((e) => {
                    if(e.dataset.spinner === t.target.dataset.spinner) {
                        if(spin) {
                            e.style.transform = `rotate(180deg)`;
                            spin = false;
                        } else {
                            spin = true;
                            e.style.transform = `rotate(${Math.floor(Math.random() * 330) + 30}deg)`;
                        }
                    }
                })
            })
        })

    } thirdModuleSwitches();

})();
