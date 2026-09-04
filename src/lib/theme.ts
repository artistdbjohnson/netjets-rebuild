/** Theme persistence + attribute contract. Light = NetJets default. */
export const THEME_STORAGE_KEY = "nj-theme";
export const THEME_EVENT = "nj-theme";

export type ThemeMode = "light" | "dark";

export function readStoredTheme(): ThemeMode {
  try {
    const v = localStorage.getItem(THEME_STORAGE_KEY);
    if (v === "dark" || v === "light") return v;
  } catch {
    /* ignore */
  }
  return "light";
}

export function applyTheme(mode: ThemeMode) {
  document.documentElement.setAttribute("data-theme", mode);
  try {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch {
    /* ignore */
  }
  window.dispatchEvent(new CustomEvent(THEME_EVENT, { detail: mode }));
}

export function getDocumentTheme(): ThemeMode {
  const attr = document.documentElement.getAttribute("data-theme");
  return attr === "dark" ? "dark" : "light";
}

/** Inline FOUC guard — run before paint in <head>. Default light. */
export const THEME_FOUC_SCRIPT = `(function(){try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t!=="dark"&&t!=="light")t="light";document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;
