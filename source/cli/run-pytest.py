#!/bin/bash


import pytest

pytest.main(['--cov=../', '--cov-report=lcov'])
