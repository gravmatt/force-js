# Force.js

Finally, an easy way to animate elements and jump around on your page.

It has different easing functions (listed below) and tries (by default) to use CSS-Transitions to animate elements.

If the browser doesn't support transitions, force.js fallback to native javascript functions.

Force.js support even older browser version with no transition support.

**Go to the [force-js page](http://gravmatt.com/force-js) and try it out!**

To use it on your page, just write this line of code in the HTML `HEAD` or on the bottom of the `BODY` tag.

```
<script src="force.js" type="text/javascript"></script>
```

**Support for AMD and Node Module Pattern (Including browserify)**

## Get it on Bower

```
bower install force-js
```

## Get it via cdnjs

Just copy and paste it into your project.

```
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/force-js/0.1.1/force.min.js"></script>
```

Go to the [force-js page on cdnjs](https://cdnjs.com/libraries/force-js).

### jQuery

Force.js is 100% pure vanilla!!!

But for all the coders who don't want to miss jQuery.

Force.js automatically detects jQuery and extend its Objects with the **force.move()** and **force.jump()** function.

So you are able to use force.js in an jQuery object.

```
$('#ball').move({left: 100px, top: 50px}, 1000);
```

*To use force.js in jQuery, write the jQuery TAG first. So force.js can extend its objects afterwards.*

## Jump

Doing jumps on the page are easier than every.

To automatically detect hash links on your page, just use the **force.bindHashes()** function like this.

```
force.bindHashes();
```

But if you want to do it by yourself, use the **force.jump()** function.

```
var element = document.getElementBy('element-id');

// jump by object
force.jump(element);

// jump by selector
force.jump('#element-id');
```

You can use the function with additional options.

```
force.jump(target);

var options = {
  setHash: false
  // if set to TRUE, it sets the hash/id value of the element in the URL

  duration: 500,
  done: function() {},
  easing: 'easeInQuad',
};
force.jump(target, options);
```

Or the jQuery extention.

```
$('#ball').jump();

//$('#ball').jump(options);
```

## Move

You can also animate elements with force.js.

To do so, just use the **force.move()** function.

```
var element = document.getElementBy('element-id');

// jump by object
force.move(element, {left: 100px, top: 50px}, 1000);

// jump by selector
force.move('#element-id', {left: 100px, top: 50px}, 1000);
```

You can use the function with additional options.

```
force.move(target, properties, duration, doneCallback);

var options = {
  properties: {
    left: '100px'
  },
  duration: 500,
  done: function() {},
  easing: 'easeInQuad'
};
force.move(target, options);
```

Or the jQuery extention.

```
$('#ball').move({left: 100px, top: 50px}, 1000);

// $('#ball').move(options, duration, doneCallback);
```

Don't worry if you use the function multiple times.

The **force.move()** function is cached!

That means, the function just get executed if the previous call is done.

## Options

In force.js you are able to modify everything you want to fit your needs.

```
// edit single option
force.opt.cacheScrolling = true;

// or use the config function and paste an object to override the old settings.
force.config( { cacheScrolling: true } );
```

#### hashLinkPattern: 'a[href*="#"]:not([href="#"])'
This is a selector to find the hash links in your page by exectuting the **force.bindHashes()** function.

#### frames: 60

By default, force.js runs at 60 fps.

You can edit this property as well.

But be careful!

You can increase but also decrease the performance of the page.

#### moveDuration: 1000 AND jumpDuration: 1000

The default duration for the **force.move()** and **force.jump()** function is **1000** ms.
You can override this value inside the functions by set the duration property in the config object if you want to.

#### moveEasing: 'swing' AND jumpEasing: 'swing'

The default easing function is **swing** but you can change this to:
- swing
- easeInQuad
- easeOutQuad
- easeInOutQuad
- easeInCubic
- easeOutCubic
- easeInOutCubic
- easeInQuart
- easeOutQuart
- easeInOutQuart
- easeInQuint
- easeOutQuint
- easeInOutQuint
- easeInSine
- easeOutSine
- easeInOutSine
- easeInExpo
- easeOutExpo
- easeInOutExpo
- easeInCirc
- easeOutCirc
- easeInOutCirc
- easeInElastic*
- easeOutElastic*
- easeInOutElastic*
- easeInBack*
- easeOutBack*
- easeInOutBack*
- easeInBounce*
- easeOutBounce*
- easeInOutBounce*

\* This easing functions doesn't work with css transitions and use native javascript.
But don't worry, force.js does it automatically for you!

#### cacheJumps: true

Page jumps are cached by default.

That means, the next jump only animates if the previous is finished.

Set it to FALSE and the jump stops immediately and starts the new jump.

#### cssTransitions: true

By default, force.js try to use css transitions if the browser supports it.

Using transitions looks much smoother than native javascript and doesn't block the event loop.

I would recommend it to let it turned ON by default.

force.js manage the usage of transitions automatically if the browser doesn't support it.

### Licence
Force.js is published under the MIT licence. So feel free to use, share or modify it!
