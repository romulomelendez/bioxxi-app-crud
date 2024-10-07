from sqlalchemy import Integer, String
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()

class Product(Base):
    __tablename__ = 'products'
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column()
    prod_type: Mapped[str] = mapped_column()
    description: Mapped[str] = mapped_column()
    inclusion: Mapped[str] = mapped_column()

    def __repr__(self):
        return f'<Product {self.name}>'