#!/bin/bash

if [[ "$APPLY_MIGRATIONS" = "1" ]]; then
    python manage.py migrate --noinput
fi

if [[ "$DEV_SERVER" = "1" ]]; then
    python manage.py runserver 0.0.0.0:8000
fi
