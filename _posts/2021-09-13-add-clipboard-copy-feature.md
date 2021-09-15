---
author: Le Koj
---

#### HOW TO ADD “CLIPBOARD COPY” FEATURE TO CODE SNIPPETS

The clipboard copy feature is a useful functionality that provides rich user experience on your website.  It enables end-users to copy a code snippet or sample content without having to first highlight the content to copy it to their clipboard.  It is an automation of text highlighting and “ctr + v” to copy a content to their clipboard.

An easy way to include the feature on your own site is to use the clipboard.js package link in your site’s `<head>` tag, which loads it from a third party CDN provider.  This package handles all the necessary scripts, saving you time to write your own.  

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.8/clipboard.min.js"></script>
```
{: #gui-app1 .code-container}


You can also choose a different cdn provider from the list of options at github.  The github page link is:

```
https://github.com/zenorocha/clipboard.js/wiki/CDN-Providers
```
{: #gui-app2 .code-container}

#### SETUP

After including the cdn link in your `<head>` tag, you’ll need to instantiate it by passing a DOM selector, HTML element, or list of HTML elements.  Include the following in a javascript file:

```
new ClipboardJS('.btn');
```
{: #gui-app3 .code-container}

This will add event listeners to all elements that matches the selector.

Add a `<button>` element with a data-clipboard-target attribute.  The value of the attribute will be the value of the id attribute of the html element of the target content. The `<button>` element should be an inline element with the same parent as the html element of the target content.  The following code snippet should make things easy:

 ```   
<p class="parent-element">
    <!-- Target -->
    <code id="target" >
        sudo apt-get install x11-xserver-utils
    </code>

    <!-- Trigger -->
    <button class="btn" data-clipboard-target="#target">
        <img class="clippy" src="/image/clippy.svg" alt="Copy to clipboard">
    </button>
</p>
```
{: #gui-app4 .code-container}


To get the clippy.svg source reference in the `<img />` child element of the button element, create an .svg file in your image folder or static folder, and include the following code snippet: 

```
<svg height="1024" width="896" xmlns="http://www.w3.org/2000/svg">
    <path d="M128 768h256v64H128v-64z m320-384H128v64h320v-64z m128 192V448L384 640l192 192V704h320V576H576z m-288-64H128v64h160v-64zM128 704h160v-64H128v64z m576 64h64v128c-1 18-7 33-19 45s-27 18-45 19H64c-35 0-64-29-64-64V192c0-35 29-64 64-64h192C256 57 313 0 384 0s128 57 128 128h192c35 0 64 29 64 64v320h-64V320H64v576h640V768zM128 256h512c0-35-29-64-64-64h-64c-35 0-64-29-64-64s-29-64-64-64-64 29-64 64-29 64-64 64h-64c-35 0-64 29-64 64z" />
</svg>
```
{: #gui-app5 .code-container}


The final step is to add some css to the `<button>` element to give it a nice button user experience.  How you edit the css is up to your creativity.  The following code snippet should make things easy:

```
.clippy {
    width: 15px;
    height: 15px;
    aspect-ratio: 2/2;
    cursor: pointer;
}

.btn {
    width: 30px;
    height: 25px;
    padding-top: 3px;
}

svg:hover {
    background: #3B3B3B;
}
```
{: #gui-app6 .code-container}


#### CUSTOMIZATION

Alternatively, you can modify the javascript instantiation in step 1, by adding a few code scripts to provide feedback when the copy action is triggered.  This will be useful for texting the feature on the web browser. The following code snippets should make things easier:

```
var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e){
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
})

clipboard.on('error', function(e){
    console.error('Action', e.action);
    console.error('Trigger', e.trigger);
})
```
{: #gui-app7 .code-container}


That should be all that is needed to add this useful feature to your webpage.  That’s all folks. One love and happy coding.


CREDITS:

[A modern approach to copy text to clipboard](https://clipboardjs.com/)