# Как работать с GIT

## Создание алиаса

> Пункт ОБЯЗАТЕЛЕН для выполнения. Выполняется 1 раз перед стартом работы. Эта особенность нужна ТОЛЬКО если вы делаете форк какого-либо проекта, работаете с ним и потом хотите "предлагать" изменения в репозиторий автора (у нас именно так и есть). На реальной работе этим обычно не занимаемся, а просто клонируем репозиторий и дальше работаем просто в ветках, а пулреквесты (или в gitlab называется мерджреквесты) делаем из наших веток в мастер (или ту ветку, которая является основной в проекте).

В склонированном репозитории необходимо выполнить команду:
```git remote add academy git@github.com:captain-zsa/html2-cat-energy-dumskiy.git```

После выполнения при помощи команды `git remote -v` убедиться, что новый алиас academy был добавлен (команда должна отобразить 2 academy и 2 origin).

## Основные команды
1. Перед началом работы над каждым заданием НУЖНО ДОЖДАТЬСЯ ПРИНЯТИЯ ПРЕДЫДУЩЕГО!
2. Предыдущее принято - принимаемся за новое задание. Нельзя делать одновременно 2 задания, иначе могут быть конфликты git.
3. Когда беремся за очередное задание - выполняем команды последовательно:
    `git checkout master`
    `git pull academy master`
    `git push origin master`
    `git checkout -b module*-task*` (название ветки берется из задания)

4. После этих действий работаем над заданием
5. Как только задание выполнили - выполняем последовательно команды для отправки на гитхаб всего что сделали:
    `git add .`
    `git commit -m "Комментарий"` (в кавычках пишется обязательно)
    `git push origin module*-task*` (ветка, в которой задание выполняли).

6. После этих действий заходим на сайт github (можно по ссылке, которая вывелась в терминале после команды `git push`)
7. Создаем пулреквест
8. Привязываем пулреквест к заданию на сайте академии
9. Убеждаемся, что в пулреквесте нет никаких ошибок, если есть - нужно их исправить (ошибки от дженкинса могут быть по стилистике кода, если непонятно где их смотреть - пиши, объясню)
10. Ждем проверки

## Далее 2 варианта развития событий:
1. Задание принято. Значит можем делать следующее по алгоритму.
2. Задание не принято. Значит НИКУДА НЕ ПЕРЕКЛЮЧАЕМСЯ, работаем в той же ветке что и работали, в ветке задания. Просто вносим нужные правки, затем выполняем команды:
    `git add .`
    `git commit -m "Комментарий"`
    `git push origin module*-task*` (опять же наша ветка в которой работаем) все, изменения отправились и уже в нашем пулреквесте

3. Отправляем задание на проверку снова в интерфейсе академии (обязательно, иначе я не увижу что задание отправлено)