# Shared DTOs and Types

This folder contains **shared Data Transfer Objects (DTOs), interfaces, and constants** used by both the frontend (client) and backend (server) of the Bookify MERN application.

## Purpose

- **Type Safety**: Ensures consistent data structures across frontend and backend
- **Single Source of Truth**: Changes to DTOs propagate to both client and server
- **Reduced Duplication**: No need to maintain separate type definitions
- **Contract Enforcement**: API contracts are defined once and shared

## Configuration

Both client and server tsconfig files are configured to resolve `@shared/*` imports:
