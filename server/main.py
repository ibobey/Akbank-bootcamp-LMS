from api.api import *
import uvicorn

if __name__ == '__main__':
    uvicorn.run(app, port=10000)