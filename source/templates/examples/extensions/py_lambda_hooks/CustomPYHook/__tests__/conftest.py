#!/usr/bin/env python


import os
import pytest

@pytest.fixture
def event():
    return {
        'res': {
            'message': 'test'
        },
        'req': 'test',
    }

@pytest.fixture
def context():
    return {}
