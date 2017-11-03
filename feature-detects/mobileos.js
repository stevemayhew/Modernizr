/*!
{
  "name": "Mobile OS Detection",
  "property": "mobileos",
  "authors": ["Steve Mayhew"]
}
!*/
/* DOC
Detects if and which Mobile OS the browser is running on.  The antithesis of everything Modernizr is about, but
useful if only for offering download of a mobile app.  Depending on any other feature or capability of the platform
based on this result is a fools errand.

Similar to the video test, Subproperties are provided to describe the platform ('ios' or 'android').

```javascript
Modernizr.mobileos      // true if any of the mobile OS are detected, false otherwise (not False positives on IE happen)
Modernizr.mobileos.ios  // true if Apple platform

*/
define(['Modernizr'], function(Modernizr) {

  Modernizr.addTest('mobileos', function() {
    var value = false;

    try {
      var mobileos = {};

      if ('platform' in navigator) {
        mobileos.ios = /iPad|iPhone|iPod/i.test(navigator.platform) && !window.MSStream;
        mobileos.android = /Android/i.test(navigator.platform);

        value = mobileos.ios || mobileos.android ? mobileos : false;
      }

    } catch(e) {}

    return value;
  });
});
