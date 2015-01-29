/* jshint -W117, -W030 */
describe('app.addressbook', function() {
  var controller;

  beforeEach(function() {
    module('app', function($provide) {
      specHelper.fakeRouteProvider($provide);
      specHelper.fakeLogger($provide);
    });
    specHelper.injector(function($controller, $q, $rootScope, dataservice) {});
  });

  beforeEach(function () {
    sinon.stub(dataservice, 'query', function() {
      var deferred = $q.defer();
      deferred.resolve(mockData.query());
      return deferred.promise;
    });

    controller = $controller('AddressBook');
    $rootScope.$apply();
  });

  describe('AddressBook controller', function() {
    it('should be created successfully', function () {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of AddressBook', function() {
        expect(controller.title).to.equal('AddressBook');
      });

      it('should have clear function', function () {
          expect(controller.clear).to.be.defined;
      });

      it('should have remove function', function () {
          expect(controller.remove).to.be.defined;
      });

      it('should have 3 items', function() {
         expect(controller.addresses).to.have.length(3);
      });
    });
  });

  specHelper.verifyNoOutstandingHttpRequests();
});