# Откат блоков на вариант после беты
Что можно будет удалять при выходе с беты?

В файлах *.html и *.css я закомментировал строки, которые надо будет раскомментить при нужде. Чтобы понять, что это именно те строчки, я добавил комментарии для быстрого поиска:

#COMMET - строка начала комментария
#END_COMMET - строка окончания комментария

Чтобы убрать излишки от уже не нужных вещей (которые были на время бетки), были добавлены такие комментарии в тех же файлах:

#DELETE - строка, с которой начинается код под удаление
#END_DELETE - строка, по которую заканчивается код

Чтобы было проще найти нужный блок, добавил комментарий с названием этого блока из скетча.


# Замена анимации
Все анимации храняться в папке /animations

Чтобы заменить анимацию нужно найти нужный блок по комментарию:
Анимация "Название анимации"

Пример названия:
Анимация Hotkeys

После нахождения блока там будет примерно такой блок:
<div id="hotkeys_hype_container" class="HYPE_document">
    <script type="text/javascript" charset="utf-8" src="./animations/Hotkeys/Hotkeys.hyperesources/hotkeys_hype_generated_script.js"></script>
</div>

Дальше идем в файл *.html в папке анимации, в котором надо найти комментарий:
<!-- copy these lines to your document: -->
<!-- end copy -->

Между этими строчка будет что-то такое:
<div id="hotkeys_hype_container" class="HYPE_document" style="margin:auto;position:relative;width:568px;height:620px;overflow:hidden;">
    <script type="text/javascript" charset="utf-8" src="Hotkeys.hyperesources/hotkeys_hype_generated_script.js?77972"></script>
</div>

Эту строчку вставляем вместо старой анимации и нужно дописать ./animatios/NAME/ в строчку src=""

Должно получиться что-то такое:
<div id="hotkeys_hype_container" class="HYPE_document" style="margin:auto;position:relative;width:568px;height:620px;overflow:hidden;">
    <script type="text/javascript" charset="utf-8" src="./animatios/Hotkeys/Hotkeys.hyperesources/hotkeys_hype_generated_script.js?77972"></script>
</div>

