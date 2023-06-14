/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 *
 * OpenCRVS is also distributed under the terms of the Civil Registration
 * & Healthcare Disclaimer located at http://opencrvs.org/license.
 *
 * Copyright (C) The OpenCRVS Authors. OpenCRVS and the OpenCRVS
 * graphic logo are (registered/a) trademark(s) of Plan International.
 */
window.config = {
  AUTH_API_URL: 'https://auth.{{hostname}}/',
  CONFIG_API_URL: 'https://config.{{hostname}}',
  // Country code in uppercase ALPHA-3 format
  COUNTRY: 'FAR',
  LANGUAGES: 'en,fr',
  AVAILABLE_LANGUAGES_SELECT: 'en:English,fr:Français',
  CLIENT_APP_URL: 'https://register.{{hostname}}/',
  COUNTRY_CONFIG_URL: 'https://countryconfig.{{hostname}}',
  USER_NOTIFICATION_DELIVERY_METHOD: process.env.USER_NOTIFICATION_DELIVERY_METHOD, // 'sms' or 'email'
  SENTRY: process.env.SENTRY_DSN,
  LOGROCKET: ''
}
