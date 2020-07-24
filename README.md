# gulp-starter

## Особенности сборки:
  * сборка страниц модулями
  * использование шаблонизатора pug https://pugjs.org/api/getting-started.html
  * использование препроцессора SASS https://sass-lang.com/ https://sass-scss.ru/
  * группировка медиа-запросов
  * сжатие изображений
  * создание svg-спрайтов
  * конвертация изображений webp
  * В работе использую библиотеку миксинов smart-grid от Дмитрия Лаврика - очень помогает https://www.npmjs.com/package/smart-grid
  * Сборщик создаёт три варианта css-файлов:
        1. dist/css/css-modules - несжатые css-модули, я их использую для WordPress, обжимаю там  
        2. dist/css/min-css-modules - сжатые css-модули  
        3. dist/css/styles.css && styles.min.css - все несжатые и сжатые стили подключенные в src/styles/styles.sass  


## Начало работы

1.  Для старта проекта клонировать репозиторий:
    `git clone https://github.com/Protoff/gulp-starter.git`

2.  Перейти в директорию:
    `cd gulp-starter`

2.  Установить необходимые пакеты:
    `yarn install`

3.  Старт режима разработки:
    `yarn start`

4.  Формирование папки dist со всеми файлами (изображениями, шрифтами и т.д.):
    `yarn dev`

5.  Сжатие изображений и конвертация во время работы:
    `yarn images`

6.  Сборка на продакшн:
    `yarn build`

7. Деплой в GitHUB-pages:
    `yarn deploy`

## Создание модуля:
  1. создать папку модуля в папке `src/modules/новый_модуль`
  2. создать новый_модуль.pug и подключить в `src/index.pug`
  3. создать новый_модуль.sass и подключить в `src/styles.sass`

## Миксины PUG
Миксины находятся здесь:
`src/pug-mixins`

1. Иконка svg-спрайта
    Использование: +icon('name)
    Иконка получает классы - 'icon-svg', 'icon-name'
    Тело иконки будет находиться в html и будет доступно для манипуляций

2. Тег &lt;picture&gt;
    Использование: +picture(name, alt, ext='png')
    name - имя изображения без расширения
    alt - значение alt тега &lt;img&gt;
    ext - расширение файла изображения, по умолчанию - png
    Миксин формирует шесть тегов &lt;source&gt; :
```
    <picture>
        <source srcset="./img/name.webp" type="image/webp" media="(min-width: 992px)" />
        <source srcset="./img/name.ext" media="(min-width: 992px)" />
        <source srcset="./img/name.webp" type="image/webp" media="(min-width: 500px)" />
        <source srcset="./img/name.ext" media="(min-width: 500px)" />
        <source srcset="./img/name.webp" type="image/webp" media="(max-width: 500px)" />
        <source srcset="./img/name.ext" media="(max-width: 500px)" />
        <img src="./img/name.ext" alt="Перевозка грузов" />
    </picture>
```

## Для отладки AJAX я пользуюсь json-server:
[json-server](https://github.com/typicode/json-server)
