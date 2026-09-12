// Session-token helpers.
//
// After a successful GitHub login the backend redirects to /enrolled/* with the
// signed session JWT appended as ?token=<jwt>. We read it off the URL once, keep
// it in localStorage, and then strip it from the address bar so it isn't left in
// history / shared links. Send it back on protected requests as:
//     Authorization: Bearer <token>

const TOKEN_KEY = "ss_token";

// Read ?token= from the current URL (if present), store it, and clean the URL.
export function storeSessionToken() {
  try {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem(TOKEN_KEY, token);
      // Remove the token from the visible URL without a page reload.
      params.delete("token");
      const clean =
        window.location.pathname +
        (params.toString() ? `?${params.toString()}` : "");
      window.history.replaceState({}, document.title, clean);
    }
  } catch (e) {
    // localStorage/URL APIs unavailable — non-fatal.
    console.warn("Could not store session token", e);
  }
}

export function getSessionToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (e) {
    return null;
  }
}

export function clearSession() {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("loggedIn");
  } catch (e) {
    /* no-op */
  }
}
