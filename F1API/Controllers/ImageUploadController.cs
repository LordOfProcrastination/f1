namespace F1API.Controllers;

using Microsoft.AspNetCore.Mvc;

    // Her er en egen kontroller for bildeopplast med try/catch og feilmeldinger
[ApiController]
[Route("api/[controller]")]
public class ImageUploadController : ControllerBase
{
    private readonly IWebHostEnvironment webHostEnvironment;

    public ImageUploadController(IWebHostEnvironment _webHostEnvironment)
        {
            webHostEnvironment = _webHostEnvironment;
        }

    [HttpPost]
    public IActionResult SaveImage(IFormFile file)
    {
        string webRootPath = webHostEnvironment.WebRootPath;
        string absolutePath = Path.Combine($"{webRootPath}/images/{file.FileName}");

        try
        {
            using(var fileStream = new FileStream(absolutePath, FileMode.Create))
            {
            file.CopyTo(fileStream);
            }
            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }
    }
}