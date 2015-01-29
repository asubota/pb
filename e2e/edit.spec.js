describe('The add view', function() {
  var page;

  beforeEach(function () {
    browser.get('http://localhost:3000/index.html#/addressbook/edit');
    page = require('./main.po');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('PB | AddressBook');
  });

  it('should include Back button', function() {
    var btn = element(by.css('.pb-back'));

    expect(btn.getText()).toBe('Back');
    expect(btn.getAttribute('href')).toMatch('#\/addressbook$');
  });

  it('should include Save button', function() {
    var btn = element(by.css('.pb-save'));

    expect(btn.getText()).toBe('Save');
  });

  describe('Form', function() {
    var firstName = element(by.model('vm.firstName'));
    var lastName = element(by.model('vm.lastName'));
    var email = element(by.model('vm.email'));
    var save = element(by.css('.pb-save'));

    describe('should include inputs', function() {
      it('should include firstName', function() {
        expect(firstName.isPresent()).toBe(true);
      });

      it('should include lastName', function() {
        expect(lastName.isPresent()).toBe(true);
      });

      it('should include email', function() {
        expect(email.isPresent()).toBe(true);
      });
    });

    describe('Save form', function() {
      it('saves form', function() {
        var list, row;

        firstName.sendKeys('firstName');
        lastName.sendKeys('lastName');
        email.sendKeys('asubota@cogniance.com');

        save.click();
        expect(browser.getCurrentUrl()).toMatch(/\/addressbook/);

        list = element.all(by.repeater('a in vm.addresses'));
        expect(list.count()).toEqual(1);
      });
    });
  });



});


