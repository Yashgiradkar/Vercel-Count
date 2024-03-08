#!/bin/bash

export GIT_REPOSITORY__URL="$GIT_REPOSITORY__URL"

git clone "$GIT_DIRECTORY__URL" /home/app/output

exec node script.js