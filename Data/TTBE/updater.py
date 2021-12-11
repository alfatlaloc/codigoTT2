import json
import requests

from db_manager import insert_items, get_items_from_date_range

def update_most_recent_values(temporality="1hour"):
    if(temporality=="1day"):
        api_function="FX_DAILY"
        data_header="Time Series FX (Daily)"
    else:
        api_function="FX_INTRADAY"
        data_header="Time Series FX (60min)"
    url = "https://alpha-vantage.p.rapidapi.com/query"
    querystring = {"from_symbol":"EUR","to_symbol":"USD","interval":"60min","function":api_function,"outputsize":"compact","datatype":"json"}
    headers = {
        'x-rapidapi-host': "alpha-vantage.p.rapidapi.com",
        'x-rapidapi-key': "b316ebd09amshf50a58965c26287p172949jsn245bd73d4ab4"
        }
    response = requests.request("GET", url, headers=headers, params=querystring)
    response = response.json()
    items_list=[]
    candles=response[data_header]
    for key in candles.keys():
        item={}
        item["_id"]=key
        item["open"]=candles[key]["1. open"]
        item["high"]=candles[key]["2. high"]
        item["low"]=candles[key]["3. low"]
        item["close"]=candles[key]["4. close"]
        items_list.append(item)
    try:
        insert_items(items_list)
    except Exception as e:
        error_string=str(e)
        result=error_string.find("duplicate key")
        if result==-1:
            print(e)

# --------------------------------------------------
# TESTS:
# --------------------------------------------------
if __name__ == "__main__": 
    print("FOR 1 HOUR TEMPORALITY: ")   
    update_most_recent_values()
    items_list=get_items_from_date_range()
    print(f"Len of list: {len(items_list)}")
    print(f"Type of item list: {type(items_list[0])}")
    print(items_list[-2:])
    print("FOR 1 DAY TEMPORALITY: ")   
    update_most_recent_values()
    items_list=get_items_from_date_range(temporality="1day")
    print(f"Len of list: {len(items_list)}")
    print(f"Type of item list: {type(items_list[0])}")
    print(items_list[-2:])