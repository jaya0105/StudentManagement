using StudentManagement.API.DTOs;
using StudentManagement.API.Models;

namespace StudentManagement.API.Services;

public interface IStudentService
{
    Task<List<Student>> GetStudentsAsync();

    Task<Student> CreateStudentAsync(CreateStudentDto dto);

    Task<bool> DeleteStudentAsync(int id);
}