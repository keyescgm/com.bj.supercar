#!/bin/bash
set -e

mvn  clean -U package -P $ENV -Dmaven.test.skip=true