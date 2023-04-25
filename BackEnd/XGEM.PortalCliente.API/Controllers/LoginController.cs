using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using XGEM.PortalCliente.Application.Services;
using XGEM.PortalCliente.Application.Services.Interfaces;
using XGEM.PortalCliente.Domain.Entities;
using XGEM.PortalCliente.Domain.Model;


namespace XGEM.PortalCliente.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly ILoginServices _loginServices;
        public LoginController(ILoginServices loginServices)
        {
            _loginServices = loginServices;
        }

        [HttpPost]
        [Route("LoginSistema")]
        [AllowAnonymous]
        public async Task<IActionResult> ListarEstado(string email, string password)
        {

            var response = await _loginServices.LoginSistema(email, password);
            HttpContext.Response.ContentType = "application/json";

            return Ok(response);
        }


        //[HttpPost]
        //[Route("login")]
        //[AllowAnonymous]
        //public async Task<ActionResult<dynamic>> Authenticate([FromBody] AuthUser model)
        //{
        //    if (model == null)
        //        return NotFound(new { message = "O Parâmetro model não pode ser vazio" });

        //    var _login = _appLoginService.Get(model.ChaveAcesso, model.Email);
        //    if (_login == null)
        //        return NotFound(new { message = "Credenciais inválida, contate o administrador da aplicação" });

        //    // Gera o Token
        //    var token = TokenService.GenerateToken(model);
        //    // Retorna os dados
        //    return new
        //    {
        //        token = token
        //    };
        //}

    }
}
