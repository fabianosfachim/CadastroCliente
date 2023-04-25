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
    public class EstadoController : ControllerBase
    {
        private readonly IEstadoServices _estadoServices;
        public EstadoController(IEstadoServices estadoServices)
        {
            _estadoServices = estadoServices;
        }

        [HttpGet]
        [Route("ListarEstado")]
        [AllowAnonymous]
        public async Task<IActionResult> ListarEstado()
        {

            var response = await _estadoServices.ListarEstado();

            HttpContext.Response.ContentType = "application/json";

            return Ok(response);
        }

       
    }
}
