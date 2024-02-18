from database import BASE
from sqlalchemy import Column, Integer, String


class Book(BASE):
    __tablename__ = 'book'
    id = Column(Integer, primary_key=True, index=True)
    book_name = Column(String(64), nullable=False)
    author = Column(String(64), nullable=False)
    page_number = Column(Integer, nullable=True)
    release_date = Column(String(64), nullable=True)