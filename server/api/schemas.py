from pydantic import BaseModel, Field


class Book(BaseModel):
    book_name: str = Field(min_length=1, max_length=128, description="book name")
    author: str = Field(min_length=1, max_length=128, description="book author")
    page_number: int = Field(gt=0, description="number of page")
    release_date: str

