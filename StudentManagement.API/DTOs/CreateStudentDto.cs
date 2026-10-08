using System.ComponentModel.DataAnnotations;

namespace StudentManagement.API.DTOs;

public class CreateStudentDto
{
    [Required]
    public string Name { get; set; } = string.Empty;

    [Required]
    public DateTime DateOfBirth { get; set; }

    [Required]
    [Phone]
    public string Phone { get; set; } = string.Empty;
}