import React, { useEffect, useState } from 'react';

import 'intl-pluralrules';
import { AppLocalizationProvider } from '../fluent/l10n.js'; // , locales

import './App.css';

import '../fonts/ubuntu-v20-latin/index.css';

import { Outlet, ScrollRestoration } from 'react-router-dom';

export default function App() {

  const [userLocales, setUserLocales] = useState(navigator.languages)
  // const [currentLocale, setCurrentLocale] = useState(null) // currentLocale

  useEffect(() => {
    // get saved locale from localStorage
    const savedLocale = window.localStorage.getItem('locale') || null
    if (typeof savedLocale === 'string' && savedLocale !== '') {
      setUserLocales([savedLocale])
    } else {
      setUserLocales(navigator.languages)
    }
  }, [setUserLocales])

  // useEffect(() => {
  //   // log the language of the user
  //   if (!!window.umami) {
  //     let systemLocales = navigator.languages
  //     if (!!systemLocales || Array.isArray(systemLocales)) {
  //       for (let locale of systemLocales) {
  //         locale = locale.toLowerCase() // Not really correct but the system locales sadly don't conform to the standard.
  //
  //         const language = locale.split('-')[0]
  //         if (typeof language === 'string' && language !== '') {
  //           window.umami.trackEvent('L: ' + language) // Log just the language.
  //         }
  //       }
  //     }
  //   }
  // }, [])

  // const handleCurrentLocalesChange = useCallback(currentLocales => {
  //   setCurrentLocale(currentLocales.length > 0 ? currentLocales[0] : '')
  // }, [setCurrentLocale])

  useEffect(() => {
    const change_locale = event => {
      const detail = event.detail || {}
      const newLocale = detail.locale || null

      if (newLocale === null) {
        if (!!userLocales && Array.isArray(userLocales) && userLocales.length > 0) { // check that userLocales is not an empty array
          setUserLocales(navigator.languages)
          window.localStorage.removeItem('locale')
        }
      } else {
        setUserLocales([newLocale])
        window.localStorage.setItem('locale', newLocale)
      }
    }

    window.addEventListener('change_locale', change_locale)
    return () => {
      window.removeEventListener('change_locale', change_locale)
    }
  }, [userLocales, setUserLocales])

  return <AppLocalizationProvider
    userLocales={userLocales}
  // onLocaleChange={handleCurrentLocalesChange}
  >
    <div className="app_wrapper">
      <Outlet />
    </div>

    <ScrollRestoration />
  </AppLocalizationProvider>
}
