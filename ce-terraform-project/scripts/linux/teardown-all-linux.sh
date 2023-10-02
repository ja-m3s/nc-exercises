#!/usr/bin/env bash
# Author: JW
# Run: chmod u+x script.sh; ./script.sh
# Desc: configures the backend for terraform project
set -eux

terraform -chdir="../../" apply -destroy -input=false -auto-approve -lock=false
terraform -chdir="../../backend" apply -destroy  -input=false -auto-approve -lock=false