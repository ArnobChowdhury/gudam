from sqlalchemy import String, Numeric
from sqlalchemy.orm import Mapped, mapped_column
from .base import Base, TimestampMixin

class Placeholder(Base, TimestampMixin):
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(255))
