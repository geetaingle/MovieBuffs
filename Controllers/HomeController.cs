using Microsoft.AspNetCore.Mvc;
//using System.Net.Http.Headers;

namespace MovieBuffs.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                var client = new HttpClient();
                var request = new HttpRequestMessage
                {
                    Method = HttpMethod.Get,
                    RequestUri = new Uri("https://cinema-api.p.rapidapi.com/get_ids/avenger/movies"),
                    Headers =
                {
                    { "X-RapidAPI-Key", "9c7dacc693mshbb7189a877b0d35p171c55jsn70ae3d852c8e" },
                    { "X-RapidAPI-Host", "cinema-api.p.rapidapi.com" },
                },
                };
                using (var response = await client.SendAsync(request))
                {
                    response.EnsureSuccessStatusCode();
                    var body = await response.Content.ReadAsStringAsync();
                    Console.WriteLine(body);
                    return Ok(body);
                }
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Error: {ex}");
                return BadRequest(ex.Message);
            }
            
        }
    }
}
