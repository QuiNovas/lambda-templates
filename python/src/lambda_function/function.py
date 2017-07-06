import logging.config


def handler(event, context):
    logger = logging.getLogger()
    logger.setLevel(logging.INFO)

    return event
