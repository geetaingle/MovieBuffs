using Microsoft.AspNetCore.Mvc;

namespace MovieBuffs.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            var data = new
            {
                title = "",
                rating = 0.0
            };
            return Json(data);
        }
    }
}
