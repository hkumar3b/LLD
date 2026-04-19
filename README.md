# Low-Level Design (LLD) Practices

This repository contains practical implementations of Low-Level System Designs. The primary objective is to translate high-level system requirements into robust, extensible, and scalable object-oriented code, adhering to SOLID principles and standard GoF design patterns.

## Reference Material
The core concepts and problem statements implemented in this repository are heavily inspired by [Soumyajit Bhattacharyay's LLD Playlist](https://www.youtube.com/playlist?list=PL12BCqE-Lp650Cg6FZW7SoZwN8Rw1WJI7).

## Core Design Principles Applied
Across all projects in this repository, the following architectural principles are strictly enforced:

- **Single Responsibility Principle (SRP)**: Classes have one reason to change. Data access is decoupled from business logic.
- **Open/Closed Principle (OCP)**: Systems are designed to be extensible (e.g., adding new payment methods or notification types) without modifying existing source code.
- **Liskov Substitution Principle (LSP)**: Base classes and interfaces are strictly adhered to by derived entities to prevent runtime behavior mutations.
- **Interface Segregation Principle (ISP)**: Fat interfaces are broken down into specific, client-focused contracts.
- **Dependency Inversion Principle (DIP)**: High-level modules depend on abstractions (Interfaces/Abstract Classes), not concrete implementations, enabling seamless Dependency Injection.

## Technology Stack
- **Language**: TypeScript
- **Environment**: Node.js
- **Configuration**: `tsconfig.json` configured for strict typing.

## Projects Implemented
Currently, the following systems have been modeled:
- 📚 **Library Management System**: Manages book collections, member subscriptions, and lending processes. (See `Library-Management-System/code.ts`)
- 🎟️ **BookMyShow**: A movie ticket booking platform handling theaters, shows, and seat reservations. (See `book-my-show/index.ts`)
- 🏨 **Hotel Management System**: Systems for managing room bookings, housekeeping, and guest services. (See `hotel-management-system/code.ts`)

## Getting Started
To run these projects locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hkumar3b/LLD.git
   cd low-level-design
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run a specific project**:
   Use the predefined npm scripts:
   ```bash
   npm run bms    # BookMyShow
   npm run lms    # Library Management System
   npm run hotel  # Hotel Management System
   ```
   Or use `ts-node` directly via `npx`:
   ```bash
   npx ts-node book-my-show/index.ts
   ```
