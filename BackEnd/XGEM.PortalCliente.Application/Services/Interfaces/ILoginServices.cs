using XGEM.PortalCliente.Application.Services.Wrappers;
using XGEM.PortalCliente.Domain.Entities;
using XGEM.PortalCliente.Domain.Model;

namespace XGEM.PortalCliente.Application.Services.Interfaces
{
    public interface ILoginServices
    {
        Task<Response<LoginResponse>> LoginSistema(string email, string password);

    }
}
