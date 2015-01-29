'use strict';

describe('The main view', function() {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html#/addressbook');
    page = require('./main.po');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('PB | AddressBook');
  });

  it('should include Add button', function() {
    var btn = element(by.css('.pb-add'));

    expect(btn.getText()).toBe('Add');
    expect(btn.getAttribute('href')).toMatch('#\/addressbook/edit$');

    describe('Click on the Add button', function() {
      it('should navigate to the /addressbook/edit page when clicking', function() {
        btn.click();
        expect(browser.getCurrentUrl()).toMatch(/\/addressbook\/edit/);
      });
    });
  });
});
