#!/bin/bash

docker-compose run --rm app rake db:create

docker-compose run --rm app rake db:migrate

