"""Async database session management for FastAPI."""

from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
import os

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_async_engine(DATABASE_URL, echo=True)
async_session = async_sessionmaker(engine, expire_on_commit=False)

async def get_db():
    """Dependency for FastAPI endpoints to get async database session."""
    async with async_session() as session:
        yield session