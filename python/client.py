import requests

config_url = 'http://localhost:8080/'
config_team = 'test_team'
config_username = 'test_user'
config_password = 'test_password'

r = requests.get(config_url + 'user', auth=('user', 'pass'))
print(r.json())
