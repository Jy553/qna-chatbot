

from click.testing import CliRunner
from aws_solutions.qnabot.cli.qnabot_cli import (
    cli,
    qna_import,
    qna_export
)

def test_cli():
    runner = CliRunner()
    result = runner.invoke(cli)
    assert result.exit_code == 0
