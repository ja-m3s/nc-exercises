#!/usr/bin/env bash
# Author: JW
# Run: chmod u+x script.sh; ./script.sh
# Desc: configures the infra for terraform project 
set -eux

terraform -chdir="../../backend" init -input=false
terraform -chdir="../../backend" apply -input=false -auto-approve  
terraform -chdir="../../" init -input=false
terraform -chdir="../../" apply -input=false -auto-approve 
