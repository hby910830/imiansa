!(function(){
	$('.links li.drag').on('mouseenter', function(){
		$(this).addClass('active')
	}).on('mouseleave', function(){
			$(this).removeClass('active')
		})
})()



!(function(){
	function Carousel($carousel){
		this.$carousel = $carousel;
		var $ct = this.$ct = $carousel.find('.img-ct');
		this.$pre = $carousel.find('.pre');
		this.$next = $carousel.find('.next');
		this.imgWidth = $ct.find('li').width();
		this.imgSize = $ct.find('li').size();
		var me = this;

		$ct.css('width',this.imgWidth * this.imgSize);
		this.bind();
		this.autoPlay();

		$carousel.on('mouseenter',function(){
			me.stopPlay();
		})

	    $carousel.on('mouseleave',function(){
			me.autoPlay();
		})
	}

	Carousel.prototype = {
		bind: function(){
			var _this = this;
			this.$pre.on('click', function(){
				_this.showPre();
			});
			this.$next.on('click', function(){
				_this.showNext();
			  });
			},

		showPre: function(){
			this.$ct.prepend(this.$ct.children().last());
			this.$ct.css('left', 0-this.imgWidth);
			this.$ct.animate({'left': 0});
		},

		showNext: function(){
			var $ct = this.$ct;
			this.$ct.animate({'left': 0-this.imgWidth},function(){
					$ct.append($ct.children().first());
					$ct.css('left', 0)
				});
			},

		autoPlay: function(){
			var _this = this;
			this.clock = setInterval(function(){
				_this.showNext();
			},3000)
		},

		stopPlay: function(){
			clearInterval(this.clock);
			}
		}


	$('.container').each(function(){
			new Carousel($(this));
		})
})()


!(function() {
	$('#goToTop').on('click',function(){
		$('body').animate({scrollTop:0},400)
	})
})()	
