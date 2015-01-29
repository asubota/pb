'use strict';

describe('The main view', function () {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html');
    page = require('./main.po');
  });

  it('should include btnAdd', function() {
    expect(page.btnAdd.getText()).toBe('Add');
    expect(page.btnAdd.getAttribute('href')).toMatch('#\/addressbook/edit$');
  });

});
