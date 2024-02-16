from fastapi import FastAPI
from models.BookModel import BookModel
from datetime import date
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins="*",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/api')
async def root():
    return {"directory": "root", "version": "1.0.0", "message": "Book API Server"}


@app.get('/api/library/book', status_code=200, responses={200: {"model": BookModel}})
async def get_book() -> BookModel:
    test_data: dict = {"id": 0,
                       "name": "test",
                       "author": "test",
                       "release_date": date(year=2020, month=1, day=1),
                       "page_number": 21}
    return BookModel(**test_data)


@app.post('/api/library/book', status_code=201)
async def create_book() -> dict:
    return {"message": "Book Created"}


@app.delete('/api/library/book/{id}', status_code=204)
async def delete_book(id: int) -> None:
    print(f"Book - {id} deleted")
    return None
