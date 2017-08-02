      jQuery(function($) {

        // Basic demo
        $('body').panelSnap();

        // Menu demo
        $('.menu_demo .panels').panelSnap({
          $menu: $('.menu_demo .menu')
        });

        // Keyboard demo
        $('.keyboard_demo .panels').panelSnap({
          keyboardNavigation: {
            enabled: true,
            nextPanelKey: 39,
            previousPanelKey: 37,
            wrapAround: false
          }
        });

        // Callback demo
        $('.callback_demo .panels').panelSnap({
          onSnapStart: function($target) {

            log('callback', 'onSnapStart', $target);

          },
          onSnapFinish: function($target) {

            log('callback', 'onSnapFinish', $target);

          },
          onActivate: function($target) {

            log('callback', 'onActivate', $target);

          }
        });

        // Event demo
        $('.event_demo .panels').on('panelsnap:start', event_log);
        $('.event_demo .panels').on('panelsnap:finish', event_log);
        $('.event_demo .panels').on('panelsnap:activate', event_log);

        $('.event_demo .panels').panelSnap();

        function event_log(e, $target) {

          log('event', e.type, $target);

        }

        // Shared log function
        function log(type, action, $target) {

          var text = '<p>' + action + ':<br>' + $target.find('h1').text() + '</p>';
          $('.' + type + '_demo .log h2').after(text);

        }

      });


	$(window).scroll(function() {
		$('#slideImage').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("slideRight");
			}
		});
	});
	
      $(document).foundation();
