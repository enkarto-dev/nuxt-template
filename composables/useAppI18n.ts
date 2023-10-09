/**
 * Composable for handling internationalization (i18n) in your app.
 *
 * @param {string} [prefix] - An optional prefix to prepend to translation keys.
 * @returns {Object} An object containing translation and key functions.
 * @returns {Function} t - A translation function to retrieve localized strings.
 * @returns {Function} k - A key function to format translation keys with an optional prefix.
 *
 * @example
 * <template>
 *  <h1>{{ t("title") }}</h1>
 *  <div v-for="(feature, index) in $tm(k('items'))" :key="index">
 *    {{ $rt(feature["title"]) }}
 *  </div>
 * </template>
 *
 * <script setup lang="ts">
 * const { t } = useAppI18n("home.features");
 * // ...
 * </script>
 *
 */
export default function useAppI18n(prefix?: string) {
  const t = (key: string) => useI18n().t(k(key));
  const k = (key: string) => (prefix ? `${prefix}.${key}` : key);
  return { t, k };
}
