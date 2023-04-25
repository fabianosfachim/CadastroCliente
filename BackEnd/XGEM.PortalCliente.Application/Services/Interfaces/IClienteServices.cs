using XGEM.PortalCliente.Application.Services.Wrappers;
using XGEM.PortalCliente.Domain.Entities;
using XGEM.PortalCliente.Domain.Model;

namespace XGEM.PortalCliente.Application.Services.Interfaces
{
    public interface IClienteServices
    {
        Task<Response<ClienteResponse>> ListarClientes();
        Task<Response<ClienteResponse>> ListarDadosCliente(int id);
        Task<Response<ClienteResponse>> AdicionarClientes(ClienteRequest clienteRequest);
        Task<Response<ClienteResponse>> AtualizarDadosCliente(ClienteRequest clienteRequest);
        Task<Response<ClienteResponse>> ExcluirDadosCliente(int id);
    }
}
