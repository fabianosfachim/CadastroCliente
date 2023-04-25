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
    public class ClienteController : ControllerBase
    {
        private readonly IClienteServices _clienteServices;
        public ClienteController(IClienteServices clienteServices)
        {
            _clienteServices = clienteServices;
        }

        [HttpGet]
        [Route("ListarClientes")]
        [AllowAnonymous]
        public async Task<IActionResult> ListarClientes()
        {
          
            var response = await _clienteServices.ListarClientes();

            return Ok(response);

        }

        [HttpGet]
        [Route("ListarDadosCliente")]
        [AllowAnonymous]
        public async Task<IActionResult> ListarDadosCliente(int id)
        {

            var response = await _clienteServices.ListarDadosCliente(id);

            return Ok(response);

        }

        [HttpPost]
        [Route("AdicionarClientes")]
        [AllowAnonymous]
        public async Task<IActionResult> AdicionarClientes(ClienteRequest clienteRequest)
        {

            var response = await _clienteServices.AdicionarClientes(clienteRequest);

            return Ok(response);

        }

        [HttpPost]
        [Route("AtualizarDadosCliente")]
        [AllowAnonymous]
        public async Task<IActionResult> AtualizarDadosCliente(ClienteRequest clienteRequest)
        {

            var response = await _clienteServices.AtualizarDadosCliente(clienteRequest);

            return Ok(response);

        }

        [HttpPost]
        [Route("ExcluirDadosCliente")]
        [AllowAnonymous]
        public async Task<IActionResult> ExcluirDadosCliente(int id)
        {

            var response = await _clienteServices.ExcluirDadosCliente(id);

            return Ok(response);

        }
    }
}
