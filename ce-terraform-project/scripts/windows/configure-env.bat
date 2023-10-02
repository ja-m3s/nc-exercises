REM Author: JW
REM Run: click script
REM Desc: configures the infra for terraform project

terraform -chdir="../../backend" init -input=false
terraform -chdir="../../backend" apply -input=false -auto-approve  
terraform -chdir="../../" init -input=false
terraform -chdir="../../" apply -input=false -auto-approve 

PAUSE