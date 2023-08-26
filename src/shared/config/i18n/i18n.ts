import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDtector from 'i18next-browser-languagedetector';

i18n
	.use(Backend)
	.use(LanguageDtector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ru',
		debug: Boolean(__IS_DEV__),

		interpolation: {
			escapeValue: false,
		},
	});

