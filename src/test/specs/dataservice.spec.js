/* jshint -W117, -W030 */
describe('dataservice', function () {
    var scope;
    var mocks = {};

    beforeEach(function () {
        module('app', function($provide) {
            specHelper.fakeRouteProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function($httpBackend, $rootScope, dataservice, $q) {});

        sinon.stub(dataservice, 'query', function () {
            var deferred = $q.defer();
            deferred.resolve(mockData.query());
            return deferred.promise;
        });
    });

    it('should be registered', function() {
        expect(dataservice).not.to.equal(null);
    });

    describe('query function', function () {
        it('should exist', function () {
            expect(dataservice.query).not.to.equal(null);
        });

        it('should return 3 items', function (done) {
            dataservice.query().then(function(data) {
                expect(data.length).to.equal(3);
                done();
            });
            $rootScope.$apply();
        });
    });

    describe('save function', function () {
        it('should exist', function () {
            expect(dataservice.save).not.to.equal(null);
        });
    });

    describe('get function', function () {
        it('should exist', function () {
            expect(dataservice.get).not.to.equal(null);
        });
    });

    describe('remove function', function () {
        it('should exist', function () {
            expect(dataservice.remove).not.to.equal(null);
        });
    });

    describe('clear function', function () {
        it('should exist', function () {
            expect(dataservice.clear).not.to.equal(null);
        });
    });

    specHelper.verifyNoOutstandingHttpRequests();
});
