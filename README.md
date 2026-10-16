# Assignment 4 — Forms and Validation

Student: [Your full name]  
Group: [Your group]

Минимальный frontend-проект на HTML, CSS и JavaScript с Bootstrap 5.

## Страницы

- `index.html` — Task 0: простая контактная форма.
- `task1.html` — Task 1: встроенная HTML5 validation (required, email, maxlength).
- `task2.html` — Task 2: Bootstrap forms, grid, placeholders и helper text.
- `task3.html` — Task 3: классы is-valid/is-invalid и сообщения под полями.
- `task4.html` — Task 4: регистрация, проверка паролей, radio, checkbox, select и Reset.
- `style.css` — общие стили; `script.js` — проверка форм.

## Запуск

Распакуйте ZIP и откройте `index.html` в браузере. Установка и сборка не нужны.
Bootstrap загружается через CDN, поэтому для оформления нужен интернет.
Формы учебные: данные не отправляются и не сохраняются, аккаунт не создаётся.

## Проверка

1. Task 1: отправьте пустую форму, затем введите неверный email. Браузер должен остановить отправку. Message ограничен 500 символами.
2. Task 3: отправьте пустую форму, затем заполните поля правильно. Красные сообщения сменятся зелёными.
3. Task 4: проверьте пароль короче 8 символов, несовпадающие пароли, пустой Country и отсутствие Gender.
4. Заполните регистрацию правильно: появится сообщение об успешной проверке. Нажмите Reset: значения и feedback очистятся.
5. Уменьшите ширину окна: поля в Bootstrap grid должны расположиться в одну колонку.

## GitHub Pages

1. Создайте публичный репозиторий на GitHub.
2. Загрузите содержимое папки `assignment4` в корень репозитория, чтобы `index.html` лежал в корне.
3. Откройте **Settings → Pages**.
4. В **Build and deployment → Source** выберите **Deploy from a branch**.
5. Выберите ветку **main**, папку **/(root)** и нажмите **Save**.
6. Дождитесь публикации. Адрес сайта появится в разделе Pages: `https://USERNAME.github.io/REPOSITORY/`.
7. Замените имя и группу выше, добавьте ссылку на сайт в README и сдайте ссылку на репозиторий.

Документация: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [Bootstrap validation](https://getbootstrap.com/docs/5.3/forms/validation/).
