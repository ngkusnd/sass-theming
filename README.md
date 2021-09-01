<header>
  <h1 align="center">sass-theming ✨</h1>
  <p align="center">simple, easy and modern way to organize your themes with the harness of CSS custom properties.</p>
  <div align="center">
    <img src="https://img.shields.io/npm/v/sass-theming" />
    <img src="https://img.shields.io/github/issues/ngkusnd/sass-theming" />
    <img src="https://img.shields.io/github/stars/ngkusnd/sass-theming" />
    <img src="https://img.shields.io/github/forks/ngkusnd/sass-theming" />
  </div>
</header>

---

## 🚀 Getting Started

### 1. Basic Setup

First, you need to fill in the required configuration. The theme must have at least one theme with the name 'default'.

_scss/main.scss_

```scss
@use "sass-theming" with (
  $themes: (
    "default": (
      "foreground": #000,
      "background": #fff,
    ),
    "dark": (
      "foreground": #fff,
      "background": #000,
    )
  )
)

@use "base/global";
```

Then, create styles with `:root` (recommended) or `body` selector for the CSS custom properties on the 'default' theme.

_scss/base/global.scss_

```scss
@use "sass-theming" as *;

// set this for 'default' theme.
:root {
  @include get-all('default');
}
```

### 2. Switching Between Themes

You can easily switch between themes with the help of additional dynamic classes. Say you already have a theme switcher button that toggles the 'dark' class to the `body` tag.

_scss/base/global.scss_

```scss
...

// activate the 'dark' theme immediately if the body has a 'dark' class name.
body.dark {
  @include get-all('dark');
}
```

### 3. Theme Style Usage

Later, if you want to apply a style to the component, just call the `get()` function with the desired property name as the parameter.

_scss/components/button.scss_

```scss
@use "sass-theming" as *;

button {
  background-color: get('background');
  color: get('foreground');
}
```

That's it!

## 🌐 Browser Support

Please see the [CSS Custom Properties Browser Support](https://caniuse.com/css-variables).
