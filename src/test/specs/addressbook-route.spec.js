describe('addressbook', function () {
    describe('route', function () {
        var controller;

        beforeEach(function() {
            module('app', specHelper.fakeLogger);
            specHelper.injector(function($httpBackend, $location, $rootScope, $route) {});
            $httpBackend.expectGET('app/addressbook/addressbook.html').respond(200);
        });

        it('should map /addressbook route to addressbook View template', function () {
            expect($route.routes['/addressbook'].templateUrl).to.equal('app/addressbook/addressbook.html');
        });

        it('should route / to the addressbook View', function () {
            $location.path('/addressbook');
            $rootScope.$apply();
            expect($route.current.templateUrl).to.equal('app/addressbook/addressbook.html');
        });

        it('should route /invalid to the otherwise (addressbook) route', function () {
            $location.path('/invalid');
            $rootScope.$digest();
            expect($route.current.templateUrl).to.equal('app/addressbook/addressbook.html');
        });
    });
});