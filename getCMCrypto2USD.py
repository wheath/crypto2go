  
 #This example uses Python 2.7 and the python-request library.

from collections import OrderedDict
from requests import Request, Session
from requests.exceptions import ConnectionError, Timeout, TooManyRedirects
import json, sys

#url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
url = 'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'


parameters = {
  'start':'1',
  'limit':'5000',
  'convert':'USD'
}
headers = {
  'Accepts': 'application/json',
  'X-CMC_PRO_API_KEY': '5f44cb1b-a01c-4022-84ee-7621f237f09f',
}

session = Session()
session.headers.update(headers)

try:
  response = session.get(url, params=parameters)
  #print "%s" % response.text
  data = json.loads(response.text)
  #print "data['data'].keys() %s" % data['data'].keys()
  #print "data['data'] %s" % data['data']
  symbl_to_usdprice = {}
  symbl_to_word = {}
  for d in data['data']:
    if d['name'] == 'USD':
      continue

    symbl_to_word[d['symbol']] = d['name']
    symbl_to_usdprice[d['symbol']] = d['quote']['USD']['price']
    #all_basic_data['test'] = basic_data
    #print "symbol: %s" % d['symbol']
    #print(basic_data)
    #print(all_basic_data) 
    #sys.exit()
    #print "name: %s" % d['name']
    #print "symbol: %s" % d['symbol']
    #print "USD price: %s" % d['quote']['USD']['price']

  dd = OrderedDict(sorted(symbl_to_usdprice.items(), key=lambda x: x[1], reverse = True))
  print("%s" % json.dumps(symbl_to_word)) 
  #print("%s\n\n" % symbl_to_usdprice) 
  #print("%s\n\n" % json.dumps(dd))
except (ConnectionError, Timeout, TooManyRedirects) as e:
  print(e)
