import $ from 'jquery'
import backToTop from '../elr-back-to-top'
import fs from 'fs'
import path from 'path'

beforeEach(() => {
  document.body.innerHTML = '<div class="wrapper"></div>'
  backToTop.init()
})

describe('init', () => {
  it('should add button', () => {
    expect($('.back-to-top').length).toBe(1)
  })
})
