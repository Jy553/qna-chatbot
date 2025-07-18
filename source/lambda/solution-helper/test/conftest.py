

import os
import pytest

@pytest.fixture(autouse=True)
def aws_environment_variables():
    """Mocked AWS evivronment variables such as AWS credentials and region"""
    os.environ["LAMBDA_TASK_ROOT"] = f"{os.path.dirname(os.path.realpath(__file__))}/.."
    os.environ["SOLUTION_ID"] = "SO1234"
    os.environ["SOLUTION_PARAMETER"] = "some-parameter"
    os.environ["CUSTOM_SETTINGS"] = "some-custom-settings"