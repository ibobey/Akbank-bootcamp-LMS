from database.connect_database import ENGINE
from database.tables import TABLE_BOOK, META

META.create_tables(bind=ENGINE)