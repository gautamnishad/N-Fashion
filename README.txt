# N FATION website

A responsive static men's fashion storefront built with HTML, CSS and JavaScript.

## Preview locally
1. Extract the ZIP.
2. Open `index.html` in a browser. For best results, use VS Code Live Server or another local static server.

## Deploy to Netlify
1. Go to Netlify and choose **Add new site** → **Deploy manually**.
2. Drag the extracted `n_fation_website` folder (or its contents) into the deploy area.
3. Netlify will publish the website and provide a URL.

## Add your WhatsApp number
Open `script.js` and change:
`const WHATSAPP_NUMBER = "";`
to your number with country code, without `+`, spaces or dashes. Example format: `919876543210`.

## Important product note
The 30 catalog entries and prices are sample/demo content. Replace them with your actual products, prices, stock, size and colour options before accepting real orders. Product photos are loaded from Unsplash over the internet, so an internet connection is required.

## Customize products
In `script.js`, edit the `products` array. Each entry contains:
`[name, category, price, description, sizes, colours, UnsplashPhotoId, optionalBadge]`
