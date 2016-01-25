1.Создание проекта в ruby-консоли 
	gem install scss    | в ruby-консоли, если не были
	gem install compass | установлены ранее в системе
	в ryby-консоли compass create <projectname>
2.Настройка SCSS
	правим config.rb
		http_path = "/"
		css_dir = "css"
		sass_dir = "sass"
		images_dir = "img"
		javascripts_dir = "js"
3.Настройка SCSS проекта в ruby-консоли
	cd myproject
	\myproject> compass watch
4.Подключение Git в <projectname> директории 
	создаём .gitignore
		*.psd
		/.sass-cache/*	
	создаем репозиторий git init
	можно проверить статус git st
	добовляем git add .
	создаём коммит git ci "start proj"
	создадим тэг git tag v.1.0
5.Переносим или создаем необходимые для проекта файлы	
6.Создание закончим сохранением этого файла как ridme.txt
	и добавлением изменения в текущий коммит
	повторяем git add .
		решение ошибки "CRLF would be replaced by LF in ..." 
			git config --global --unset core.autocrlf 
			git config core.autocrlf false
	далее git ci -amend -m "start proj"

======СОЗДАНИЕ НОВОГО ПРОЕКТА=================================
В файловой системе создаем копию директории(или клонируем - проверить)
Создадим удаленный репозиторий на GitHub и (не ставить галочку в init!)
ретранслируем туда эту дирректорию 
	git remote add origin https://github.com/papabone/port.git
	git push -u origin master

Активируем SCSS: compass watch перед работой
не забываем про git push --tags

======Заливаю данный проект чобы можно было загружать с GitHub
(проверить алгоритм при случае)
