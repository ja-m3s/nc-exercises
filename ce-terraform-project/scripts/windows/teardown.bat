REM Author: JW
REM Run: click script
REM Desc: destroy the infra for terraform project

terraform -chdir="../../" apply -destroy -input=false -auto-approve -lock=false
terraform -chdir="../../backend" apply -destroy  -input=false -auto-approve -lock=false

PAUSE