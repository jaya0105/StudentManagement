using Microsoft.EntityFrameworkCore;
using StudentManagement.API.Data;
using StudentManagement.API.DTOs;
using StudentManagement.API.Models;

namespace StudentManagement.API.Services;

public class StudentService : IStudentService
{
    private readonly ApplicationDbContext _context;

    public StudentService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<Student>> GetStudentsAsync()
    {
        return await _context.Students
            .AsNoTracking()
            .ToListAsync();
    }

    public async Task<Student> CreateStudentAsync(CreateStudentDto dto)
    {
        var student = new Student
        {
            Name = dto.Name,
            DateOfBirth = dto.DateOfBirth,
            Phone = dto.Phone
        };

        _context.Students.Add(student);

        await _context.SaveChangesAsync();

        return student;
    }

    public async Task<bool> DeleteStudentAsync(int id)
    {
        var student = await _context.Students.FindAsync(id);

        if (student == null)
        {
            return false;
        }

        _context.Students.Remove(student);

        await _context.SaveChangesAsync();

        return true;
    }
}