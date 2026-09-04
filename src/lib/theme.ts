/** Theme persistence. Light = NetJets default. */
export const THEME_STORAGE_KEY = "nj-theme";
export const THEME_EVENT = "nj-theme";
export type ThemeMode = "light" | "dark";
export function applyTheme(mode: ThemeMode) {
  document.documentElement.setAttribute("data-theme", mode);
  try { localStorage.setItem(THEME_STORAGE_KEY, mode); } catch {}
  window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: mode }));
}
export function getDocumentTheme(): ThemeMode {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}
export const THEME_FOUC_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="dark"&&t!=="light")t="light";document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;
