from sqlalchemy import Table, MetaData, Column, Integer
from sqlalchemy import String, Text, Date

META = MetaData()

TABLE_BOOK = Table('book',
                   META,
                   Column("id", Integer, primary_key=True),
                   Column("name", String(128), nullable=False),
                   Column("author", String(128), nullable=False),
                   Column("release_date", Date, nullable=True),
                   Column("page_number", Integer, nullable=True)
)