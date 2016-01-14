# Kedge
Quickly generate fragment indentifiers (anchored uri).

# What gets Kedged?
- [TODO] `<h[number]>` element with an `id` attribute and does not contain an `<a>` element with an anchored uri value for `href` attribute
- [TODO] `<div>` element with an `id` attribute
- [TODO] `<div>` element with an `id` attribute with an header element as an immediate child node without an `id` attribute and does not contain an `<a>`
- [TODO] all of the above and more. `name` attribute, etc.

## References

### Chrome Extension API
- [https://developer.chrome.com/extensions/browserAction](https://developer.chrome.com/extensions/browserAction)

- [https://developer.chrome.com/extensions/tabs](https://developer.chrome.com/extensions/browserAction)

#### testing in browser via extension
example: `chrome-extension://offnkbfkjnhcinhemmfcgdgbmbpcdghl/tests/testRunner.html`
`offnkbfkjnhcinhemmfcgdgbmbpcdghl` is the local ID for the extension. IT WILL DIFFER FOR YOU

### Chrome minimum version requirement: 43
