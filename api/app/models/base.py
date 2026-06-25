"""SQLAlchemy declarative base and timestamp mixin for all models."""

from datetime import datetime
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import func
from sqlalchemy.orm import Mapped, mapped_column, declared_attr

class Base(DeclarativeBase):
    """SQLAlchemy declarative base providing automatic table naming convention.
    
    All models inherit from this class to gain:
    - Automatic __tablename__ generation (lowercase class name + 's')
    - Integration with SQLAlchemy's type-mapped attributes (Mapped, mapped_column)
    """

    @declared_attr
    def __tablename__(cls) -> str:
        return f"{cls.__name__.lower()}s"

class TimestampMixin:
    """Adds created_at and updated_at audit timestamp columns."""
    created_at: Mapped[datetime] = mapped_column(server_default=func.now())
    updated_at: Mapped[datetime] = mapped_column(server_default=func.now(), onupdate=func.now())
 