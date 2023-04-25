using XGEM.PortalCliente.Application.Services.Wrappers;
using XGEM.PortalCliente.Domain.Entities;
using XGEM.PortalCliente.Domain.Model;

namespace XGEM.PortalCliente.Application.Services.Interfaces
{
    public interface IEstadoServices
    {
        Task<Response<EstadoResponse>> ListarEstado();
    }
}
