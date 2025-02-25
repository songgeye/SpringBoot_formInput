from typing import Optional
from fastapi import FastAPI

app = FastAPI() #FastAPIのインスタンス化

@app.get("/countries/") #countries以降(/)がパスパラメータで、city_name(?)以降がクエリパラメータ
async def country(country_name: Optional[str] = None, country_no: Optional[int] = None):
  return {
    "country_name": country_name,
    "country_no": country_no
    }
