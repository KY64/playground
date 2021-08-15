module.exports = {
  "*.{js,json,md,ts,tsx}": "prettier --write",
  "*.{js,ts,tsx}": ["eslint --fix"],
  "*.ts?(x)": () => "tsc --noEmit"
};