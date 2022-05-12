const CUSTOM_ICONS_MAP = {

  "light-switch":{
    path:"M7,1A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1H7M7,3H17V21H7V3M9,6V18H15V6H9M10,7H14V11H10V7M10,13H14V17H10V13Z",
    keywords: ["light","switch"]
  },
  "cellphone-iphone":{
    path:"M16,18H7V4H16M11.5,22A1.5,1.5 0 0,1 10,20.5A1.5,1.5 0 0,1 11.5,19A1.5,1.5 0 0,1 13,20.5A1.5,1.5 0 0,1 11.5,22M15.5,1H7.5A2.5,2.5 0 0,0 5,3.5V20.5A2.5,2.5 0 0,0 7.5,23H15.5A2.5,2.5 0 0,0 18,20.5V3.5A2.5,2.5 0 0,0 15.5,1Z",
    keywords: ["phone","apple"]
  },
  "desklamp-on":{
    path:"m18.080545,6.3920614 2.944882,-0.5724262 0.381617,1.9632536 -2.944881,0.572426 -0.381618,-1.9632534m-1.108732,4.4380246 0.572427,2.944882 -1.963254,0.381617 -0.572426,-2.94488 1.963253,-0.381619m1.541572,-1.91574 2.487113,1.67758L19.882112,12.25 17.395,10.572421 18.513385,8.914346M8.85,2 7.18,4.5 8.32,5.25 5.14,10C5.1,10 5.05,10 5,10a2,2 0 0 0 -2,2c0,0.94 0.66,1.75 1.58,1.95L8.62,20H5v2H15V20H11L6.53,13.28C6.83,12.92 7,12.47 7,12 7,11.7 6.93,11.4 6.8,11.13L10,6.37C9.78,8.05 10.75,9.89 12.45,11L16.89,4.37C15.2,3.24 13.12,3.04 11.65,3.87L8.85,2m7.48,5 -1.66,2.5C15.35,9.95 16.29,9.77 16.75,9.08 17.21,8.39 17,7.46 16.33,7Z",
    keywords: ["light","desk"]
  },
  "laptop-mac":{
    path:"M12,19A1,1 0 0,1 11,18A1,1 0 0,1 12,17A1,1 0 0,1 13,18A1,1 0 0,1 12,19M4,5H20V16H4M20,18A2,2 0 0,0 22,16V5C22,3.89 21.1,3 20,3H4C2.89,3 2,3.89 2,5V16A2,2 0 0,0 4,18H0A2,2 0 0,0 2,20H22A2,2 0 0,0 24,18H20Z",
    keywords: ["computer","office"]
  },

  'shutter-0':{
    path:'M3 4H21V8H19V20H17V8H7V20H5V8H3V49Z',
    keywords: ["shutter","screen"]
  },
  'shutter-1':{
    path:'M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9Z',
    keywords: ["shutter","screen"]
  },
  'shutter-2':{
    path:'M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V129Z',
    keywords: ["shutter","screen"]
  },
  'shutter-3':{
    path:'M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V159Z',
    keywords: ["shutter","screen"]
  },
  'shutter-4':{
    path:'M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V15M8 18H16V20H8V18Z',
    keywords: ["shutter","screen"]
  },

  'corona-virus':{
    path:'M22.5 10.7h-1c-2.3 0-3.5-2.8-1.9-4.5l.7-.7c.5-.5.5-1.4-.1-1.9-.5-.5-1.3-.5-1.8 0l-.7.7c-1.7 1.7-4.5.5-4.5-1.9v-1c0-.7-.6-1.3-1.3-1.3s-1.3.6-1.3 1.3v1c0 2.3-2.8 3.5-4.5 1.9l-.6-.7c-.5-.4-1.4-.4-1.9.1-.4.5-.4 1.3 0 1.8l.7.7c1.7 1.7.5 4.5-1.9 4.5h-1c-.7 0-1.3.6-1.3 1.3s.6 1.3 1.3 1.3h1c2.3 0 3.5 2.8 1.9 4.5l-.7.7c-.5.5-.5 1.4.1 1.9.5.5 1.3.5 1.8 0l.7-.7c1.7-1.7 4.5-.5 4.5 1.9v1c0 .7.6 1.3 1.3 1.3s1.3-.6 1.3-1.3v-1c0-2.3 2.8-3.5 4.5-1.9l.7.7c.5.5 1.4.5 1.9-.1.5-.5.5-1.3 0-1.8l-.7-.7c-1.7-1.7-.5-4.5 1.9-4.5h1c.7 0 1.3-.6 1.3-1.3s-.6-1.3-1.4-1.3h0zm-12 2a2.22 2.22 0 0 1-2.2-2.2 2.22 2.22 0 0 1 2.2-2.2 2.22 2.22 0 0 1 2.2 2.2 2.22 2.22 0 0 1-2.2 2.2zm3.7 2.6a1.11 1.11 0 0 1-1.1-1.1 1.11 1.11 0 0 1 1.1-1.1 1.11 1.11 0 0 1 1.1 1.1 1.11 1.11 0 0 1-1.1 1.1z',
    keywords: ["danger","health"]
  },
  'roborock-sensor':{
    path:'M8 11v2c0 1.1-.9 2-2 2H4V9h2c1.1 0 2 .9 2 2zm3.6 1c0 1.9-.6 3.6-1.6 5l1.5 1.3c1.3-1.8 2.1-3.9 2.1-6.3s-.8-4.5-2.1-6.3L10 7c1 1.4 1.6 3.1 1.6 5zm5.4 0a13.56 13.56 0 0 1-2.9 8.4l1.5 1.3c2.2-2.7 3.4-6 3.4-9.7s-1.2-7-3.3-9.7l-1.5 1.3C15.9 5.9 17 8.8 17 12z',
    keywords: ["vacuum","appliances"]
  },
  'roborock-filter':{
    path:'M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H3V6h18v12zM7 16H5V8h2v8zm4 0H9V8h2v8zm4 0h-2V8h2v8zm4 0h-2V8h2v8z',
    keywords: ["vacuum","appliances"]
  },
  'roborock-mainbrush':{
    path:'M5.3 16H4v3.2c0 .3.1.5.3.7.2.1.5.1.7 0L7.4 18l2.3 1.9c.2.1.5.1.7 0L12 18l1.6 1.9c.1.1.3.1.4.1s.2 0 .3-.1l2.3-1.9 2.4 1.9c.2.1.5.1.7 0s.3-.4.3-.7V16H5.3zM21 14H3c-.5 0-1-.4-1-1v-2c0-.6.5-1 1-1h18c.5 0 1 .4 1 1v2c0 .6-.5 1-1 1zm-2.3-6H20V4.8c0-.3-.1-.5-.3-.7-.2-.1-.5-.1-.7 0L16.6 6l-2.3-1.9c-.2-.1-.5-.1-.7 0L12 6l-1.6-1.9c-.1-.1-.3-.1-.4-.1s-.2 0-.3.1L7.4 6 5 4.1c-.2-.1-.5-.1-.7 0-.2.2-.3.4-.3.7V8h14.7z',
    keywords: ["vacuum","appliances"]
  },
  'roborock-sidebrush':{
    path:'M17 12h5a10.09 10.09 0 0 1-1.3 5c-.9 1.6-2.2 2.8-3.7 3.7l-2.5-4.3c.7-.4 1.4-1 1.8-1.8.5-.9.7-1.7.7-2.6zM7 3.3l2.5 4.3c1.5-.9 3.4-.9 5 0L17 3.3a10.18 10.18 0 0 0-10 0zM7 12H2c0 3.5 1.8 6.8 5 8.7l2.5-4.3C7.9 15.4 7 13.7 7 12zm7.6 1.5c.8-1.4.3-3.3-1.1-4.1s-3.3-.3-4.1 1.1-.3 3.3 1.1 4.1 3.3.3 4.1-1.1z',
    keywords: ["vacuum","appliances"]
  },
  'roborock-vacuum':{
    path:'M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2h0zm-4.4 8c0-.3 0-.6.1-.9H4v1.8h3.6V10zm8.8-.9c.1.3.1.6.1.9s0 .6-.1.9H20V9.1h-3.6zM12 13.6c2 0 3.6-1.6 3.6-3.6S14 6.4 12 6.4 8.4 8 8.4 10s1.6 3.6 3.6 3.6z',
    keywords: ["vacuum","appliances"]
  },
  'roborock-vacuum-map':{
    path:'M12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8-8-3.6-8-8 3.6-8 8-8m0-2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2h0zm-4.4 8c0-.3 0-.6.1-.9H4v1.8h3.6V10zm8.8-.9c.1.3.1.6.1.9s0 .6-.1.9H20V9.1h-3.6zM12 6.4c-1.2 0-2.3.6-2.9 1.6H15c-.7-.9-1.8-1.6-3-1.6zm0-1c1.8 0 3.3 1 4.1 2.6h1.7c-1.3-1.8-3.4-3-5.7-3S7.5 6.2 6.3 8H8c.7-1.5 2.2-2.6 4-2.6zm0 8.2c2 0 3.6-1.6 3.6-3.6S14 6.4 12 6.4 8.4 8 8.4 10s1.6 3.6 3.6 3.6zm0 0c1.2 0 2.3-.6 2.9-1.6H9.1c.6.9 1.7 1.6 2.9 1.6zm4.1-1.6a4.58 4.58 0 0 1-4.1 2.6c-1.8 0-3.3-1-4.1-2.6H5c0 3.9 3.1 7 7 7s7-3.1 7-7h-2.9z',
    keywords: ["vacuum","appliances"]
  },
  'docker-watchtower':{
    path:'M11 7v1L1 12V3l10 4zm7-2v18h-2v-1.3l-3.5-3.9L9 21.7V23H7V11.8l4.4-1.8H16V6l-1-1h-3.6L8.6 3.9 12.5 1 18 5zm-6.2 12L9 13.8v6.4l2.8-3.2zm4.2-3.2L13.2 17l2.8 3.2v-6.4zm0-1.8H9v.3l3.5 3.9 3.5-3.9V12z',
    keywords: ["computer","office"]
  },
  'synology-nas':{
    path:'M3 6v11h3V6H3zm2 10H4v-1h1v1zM7 6v11h3V6H7zm2 10H8v-1h1v1zm2-10v11h3V6h-3zm2 10h-1v-1h1v1zm2-10v11h3V6h-3zm2 10h-1v-1h1v1zm4-13H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 15a.94.94 0 0 1-1 1H4c-1.1 0-2-.9-2-2V6a.94.94 0 0 1 1-1h15a.94.94 0 0 1 1 1v12zm2-1a.94.94 0 0 1-1-1 .94.94 0 0 1 1-1 .94.94 0 0 1 1 1 .94.94 0 0 1-1 1z',
    keywords: ["computer","office"]
  },
  'imac-ssd':{
    path:'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2v-3a1.08 1.08 0 0 1 1-1h10a1.08 1.08 0 0 1 1 1v3c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 6a.94.94 0 0 1-1-1 .94.94 0 0 1 1-1 .94.94 0 0 1 1 1 .94.94 0 0 1-1 1zm10 0a.94.94 0 0 1-1-1 .94.94 0 0 1 1-1 .94.94 0 0 1 1 1 .94.94 0 0 1-1 1zm-4.4 16h-1.1v-3h1.1v3zm2.2 0h-1.1v-3h1.1v3zm2.2 0h-1.1v-3H17v3zm-8.9 0H7v-3h1.1v3zm2.2 0H9.2v-3h1.1v3z',
    keywords: ["computer","office"]
  },
  'studio-monitor':{
    path:'M18 0H6C4.9 0 4 .9 4 2v20c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-6 2.5A1.54 1.54 0 0 1 13.5 4 1.54 1.54 0 0 1 12 5.5 1.54 1.54 0 0 1 10.5 4 1.54 1.54 0 0 1 12 2.5zM16 22H8v-2h8v2zm-4-3a6.02 6.02 0 0 1-6-6 6.02 6.02 0 0 1 6-6 6.02 6.02 0 0 1 6 6 6.02 6.02 0 0 1-6 6zm0-10c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z',
    keywords: ["computer","office"]
  },
  'eq-calibrate':{
    path:'M6 22H3v-2h3v2zm0-5H3v2h3v-2zm0-3H3v2h3v-2zm0-3H3v2h3v-2zm0-3H3v2h3V8zm5 12H8v2h3v-2zm5 0h-3v2h3v-2zm0-3h-3v2h3v-2zm0-3h-3v2h3v-2zm0-3h-3v2h3v-2zm0-3h-3v2h3V8zm0-3h-3v2h3V5zm0-3h-3v2h3V2zm5 18h-3v2h3v-2zm0-3h-3v2h3v-2zm0-3h-3v2h3v-2zm0-3h-3v2h3v-2zm0-3h-3v2h3V8zm-10 9H8v2h3v-2zm0-3H8v2h3v-2zm0-3H8v2h3v-2z',
    keywords: ["sensor"]
  },
  'pedestal-fan':{
    path:'M13.5 13.6c-1.4.8-3.3.3-4.1-1.1s-.3-3.3 1.1-4.1 3.3-.3 4.1 1.1.3 3.3-1.1 4.1zm7.3-8.7c-.6-.6-1.9-2-3.9-1.8-1.5.1-2.6 1.2-2.9 1.5-.3.4-.7 1-1 1.6 2.3.4 4 2.4 4 4.8 0 .4-.1.8-.2 1.2.4 0 .6.1.8.1.1 0 .7.1 1.4.3s.7.3 1.2.3c.4.1.8.1 1.1 0 0 0 .5-.2 1-.8.8-1 .9-4.8-1.5-7.2zm-5.1 9.5c-.9 1-2.2 1.6-3.7 1.6-1.3 0-2.6-.5-3.5-1.4-.2.3-.3.5-.5.6-.1.1-.4.5-1 1.1-.5.5-.6.5-.9.8s-.5.6-.6 1c0 0-.1.5.2 1.2.5 1.3 3.7 3.2 7.1 2.4.8-.2 2.7-.7 3.5-2.4.7-1.4.3-2.8.1-3.2-.1-.6-.4-1.1-.7-1.7zM7 11a4.95 4.95 0 0 1 3.6-4.8c-.2-.4-.2-.5-.3-.7 0-.1-.2-.6-.4-1.4l-.3-1.2c-.2-.4-.3-.7-.6-1 0 0-.4-.4-1.1-.5-1.4-.1-4.7 1.7-5.6 5-.2.8-.8 2.7.3 4.3.9 1.3 2.3 1.6 2.7 1.7.5.1 1.2.1 1.9.1-.1-.5-.2-1-.2-1.5z',
    keywords: ["fan"]
  },
  'tv':{
    path:'M23,2H1C0.5,2,0,2.5,0,3v14c0,0.5,0.5,1,1,1h22c0.5,0,1-0.5,1-1V3C24,2.5,23.5,2,23,2z M22,16H2V4h20V16z M19,22H5c-0.6,0-1-0.4-1-1v0c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1v0C20,21.6,19.6,22,19,22z',
    keywords: ["tv","video"]
  },
  'hdmi-source':{
    path:'M10 16v-3H2v-2h8V8l5 4-5 4zM20 3H4c-1.1 0-2 .9-2 2v4h2V5h16v14H4v-4H2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z',
    keywords: ["tv","video"]
  },
  'iphone-modern':{
    path:'M16 1H8C6.3 1 5 2.3 5 4v16a3.01 3.01 0 0 0 3 3h8a3.01 3.01 0 0 0 3-3V4c0-1.7-1.3-3-3-3zm1 18c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V5c0-1 .7-1.8 1.6-2 .2.8 1 1.5 1.9 1.5h3c.9 0 1.7-.6 1.9-1.5.9.2 1.6 1 1.6 2v14z',
    keywords: ["iphone","mobile"]
  },
  'lock':{
    path:'M18,11V8c0-3.3-2.7-6-6-6S6,4.7,6,8v3H5v11h14V11H18z M8,8c0-2.2,1.8-4,4-4s4,1.8,4,4v3H8V8z',
    keywords: ["lock","security"]
  },
  'hue':{
    path:'M13.4 22.9c0 .4-.2.4-.3.4h-2.3c-.1 0-.3-.1-.3-.4s.3-.4.3-.4h2.3c0 0 .3 0 .3.4zm1.2-3.2H9.3s-.4 0-.4.4.3.4.4.4h5.4c.1 0 .4 0 .4-.4-.1-.4-.5-.4-.5-.4zm0 1.4H9.3s-.4 0-.4.4.3.4.4.4h5.4c.1 0 .4 0 .4-.4-.1-.4-.5-.4-.5-.4zm0-2.7H9.3s-.4 0-.4.4.3.4.4.4h5.4c.1 0 .4 0 .4-.4s-.5-.4-.5-.4zM18.5 3C18.4.9 14.5.6 12.8.6h-1.6C9.5.7 5.5.9 5.5 3c0 .2 0 1.2 1 3.9 0 .1.1.4.3.5v.3c.2.4 1.6 3.4 1.5 8.9v.8s0 .3.5.3H15c.5 0 .5-.2.5-.3v-.8c0-5.5 1.3-8.5 1.5-8.9v-.3c.2-.2.3-.4.4-.5 1.2-2.7 1.1-3.6 1.1-3.9z',
    keywords: ["light","lamp"]
  },
  'imac-alternative':{
    path:'M8 22l2-2h4l2 2H8zM24 4v13c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2zm-2 0H2v11h20V4z',
    keywords: ["apple","computer"]
  },
  'apple-homepod':{
    path:"M17.12,1.98c-1.37-0.42-3.05-0.64-5.04-0.64c-1.81,0-3.38,0.18-4.69,0.51c1.42,0.35,3.17,0.57,5.15,0.57 C14.26,2.42,15.81,2.25,17.12,1.98z M18.68,2.61c-1.79,0.53-3.99,0.81-6.14,0.81c-2.4,0-4.88-0.35-6.76-1.01C3.9,3.26,2.89,4.59,2.89,6.32v11.52 c0,1.85,1.13,3.2,3.26,4c0.66,1.18,4.57,1.28,5.85,1.28c1.29,0,5.26-0.1,5.87-1.31c2.12-0.8,3.24-2.14,3.24-3.97V6.32 C21.11,4.72,20.26,3.46,18.68,2.61z",
    keywords: ["assistant"]
  },
  'apple-homepod-mini':{
    path:"M18.97,3.19C18.97,3.19,18.97,3.19,18.97,3.19c-0.06-0.07-0.14-0.14-0.24-0.21c-0.01-0.01-0.01-0.01-0.02-0.02l-0.01,0 c-0.23-0.15-0.56-0.29-0.97-0.41c-0.01,0-0.02,0-0.02-0.01c-0.4-0.12-0.87-0.22-1.41-0.3c-0.03-0.01-0.07-0.01-0.1-0.02 c-0.26-0.04-0.54-0.08-0.83-0.11c-0.01,0-0.02,0-0.04,0c-0.27-0.03-0.55-0.05-0.84-0.07c-0.06,0-0.12-0.01-0.18-0.01 c-0.3-0.02-0.6-0.03-0.92-0.05c-0.05,0-0.11,0-0.16,0c-0.28-0.01-0.56-0.01-0.85-0.01c-0.05,0-0.09,0-0.13,0c-0.06,0-0.13,0-0.19,0 c-0.4,0-0.78,0.01-1.16,0.02c-0.05,0-0.1,0-0.15,0c-0.36,0.01-0.71,0.03-1.04,0.05c-0.05,0-0.1,0.01-0.15,0.01 C9.24,2.08,8.92,2.1,8.61,2.13c-0.03,0-0.07,0.01-0.1,0.01C7.52,2.25,6.7,2.4,6.12,2.61c-0.01,0-0.02,0.01-0.03,0.01 C5.9,2.69,5.78,2.78,5.65,2.86c-0.01,0,0.01,0,0,0C5.5,2.97,5.4,3.03,5.28,3.14C2.93,5.08,1.42,8,1.42,11.28 c0,4.19,2.45,7.8,5.99,9.53c0.11,0.17,0.25,0.32,0.45,0.45c0.16,0.1,0.34,0.19,0.56,0.26c0.24,0.08,0.47,0.14,0.69,0.19 c0.04,0.01,0.08,0.02,0.11,0.03c0.21,0.04,0.42,0.07,0.64,0.1c0.04,0,0.09,0.01,0.13,0.01c0.22,0.02,0.44,0.03,0.67,0.04 c0.03,0,0.06,0,0.09,0c0.24,0.01,0.49,0.01,0.76,0.01c0.02,0,0.03,0,0.05,0c0.03,0,0.06,0,0.09,0c0.19,0,0.4,0,0.61,0 c1.38,0,2.23-0.05,3.34-0.32c0.88-0.22,1.27-0.53,1.43-0.89c3.41-1.77,5.74-5.31,5.74-9.4C22.77,8.03,21.29,5.14,18.97,3.19z M12.08,4.03c-2.51,0-4.3-0.3-5.26-0.59c0.86-0.22,2.49-0.45,5.27-0.46l0.19,0c2.47,0,4.13,0.25,5.07,0.5 C16.33,3.75,14.55,4.03,12.08,4.03z",
    keywords: ["assistant"]
  },
};

async function getIcon(name) {
  let new_name;

  if (!(name in CUSTOM_ICONS_MAP)) {
    // try swapping the '_' for a '-'
    new_name = name.replace(/_/gm, `-`);
    if (!(new_name in CUSTOM_ICONS_MAP)) {
      console.log(`Icon "${name}" is not available`);
      return '';
    }else{
      console.log(`Aliased "${name}" with "${new_name}"`);
      return {path: CUSTOM_ICONS_MAP[new_name].path};
    }
  }
  return {path: CUSTOM_ICONS_MAP[name].path};
}
async function getIconList() {
  return Object.entries(CUSTOM_ICONS_MAP).map(([icon, content]) => ({
    name: icon,
    keywords: content.keywords,
  }));
}
window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

const Name = "Custom-icons";
const Version = "0.1.4";
const Description = "22020512";
const Url = "https://github.com/Mariusthvdb/custom-icons";
console.info(
    `%c  ${Name}  \n%c  Version ${Version} ${Description}`,
    "color: gold; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: steelblue"
);