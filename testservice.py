from nameko.rpc import rpc


class TestService:

    name = "test_service"

    @rpc
    def hello(self, name):
        return "Hello, {}!".format(name)
