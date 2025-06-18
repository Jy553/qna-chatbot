

def handler(event, context):  # NOSONAR Lambda Handler
    event['res']['message']="Hi! This is your Custom Python Hook speaking!"
    return event

