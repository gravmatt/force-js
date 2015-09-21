
/*
    The MIT License (MIT)

    Copyright (c) 2015 Rene Tanczos <gravmatt@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
*/

/*! Copyright (c) 2015 Rene Tanczos <gravmatt@gmail.com> - The MIT License (MIT) */
(function(window, document, undefined) {

  window.force.bindHashes();

  var menu    = document.getElementById('menu'),
      banner  = document.getElementById('banner');

  window.onscroll = function() {

    if(window.scrollY > menu.offsetTop) {
      menu.classList.add('fixed');
    }

    if(window.scrollY < (banner.offsetTop+banner.clientHeight)){
      menu.classList.remove('fixed');
    }
  };

  function setMenuBar() {
    banner.style.height = window.innerHeight > 780 ? (window.innerHeight - 180) + 'px' : '600px';
  }

  setMenuBar();

  window.onresize = function() {
    setMenuBar();
  };

  // Link Spy Object
    function LinkSpy(options) {

        this.options = options || {};
        this.links = [];

        this.start = function () {
            var spyLinks = document.querySelectorAll('.spy-link');

            [].forEach.call(spyLinks, function(link) {

                if (typeof link !== 'object') return;

                var sectionID = link.querySelector('a').getAttribute('href');

                var section = document.querySelector(sectionID);

                this.links.push({
                    link: link,
                    section: section
                });
            }.bind(this));

            window.addEventListener('scroll', function(e) {
                this.scrolling();
                this.options.scrollCallback && this.options.scrollCallback(e);
            }.bind(this), false);
        };

        this.scrolling = function () {

            var tmpLink = null;

            for (var idx in this.links) {

                var el = this.links[idx];

                if (window.scrollY > el.section.offsetTop - 300)
                    tmpLink = el;

                if (window.scrollY + window.innerHeight > document.body.scrollHeight - 20)
                    tmpLink = el;
            }

            if (window.scrollY < this.links[0].section.offsetTop) {
                var prevLink = document.querySelector('li.active');
                prevLink && prevLink.classList.remove('active');
            }

            if (tmpLink && !tmpLink.link.classList.contains('active')) {
                var prevLink = document.querySelector('li.active');
                prevLink && prevLink.classList.remove('active');
                tmpLink.link.classList.add('active');
            }
        };
    }

    (new LinkSpy()).start();
})(window, document);
