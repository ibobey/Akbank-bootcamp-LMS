from fastapi import FastAPI, Depends
from fastapi import HTTPException, status, Path
from fastapi.middleware.cors import CORSMiddleware

from api import schemas

import database
from database import models

from sqlalchemy.orm import Session
from typing import Annotated

models.BASE.metadata.create_all(bind=database.ENGINE)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def get_db():
    db = database.SESSION_LOCAL()
    try:
        yield db
    finally:
        db.close()


DB_DEPENDENCY = Annotated[Session, Depends(get_db)]


@app.get('/')
async def root():
    return {'directory': 'root'}


@app.get('/api')
async def api():
    return {'directory': 'api', 'version': '1.0.0', 'description': 'Api'}


@app.get('/api/books', status_code=status.HTTP_200_OK)
async def get_all_books(db: DB_DEPENDENCY):
    book = db.query(models.Book).all()
    if book is not None:
        return book
    raise HTTPException(status_code=400, detail="Cannot Find Any Book")


@app.get('/api/books/{id}', status_code=status.HTTP_200_OK)
async def get_book(db: DB_DEPENDENCY, id: int = Path(gt=0)):
    book = db.query(models.Book).filter(models.Book.id == id).first()
    if book is not None:
        return book
    raise HTTPException(status_code=400, detail="Cannot Find")


@app.post('/api/books', status_code=status.HTTP_201_CREATED)
async def create_book(db: DB_DEPENDENCY, book_request: schemas.Book):
    book_model = models.Book(**book_request.dict())
    db.add(book_model)
    db.commit()


@app.delete('/api/books/{id}', status_code=status.HTTP_204_NO_CONTENT)
async def delete_book(db: DB_DEPENDENCY, id: int = Path(gt=0)):
    book_model = db.query(models.Book).filter(models.Book.id == id).first()
    if book_model is None:
        raise HTTPException(status_code=400, detail="Cannot find valid book by id")
    db.query(models.Book).filter(models.Book.id == id).delete()
    db.commit()
