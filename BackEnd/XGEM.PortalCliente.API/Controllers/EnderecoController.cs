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
    public class EnderecoController : ControllerBase
    {
        private readonly IEnderecoServices _enderecoServices;

        public EnderecoController(IEnderecoServices enderecoServices)
        {
            _enderecoServices = enderecoServices;
        }


        [HttpGet]
        [Route("ListarEndereco")]
        [AllowAnonymous]
        public async Task<IActionResult> ListarEndereco(int id)
        {

            var response = await _enderecoServices.ListarEndereco(id);

            return Ok(response);

        }

        [HttpGet]
        [Route("ListarEnderecoCliente")]
        [AllowAnonymous]
        public async Task<IActionResult> ListarEnderecoCliente(int id, int idCliente)
        {

            var response = await _enderecoServices.ListarEnderecoCliente(id, idCliente);

            return Ok(response);

        }

        [HttpPost]
        [Route("AdicionarEnderecoCliente")]
        [AllowAnonymous]
        public async Task<IActionResult> AdicionarEnderecoCliente(EnderecoRequest enderecoRequest)
        {

            var response = await _enderecoServices.AdicionarEnderecoCliente(enderecoRequest);

            return Ok(response);

        }

        [HttpPost]
        [Route("AtualizarEnderecoCliente")]
        [AllowAnonymous]
        public async Task<IActionResult> AtualizarEnderecoCliente(EnderecoRequest enderecoRequest)
        {

            var response = await _enderecoServices.AtualizarEnderecoCliente(enderecoRequest);

            return Ok(response);

        }

        [HttpPost]
        [Route("ExcluirEnderecoCliente")]
        [AllowAnonymous]
        public async Task<IActionResult> ExcluirEnderecoCliente(int id)
        {

            var response = await _enderecoServices.ExcluirEnderecoCliente(id);

            return Ok(response);

        }

    }
}
