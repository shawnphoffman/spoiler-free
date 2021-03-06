import { css } from '@linaria/core'

const dark = css`
	--bg: #111;
	--outline: #1d1f26;
	--outlineHover: #18161e;
	--text: #fff;
	--link: #fff;
	--linkAlt: #a0a8d9;
	--linkHover: #2c40af;
	--linkActive: #415cf4;
	--inactive: #333;
	--transparent: #0000;
	--inputBg: #fff;
	--inputBorder: #000;
	--inputFocus: #41f491;

	color: var(--text);
`

const light = css`
	--bg: #eee;
	--outline: #ddd;
	--outlineHover: #ccc;
	--text: #000;
	--link: #333;
	--linkAlt: #3e498c;
	--linkHover: #2c40af;
	--linkActive: #304ffe;
	--inactive: #333;
	--transparent: #0000;
	--inputBg: #fff;
	--inputBorder: #000;
	--inputFocus: #41f491;

	color: var(--text);
`

const themeConditional = theme => {
	if (theme === 'light') return light
	return dark
}

export default themeConditional
