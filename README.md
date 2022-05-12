# Custom-icons

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/integration)
[![GH-release](https://img.shields.io/github/v/release/Mariusthvdb/custom-icons.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/releases)
[![GH-downloads](https://img.shields.io/github/downloads/Mariusthvdb/custom-icons/total?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/Mariusthvdb/custom-icons.svg?style=flat-square)](https://github.com/Mariusthvdb/custom-icons/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/Mariusthvdb/custom-icons.svg?color=red&style=flat-square)](https://github.com/Mariusthvdb/custom-icons)

Several legacy icons and icons collected all over the internet in 1 set, UI selectable.

Upon each [Material Design icons](http://materialdesignicons.com) update to HA, icons tend to be deprecated, and every now and then I'd love to keep using some. Branded icons, or legacy models. 
Several icons by the Frontend magician [Matt8707](https://github.com/matt8707/hass-config) are listed, and I've also found use for the finer grained Shutter icons by [g-kiss](https://github.com/g-kiss/Home-Assistant-custom-shutter-icons), but needed them in another format.

Structure of the file copied from the great and appreciated [Hass Hue Icon](https://github.com/arallsopp/hass-hue-icons) repo by @arallsopp who should recieve all the credits and without whom the HA interface would not be the same ;-)

Thanks to all!

# Installation
Working on Hacs. For manual installation, add:

```yaml
- url: /local/lovelace/resources/custom-icons/custom-icons.js?v=0.1.4
  type: module
```

to your resources file or in Dashboard UI.

## Icons

### Handmade and legacy

custom-icons includes legacy Mdi icons, and several special purpose icons made on request
(more to be listed below, for now check the .js file please)

[//]: # (Start Custom Icons)

| Icon | Name | Author | Icon | Name | Author |
| :--- | :--- | :--- | :--- | :--- | :--- |
| ![custom:apple-homepod-mini](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/apple-homepod-mini.svg)| custom:apple-homepod-mini | @arallsopp | ![custom:apple-homepod](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/apple-homepod.svg)| custom:apple-homepod | @arallsopp | 
| ![custom:cellphone-iphone](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/cellphone-iphone.svg)| custom:cellphone-iphone | Mdi legacy | ![custom:desklamp-on](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/desklamp-on.svg)| custom:desklamp-on | Mdi legacy | 
| ![custom:laptop-mac](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/laptop-mac.svg)| custom:laptop-mac | Mdi legacy | ![custom:light-switch](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/light-switch.svg)| custom:light-switch | Mdi legacy |
| ![custom:shutter-0](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-0.svg)| custom:shutter-0 | @g-kiss | ![custom:shutter-1](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-1.svg)| custom:shutter-1 | @g-kiss |
| ![custom:shutter-2](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-2.svg)| custom:shutter-2 | @g-kiss | ![custom:shutter-3](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-3.svg)| custom:shutter-3 | @g-kiss |
| ![custom:shutter-4](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/shutter-4.svg)| custom:shutter-4 | @g-kiss | ![custom:ikea-death-star](https://raw.githubusercontent.com/mariusthvdb/custom-icons/main/docs/svgs/ikea-death-star.svg)| custom:ikea-death-star | @arallsopp |

[//]: # (End Custom Icons)
