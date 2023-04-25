using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using XGEM.PortalCliente.Application.Services;
using XGEM.PortalCliente.Application.Services.Interfaces;
using XGEM.PortalCliente.Data;
using XGEM.PortalCliente.Data.Helpers;
using XGEM.PortalCliente.Data.Interfaces;
using XGEM.PortalCliente.Data.Repositories;
using XGEM.PortalCliente.Data.Repositories.Entities;
using XGEM.PortalCliente.Data.Repositoriess.Entities;

namespace XGEM.PortalCliente.IOC
{
    public static class Register
    {
        public static void RegisterDependencyInjection(this IServiceCollection services, IConfiguration configuration)
        {

            #region DependencyInjection

            //Services
            services.AddScoped<ILoginServices, LoginServices>();
            services.AddScoped<IEstadoServices, EstadoServices>();
            services.AddScoped<IClienteServices, ClienteServices>();
            services.AddScoped<IEnderecoServices, EnderecoServices>();

            //Repository//
            services.AddSingleton(typeof(IEntityRepository<>), typeof(EntityBaseRepository<>));

            //Entity
            services.AddScoped<ILoginRepository, LoginRepository>();
            services.AddScoped<IEstadoRepository, EstadoRepository>();
            services.AddScoped<IClienteRepository, ClienteRepository>();
            services.AddScoped<IEnderecoRepository, EnderecoRepository>();

            #endregion
        }
    }
}