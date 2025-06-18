

class TestCustomPYHook():
    
    def test_returns_greeting(self, event, context):
        from CustomPYHook import handler
        event = handler(event, context)
        assert event['res']['message'] == "Hi! This is your Custom Python Hook speaking!"