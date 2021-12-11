import requests
from pprint import PrettyPrinter
import pandas as pd
import numpy as np

pp = PrettyPrinter()



api_key = "NRhnokLzrvgWjg7AMagN"


url = "https://marketdata.tradermade.com/api/v1/timeseries?"
currency="EURUSD"
start_date="2021-01-01"
end_date="2021-03-22"
format="split"
interval="daily"
df =pd.read_json('https://marketdata.tradermade.com/api/v1/timeseries?currency='+currency+'&api_key='+api_key+'&start_date='+start_date+'&end_date='+end_date+'&format='+format+'&interval='+interval)
df = pd.DataFrame(df.quotes['data'], columns=df.quotes['columns'])
print(df)