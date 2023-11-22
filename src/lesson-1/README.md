Хуки — функции, начинающиеся с use— можно вызывать только на верхнем уровне ваших компонентов или ваших собственных хуков. Вы не можете вызывать хуки внутри условий, циклов или других вложенных функций. Хуки — это функции, но полезно думать о них как о безусловных декларациях потребностей вашего компонента. Вы «используете» функции React в верхней части вашего компонента аналогично тому, как вы «импортируете» модули в верхней части вашего файла.

# useState =>

```js
let componentHooks = [];
let currentHookIndex = 0;

function useState(initialState) {
    let pair = componentHooks[currentHookIndex];
    if (pair) {
        currentHookIndex++;
        return pair;
    }

    pair = [initialState, setState];

    function setState(nextState) {
        pair[0] = nextState;
        updateDOM();
    }

    componentHooks[currentHookIndex] = pair;
    currentHookIndex++;
    return pair;
}

function updateDOM() {
    currentHookIndex = 0;
    let output = Gallery();
    nextButton.onclick = output.onNextClick;
    header.textContent = output.header;
    moreButton.onclick = output.onMoreClick;
    moreButton.textContent = output.more;
    image.src = output.imageSrc;
    image.alt = output.imageAlt;
    if (output.description !== null) {
        description.textContent = output.description;
        description.style.display = '';
    } else {
        description.style.display = 'none';
    }
}

function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    function handleNextClick() {
        setIndex(index + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return {
        onNextClick: handleNextClick,
        onMoreClick: handleMoreClick,
        header: `${sculpture.name} by ${sculpture.artist}`,
        counter: `${index + 1} of ${sculptureList.length}`,
        more: `${showMore ? 'Hide' : 'Show'} details`,
        description: showMore ? sculpture.description : null,
        imageSrc: sculpture.url,
        imageAlt: sculpture.alt,
    };
}
```

Всегда вызывается на верхнем уровне инициализации компонента

Хук , который обладает дженериком, где 0 элемент - самое состояние, а 1ый - это функция, которое имеет доступ к измению к 0 элементу

# React.dev Dock - example

Соглашение заключается в том, чтобы называть переменные состояния, как [something, setSomething]при использовании деструктуризации массива.

-   state - Состояние текущее
-   setState - Функция для смены состояния

Запись:

const [state, setState] = useState('1')

В случае стейта - это образно, простая переменная, которую мы можем объявить как :
const state = '' : показываем тот тип, который лежит в хуке useState() в нашем случае - это строка

В случае setState - это функция, которая меняет переменную в зависимости от чего - то, выглядит примерно так

const setState = (state) => {
const prevState: unknown = state
return state // Где возрат стейта, будет какая-то функция, пример state == state + 1 ? true : false
}

useState возвращает массив ровно с двумя значениями:

Текущее состояние. Во время первого рендеринга он будет соответствовать тому, который initialStateвы прошли.
Функция set, которая позволяет обновить состояние до другого значения и запустить повторный рендеринг.

---

Где \*1 - это мы не имеем явного event'а, который мы ждем, поэтому эту функцию очень тяжело описать , что она делает, без понимания что она будет делать
