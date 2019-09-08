#This example uses Python 2.7 and the python-request library.

from collections import OrderedDict
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json

url = 'https://api.exchangeratesapi.io/latest?base=USD'


headers = {
  'Accepts': 'application/json',
}

session = Session()
session.headers.update(headers)

try:
  #response = session.get(url, params=parameters)
  response = session.get(url)
  #print "%s" % response.text
  data = json.loads(response.text)
  dd = OrderedDict(sorted(data['rates'].items(), key=lambda x: x[1], reverse = True))
  #print(data['rates'])
  print(json.dumps(dd))
except (ConnectionError, Timeout, TooManyRedirects) as e:
  print(e)
