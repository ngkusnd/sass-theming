<header>
  <h1 align="center">sass-theming ✨</h1>
  <p align="center">simple, easy and modern way to organize your themes with the harness of CSS custom properties.</p>
  <div align="center">
    <img src="https://img.shields.io/codefactor/grade/github/ngkusnd/sass-theming/main" />
    <img src="https://img.shields.io/npm/v/sass-theming" />
    <img src="https://img.shields.io/github/issues/ngkusnd/sass-theming" />
    <img src="https://img.shields.io/github/stars/ngkusnd/sass-theming" />
    <img src="https://img.shields.io/github/forks/ngkusnd/sass-theming" />
  </div>
</header>

---

## 🚀 Getting Started

> ⚠️ **WARNING**: This sass-theming module is still in early development. Prior to the release of the major version v1, the API can be changed without announcement. Use with care 🤗

### 1. Basic Setup

First, you need to fill in the required configuration. The theme must have at least one theme with the name `default`.

_scss/main.scss_

```scss
@use "sass-theming" with (
  $themes: (
    "default": (
      "accent": (
        "primary": red,
        "secondary": blue,
      ),
      "foreground": #000,
      "background": #fff,
    )
  )
);

@use "base/global";
@use "components/button";
```

### 2. Applying Themes

Create styles with `:root` (recommended) or `body` selector for the the `default` theme using `get-all('theme-name')` mixin.

_scss/base/global.scss_

```scss
@use "sass-theming" as *;

// set this for 'default' theme.
:root {
  @include get-all('default');
}
```

### 3. Getting theme property

Just call the `get()` function with the desired property name as a parameter.

_scss/components/button.scss_

```scss
@use "sass-theming" as *;

button {
  background-color: get('background');
  color: get('foreground');
}
```

To get nested property, you can get them with `get('property--nested-property--nested-property-again')`.

So if you want to get the `primary` property that is in the `accent` property (based on the example above), you can use `get('accent--primary')`.

## 💅 Theming

You can easily add additional themes without much pain of code refactoring. Just add the new theme map to the sass-theming configuration. This is an example to add a `dark` theme:

_scss/main.scss_

```scss
@use "sass-theming" with (
  $themes: (
    "default": (
      "accent": (
        "primary": red,
        "secondary": blue,
      ),
      "foreground": #000,
      "background": #fff,
    ),
    "dark": (
      "accent": (
        "primary": darkred,
        "secondary": darkblue,
      ),
      "foreground": #fff,
      "background": #000,
    )
  )
);

...
```

As you can see, the only prerequisite for theme configuration is that the structure and property names of the theme **must be the same as the default theme**.

Now you can switch between themes with the help of additional dynamic classes. Say you already have a theme toggle switcher that toggles the `dark` class to the `body` tag.

_scss/base/global.scss_

```scss
...

// set this for 'dark' theme.
body.dark {
  @include get-all('dark');
}
```

The styles of components (says `button`) will update accordingly if `body` has a `dark` class name, no need to update the components code.

That's it!

## 🌐 Browser Support

Please see the [CSS Custom Properties Browser Support](https://caniuse.com/css-variables).
