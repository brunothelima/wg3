import { ref, watch } from 'vue';

// Initializing theme ref with cached theme data
const cache = localStorage.getItem('wg3.theme') || 'light';
const theme = ref(cache);

// Resets cache with new theme value
watch(theme, (payload: string) => {
  localStorage.setItem('wg3.theme', payload);
});

export const useTheme = () => {
  return {
    theme,
  };
};
