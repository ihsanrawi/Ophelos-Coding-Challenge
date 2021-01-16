using System.Threading.Tasks;
using Application.Entities;
using Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class UserController : BaseApiController
    {
        private readonly IAsyncRepository<User> _userRepository;

        public UserController(IAsyncRepository<User> userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] User user)
        {
            var createdUser = await _userRepository.AddAsync(user);
            
            return Ok(createdUser);
        }
    }
}