# Student Management System

A full-stack Student Management application built using React and ASP.NET Core Web API.

The application allows users to:

- Add students
- View the list of students
- Delete students
- Validate student information
- Persist student data using SQLite

The project is designed as a small production-style full-stack application with separation of concerns, dependency injection, service-layer architecture, API validation, and a clean React frontend.

---

## Features

### Student Management

- Add a student with:
  - Name
  - Date of Birth
  - Phone Number
- View all students
- Delete a student
- Confirmation before deletion
- Client-side required-field validation
- Server-side API validation
- Success and error messages

### Backend

- ASP.NET Core Web API
- RESTful API design
- Entity Framework Core
- SQLite database
- DTO-based API requests
- Service layer
- Dependency Injection
- Async database operations
- CORS configuration
- EF Core migrations

### Frontend

- React
- Axios for API communication
- React Hooks
- Responsive UI
- API service separation
- Environment-based API configuration

---

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React |
| Backend | ASP.NET Core Web API |
| Language | C# / JavaScript |
| ORM | Entity Framework Core |
| Database | SQLite |
| HTTP Client | Axios |
| API Documentation | OpenAPI |
| Dependency Injection | ASP.NET Core DI |
| Database Migration | EF Core Migrations |
| Version Control | Git / GitHub |

---

## Architecture

The application follows a simple layered architecture.

```text
                    React Frontend
                         |
                         | HTTP / REST
                         v
                  ASP.NET Core API
                         |
                    Controller
                         |
                    Service Layer
                         |
                  Entity Framework
                         |
                      SQLite