const PLACEHOLDER_LEADERBOARD = [
  { user: "Contributor One", score: 980 },
  { user: "Contributor Two", score: 875 },
  { user: "Contributor Three", score: 790 },
  { user: "Contributor Four", score: 640 },
  { user: "Contributor Five", score: 590 },
  { user: "Contributor Six", score: 520 },
  { user: "Contributor Seven", score: 470 },
  { user: "Contributor Eight", score: 410 },
  { user: "Contributor Nine", score: 360 },
  { user: "Contributor Ten", score: 300 },
].map((entry) => ({
  ...entry,
  img: `https://ui-avatars.com/api/?name=${encodeURIComponent(entry.user)}&background=1a1428&color=E8A045&bold=true`,
}));

export default PLACEHOLDER_LEADERBOARD;
