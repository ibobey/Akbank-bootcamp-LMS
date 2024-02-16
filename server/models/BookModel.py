from pydantic import BaseModel, Field
from typing import Optional
from datetime import date


class BookModel(BaseModel):
    id: int
    name: str
    author: str
    release_date: Optional[date] = Field(default=date(2000, 1, 1))
    page_number: Optional[int] = Field(0, gt=-1)
