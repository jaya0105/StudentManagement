using Microsoft.AspNetCore.Mvc;
using StudentManagement.API.DTOs;
using StudentManagement.API.Services;

namespace StudentManagement.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StudentsController : ControllerBase
{
    private readonly IStudentService _studentService;

    public StudentsController(IStudentService studentService)
    {
        _studentService = studentService;
    }

    [HttpGet]
    public async Task<IActionResult> GetStudents()
    {
        var students = await _studentService.GetStudentsAsync();

        return Ok(students);
    }

    [HttpPost]
    public async Task<IActionResult> CreateStudent(CreateStudentDto dto)
    {
        var student = await _studentService.CreateStudentAsync(dto);

        return CreatedAtAction(
            nameof(GetStudents),
            new { id = student.Id },
            student);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteStudent(int id)
    {
        var deleted = await _studentService.DeleteStudentAsync(id);

        if (!deleted)
        {
            return NotFound();
        }

        return NoContent();
    }
}