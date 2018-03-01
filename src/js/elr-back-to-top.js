// Adds a button for user to scroll to top immediately

import $ from 'jquery'

const createButton = () => {
  return $('<button></button>', {
    class: 'back-to-top fa fa-caret-up'
  })
}

const throttle = (fn, scope, threshold = 500) => {
  let last
  let deferTimer

  return function() {
    let context = scope || this
    let now = +new Date(),
      args = arguments

    if (last && now < last + threshold) {
      // hold on to it
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function() {
        last = now
        fn.apply(context, args)
      }, threshold)
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}

const scrollToView = ($el, speed = 300) => {
  const showElement = speed => {
    const scroll = $(document).scrollTop()
    const height = $(window).height()

    if (scroll > height) {
      $el.fadeIn(speed)
    } else if (scroll < height) {
      $el.fadeOut(speed)
    }
  }

  $(window).on('scroll', throttle(showElement, 100))
}

const toTop = function($content, speed) {
  $content.stop().animate(
    {
      scrollTop: $content.position().top
    },
    speed,
    'swing'
  )
}

export default {
  init() {
    const $button = createButton()
      .appendTo('body')
      .hide()

    scrollToView($button)

    $button.on('click', function() {
      toTop($('body, html'), 900)
    })
  }
}
