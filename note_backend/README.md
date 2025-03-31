# Note backend

## Set up
Run following commands
```
cp .env.example .env
docker compose build
docker compose up
```

## Testing
Run tests by following command
```
docker compose exec django-web python manage.py test
```

## Initialize testing data
```
docker compose exec django-web python manage.py init_dev_data
```
Produces admin user with credentials `admin admin` and test user with credentials `test testsalasana`.

Test user has data associated with it.
