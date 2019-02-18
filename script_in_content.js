/*
*  vis - visibility
* */

const iconEye = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"\n' +
	'\t viewBox="0 0 502.745 502.745" fill="#bcbcbc" style="width:16px;height:16px;margin:7px;" xml:space="preserve">\n' +
	'<g>\n' +
	'\t<path d="M497.605,231.935C448.218,145.541,353.867,91.872,251.372,91.872S54.528,145.541,5.141,231.935\n' +
	'\t\tc-6.854,11.989-6.854,26.886,0,38.875c49.387,86.394,143.738,140.063,246.232,140.063s196.845-53.669,246.232-140.063\n' +
	'\t\tC504.458,258.821,504.458,243.924,497.605,231.935z M484.582,263.366c-46.723,81.733-136.084,132.507-233.21,132.507\n' +
	'\t\tc-97.125,0-186.486-50.773-233.209-132.507c-4.229-7.397-4.229-16.589,0-23.986c46.723-81.733,136.084-132.507,233.209-132.507\n' +
	'\t\tc97.126,0,186.487,50.773,233.21,132.506C488.811,246.777,488.811,255.968,484.582,263.366z"/>\n' +
	'\t<path d="M251.372,139.872c-61.481,0-111.5,50.019-111.5,111.5s50.019,111.5,111.5,111.5s111.5-50.019,111.5-111.5\n' +
	'\t\tS312.854,139.872,251.372,139.872z M251.372,347.872c-53.21,0-96.5-43.29-96.5-96.5s43.29-96.5,96.5-96.5s96.5,43.29,96.5,96.5\n' +
	'\t\tS304.583,347.872,251.372,347.872z"/>\n' +
	'\t<path d="M298.757,220.586c-3.741,1.778-5.332,6.253-3.553,9.994c3.098,6.516,4.668,13.512,4.668,20.792\n' +
	'\t\tc0,26.743-21.757,48.5-48.5,48.5s-48.5-21.757-48.5-48.5s21.757-48.5,48.5-48.5c7.279,0,14.274,1.57,20.791,4.667\n' +
	'\t\tc3.742,1.779,8.216,0.187,9.994-3.554s0.187-8.215-3.554-9.993c-8.544-4.061-17.706-6.12-27.23-6.12\n' +
	'\t\tc-35.014,0-63.5,28.486-63.5,63.5s28.486,63.5,63.5,63.5s63.5-28.486,63.5-63.5c0-9.526-2.06-18.688-6.122-27.233\n' +
	'\t\tC306.973,220.399,302.5,218.807,298.757,220.586z"/>\n' +
	'</svg>';

const iconTablet = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.5 0h-14C3.12 0 2 1.12 2 2.5v19C2 22.88 3.12 24 4.5 24h14c1.38 0 2.5-1.12 2.5-2.5v-19C21 1.12 19.88 0 18.5 0zm-7 23c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7.5-4H4V3h15v16z"/></svg>';

const iconDesktop = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/></svg>';

const iconMobile = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';

window.onload = function () {
	const element = document.getElementsByTagName("BODY")[0];
	let cssMeTextarea;

	if (hasClass(element, 'admin-panel')) {

		/* + Проверка наличия стороннего кода приложения */
		const codeBox = document.getElementsByClassName('widget-post-insert-code');

		if (codeBox.length) {
			initWidgetInsertCode();
		}

		function initWidgetInsertCode() {

			const insertCode = document.getElementsByClassName('insert-code-content');
			if (insertCode.length > 0 && insertCode.length === codeBox.length) {

				console.log('insertCode load');

				for (let i = 0; i < codeBox.length; i++) {
					cssMeTextarea = codeBox[i].getElementsByTagName('textarea')[0];
					cssMeTextarea.id = 'textarea_' + codeBox[i].id.split('_')[1];
					// Логика открытия-закрытия виджета сторонний код, может быть переделана под получение содержимого напрямую
					const elem = codeBox[i].getElementsByClassName('addcode')[0];
					elem.click(); // Открвает виджет сторонний код, чтобы подгрузить его содержимое

					const closeSettings = codeBox[i].getElementsByClassName('b-cancel')[0];
					closeSettings.click(); // Закрываем виджет сторонний код.

					if (cssMeTextarea.value !== '') {
						parseTextarea(cssMeTextarea.value);
					}

				}
			} else { // Повторная попытка дождаться загрузки содержимого виджета сторонний код

				console.log('insertCode not load');

				setTimeout(function () {
					initWidgetInsertCode()
				}, 1000)
			}

			function parseTextarea(val) {
				const checkCssMeTextarea = hasCssMeTextarea (val);

				if (checkCssMeTextarea !== -1) { // проверяем наличие в виджете специального комментария (что виджет для работы расширения)
					let cssArray = val.split('\n');

					for (let i = 0; i < cssArray.length; i++) {
						const checkArrayEl = cssArray[i].search('#'); // отсекаем только эл-ты текста содержащие id

						if (checkArrayEl !== -1) {
							const cssArray2 = cssArray[i].split(' ');

							if (cssArray2.length === 3) {
								const id = '#element_' + cssArray2[1].split('_')[1];
								const adaptive = '.js-cssMe__vis-' + cssArray2[0].split('-')[1];

								document.querySelector(id + ' ' + adaptive).classList.add("is-active");
							}
						}
					}

				} else {
					// console.error(val);
				}

			}
		}

		/* - Проверка наличия стороннего кода приложения */

		// Проверка наличия задействонного расширением виджета
		function hasCssMeTextarea (val) {
			return val.search("cssMePlease");
		}

		// Создаем кнопки
		const widgetControlPanel = document.getElementsByClassName("widget-control-panel");
		const widget = document.getElementsByClassName("element-box"); // Тут возможно проблемы с неймингом

		for (let i = 0; i < widget.length; i++) {
			const newEl = document.createElement('div');

			newEl.innerHTML = "<div data-id='cmv" + i + "' class='js-cssMe-vis cssMe-vis'>" + iconEye + "</div>" +
				"<div data-id='"+widget[i].getAttribute("data-id")+"' id='cmv" + i + "' class='cssMe__vis-box cssMe__arrow-box js-cssMe-vis-box hide'>" +
					"<div data-type='mobile' class='js-cssMe__vis-mobile cssMe__vis-mobile cssMe__vis-btn'>" + iconMobile + "</div>" +
					"<div data-type='tablet' class='js-cssMe__vis-tablet cssMe__vis-tablet cssMe__vis-btn'>" + iconTablet + "</div>" +
					"<div data-type='desktop' class='js-cssMe__vis-desktop cssMe__vis-desktop cssMe__vis-btn'>" + iconDesktop + "</div>" +
				"</div>";
			newEl.className = 'control';
			widgetControlPanel[i].appendChild(newEl);
		}

		// Показываеи вызванные по клику кнопки
		const jVis = document.getElementsByClassName("js-cssMe-vis");
		for (let i = 0; i < jVis.length; i++) {
			jVis[i].onclick = function () {
				console.log(jVis[i], 'click');
				let controllerPIC = false; // Контроллер наличия подходящего "виджета сторонний код"
				const checkPICMass = document.getElementsByClassName('setting-post-insert-code');
				const lenghtPICMass = checkPICMass.length;
				let counterPICMass = 0;

				if(lenghtPICMass) {
					for (counterPICMass; counterPICMass<lenghtPICMass;counterPICMass++){
						const tAreaVal =  checkPICMass[counterPICMass].getElementsByTagName('textarea')[0].value;
						if( tAreaVal === ''){
							controllerPIC = true;
						} else {
							const checkCssMeTextarea = hasCssMeTextarea (tAreaVal);
							if( checkCssMeTextarea !== -1){
								controllerPIC = true;
							}
						}
					}
				}

				if (controllerPIC) { // Проверяем есть ли на странице виджет 'Встроенный код'
					$(jVis[i].getAttribute("data-id")).classList.remove("hide"); // Усешный кейс, показываем панель с кнопками видимости
				} else { // Временное решение, в дальнейшем возможна интеграция со стороны проекта, либо более красивая реализация
					alert("Не найдено ни одного подходящего виджета 'Встроенный код'. Пожалуйста добавьте пустой виджет на страницу.");
				}
			};
		}

		// Прячем показанные кнопки выйдя за границы контейнера
		const vBox = document.getElementsByClassName("js-cssMe-vis-box");
		for (let i = 0; i < vBox.length; i++) {
			vBox[i].onmouseleave = function () {
				vBox[i].classList.add("hide");
			}
		}

		// Клик по кнопке "мобильный"
		const mBtn = document.querySelectorAll('[class*="js-cssMe__vis-"]');
		for (let i = 0; i < mBtn.length; i++) {
			mBtn[i].onclick = function () {
				if (hasClass(mBtn[i], 'is-active')) {
					mBtn[i].classList.remove("is-active");
					generateNewCode(mBtn[i], false);
				} else {
					mBtn[i].classList.add("is-active");
					generateNewCode(mBtn[i], true);
				}
			};
		}

		// Генерируем новый код
		function generateNewCode(btnId, addController) {
			const id = btnId.closest('.js-cssMe-vis-box').getAttribute("data-id");
			const type = btnId.getAttribute("data-type");
			const generatedText = '.adaptive-' + type +' #widget_' + id + ' {display:none;}\n';

			if(cssMeTextarea === undefined){
				initWidgetInsertCode();
			}

			if(addController){ // Добавление
				if(cssMeTextarea.value === ''){ // Первичная генерация
					cssMeTextarea.value = '<style>\/*cssMePlease*\/\n' + generatedText + '</style>';
				} else { // К старому добавляем новый
					const textMassiv = cssMeTextarea.value.split('</style>');

					cssMeTextarea.value = textMassiv[0] + generatedText + '</style>';
				}
			} else { // Удаление
				const textMassiv = cssMeTextarea.value.split(generatedText);
				cssMeTextarea.value = textMassiv[0] + textMassiv[1];
			}

			document.dispatchEvent(new CustomEvent('updateInsertCode', {
				bubbles: true,
				detail: {
					textarea_id: cssMeTextarea.id
				}
			}));

		}

	}
};



